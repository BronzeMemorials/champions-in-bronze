import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { ChevronLeft, ChevronRight, RotateCcw, Play, Pause } from "lucide-react";

// Inline STLLoader (binary + ASCII)
function parseSTL(buffer) {
  const isBinary = (() => {
    const header = new Uint8Array(buffer, 0, 80);
    for (let i = 0; i < 80; i++) {
      if (header[i] === 0) return true;
    }
    const text = new TextDecoder().decode(new Uint8Array(buffer, 0, 256));
    return !text.startsWith("solid");
  })();

  const geometry = new THREE.BufferGeometry();

  if (isBinary) {
    const reader = new DataView(buffer);
    const numFaces = reader.getUint32(80, true);
    const positions = new Float32Array(numFaces * 9);
    const normals = new Float32Array(numFaces * 9);
    let offset = 84;
    for (let i = 0; i < numFaces; i++) {
      const nx = reader.getFloat32(offset, true); offset += 4;
      const ny = reader.getFloat32(offset, true); offset += 4;
      const nz = reader.getFloat32(offset, true); offset += 4;
      for (let v = 0; v < 3; v++) {
        const base = i * 9 + v * 3;
        positions[base]     = reader.getFloat32(offset, true); offset += 4;
        positions[base + 1] = reader.getFloat32(offset, true); offset += 4;
        positions[base + 2] = reader.getFloat32(offset, true); offset += 4;
        normals[base] = nx; normals[base + 1] = ny; normals[base + 2] = nz;
      }
      offset += 2;
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("normal", new THREE.BufferAttribute(normals, 3));
  } else {
    const text = new TextDecoder().decode(buffer);
    const lines = text.split("\n");
    const posArr = [], normArr = [];
    let curNormal = [0, 0, 0];
    for (const line of lines) {
      const t = line.trim();
      if (t.startsWith("facet normal")) {
        const parts = t.split(/\s+/);
        curNormal = [parseFloat(parts[2]), parseFloat(parts[3]), parseFloat(parts[4])];
      } else if (t.startsWith("vertex")) {
        const parts = t.split(/\s+/);
        posArr.push(parseFloat(parts[1]), parseFloat(parts[2]), parseFloat(parts[3]));
        normArr.push(...curNormal);
      }
    }
    geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(posArr), 3));
    geometry.setAttribute("normal", new THREE.BufferAttribute(new Float32Array(normArr), 3));
  }

  geometry.computeBoundingBox();
  geometry.computeVertexNormals();
  return geometry;
}

