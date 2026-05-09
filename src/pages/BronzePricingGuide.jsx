import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import FadeIn from "../components/shared/FadeIn";
import SEOHead from "../components/shared/SEOHead";

const QuoteForm = lazy(() => import("../components/shared/QuoteForm"));

const busts = [
  { size: '6" Tabletop Bust', range: "$800–$1,800", indoor: true, outdoor: false, desc: "Award presentations, gift commissions, ceremonial recognition" },
  { size: '12" Portrait Bust', range: "$1,800–$4,500", indoor: true, outdoor: false, desc: "Trophy room displays, office collections, Hall of Fame walls" },
  { size: '18" Display Bust', range: "$3,500–$8,000", indoor: true, outdoor: true, desc: "Architectural display scale, reception lobbies, permanent HOF corridors" },
  { size: '24" Bust / Half Figure', range: "$7,500–$18,000", indoor: true, outdoor: true, desc: "Monumental recognition scale, arena lobbies, campus legacy displays" },
];

const statues = [
  { size: '24"–36" Portrait Statue', range: "$8,000–$18,000", indoor: true, outdoor: true, desc: "Desk and pedestal display scale, office and facility recognition" },
  { size: '48" Half-Figure', range: "$18,000–$35,000", indoor: true, outdoor: true, desc: "Architectural scale, locker room entrances, facility dedications" },
  { size: '60" Three-Quarter Figure', range: "$25,000–$55,000", indoor: true, outdoor: true, desc: "Premium recognition scale, stadium corridors, landmark displays" },
  { size: '72" Life-Size Figure', range: "$35,000–$75,000", indoor: true, outdoor: true, desc: "Full life-size recognition, stadium entrances, Hall of Fame lobbies" },
  { size: '84"–10\' Heroic Scale', range: "$75,000–$150,000+", indoor: false, outdoor: true, desc: "Heroic monument scale, stadium plazas, campus landmarks" },
];

