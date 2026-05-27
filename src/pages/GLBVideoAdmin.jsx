import { useState, useRef, useEffect, useCallback } from "react";
import { base44 } from "@/api/base44Client";
import * as THREE from "three";
import { Upload, Video, Save, CheckCircle, Loader2, RotateCcw, Trash2, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import FadeIn from "@/components/shared/FadeIn";

const PASSCODE = "34388D72CDC98821";

function PasscodeGate({ onUnlock }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === PASSCODE) { onUnlock(); }
    else { setError(true); setInput(""); setTimeout(() => setError(false), 1500); }
  };
  return (
    <div className="min-h-screen bg-obsidian flex items-center justify-center px-6">
      <div className="w-full max-w-sm border border-bronze/20 bg-secondary/10 p-8 rounded-sm text-center space-y-6">
        <Lock className="w-10 h-10 text-bronze/60 mx-auto" />
        <div>
          <h1 className="font-serif text-2xl text-parchment">3D Video Publisher</h1>
          <p className="text-parchment/40 text-sm mt-2 font-sans">Enter the passcode to continue</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Passcode"
            autoFocus
            className={`bg-obsidian border-bronze/30 text-parchment placeholder:text-parchment/25 focus:border-gold h-11 text-center tracking-widest ${error ? "border-red-500/60" : ""}`}
          />
          {error && <p className="text-red-400 text-xs font-sans">Incorrect passcode</p>}
          <button type="submit" className="w-full bg-bronze hover:bg-gold text-obsidian py-2.5 font-sans text-sm uppercase tracking-[0.15em] font-semibold transition-all rounded-sm">
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
}

const PAGES = [
  { value: "hall_of_fame", label: "Hall of Fame" },
  { value: "busts_and_statues", label: "Busts & Statues" },
  { value: "relief_plaques", label: "Relief Plaques" },
  { value: "photo_imagecast", label: "Photo ImageCast" },
  { value: "donor_recognition", label: "Donor Recognition" },
];

const SPORTS = ["Football","Basketball","Baseball","Hockey","Soccer","Golf","Lacrosse","Track & Field","Wrestling","Tennis","Volleyball","Swimming","Multi-Sport","Hall of Fame"];

function loadGLBFromUrl(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(r => { if (!r.ok) throw new Error("Fetch failed: " + r.status); return r.arrayBuffer(); })
      .then(buffer => {
        const view = new DataView(buffer);
        if (view.getUint32(0, true) !== 0x46546C67) throw new Error("Not a valid GLB file");
        const jsonChunkLength = view.getUint32(12, true);
        const jsonBytes = new Uint8Array(buffer, 20, jsonChunkLength);
        const gltf = JSON.parse(new TextDecoder().decode(jsonBytes));
        let binBuffer = null;
        const binOffset = 20 + jsonChunkLength;
        if (binOffset < buffer.byteLength) {
          const binChunkLength = view.getUint32(binOffset, true);
          binBuffer = buffer.slice(binOffset + 8, binOffset + 8 + binChunkLength);
        }
        function getAccessorData(ai) {
          const acc = gltf.accessors[ai];
          const bv = gltf.bufferViews[acc.bufferViewIndex ?? acc.bufferView];
          const off = (bv.byteOffset ?? 0) + (acc.byteOffset ?? 0);
          const T = { 5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array }[acc.componentType];
          const c = { SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT4:16 }[acc.type];
          return new T(binBuffer, off, acc.count * c);
        }
        const group = new THREE.Group();
        function collectNodes(nodeIndices, parentMatrix) {
          for (const ni of nodeIndices) {
            const node = gltf.nodes[ni];
            const mat = new THREE.Matrix4();
            if (node.matrix) mat.fromArray(node.matrix);
            else {
              mat.compose(
                new THREE.Vector3(...(node.translation||[0,0,0])),
                new THREE.Quaternion(...(node.rotation||[0,0,0,1])),
                new THREE.Vector3(...(node.scale||[1,1,1]))
              );
            }
            const world = parentMatrix.clone().multiply(mat);
            if (node.mesh !== undefined) {
              const mesh = gltf.meshes[node.mesh];
              for (const prim of mesh.primitives) {
                const geo = new THREE.BufferGeometry();
                if (prim.attributes.POSITION !== undefined)
                  geo.setAttribute("position", new THREE.BufferAttribute(getAccessorData(prim.attributes.POSITION), 3));
                if (prim.attributes.NORMAL !== undefined)
                  geo.setAttribute("normal", new THREE.BufferAttribute(getAccessorData(prim.attributes.NORMAL), 3));
                if (prim.indices !== undefined)
                  geo.setIndex(new THREE.BufferAttribute(getAccessorData(prim.indices), 1));
                geo.computeVertexNormals();
                const threeMesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x9B6B3A, roughness: 0.42, metalness: 0.72 }));
                threeMesh.applyMatrix4(world);
                group.add(threeMesh);
              }
            }
            if (node.children) collectNodes(node.children, world);
          }
        }
        const scene0 = gltf.scenes[gltf.scene ?? 0];
        collectNodes(scene0.nodes, new THREE.Matrix4());
        resolve(group);
      })
      .catch(reject);
  });
}

