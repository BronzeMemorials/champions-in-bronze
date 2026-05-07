import { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { ChevronLeft, ChevronRight, RotateCcw, Play, Pause, Upload } from "lucide-react";

const MIN_Y = -Math.PI;
const MAX_Y = Math.PI;
function clamp(val, min, max) { return Math.min(Math.max(val, min), max); }

// Minimal GLB loader using Three.js ObjectLoader for glTF JSON chunk
// and a manual binary chunk reader
function loadGLBFromUrl(url, scene) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(r => {
        if (!r.ok) throw new Error("Fetch failed: " + r.status);
        return r.arrayBuffer();
      })
      .then(buffer => {
        const view = new DataView(buffer);
        // GLB magic check: 0x46546C67 = "glTF"
        const magic = view.getUint32(0, true);
        if (magic !== 0x46546C67) {
          throw new Error("Not a valid GLB file (magic mismatch)");
        }
        // Parse JSON chunk
        const jsonChunkLength = view.getUint32(12, true);
        const jsonBytes = new Uint8Array(buffer, 20, jsonChunkLength);
        const jsonText = new TextDecoder().decode(jsonBytes);
        const gltf = JSON.parse(jsonText);

        // Binary chunk (if present)
        let binBuffer = null;
        const binOffset = 20 + jsonChunkLength;
        if (binOffset < buffer.byteLength) {
          const binChunkLength = view.getUint32(binOffset, true);
          binBuffer = buffer.slice(binOffset + 8, binOffset + 8 + binChunkLength);
        }

        // Helper: get typed array from accessor
        function getAccessorData(accessorIndex) {
          const accessor = gltf.accessors[accessorIndex];
          const bufferView = gltf.bufferViews[accessor.bufferViewIndex ?? accessor.bufferView];
          const byteOffset = (bufferView.byteOffset ?? 0) + (accessor.byteOffset ?? 0);
          const componentTypeMap = { 5120: Int8Array, 5121: Uint8Array, 5122: Int16Array, 5123: Uint16Array, 5125: Uint32Array, 5126: Float32Array };
          const TypedArray = componentTypeMap[accessor.componentType];
          const countPerElement = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT4: 16 }[accessor.type];
          return new TypedArray(binBuffer, byteOffset, accessor.count * countPerElement);
        }

        const group = new THREE.Group();

        // Process meshes
        const meshNodes = [];
        function collectNodes(nodeIndices, parentMatrix) {
          for (const ni of nodeIndices) {
            const node = gltf.nodes[ni];
            const mat = new THREE.Matrix4();
            if (node.matrix) mat.fromArray(node.matrix);
            else {
              const t = node.translation || [0,0,0];
              const r = node.rotation || [0,0,0,1];
              const s = node.scale || [1,1,1];
              mat.compose(
                new THREE.Vector3(...t),
                new THREE.Quaternion(...r),
                new THREE.Vector3(...s)
              );
            }
            const world = parentMatrix.clone().multiply(mat);
            if (node.mesh !== undefined) meshNodes.push({ meshIndex: node.mesh, matrix: world });
            if (node.children) collectNodes(node.children, world);
          }
        }

        const scene0 = gltf.scenes[gltf.scene ?? 0];
        collectNodes(scene0.nodes, new THREE.Matrix4());

        for (const { meshIndex, matrix } of meshNodes) {
          const mesh = gltf.meshes[meshIndex];
          for (const prim of mesh.primitives) {
            const geo = new THREE.BufferGeometry();
            if (prim.attributes.POSITION !== undefined) {
              geo.setAttribute("position", new THREE.BufferAttribute(getAccessorData(prim.attributes.POSITION), 3));
            }
            if (prim.attributes.NORMAL !== undefined) {
              geo.setAttribute("normal", new THREE.BufferAttribute(getAccessorData(prim.attributes.NORMAL), 3));
            }
            if (prim.indices !== undefined) {
              geo.setIndex(new THREE.BufferAttribute(getAccessorData(prim.indices), 1));
            }
            geo.computeVertexNormals();

            const mat3 = new THREE.MeshStandardMaterial({
              color: 0x9B6B3A,
              roughness: 0.42,
              metalness: 0.72,
            });

            const threeMesh = new THREE.Mesh(geo, mat3);
            threeMesh.applyMatrix4(matrix);
            group.add(threeMesh);
          }
        }

        resolve(group);
      })
      .catch(reject);
  });
}