const plaques = [
  { size: "Standard Relief Plaque (12\"×16\")", range: "$1,200–$2,500", desc: "Individual athlete recognition, award displays" },
  { size: "Large Relief Plaque (24\"×32\")", range: "$3,500–$7,500", desc: "Championship recognition, Hall of Fame displays" },
  { size: "Custom Shape Relief Plaque", range: "$4,500–$12,000", desc: "Sport-specific shapes — home plate, pennant, jersey" },
  { size: "Photo Image Cast Plaque", range: "$1,500–$8,000", desc: "Real photos permanently cast in bronze" },
  { size: "Donor Recognition Panel", range: "$3,000–$25,000+", desc: "Multi-donor recognition walls and panels" },
];

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
        title="Bronze Statue & Bust Pricing Guide | Champions in Bronze"
        description="Transparent pricing for custom bronze statues, portrait busts, and relief plaques. From $800 tabletop busts to $150,000+ heroic monuments. Request a custom quote."
        canonical="/bronze-statue-pricing"
      />

      <section className="pt-36 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <span className="text-gold font-sans tracking-[0.4em] uppercase text-xs font-semibold">Investment Guide</span>
            <h1 className="font-serif text-5xl md:text-7xl mt-4 leading-tight text-parchment">
              Transparent Pricing.<br />Zero Surprises.
            </h1>
            <p className="mt-6 text-parchment/60 text-xl leading-relaxed max-w-2xl">
              Every commission is custom. These ranges reflect typical projects — complexity, size, material, and timeline all influence final investment. Request a precise quote within 48 hours.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Busts */}
      <section className="py-20 border-t border-bronze/10">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Portrait Busts</span>
            <h2 className="font-serif text-3xl md:text-4xl mt-3 text-parchment mb-10">Bust Investment Ranges</h2>
          </FadeIn>
          <div className="space-y-4">
            {busts.map((item, i) => (
              <FadeIn key={item.size} delay={i * 0.06}>
                <div className="border border-bronze/20 bg-secondary/30 p-6 rounded-sm grid md:grid-cols-4 gap-4 items-center hover:border-gold/30 transition-colors duration-300">
                  <div className="md:col-span-1">
                    <p className="font-serif text-lg text-parchment">{item.size}</p>
                    <div className="flex gap-2 mt-2">
                      {item.indoor && <span className="text-xs font-sans text-parchment/40 border border-bronze/20 px-2 py-0.5 rounded-sm">Indoor</span>}
                      {item.outdoor && <span className="text-xs font-sans text-parchment/40 border border-bronze/20 px-2 py-0.5 rounded-sm">Outdoor</span>}
                    </div>
                  </div>
                  <div className="md:col-span-1">
                    <p className="font-serif text-2xl text-gold">{item.range}</p>
                  </div>
                  <div className="md:col-span-1">
                    <p className="text-parchment/50 text-sm">{item.desc}</p>
                  </div>
                  <div className="md:col-span-1 md:text-right">
                    <Link to="/request-concept-design" className="inline-flex items-center gap-2 text-gold text-xs font-sans uppercase tracking-widest hover:text-parchment transition-colors">
                      Get Quote <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div className="mt-6 text-center">
              <Link to="/bronze-athlete-busts" className="inline-flex items-center gap-2 text-gold/60 text-xs font-sans uppercase tracking-widest hover:text-gold transition-colors">
                View All Bust Options <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Statues */}
      <section className="py-20 border-t border-bronze/10 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Full Statues</span>
            <h2 className="font-serif text-3xl md:text-4xl mt-3 text-parchment mb-10">Statue Investment Ranges</h2>
          </FadeIn>
          <div className="space-y-4">
            {statues.map((item, i) => (
              <FadeIn key={item.size} delay={i * 0.06}>
                <div className="border border-bronze/20 bg-obsidian p-6 rounded-sm grid md:grid-cols-4 gap-4 items-center hover:border-gold/30 transition-colors duration-300">
                  <div className="md:col-span-1">
                    <p className="font-serif text-lg text-parchment">{item.size}</p>
                    <div className="flex gap-2 mt-2">
                      {item.indoor && <span className="text-xs font-sans text-parchment/40 border border-bronze/20 px-2 py-0.5 rounded-sm">Indoor</span>}
                      {item.outdoor && <span className="text-xs font-sans text-parchment/40 border border-bronze/20 px-2 py-0.5 rounded-sm">Outdoor</span>}
                    </div>
                  </div>
                  <div className="md:col-span-1">
                    <p className="font-serif text-2xl text-gold">{item.range}</p>
                  </div>
                  <div className="md:col-span-1">
                    <p className="text-parchment/50 text-sm">{item.desc}</p>
                  </div>
                  <div className="md:col-span-1 md:text-right">
                    <Link to="/request-concept-design" className="inline-flex items-center gap-2 text-gold text-xs font-sans uppercase tracking-widest hover:text-parchment transition-colors">
                      Get Quote <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div className="mt-6 text-center">
              <Link to="/custom-bronze-athlete-statues" className="inline-flex items-center gap-2 text-gold/60 text-xs font-sans uppercase tracking-widest hover:text-gold transition-colors">
                View All Statue Options <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Plaques */}
      <section className="py-20 border-t border-bronze/10">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Plaques & Recognition</span>
            <h2 className="font-serif text-3xl md:text-4xl mt-3 text-parchment mb-10">Plaque Investment Ranges</h2>
          </FadeIn>
          <div className="space-y-4">
            {plaques.map((item, i) => (
              <FadeIn key={item.size} delay={i * 0.06}>
                <div className="border border-bronze/20 bg-secondary/30 p-6 rounded-sm grid md:grid-cols-3 gap-4 items-center hover:border-gold/30 transition-colors duration-300">
                  <p className="font-serif text-lg text-parchment">{item.size}</p>
                  <p className="font-serif text-2xl text-gold">{item.range}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-parchment/50 text-sm">{item.desc}</p>
                    <Link to="/request-concept-design" className="inline-flex items-center gap-1 text-gold text-xs font-sans uppercase tracking-widest hover:text-parchment transition-colors ml-4 flex-shrink-0">
                      Quote <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Factors */}
      <section className="py-20 border-t border-bronze/10 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Pricing Factors</span>
            <h2 className="font-serif text-3xl mt-3 text-parchment mb-10">What Influences Your Investment</h2>
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

      <Suspense fallback={<div className="h-40" />}>
        <QuoteForm title="Get Your Custom Quote" subtitle="Every commission is unique. Share your project and receive precise pricing within 48 hours." source="pro" />
      </Suspense>
    </div>
  );
}