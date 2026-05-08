import { useState, lazy, Suspense } from "react";
import { X, Box } from "lucide-react";
import FadeIn from "./FadeIn";

const GLBViewerLazy = lazy(() => import("./GLBViewer"));

function ModelCard({ model, onView }) {
  return (
    <div className="border border-bronze/20 bg-obsidian rounded-sm overflow-hidden group hover:border-gold/50 transition-colors duration-300">
      <div
        className="aspect-square flex flex-col items-center justify-center gap-3 cursor-pointer bg-secondary/20 hover:bg-secondary/40 transition-colors"
        onClick={() => onView(model)}
      >
        <Box className="w-10 h-10 text-bronze/50 group-hover:text-gold transition-colors" />
        <span className="text-parchment/40 text-xs font-sans uppercase tracking-widest group-hover:text-parchment/70 transition-colors">
          View in 3D
        </span>
      </div>
      <div className="p-4 border-t border-bronze/10">
        <p className="font-serif text-parchment text-sm truncate">{model.label || model.name}</p>
      </div>
    </div>
  );
}

function GLBModal({ model, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian/90 backdrop-blur-sm p-4">
      <div className="w-full max-w-3xl">
        <div className="flex items-center justify-between mb-4">
          <p className="font-serif text-parchment text-lg">{model.label || model.name}</p>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center border border-bronze/30 hover:border-gold text-parchment/50 hover:text-gold transition-colors rounded-sm"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <Suspense fallback={
          <div className="h-[500px] flex items-center justify-center bg-secondary/20 rounded-sm">
            <div className="w-10 h-10 border-4 border-bronze/30 border-t-gold rounded-full animate-spin" />
          </div>
        }>
          <GLBViewerLazy height={500} initialUrl={model.file_url} readOnly={true} />
        </Suspense>
        <p className="text-parchment/30 text-xs font-sans text-center mt-3">Drag to rotate · ±180°</p>
      </div>
    </div>
  );
}

export default function GLBGallery({ models = [] }) {
  const [active, setActive] = useState(null);

  if (!models.length) return null;

  return (
    <section className="py-20 border-t border-bronze/10 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-10">
            <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Interactive 3D Gallery</span>
            <h2 className="font-serif text-3xl md:text-4xl mt-3 text-parchment">View Recent Commissions</h2>
            <p className="mt-3 text-parchment/50 text-sm">Click any model to explore it in 3D.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {models.map((model, i) => (
            <FadeIn key={model.id} delay={i * 0.08}>
              <ModelCard model={model} onView={setActive} />
            </FadeIn>
          ))}
        </div>
      </div>

      {active && <GLBModal model={active} onClose={() => setActive(null)} />}
    </section>
  );
}