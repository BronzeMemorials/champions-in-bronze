import { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { ChevronLeft, ChevronRight, RotateCcw, Play, Pause, Upload } from "lucide-react";

const MIN_Y = -Math.PI; // -180°
const MAX_Y = Math.PI;  // +180°

function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

async function loadGLB(url) {
  const { GLTFLoader } = await import(
    "https://unpkg.com/three@0.171.0/examples/jsm/loaders/GLTFLoader.js"
  );
  return new Promise((resolve, reject) => {
    new GLTFLoader().load(url, resolve, undefined, reject);
  });
}

export default function GLBViewer({ height = 500 }) {
  const mountRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const pivotRef = useRef(null);
  const animRef = useRef(null);
  const rotYRef = useRef(0);
  const autoRotateRef = useRef(true);
  const dragging = useRef(false);
  const lastX = useRef(0);

  const [fileUrl, setFileUrl] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [autoRotate, setAutoRotate] = useState(true);

  // Sync state → ref
  useEffect(() => { autoRotateRef.current = autoRotate; }, [autoRotate]);

  // Init Three.js once on mount
  useEffect(() => {
    const el = mountRef.current;
    const w = el.clientWidth;
    const h = height;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f0c09);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, w / h, 0.001, 1000);
    camera.position.set(0, 0, 3.5);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(w, h);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    el.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.7));
    const key = new THREE.DirectionalLight(0xffd090, 2.0);
    key.position.set(3, 5, 4);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0x9ab0d0, 0.8);
    fill.position.set(-4, 2, -3);
    scene.add(fill);
    const rim = new THREE.DirectionalLight(0xffcc77, 1.0);
    rim.position.set(0, -3, -5);
    scene.add(rim);

    const pivot = new THREE.Group();
    scene.add(pivot);
    pivotRef.current = pivot;

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

    // Mouse drag — horizontal only, clamped ±180°
    const onMouseDown = (e) => {
      dragging.current = true;
      lastX.current = e.clientX;
      autoRotateRef.current = false;
      setAutoRotate(false);
    };
    const onMouseMove = (e) => {
      if (!dragging.current) return;
      const dx = e.clientX - lastX.current;
      lastX.current = e.clientX;
      rotYRef.current = clamp(rotYRef.current + dx * 0.01, MIN_Y, MAX_Y);
      pivot.rotation.y = rotYRef.current;
    };
    const onMouseUp = () => { dragging.current = false; };

    // Touch drag
    const onTouchStart = (e) => {
      dragging.current = true;
      lastX.current = e.touches[0].clientX;
      autoRotateRef.current = false;
      setAutoRotate(false);
    };
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

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, [height]);

  // Load GLB when fileUrl changes
  useEffect(() => {
    if (!fileUrl || !pivotRef.current) return;
    setLoading(true);
    setError(null);
    setModelLoaded(false);

    const pivot = pivotRef.current;
    // Clear existing model
    while (pivot.children.length) {
      const child = pivot.children[0];
      pivot.remove(child);
    }

    loadGLB(fileUrl)
      .then((gltf) => {
        const model = gltf.scene;
        // Center & scale
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        model.position.sub(center);
        model.scale.setScalar(2 / maxDim);

        pivot.add(model);

        // Reset rotation
        rotYRef.current = 0;
        pivot.rotation.y = 0;

        setModelLoaded(true);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load GLB. Make sure it's a valid .glb file.");
        setLoading(false);
      });
  }, [fileUrl]);

  const handleFileChange = useCallback((e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (fileUrl) URL.revokeObjectURL(fileUrl);
    setFileUrl(URL.createObjectURL(file));
    setFileName(file.name);
    setError(null);
    e.target.value = "";
  }, [fileUrl]);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (!file || !file.name.toLowerCase().endsWith(".glb")) {
      setError("Please drop a .glb file.");
      return;
    }
    if (fileUrl) URL.revokeObjectURL(fileUrl);
    setFileUrl(URL.createObjectURL(file));
    setFileName(file.name);
    setError(null);
  }, [fileUrl]);

  const rotateLeft = () => {
    setAutoRotate(false);
    autoRotateRef.current = false;
    rotYRef.current = clamp(rotYRef.current - Math.PI / 6, MIN_Y, MAX_Y);
    if (pivotRef.current) pivotRef.current.rotation.y = rotYRef.current;
  };

  const rotateRight = () => {
    setAutoRotate(false);
    autoRotateRef.current = false;
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
    <div className="w-full rounded-sm overflow-hidden border border-bronze/20" style={{ position: "relative" }}>
      {/* Three.js mount — always in DOM */}
      <div
        ref={mountRef}
        style={{ width: "100%", height, display: fileUrl ? "block" : "none", cursor: "grab" }}
      />

      {/* Upload zone — shown when no file */}
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
            <p className="text-parchment/25 text-xs mt-1">GLB format · Horizontal-only 360° rotation</p>
          </div>
        </div>
      )}

      {/* Overlays — only shown when viewport is active */}
      {fileUrl && (
        <>
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-obsidian/80 z-10">
              <div className="w-10 h-10 border-4 border-bronze/30 border-t-gold rounded-full animate-spin mb-3" />
              <p className="text-parchment/40 text-xs font-sans uppercase tracking-widest">Loading Model…</p>
            </div>
          )}

          {error && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-obsidian/90 z-10">
              <p className="text-parchment/50 text-sm text-center px-8">{error}</p>
              <button
                onClick={() => { setFileUrl(null); setFileName(null); setError(null); }}
                className="text-gold text-xs font-sans uppercase tracking-widest border border-bronze/30 px-4 py-2 hover:border-gold transition-colors rounded-sm"
              >
                Try Again
              </button>
            </div>
          )}

          {modelLoaded && !loading && !error && (
            <>
              {/* File name badge */}
              <div className="absolute top-3 left-3 z-10">
                <span className="bg-bronze/70 text-parchment text-xs font-sans px-3 py-1 rounded-sm max-w-[180px] truncate block">
                  {fileName}
                </span>
              </div>

              {/* Replace button */}
              <button
                onClick={triggerUpload}
                className="absolute top-3 right-3 z-10 bg-obsidian/70 border border-bronze/30 text-parchment/50 hover:text-gold hover:border-gold text-xs font-sans uppercase tracking-widest px-3 py-1.5 rounded-sm transition-colors flex items-center gap-1.5"
              >
                <Upload className="w-3 h-3" /> Replace
              </button>

              {/* Rotation controls */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
                <button onClick={rotateLeft} title="Rotate left" className="w-9 h-9 bg-obsidian/80 border border-bronze/30 flex items-center justify-center text-parchment/60 hover:text-gold hover:border-gold transition-colors rounded-sm">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={() => setAutoRotate((v) => !v)} title={autoRotate ? "Pause" : "Auto-rotate"} className="w-9 h-9 bg-obsidian/80 border border-bronze/30 flex items-center justify-center text-parchment/60 hover:text-gold hover:border-gold transition-colors rounded-sm">
                  {autoRotate ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button onClick={resetView} title="Reset" className="w-9 h-9 bg-obsidian/80 border border-bronze/30 flex items-center justify-center text-parchment/60 hover:text-gold hover:border-gold transition-colors rounded-sm">
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button onClick={rotateRight} title="Rotate right" className="w-9 h-9 bg-obsidian/80 border border-bronze/30 flex items-center justify-center text-parchment/60 hover:text-gold hover:border-gold transition-colors rounded-sm">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Hint */}
              <p className="absolute bottom-4 right-4 z-10 text-parchment/20 text-xs font-sans">Drag · ±180°</p>
            </>
          )}
        </>
      )}

      {/* Hidden file input */}
      <input
        id="glb-upload-input"
        type="file"
        accept=".glb"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}