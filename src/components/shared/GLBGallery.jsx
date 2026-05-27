import { useState, lazy, Suspense } from "react";
import { X, Maximize2, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";
import GLBThumbnail from "./GLBThumbnail";
import { useQuoteModal } from "@/lib/QuoteModalContext";

const GLBViewerLazy = lazy(() => import("./GLBViewer"));

function ModelCard({ model, onView }) {
  return (
    <div className="border border-bronze/20 bg-secondary/30 rounded-sm overflow-hidden group hover:border-gold/50 transition-colors duration-300">
      <div className="relative cursor-pointer" onClick={() => onView(model)}>
        <GLBThumbnail url={model.file_url} />
        <div className="absolute inset-0 flex items-center justify-center bg-obsidian/0 group-hover:bg-obsidian/40 transition-all duration-300">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 bg-bronze/90 text-parchment px-4 py-2 text-xs font-sans uppercase tracking-widest">
            <Maximize2 className="w-3.5 h-3.5" /> View in 3D
          </div>
        </div>
        {model.sport && (
          <div className="absolute top-3 left-3">
            <span className="bg-bronze/80 text-parchment text-xs font-sans uppercase tracking-[0.1em] px-2.5 py-1">{model.sport}</span>
          </div>
        )}
      </div>
      <div className="p-5 border-t border-bronze/10 space-y-3">
        <p className="font-serif text-parchment text-base">{model.label || model.name}</p>
        {(model.pose_type || model.size_range) && (
          <div className="flex flex-wrap gap-2">
            {model.pose_type && (
              <span className="text-parchment/40 font-sans text-xs border border-bronze/15 px-2 py-0.5">{model.pose_type}</span>
            )}
            {model.size_range && (
              <span className="text-parchment/40 font-sans text-xs border border-bronze/15 px-2 py-0.5">Available {model.size_range}</span>
            )}
          </div>
        )}
        {model.price_range && (
          <p className="font-serif text-gold text-sm">{model.price_range}</p>
        )}
        <Link
          to="/request-concept-design"
          className="flex items-center justify-between w-full bg-bronze/15 hover:bg-bronze text-parchment px-4 py-2.5 font-sans text-xs uppercase tracking-widest transition-all duration-300 group/btn"
          onClick={(e) => e.stopPropagation()}
        >
          Request Similar Design
          <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

function GLBModal({ model, onClose }) {
  const { openQuoteModal } = useQuoteModal();
  const handleRequestQuote = () => {
    onClose();
    openQuoteModal({ sourcePage: window.location.pathname, referenceImage: model.preview_image || undefined });
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-obsidian/95 backdrop-blur-sm p-4">
      <div className="w-full max-w-4xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="font-serif text-parchment text-xl">{model.label || model.name}</p>
            {model.sport && <p className="text-gold text-xs font-sans uppercase tracking-[0.2em] mt-1">{model.sport}</p>}
          </div>
          <button onClick={onClose}
            className="w-9 h-9 flex items-center justify-center border border-bronze/30 hover:border-gold text-parchment/50 hover:text-gold transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
        <Suspense fallback={
          <div className="h-[500px] flex items-center justify-center bg-secondary/30">
            <div className="w-10 h-10 border-4 border-bronze/30 border-t-gold rounded-full animate-spin" />
          </div>
        }>
          <GLBViewerLazy height={480} initialUrl={model.file_url} readOnly={true} />
        </Suspense>

        {/* Modal CTAs */}
        <div className="mt-4 grid sm:grid-cols-3 gap-3">
          <button onClick={handleRequestQuote}
            className="bg-bronze hover:bg-gold text-parchment px-4 py-3 font-sans text-xs uppercase tracking-widest text-center transition-all duration-300">
            Request Quote
          </button>
          <button onClick={handleRequestQuote}
            className="border border-bronze/40 hover:border-gold text-parchment/70 hover:text-parchment px-4 py-3 font-sans text-xs uppercase tracking-widest text-center transition-all duration-300">
            Request Similar Design
          </button>
          <div className="border border-bronze/20 px-4 py-3 flex items-center justify-center gap-2 text-parchment/40">
            <Clock className="w-3.5 h-3.5" />
            <span className="font-sans text-xs">16–24 Week Lead Time</span>
          </div>
        </div>
        {model.size_range && (
          <p className="text-parchment/30 text-xs font-sans text-center mt-3">Available sizes: {model.size_range} · Drag to rotate · ±180°</p>
        )}
        {!model.size_range && (
          <p className="text-parchment/25 text-xs font-sans text-center mt-3">Drag to rotate · ±180°</p>
        )}
      </div>
    </div>
  );
}

export default function GLBGallery({ models = [], light = false }) {
  const [active, setActive] = useState(null);
  const safeModels = Array.isArray(models) ? models : [];

  if (!safeModels.length) return null;

  if (light) {
    return (
      <section className="py-12 border-y border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Interactive 3D Gallery</span>
              <h2 className="font-serif text-3xl md:text-4xl text-gray-900">Explore Commissions in 3D</h2>
              <p className="mt-3 text-gray-500 text-sm">Click any model to rotate and explore. Request a similar design in seconds.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {safeModels.map((model, i) => (
              <FadeIn key={model.id} delay={i * 0.08}>
                <div className="border border-gray-200 bg-white rounded overflow-hidden group hover:border-yellow-500 hover:shadow-md transition-all duration-300">
                  <div className="relative cursor-pointer" onClick={() => setActive(model)}>
                    <GLBThumbnail url={model.file_url} />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-all duration-300">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 bg-yellow-700/90 text-white px-4 py-2 text-xs font-sans uppercase tracking-widest">
                        <Maximize2 className="w-3.5 h-3.5" /> View in 3D
                      </div>
                    </div>
                    {model.sport && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-yellow-700/80 text-white text-xs font-sans uppercase tracking-[0.1em] px-2.5 py-1">{model.sport}</span>
                      </div>
                    )}
                  </div>
                  <div className="p-4 border-t border-gray-100 space-y-2">
                    <p className="font-serif text-gray-900 text-base">{model.label || model.name}</p>
                    {model.price_range && <p className="text-yellow-700 text-sm font-semibold">{model.price_range}</p>}
                    <button
                      onClick={() => setActive(model)}
                      className="w-full bg-yellow-50 hover:bg-yellow-100 text-yellow-800 px-4 py-2 font-sans text-xs uppercase tracking-widest transition-colors flex items-center justify-between"
                    >
                      View in 3D <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
        {active && <GLBModal model={active} onClose={() => setActive(null)} />}
      </section>
    );
  }

  return (
    <section className="py-20 border-t border-bronze/10 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-12">
            <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Interactive 3D Gallery</span>
            <h2 className="font-serif text-3xl md:text-4xl mt-3 text-parchment">Explore Recent Commissions in 3D</h2>
            <p className="mt-3 text-parchment/40 text-sm">Click any model to rotate and explore. Request a similar design in seconds.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {safeModels.map((model, i) => (
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