export default function GLBViewer({ height = 500, initialUrl = null, onModelLoaded = null }) {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);
  const animRef = useRef(null);
  const pivotRef = useRef(null);
  const rotYRef = useRef(0);
  const autoRotateRef = useRef(true);
  const dragging = useRef(false);
  const lastX = useRef(0);

  const [fileUrl, setFileUrl] = useState(initialUrl);
  const [fileName, setFileName] = useState(initialUrl ? "model.glb" : null);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [loading, setLoading] = useState(!!initialUrl);
  const [error, setError] = useState(null);
  const [autoRotate, setAutoRotate] = useState(true);

  useEffect(() => { autoRotateRef.current = autoRotate; }, [autoRotate]);

  // Init Three.js after fileUrl is set
  useEffect(() => {
    if (!fileUrl) return;
    const el = mountRef.current;
    if (!el) return;

    // Cleanup previous
    if (rendererRef.current) {
      cancelAnimationFrame(animRef.current);
      rendererRef.current.dispose();
      while (el.firstChild) el.removeChild(el.firstChild);
      rendererRef.current = null;
    }

    const w = el.clientWidth || window.innerWidth;
    const h = height;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xe8e0d5);

    const camera = new THREE.PerspectiveCamera(45, w / h, 0.001, 1000);
    camera.position.set(0, 0.5, 3.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(w, h);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    el.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting — warm studio bronze look
    scene.add(new THREE.AmbientLight(0x6b4c2a, 0.6));
    const key = new THREE.DirectionalLight(0xffdda0, 3.0);
    key.position.set(3, 5, 4);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xc8914a, 1.0);
    fill.position.set(-4, 2, -3);
    scene.add(fill);
    const rim = new THREE.DirectionalLight(0xffc87a, 1.4);
    rim.position.set(0, -3, -5);
    scene.add(rim);

    const pivot = new THREE.Group();
    scene.add(pivot);
    pivotRef.current = pivot;

    rotYRef.current = 0;
    pivot.rotation.y = 0;

    // Animate
    const animate = () => {
      animRef.current = requestAnimationFrame(animate);
      if (autoRotateRef.current) {
        rotYRef.current += 0.005;
        if (rotYRef.current > Math.PI) rotYRef.current = -Math.PI;
        pivot.rotation.y = rotYRef.current;
      }
      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const onResize = () => {
      const w2 = el.clientWidth;
      camera.aspect = w2 / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w2, h);
    };
    window.addEventListener("resize", onResize);

    // Drag
    const onMouseDown = (e) => { dragging.current = true; lastX.current = e.clientX; autoRotateRef.current = false; setAutoRotate(false); };
    const onMouseMove = (e) => {
      if (!dragging.current) return;
      const dx = e.clientX - lastX.current;
      lastX.current = e.clientX;
      rotYRef.current = clamp(rotYRef.current + dx * 0.01, MIN_Y, MAX_Y);
      pivot.rotation.y = rotYRef.current;
    };
    const onMouseUp = () => { dragging.current = false; };
    const onTouchStart = (e) => { dragging.current = true; lastX.current = e.touches[0].clientX; autoRotateRef.current = false; setAutoRotate(false); };
    const onTouchMove = (e) => {
      if (!dragging.current) return;
      const dx = e.touches[0].clientX - lastX.current;
      lastX.current = e.touches[0].clientX;
      rotYRef.current = clamp(rotYRef.current + dx * 0.01, MIN_Y, MAX_Y);
      pivot.rotation.y = rotYRef.current;
    };
    const onTouchEnd = () => { dragging.current = false; };

    renderer.domElement.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    renderer.domElement.addEventListener("touchstart", onTouchStart, { passive: true });
    renderer.domElement.addEventListener("touchmove", onTouchMove, { passive: true });
    renderer.domElement.addEventListener("touchend", onTouchEnd);

    // Load model
    setLoading(true);
    setModelLoaded(false);
    setError(null);

    loadGLBFromUrl(fileUrl, scene)
      .then((group) => {
        // Center & scale
        const box = new THREE.Box3().setFromObject(group);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        group.position.sub(center);
        group.scale.setScalar(2 / maxDim);
        pivot.add(group);
        setModelLoaded(true);
        setLoading(false);
      })
      .catch((err) => {
        console.error("GLB load error:", err);
        setError("Failed to load GLB: " + err.message);
        setLoading(false);
      });

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      renderer.dispose();
      while (el.firstChild) el.removeChild(el.firstChild);
    };
  }, [fileUrl, height]);

  const handleFileChange = useCallback((e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (fileUrl && !initialUrl) URL.revokeObjectURL(fileUrl);
    const url = URL.createObjectURL(file);
    setFileUrl(url);
    setFileName(file.name);
    setError(null);
    if (onModelLoaded) onModelLoaded(url, file.name);
    e.target.value = "";
  }, [fileUrl, initialUrl, onModelLoaded]);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file || !file.name.toLowerCase().endsWith(".glb")) {
      setError("Please drop a .glb file.");
      return;
    }
    if (fileUrl && !initialUrl) URL.revokeObjectURL(fileUrl);
    const url = URL.createObjectURL(file);
    setFileUrl(url);
    setFileName(file.name);
    setError(null);
    if (onModelLoaded) onModelLoaded(url, file.name);
  }, [fileUrl, initialUrl, onModelLoaded]);

  const rotateLeft = () => {
    setAutoRotate(false); autoRotateRef.current = false;
    rotYRef.current = clamp(rotYRef.current - Math.PI / 6, MIN_Y, MAX_Y);
    if (pivotRef.current) pivotRef.current.rotation.y = rotYRef.current;
  };
  const rotateRight = () => {
    setAutoRotate(false); autoRotateRef.current = false;
    rotYRef.current = clamp(rotYRef.current + Math.PI / 6, MIN_Y, MAX_Y);
    if (pivotRef.current) pivotRef.current.rotation.y = rotYRef.current;
  };
  const resetView = () => {
    rotYRef.current = 0;
    if (pivotRef.current) pivotRef.current.rotation.y = 0;
    setAutoRotate(true);
  };

  const triggerUpload = () => document.getElementById("glb-upload-input").click();

  return (
    <div className="w-full rounded-sm overflow-hidden border border-bronze/20">
      {!fileUrl && (
        <div
          className="flex flex-col items-center justify-center gap-4 cursor-pointer border-2 border-dashed border-bronze/30 hover:border-gold/60 transition-colors rounded-sm bg-obsidian"
          style={{ height }}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
          onClick={triggerUpload}
        >
          <Upload className="w-10 h-10 text-bronze/50" />
          <div className="text-center px-8">
            <p className="text-parchment/50 font-sans text-sm">Drop a .glb file here, or click to browse</p>
            <p className="text-parchment/25 text-xs mt-1">GLB format · Horizontal-only rotation · ±180°</p>
          </div>
        </div>
      )}

      {fileUrl && (
        <div className="relative" style={{ height }}>
          <div ref={mountRef} className="w-full h-full" style={{ cursor: "grab" }} />

          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-obsidian/80 z-10">
              <div className="w-10 h-10 border-4 border-bronze/30 border-t-gold rounded-full animate-spin mb-3" />
              <p className="text-parchment/40 text-xs font-sans uppercase tracking-widest">Loading Model…</p>
            </div>
          )}

          {error && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-obsidian/90 z-10 px-8">
              <p className="text-parchment/50 text-sm text-center">{error}</p>
              <button onClick={() => { setFileUrl(null); setFileName(null); setError(null); }}
                className="text-gold text-xs font-sans uppercase tracking-widest border border-bronze/30 px-4 py-2 hover:border-gold transition-colors rounded-sm">
                Try Again
              </button>
            </div>
          )}

          {modelLoaded && !loading && !error && (
            <>
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-bronze/70 text-parchment text-xs font-sans px-3 py-1 rounded-sm max-w-[180px] truncate block">{fileName}</span>
              </div>
              <button onClick={triggerUpload}
                className="absolute top-3 right-3 z-10 bg-obsidian/70 border border-bronze/30 text-parchment/50 hover:text-gold hover:border-gold text-xs font-sans uppercase tracking-widest px-3 py-1.5 rounded-sm transition-colors flex items-center gap-1.5">
                <Upload className="w-3 h-3" /> Replace
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
                <button onClick={rotateLeft} className="w-9 h-9 bg-obsidian/80 border border-bronze/30 flex items-center justify-center text-parchment/60 hover:text-gold hover:border-gold transition-colors rounded-sm"><ChevronLeft className="w-5 h-5" /></button>
                <button onClick={() => setAutoRotate(v => !v)} className="w-9 h-9 bg-obsidian/80 border border-bronze/30 flex items-center justify-center text-parchment/60 hover:text-gold hover:border-gold transition-colors rounded-sm">
                  {autoRotate ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button onClick={resetView} className="w-9 h-9 bg-obsidian/80 border border-bronze/30 flex items-center justify-center text-parchment/60 hover:text-gold hover:border-gold transition-colors rounded-sm"><RotateCcw className="w-4 h-4" /></button>
                <button onClick={rotateRight} className="w-9 h-9 bg-obsidian/80 border border-bronze/30 flex items-center justify-center text-parchment/60 hover:text-gold hover:border-gold transition-colors rounded-sm"><ChevronRight className="w-5 h-5" /></button>
              </div>
              <p className="absolute bottom-4 right-4 z-10 text-parchment/20 text-xs font-sans">Drag · ±180°</p>
            </>
          )}
        </div>
      )}

      <input id="glb-upload-input" type="file" accept=".glb" className="hidden" onChange={handleFileChange} />
    </div>
  );
}