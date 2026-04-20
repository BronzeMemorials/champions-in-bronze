import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import FadeIn from "./FadeIn";

export default function PortfolioGrid({ items, title = "Portfolio", label = "Our Work" }) {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-28 bg-obsidian">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">{label}</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 text-parchment">{title}</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div
                onClick={() => setSelected(item)}
                className="group relative aspect-[4/3] overflow-hidden cursor-pointer rounded-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-lg text-parchment">{item.title}</h3>
                  <p className="text-parchment/50 text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 bg-obsidian/95 flex items-center justify-center p-6"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-parchment/60 hover:text-gold transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full"
            >
              <img src={selected.image} alt={selected.title} className="w-full rounded-sm" />
              <div className="mt-6">
                <h3 className="font-serif text-2xl text-parchment">{selected.title}</h3>
                <p className="text-parchment/60 mt-2">{selected.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}