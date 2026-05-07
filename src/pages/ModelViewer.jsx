import GLBViewer from "../components/shared/GLBViewer";
import FadeIn from "../components/shared/FadeIn";

export default function ModelViewer() {
  return (
    <div className="bg-obsidian text-parchment min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-10">
            <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">3D Preview</span>
            <h1 className="font-serif text-4xl md:text-5xl mt-3 text-parchment">GLB Model Viewer</h1>
            <p className="mt-4 text-parchment/50 text-sm max-w-xl mx-auto">
              Upload any .glb file to preview it in 3D. Rotation is locked to the horizontal axis — drag left or right, or use the arrow controls. Limited to ±180°.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <GLBViewer height={600} />
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[
              { label: "Drag", desc: "Left or right to rotate" },
              { label: "±180°", desc: "Horizontal rotation limit" },
              { label: "GLB Only", desc: "Standard 3D format" },
            ].map((item) => (
              <div key={item.label} className="border border-bronze/15 bg-secondary/20 p-4 rounded-sm">
                <p className="font-serif text-xl text-gold">{item.label}</p>
                <p className="text-parchment/40 text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}