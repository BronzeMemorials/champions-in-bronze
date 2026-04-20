import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";
import QuoteForm from "./QuoteForm";

/**
 * ProductGallerySection
 * Renders one section of the repeating gallery pattern:
 *   Row 1-3: 3 image cards across with title + caption
 *   Row 4: inline mini-CTA quote row
 *
 * Props:
 *   label     - gold overline text
 *   title     - section heading
 *   items     - array of { image, title, caption }  (3 items per section)
 *   source    - "pro" | "edu" | "shop" for quote form
 *   showForm  - bool, whether to show the full QuoteForm after the grid
 *   formTitle - title for QuoteForm (only if showForm=true)
 */
export default function ProductGallerySection({ label, title, items = [], source = "pro", showForm = false, formTitle }) {
  return (
    <section className="py-20 border-t border-bronze/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section heading */}
        <FadeIn>
          <div className="mb-12">
            {label && (
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">{label}</span>
            )}
            {title && (
              <h2 className="font-serif text-3xl md:text-4xl mt-2 text-parchment">{title}</h2>
            )}
          </div>
        </FadeIn>

        {/* 3-column image grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
                  {item.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-gold/90 text-obsidian text-xs font-sans uppercase tracking-[0.1em] font-bold px-2 py-1">
                        {item.badge}
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-serif text-lg text-parchment leading-tight">{item.title}</h3>
                    {item.caption && (
                      <p className="text-parchment/55 text-xs mt-1 leading-relaxed">{item.caption}</p>
                    )}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Inline CTA bar */}
        <FadeIn delay={0.3}>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-secondary/40 border border-bronze/15 px-8 py-5 rounded-sm">
            <div>
              <p className="font-serif text-parchment text-lg">We Don't Miss Deadlines</p>
              <p className="text-parchment/50 text-sm font-sans mt-0.5">48-Hour Artwork Proof · Free Shipping · Made in USA</p>
            </div>
            <Link
              to="/request-quote"
              className="flex-shrink-0 bg-bronze hover:bg-gold text-parchment px-8 py-3 font-sans text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 whitespace-nowrap"
            >
              Get Instant Price
            </Link>
          </div>
        </FadeIn>
      </div>

      {/* Optional full QuoteForm */}
      {showForm && <QuoteForm title={formTitle} source={source} />}
    </section>
  );
}