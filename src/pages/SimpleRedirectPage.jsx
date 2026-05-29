// Generic simple landing page for keyword URLs — renders a minimal branded redirect experience
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEOHead from "../components/shared/SEOHead";
import QuoteForm from "../components/shared/QuoteForm";
import TrustBadges from "../components/shared/TrustBadges";
import FadeIn from "../components/shared/FadeIn";

export default function SimpleProductPage({ title, subtitle, description, heroImg, targetPath, targetLabel, seoTitle, seoDesc }) {
  return (
    <div className="bg-white text-gray-900">
      <SEOHead
        title={seoTitle || `${title} | Champions in Bronze`}
        description={seoDesc || description}
        canonical={targetPath}
      />
      <div className="bg-[#1e3a5f] text-white text-center py-2 px-4">
        <a href="tel:7723090412" className="font-sans font-black text-base tracking-widest text-white hover:text-yellow-300 transition-colors">
          📞 <span className="font-black text-xl">772-309-0412</span> — Call Now for a Direct Answer
        </a>
      </div>
      <section className="relative min-h-[50vh] flex items-center bg-gray-50 overflow-hidden">
        {heroImg && (
          <div className="absolute inset-0">
            <img src={heroImg} alt={title} className="w-full h-full object-cover opacity-15" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/60" />
          </div>
        )}
        <div className="relative max-w-4xl mx-auto px-6 py-16 text-center">
          <FadeIn>
            <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-4">Champions in Bronze · Since 1974</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900 mb-6">{title}</h1>
            {subtitle && <p className="text-yellow-700 font-serif text-xl mb-4">{subtitle}</p>}
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">{description}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/request-quote" className="inline-flex items-center gap-2 px-8 py-4 font-sans font-bold uppercase tracking-widest text-sm text-black transition-all hover:scale-[1.02]" style={{ background: "linear-gradient(135deg, #B8860B 0%, #DAA520 30%, #FFD700 50%, #DAA520 70%, #B8860B 100%)" }}>
                Get a Free Artwork Proof <ArrowRight className="w-4 h-4" />
              </Link>
              {targetPath && (
                <Link to={targetPath} className="inline-flex items-center gap-2 px-8 py-4 border-2 border-yellow-600 text-yellow-800 font-sans font-semibold uppercase tracking-widest text-sm hover:bg-yellow-50 transition-colors">
                  {targetLabel || "View Gallery"} <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>
          </FadeIn>
        </div>
      </section>
      <TrustBadges />
      <QuoteForm title={`Request Your Free ${title} Artwork Proof`} subtitle="Artwork proof delivered within the hour. No commitment required." source="pro" />
    </div>
  );
}