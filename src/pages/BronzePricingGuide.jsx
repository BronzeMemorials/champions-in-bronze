import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import FadeIn from "../components/shared/FadeIn";
import SEOHead from "../components/shared/SEOHead";

import QuoteForm from "../components/shared/QuoteForm";

const factors = [
  "Pose complexity — action vs. portrait stance",
  "Number of reference photos available",
  "Material — silicon bronze vs. aluminum",
  "Finish — standard patina vs. custom gilded",
  "Base and pedestal design",
  "Outdoor structural engineering requirements",
  "Rush production timeline",
  "Quantity for multi-piece commissions",
];

export default function BronzePricingGuide() {
  return (
    <div className="bg-obsidian text-parchment">
      <SEOHead
        title="Custom Bronze Statue & Bust Quotes | Champions in Bronze"
        description="Every commission is unique. Request a custom quote for bronze statues, portrait busts, Hall of Fame plaques, and donor recognition walls. Artwork proof within the hour."
        canonical="/bronze-statue-pricing"
      />

      <section className="pt-36 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <span className="text-gold font-sans tracking-[0.4em] uppercase text-xs font-semibold">Custom Commissions</span>
            <h1 className="font-serif text-5xl md:text-7xl mt-4 leading-tight text-parchment">
              Every Commission<br />Is Custom.
            </h1>
            <p className="mt-6 text-parchment/60 text-xl leading-relaxed max-w-2xl">
              Bronze statues, portrait busts, Hall of Fame plaques, and donor recognition walls are all priced based on your specific project — size, scope, material, and timeline. Request a quote below and we'll deliver a full proposal and artwork proof within the hour.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/request-quote" className="inline-flex items-center gap-2 bg-bronze hover:bg-gold text-parchment px-8 py-4 font-sans text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                Request Your Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:7723090412" className="inline-flex items-center gap-2 border border-bronze/40 hover:border-gold text-parchment/70 hover:text-parchment px-8 py-4 font-sans text-sm uppercase tracking-[0.2em] transition-all duration-300">
                Call 772-309-0412
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Factors */}
      <section className="py-20 border-t border-bronze/10 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">What We Evaluate</span>
            <h2 className="font-serif text-3xl mt-3 text-parchment mb-10">What Influences Your Project Scope</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-4">
            {factors.map((f, i) => (
              <FadeIn key={f} delay={i * 0.06}>
                <div className="flex items-start gap-4 border border-bronze/20 bg-obsidian p-5 rounded-sm">
                  <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span className="font-sans text-sm text-parchment/65">{f}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <QuoteForm title="Request Your Custom Quote" subtitle="Every commission is unique. Share your project and receive a full proposal and artwork proof within the hour." source="pro" />
    </div>
  );
}