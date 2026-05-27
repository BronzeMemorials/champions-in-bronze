import FadeIn from "./FadeIn";
import { ArrowRight } from "lucide-react";
import { useQuoteModal } from "@/lib/QuoteModalContext";

export default function VideoModelGallery({ models = [] }) {
  const { openQuoteModal } = useQuoteModal();
  const safe = Array.isArray(models) ? models.filter((m) => m.video_url) : [];
  if (!safe.length) return null;

  return (
    <section className="py-12 border-y border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-10">
            <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">360° Showcase</span>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900">View Our Work in 360°</h2>
            <p className="mt-3 text-gray-500 text-sm max-w-xl mx-auto">Each piece shown in full 360° rotation — exactly as it looks in bronze.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {safe.map((model, i) => (
            <FadeIn key={model.id} delay={i * 0.08}>
              <div className="border border-gray-200 bg-white rounded overflow-hidden group hover:border-yellow-500 hover:shadow-md transition-all duration-300">
                <div className="relative aspect-video overflow-hidden bg-[#e8e0d5]">
                  <video
                    src={model.video_url}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 border-t border-gray-100 space-y-2">
                  <p className="font-serif text-gray-900 text-base">{model.label || model.name}</p>
                  {model.sport && (
                    <span className="inline-block bg-yellow-50 border border-yellow-200 text-yellow-700 text-xs font-sans uppercase tracking-widest px-2 py-0.5">{model.sport}</span>
                  )}
                  {model.price_range && (
                    <p className="text-yellow-700 text-sm font-semibold">{model.price_range}</p>
                  )}
                  <button
                    onClick={() => openQuoteModal({ sourcePage: window.location.pathname, referenceImage: model.video_url })}
                    className="w-full bg-yellow-50 hover:bg-yellow-100 text-yellow-800 px-4 py-2 font-sans text-xs uppercase tracking-widest transition-colors flex items-center justify-between"
                  >
                    Request Similar Design <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}