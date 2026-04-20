import { Link } from "react-router-dom";
import FadeIn from "./FadeIn";

export default function ProductHero({ image, label, title, subtitle, cta1 = "Start a Commission", cta2 = "View Portfolio", cta1Link = "/request-quote", cta2Link = "/portfolio" }) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img src={image} alt={title} className="w-full h-full object-cover opacity-30 scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-obsidian/70 to-obsidian" />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 py-32">
        <FadeIn>
          <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">{label}</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] mt-4 text-parchment max-w-4xl">
            {title}
          </h1>
          <p className="mt-8 max-w-2xl text-xl text-parchment/70 leading-relaxed font-sans">
            {subtitle}
          </p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to={cta1Link}
              className="bg-bronze hover:bg-gold text-parchment px-10 py-5 font-sans text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300 inline-block"
            >
              {cta1}
            </Link>
            <Link
              to={cta2Link}
              className="border border-parchment/20 hover:border-gold text-parchment px-10 py-5 font-sans text-sm uppercase tracking-[0.2em] transition-all duration-300 inline-block"
            >
              {cta2}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}