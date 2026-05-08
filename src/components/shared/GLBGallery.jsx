import { useState, lazy, Suspense } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FadeIn from "./FadeIn";

const GLBViewerLazy = lazy(() => import("./GLBViewer"));

export default function GLBGallery({ models = [] }) {
  const [current, setCurrent] = useState(0);

  if (!models.length) return null;

  const prev = () => setCurrent((c) => (c - 1 + models.length) % models.length);
  const next = () => setCurrent((c) => (c + 1) % models.length);

  return (
    <section className="py-20 border-t border-bronze/10 bg-secondary/10">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-10">
            <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Interactive 3D Gallery</span>
            <h2 className="font-serif text-3xl md:text-4xl mt-3 text-parchment">View Recent Commissions</h2>
            <p className="mt-3 text-parchment/50 text-sm">Drag left or right to rotate. Use arrows to browse commissions.</p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <Suspense fallback={<div className="h-[560px] flex items-center justify-center"><div className="w-10 h-10 border-4 border-bronze/30 border-t-gold rounded-full animate-spin" /></div>}>
            <GLBViewerLazy
              key={models[current].id}
              height={560}
              initialUrl={models[current].file_url}
              readOnly={true}
            />
          </Suspense>
        </FadeIn>

        {/* Nav */}
        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={prev}
            className="flex items-center gap-2 text-parchment/50 hover:text-gold transition-colors font-sans text-xs uppercase tracking-widest"
          >
            <ChevronLeft className="w-4 h-4" /> Prev
          </button>

          <div className="flex items-center gap-3">
            {models.map((m, i) => (
              <button
                key={m.id}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? "w-6 h-2 bg-gold"
                    : "w-2 h-2 bg-parchment/20 hover:bg-parchment/40"
                }`}
              />
            ))}
          </div>

          <div className="text-center">
            <p className="font-serif text-parchment text-sm">{models[current].label || models[current].name}</p>
            <p className="text-parchment/40 text-xs mt-0.5">{current + 1} of {models.length}</p>
          </div>

          <button
            onClick={next}
            className="flex items-center gap-2 text-parchment/50 hover:text-gold transition-colors font-sans text-xs uppercase tracking-widest"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}