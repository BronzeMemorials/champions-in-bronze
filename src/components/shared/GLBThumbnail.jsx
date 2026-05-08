import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function loadGLBFromUrl(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(r => {
        if (!r.ok) throw new Error("Fetch failed: " + r.status);
        return r.arrayBuffer();
      })
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

        function getAccessorData(accessorIndex) {
          const accessor = gltf.accessors[accessorIndex];
          const bufferView = gltf.bufferViews[accessor.bufferViewIndex ?? accessor.bufferView];
          const byteOffset = (bufferView.byteOffset ?? 0) + (accessor.byteOffset ?? 0);
          const TypedArray = { 5120: Int8Array, 5121: Uint8Array, 5122: Int16Array, 5123: Uint16Array, 5125: Uint32Array, 5126: Float32Array }[accessor.componentType];
          const count = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT4: 16 }[accessor.type];
          return new TypedArray(binBuffer, byteOffset, accessor.count * count);
        }

        const group = new THREE.Group();
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
              mat.compose(new THREE.Vector3(...t), new THREE.Quaternion(...r), new THREE.Vector3(...s));
            }
            const world = parentMatrix.clone().multiply(mat);
            if (node.mesh !== undefined) meshNodes.push({ meshIndex: node.mesh, matrix: world });
            if (node.children) collectNodes(node.children, world);
          }
        }

        const scene0 = gltf.scenes[gltf.scene ?? 0];
        collectNodes(scene0.nodes, new THREE.Matrix4());

        for (const { meshIndex, matrix } of meshNodes) {
          for (const prim of gltf.meshes[meshIndex].primitives) {
            const geo = new THREE.BufferGeometry();
            if (prim.attributes.POSITION !== undefined)
              geo.setAttribute("position", new THREE.BufferAttribute(getAccessorData(prim.attributes.POSITION), 3));
            if (prim.attributes.NORMAL !== undefined)
              geo.setAttribute("normal", new THREE.BufferAttribute(getAccessorData(prim.attributes.NORMAL), 3));
            if (prim.indices !== undefined)
              geo.setIndex(new THREE.BufferAttribute(getAccessorData(prim.indices), 1));
            geo.computeVertexNormals();
            const mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0x9B6B3A, roughness: 0.42, metalness: 0.72 }));
            mesh.applyMatrix4(matrix);
            group.add(mesh);
          }
        }
        resolve(group);
      })
      .catch(reject);
  });
}

export default function GLBThumbnail({ url, size = 260 }) {
  const mountRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const el = mountRef.current;
    if (!el || !url) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xe8e0d5);

    const camera = new THREE.PerspectiveCamera(45, 1, 0.001, 1000);
    camera.position.set(0, 0.2, 3.5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "low-power" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(size, size);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    el.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0x9a7a50, 1.2));
    const key = new THREE.DirectionalLight(0xffdda0, 3.5);
    key.position.set(1, 2, 5);
    scene.add(key);
    const fill = new THREE.DirectionalLight(0xffe0b0, 2.0);
    fill.position.set(-3, 1, 4);
    scene.add(fill);

    const pivot = new THREE.Group();
    scene.add(pivot);
    let rotY = 0;
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      rotY += 0.015;
      pivot.rotation.y = rotY;
      renderer.render(scene, camera);
    };

    loadGLBFromUrl(url).then((group) => {
      const box = new THREE.Box3().setFromObject(group);
      const center = box.getCenter(new THREE.Vector3());
      const size3 = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size3.x, size3.y, size3.z);
      group.position.sub(center);
      group.scale.setScalar(2 / maxDim);
      pivot.add(group);
      setLoading(false);
      animate();
    }).catch(() => {
      setError(true);
      setLoading(false);
    });

    return () => {
      cancelAnimationFrame(animId);
      renderer.dispose();
      while (el.firstChild) el.removeChild(el.firstChild);
    };
  }, [url, size]);

  return (
    <div className="relative w-full" style={{ aspectRatio: "1/1" }}>
      <div ref={mountRef} className="w-full h-full" />
      {loading && !error && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#e8e0d5]">
          <div className="w-7 h-7 border-4 border-bronze/30 border-t-gold rounded-full animate-spin" />
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#e8e0d5]">
          <span className="text-parchment/40 text-xs font-sans">Preview unavailable</span>
        </div>
      )}
    </div>
  );
}