export default function GLBVideoAdmin() {
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem("glb_admin_unlocked") === "1");
  const handleUnlock = () => { sessionStorage.setItem("glb_admin_unlocked", "1"); setUnlocked(true); };

  const mountRef = useRef(null);
  const rendererRef = useRef(null);
  const animRef = useRef(null);
  const pivotRef = useRef(null);
  const sceneRef = useRef(null);

  const [glbUrl, setGlbUrl] = useState(null);
  const [glbFile, setGlbFile] = useState(null);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [loadingModel, setLoadingModel] = useState(false);

  const [recording, setRecording] = useState(false);
  const [recordingProgress, setRecordingProgress] = useState(0);
  const [videoBlob, setVideoBlob] = useState(null);
  const [videoPreviewUrl, setVideoPreviewUrl] = useState(null);

  const [label, setLabel] = useState("");
  const [page, setPage] = useState("hall_of_fame");
  const [sport, setSport] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const fileRef = useRef(null);

  // Init Three.js renderer
  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;
    const w = el.clientWidth || 600;
    const h = 480;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xe8e0d5);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, w / h, 0.001, 1000);
    camera.position.set(0, 0.2, 3.5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    el.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    scene.add(new THREE.AmbientLight(0x9a7a50, 1.2));
    const key = new THREE.DirectionalLight(0xffdda0, 3.5);
    key.position.set(1, 2, 5);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xffe0b0, 2.0);
    fill.position.set(-3, 1, 4);
    scene.add(fill);
    const top = new THREE.DirectionalLight(0xfff0d0, 1.5);
    top.position.set(0, 5, 2);
    scene.add(top);

    const pivot = new THREE.Group();
    scene.add(pivot);
    pivotRef.current = pivot;

    const animate = () => {
      animRef.current = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animRef.current);
      renderer.dispose();
      while (el.firstChild) el.removeChild(el.firstChild);
    };
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setGlbFile(file);
    setGlbUrl(URL.createObjectURL(file));
    setLabel(file.name.replace(/\.glb$/i, ""));
    setVideoBlob(null);
    setVideoPreviewUrl(null);
    setSaved(false);
    e.target.value = "";
  };

  // Load model whenever glbUrl changes
  useEffect(() => {
    if (!glbUrl || !pivotRef.current || !sceneRef.current) return;
    setLoadingModel(true);
    setModelLoaded(false);
    // Remove old model
    while (pivotRef.current.children.length) {
      pivotRef.current.remove(pivotRef.current.children[0]);
    }
    loadGLBFromUrl(glbUrl).then((group) => {
      const box = new THREE.Box3().setFromObject(group);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      group.position.sub(center);
      group.scale.setScalar(2 / Math.max(size.x, size.y, size.z));
      pivotRef.current.add(group);
      setModelLoaded(true);
      setLoadingModel(false);
    }).catch((err) => {
      console.error(err);
      setLoadingModel(false);
    });
  }, [glbUrl]);

  const record360 = useCallback(() => {
    const canvas = rendererRef.current?.domElement;
    if (!canvas || !pivotRef.current || !modelLoaded) return;

    setRecording(true);
    setRecordingProgress(0);
    setVideoBlob(null);
    setVideoPreviewUrl(null);

    const totalFrames = 120; // 4 seconds at ~30fps
    let frame = 0;
    const chunks = [];

    const stream = canvas.captureStream(30);
    const recorder = new MediaRecorder(stream, { mimeType: "video/webm;codecs=vp9" });
    recorder.ondataavailable = (e) => { if (e.data.size > 0) chunks.push(e.data); };
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: "video/webm" });
      setVideoBlob(blob);
      setVideoPreviewUrl(URL.createObjectURL(blob));
      setRecording(false);
      setRecordingProgress(100);
    };

    recorder.start();

    const step = () => {
      if (frame >= totalFrames) {
        recorder.stop();
        return;
      }
      pivotRef.current.rotation.y = (frame / totalFrames) * Math.PI * 2;
      rendererRef.current.render(sceneRef.current, rendererRef.current.camera || (() => {
        // get camera from scene — recreate reference
        const cam = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 0.001, 1000);
        cam.position.set(0, 0.2, 3.5);
        cam.lookAt(0, 0, 0);
        return cam;
      })());
      frame++;
      setRecordingProgress(Math.round((frame / totalFrames) * 100));
      setTimeout(step, 33);
    };

    // Re-render with proper camera via animation loop approach
    cancelAnimationFrame(animRef.current);
    const camera = new THREE.PerspectiveCamera(45, canvas.width / canvas.height, 0.001, 1000);
    camera.position.set(0, 0.2, 3.5);
    camera.lookAt(0, 0, 0);

    const recordStep = () => {
      if (frame >= totalFrames) {
        recorder.stop();
        // Restart normal animation
        const animate = () => {
          animRef.current = requestAnimationFrame(animate);
          rendererRef.current?.render(sceneRef.current, camera);
        };
        animate();
        return;
      }
      pivotRef.current.rotation.y = (frame / totalFrames) * Math.PI * 2;
      rendererRef.current.render(sceneRef.current, camera);
      frame++;
      setRecordingProgress(Math.round((frame / totalFrames) * 100));
      setTimeout(recordStep, 33);
    };

    recordStep();
  }, [modelLoaded]);

  const handleSave = async () => {
    if (!videoBlob || !glbFile) return;
    setSaving(true);
    try {
      // Upload GLB
      const { file_url: glbUploadUrl } = await base44.integrations.Core.UploadFile({ file: glbFile });
      // Upload video
      const videoFile = new File([videoBlob], (label || "model") + "-360.webm", { type: "video/webm" });
      const { file_url: videoUploadUrl } = await base44.integrations.Core.UploadFile({ file: videoFile });
      // Save record
      await base44.entities.Product3DModel.create({
        name: label || glbFile.name.replace(/\.glb$/i, ""),
        label: label || glbFile.name.replace(/\.glb$/i, ""),
        file_url: glbUploadUrl,
        video_url: videoUploadUrl,
        page,
        sport: sport || undefined,
        price_range: priceRange || undefined,
        is_active: true,
      });
      setSaved(true);
    } catch (err) {
      console.error(err);
      alert("Save failed: " + err.message);
    }
    setSaving(false);
  };

  const reset = () => {
    setGlbUrl(null);
    setGlbFile(null);
    setModelLoaded(false);
    setVideoBlob(null);
    setVideoPreviewUrl(null);
    setSaved(false);
    setLabel("");
    while (pivotRef.current?.children.length) pivotRef.current.remove(pivotRef.current.children[0]);
  };

  if (!unlocked) return <PasscodeGate onUnlock={handleUnlock} />;

  return (
    <div className="bg-obsidian text-parchment min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-10">
            <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Admin · 3D Model Manager</span>
            <h1 className="font-serif text-4xl mt-3 text-parchment">GLB → 360° Video Publisher</h1>
            <p className="mt-3 text-parchment/50 text-sm max-w-xl mx-auto">
              Upload a GLB file, record a smooth 360° spin video, then publish it to any page. The video works on all devices — no WebGL required.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* LEFT — 3D Viewer */}
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <h2 className="font-serif text-lg text-parchment/80">Step 1 — Upload GLB</h2>

              {!glbUrl && (
                <div
                  onClick={() => fileRef.current?.click()}
                  className="border-2 border-dashed border-bronze/30 hover:border-gold/60 transition-colors p-16 text-center cursor-pointer bg-secondary/20 rounded-sm"
                >
                  <Upload className="w-12 h-12 text-bronze/40 mx-auto mb-4" />
                  <p className="text-parchment/50 font-sans text-sm">Drop a .glb file here, or click to browse</p>
                </div>
              )}

              <div className="relative rounded-sm overflow-hidden border border-bronze/20" style={{ height: 480 }}>
                <div ref={mountRef} className="w-full h-full" />
                {loadingModel && (
                  <div className="absolute inset-0 flex items-center justify-center bg-obsidian/80">
                    <Loader2 className="w-8 h-8 animate-spin text-gold" />
                  </div>
                )}
                {!glbUrl && (
                  <div className="absolute inset-0 flex items-center justify-center bg-obsidian/60 pointer-events-none">
                    <p className="text-parchment/30 font-sans text-sm">No model loaded</p>
                  </div>
                )}
              </div>

              {glbUrl && (
                <button
                  onClick={() => fileRef.current?.click()}
                  className="text-parchment/40 hover:text-gold font-sans text-xs uppercase tracking-widest transition-colors"
                >
                  ↑ Replace GLB
                </button>
              )}
            </div>
          </FadeIn>

          {/* RIGHT — Record + Save */}
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              {/* Step 2 — Record */}
              <div>
                <h2 className="font-serif text-lg text-parchment/80 mb-3">Step 2 — Record 360° Video</h2>
                {!modelLoaded ? (
                  <p className="text-parchment/30 text-sm font-sans">Upload a GLB first to enable recording.</p>
                ) : (
                  <div className="space-y-3">
                    <button
                      onClick={record360}
                      disabled={recording || !modelLoaded}
                      className="flex items-center gap-2 bg-bronze hover:bg-gold text-obsidian px-6 py-3 font-sans text-sm uppercase tracking-[0.15em] font-semibold transition-all duration-300 rounded-sm disabled:opacity-50"
                    >
                      {recording
                        ? <><Loader2 className="w-4 h-4 animate-spin" /> Recording… {recordingProgress}%</>
                        : videoBlob
                        ? <><RotateCcw className="w-4 h-4" /> Re-record</>
                        : <><Video className="w-4 h-4" /> Record 360° Video</>
                      }
                    </button>
                    {recording && (
                      <div className="w-full bg-bronze/20 rounded-full h-2">
                        <div
                          className="bg-gold h-2 rounded-full transition-all duration-100"
                          style={{ width: recordingProgress + "%" }}
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Video Preview */}
              {videoPreviewUrl && (
                <div>
                  <h2 className="font-serif text-lg text-parchment/80 mb-3">Preview</h2>
                  <video
                    src={videoPreviewUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full rounded-sm border border-bronze/20"
                  />
                  <p className="text-parchment/40 text-xs font-sans mt-2">This is exactly what visitors will see on the website.</p>
                </div>
              )}

              {/* Step 3 — Metadata + Save */}
              {videoBlob && !saved && (
                <div className="border border-bronze/20 bg-secondary/20 rounded-sm p-5 space-y-4">
                  <h2 className="font-serif text-lg text-parchment/80">Step 3 — Publish to Website</h2>
                  <div className="space-y-3">
                    <div>
                      <label className="text-xs text-parchment/50 uppercase tracking-wider font-sans mb-1.5 block">Display Label *</label>
                      <Input
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                        placeholder="e.g. Football Quarterback Bust"
                        className="bg-obsidian border-bronze/30 text-parchment placeholder:text-parchment/25 focus:border-gold h-10"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-parchment/50 uppercase tracking-wider font-sans mb-1.5 block">Page</label>
                      <select value={page} onChange={(e) => setPage(e.target.value)}
                        className="w-full bg-obsidian border border-bronze/30 text-parchment h-10 px-3 text-sm rounded-sm outline-none focus:border-gold">
                        {PAGES.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-parchment/50 uppercase tracking-wider font-sans mb-1.5 block">Sport (optional)</label>
                      <select value={sport} onChange={(e) => setSport(e.target.value)}
                        className="w-full bg-obsidian border border-bronze/30 text-parchment h-10 px-3 text-sm rounded-sm outline-none focus:border-gold">
                        <option value="">Select sport</option>
                        {SPORTS.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs text-parchment/50 uppercase tracking-wider font-sans mb-1.5 block">Starting Price (optional)</label>
                      <Input
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                        placeholder="e.g. From $8,000"
                        className="bg-obsidian border-bronze/30 text-parchment placeholder:text-parchment/25 focus:border-gold h-10"
                      />
                    </div>
                  </div>
                  <button
                    onClick={handleSave}
                    disabled={saving || !label}
                    className="flex items-center gap-2 bg-gold hover:bg-bronze text-obsidian px-6 py-3 font-sans text-sm uppercase tracking-[0.15em] font-semibold transition-all duration-300 rounded-sm disabled:opacity-50 w-full justify-center"
                  >
                    {saving
                      ? <><Loader2 className="w-4 h-4 animate-spin" /> Uploading & Publishing…</>
                      : <><Save className="w-4 h-4" /> Publish to Website</>
                    }
                  </button>
                </div>
              )}

              {saved && (
                <div className="border border-green-500/30 bg-green-500/10 rounded-sm p-5 text-center space-y-3">
                  <CheckCircle className="w-10 h-10 text-green-400 mx-auto" />
                  <p className="font-serif text-xl text-parchment">Published!</p>
                  <p className="text-parchment/50 text-sm">The 360° video is now live on the website.</p>
                  <button
                    onClick={reset}
                    className="flex items-center gap-2 mx-auto border border-bronze/30 hover:border-gold text-parchment/60 hover:text-parchment px-5 py-2.5 font-sans text-xs uppercase tracking-widest transition-all rounded-sm"
                  >
                    <Upload className="w-4 h-4" /> Upload Another
                  </button>
                </div>
              )}
            </div>
          </FadeIn>
        </div>

        {/* Existing models list */}
        <ExistingModels />
      </div>

      <input ref={fileRef} type="file" accept=".glb" className="hidden" onChange={handleFileChange} />
    </div>
  );
}

function ExistingModels() {
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);

  useEffect(() => {
    base44.entities.Product3DModel.list("-created_date", 50)
      .then((r) => { setModels(Array.isArray(r) ? r : []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Delete this model from the website?")) return;
    setDeleting(id);
    await base44.entities.Product3DModel.delete(id);
    setModels((prev) => prev.filter((m) => m.id !== id));
    setDeleting(null);
  };

  if (loading) return null;
  if (!models.length) return null;

  return (
    <div className="mt-16">
      <h2 className="font-serif text-2xl text-parchment mb-6">Published Models ({models.length})</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {models.map((m) => (
          <div key={m.id} className="border border-bronze/20 bg-secondary/20 rounded-sm overflow-hidden">
            {m.video_url ? (
              <video src={m.video_url} autoPlay loop muted playsInline className="w-full aspect-video object-cover" />
            ) : (
              <div className="w-full aspect-video bg-obsidian/40 flex items-center justify-center">
                <p className="text-parchment/30 text-xs font-sans">No video — GLB only</p>
              </div>
            )}
            <div className="p-3 flex items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="font-serif text-sm text-parchment truncate">{m.label || m.name}</p>
                <p className="text-parchment/40 text-xs font-sans">{PAGES.find(p => p.value === m.page)?.label || m.page}</p>
              </div>
              <button
                onClick={() => handleDelete(m.id)}
                disabled={deleting === m.id}
                className="flex-shrink-0 text-parchment/30 hover:text-red-400 transition-colors disabled:opacity-50"
              >
                {deleting === m.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}