export default function STLViewer({ url, height = 500, label = "" }) {
  const mountRef = useRef(null);
  const sceneRef = useRef({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const rotY = useRef(0);
  const dragging = useRef(false);
  const lastX = useRef(0);

  useEffect(() => {
    if (!url) return;
    const el = mountRef.current;
    const w = el.clientWidth;
    const h = height;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf5f0ea);

    // Camera
    const camera = new THREE.PerspectiveCamera(45, w / h, 0.01, 1000);
    camera.position.set(0, 0, 3);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(w, h);
    renderer.shadowMap.enabled = true;
    el.appendChild(renderer.domElement);

    // Lighting — dramatic bronze look
    const ambient = new THREE.AmbientLight(0x4a3520, 0.4);
    scene.add(ambient);

    const key = new THREE.DirectionalLight(0xffd090, 2.5);
    key.position.set(2, 4, 3);
    key.castShadow = true;
    scene.add(key);

    const fill = new THREE.DirectionalLight(0x7a5a30, 0.8);
    fill.position.set(-3, 1, -2);
    scene.add(fill);

    const rim = new THREE.DirectionalLight(0xffaa44, 1.2);
    rim.position.set(0, -2, -4);
    scene.add(rim);

    // Load STL
    fetch(url)
      .then((r) => r.arrayBuffer())
      .then((buf) => {
        const geometry = parseSTL(buf);
        geometry.center();
        const box = new THREE.Box3().setFromBufferAttribute(geometry.attributes.position);
        const size = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 2 / maxDim;

        const material = new THREE.MeshStandardMaterial({
          color: 0x7a4a1e,
          metalness: 0.85,
          roughness: 0.25,
          envMapIntensity: 1.0,
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.scale.setScalar(scale);
        mesh.castShadow = true;

        const pivot = new THREE.Group();
        pivot.add(mesh);
        scene.add(pivot);
        sceneRef.current.pivot = pivot;

        setLoading(false);
      })
      .catch(() => {
        setError("Unable to load 3D model.");
        setLoading(false);
      });

    sceneRef.current = { ...sceneRef.current, scene, camera, renderer };

    // Animation loop
    let animId;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (sceneRef.current.pivot && sceneRef.current.autoRotate) {
        sceneRef.current.pivot.rotation.y += 0.005;
        rotY.current = sceneRef.current.pivot.rotation.y;
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

    // Drag (horizontal only)
    const onMouseDown = (e) => { dragging.current = true; lastX.current = e.clientX; sceneRef.current.autoRotate = false; };
    const onMouseMove = (e) => {
      if (!dragging.current || !sceneRef.current.pivot) return;
      const dx = e.clientX - lastX.current;
      lastX.current = e.clientX;
      sceneRef.current.pivot.rotation.y += dx * 0.01;
      rotY.current = sceneRef.current.pivot.rotation.y;
    };
    const onMouseUp = () => { dragging.current = false; };
    const onTouchStart = (e) => { dragging.current = true; lastX.current = e.touches[0].clientX; sceneRef.current.autoRotate = false; };
    const onTouchMove = (e) => {
      if (!dragging.current || !sceneRef.current.pivot) return;
      const dx = e.touches[0].clientX - lastX.current;
      lastX.current = e.touches[0].clientX;
      sceneRef.current.pivot.rotation.y += dx * 0.01;
    };
    const onTouchEnd = () => { dragging.current = false; };

    renderer.domElement.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    renderer.domElement.addEventListener("touchstart", onTouchStart);
    renderer.domElement.addEventListener("touchmove", onTouchMove);
    renderer.domElement.addEventListener("touchend", onTouchEnd);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      renderer.domElement.removeEventListener("mousedown", onMouseDown);
      renderer.domElement.removeEventListener("touchstart", onTouchStart);
      renderer.domElement.removeEventListener("touchmove", onTouchMove);
      renderer.domElement.removeEventListener("touchend", onTouchEnd);
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, [url, height]);

  // Sync autoRotate to ref
  useEffect(() => {
    sceneRef.current.autoRotate = autoRotate;
  }, [autoRotate]);

  const rotateLeft = () => {
    setAutoRotate(false);
    sceneRef.current.autoRotate = false;
    if (sceneRef.current.pivot) {
      sceneRef.current.pivot.rotation.y -= Math.PI / 6;
    }
  };

  const rotateRight = () => {
    setAutoRotate(false);
    sceneRef.current.autoRotate = false;
    if (sceneRef.current.pivot) {
      sceneRef.current.pivot.rotation.y += Math.PI / 6;
    }
  };

  const resetView = () => {
    if (sceneRef.current.pivot) {
      sceneRef.current.pivot.rotation.y = 0;
    }
    setAutoRotate(true);
  };

  if (!url) return null;

  return (
    <div className="relative rounded-sm overflow-hidden border border-bronze/20" style={{ height }}>
      <div ref={mountRef} className="w-full h-full" style={{ cursor: "grab" }} />

      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-secondary/60">
          <div className="w-10 h-10 border-4 border-bronze/30 border-t-gold rounded-full animate-spin mb-4" />
          <p className="text-parchment/60 text-xs font-sans uppercase tracking-widest">Loading 3D Model…</p>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-parchment/40 text-sm">{error}</p>
        </div>
      )}

      {!loading && !error && (
        <>
          {/* Label */}
          {label && (
            <div className="absolute top-4 left-4">
              <span className="bg-bronze/85 text-obsidian text-xs font-sans uppercase tracking-[0.15em] px-3 py-1">{label}</span>
            </div>
          )}

          {/* Controls */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
            <button onClick={rotateLeft} className="w-9 h-9 bg-obsidian/90 border border-bronze/40 flex items-center justify-center text-parchment/70 hover:text-gold hover:border-gold transition-colors rounded-sm shadow">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => setAutoRotate(!autoRotate)} className="w-9 h-9 bg-obsidian/90 border border-bronze/40 flex items-center justify-center text-parchment/70 hover:text-gold hover:border-gold transition-colors rounded-sm shadow">
              {autoRotate ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <button onClick={resetView} className="w-9 h-9 bg-obsidian/90 border border-bronze/40 flex items-center justify-center text-parchment/70 hover:text-gold hover:border-gold transition-colors rounded-sm shadow">
              <RotateCcw className="w-4 h-4" />
            </button>
            <button onClick={rotateRight} className="w-9 h-9 bg-obsidian/90 border border-bronze/40 flex items-center justify-center text-parchment/70 hover:text-gold hover:border-gold transition-colors rounded-sm shadow">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Hint */}
          <div className="absolute bottom-4 right-4">
            <p className="text-parchment/20 text-xs font-sans">Drag to rotate</p>
          </div>
        </>
      )}
    </div>
  );
}