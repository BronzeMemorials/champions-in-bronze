import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";

export default function ProductHero({ image, label, title, subtitle, cta1 = "Start a Commission", cta2 = "View Portfolio", cta1Link = "/request-quote", cta2Link = "/portfolio" }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img src={image} alt={title} className="w-full h-full object-cover opacity-40 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 py-32">
        <FadeIn>
          <span className="text-bronze font-sans tracking-[0.3em] uppercase text-xs font-semibold break-words">{label}</span>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-[0.95] mt-4 text-parchment max-w-4xl break-words hyphens-auto">
            {title}
          </h1>
          <p className="mt-8 max-w-2xl text-xl text-parchment/65 leading-relaxed font-sans">
            {subtitle}
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to={cta1Link}
              className="bg-bronze hover:bg-gold text-white px-10 py-5 font-sans text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300 inline-block"
            >
              {cta1}
            </Link>
            <Link
              to={cta2Link}
              className="border border-parchment/30 hover:border-bronze text-parchment px-10 py-5 font-sans text-sm uppercase tracking-[0.2em] transition-all duration-300 inline-block"
            >
              {cta2}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}