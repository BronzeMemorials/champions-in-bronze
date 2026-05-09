import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductHero from "../components/shared/ProductHero";
import TrustBadges from "../components/shared/TrustBadges";
import FadeIn from "../components/shared/FadeIn";
import SEOHead from "../components/shared/SEOHead";

const FAQSection = lazy(() => import("../components/shared/FAQSection"));
const QuoteForm = lazy(() => import("../components/shared/QuoteForm"));

const heroImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/d74e93030_generated_7f57395d.png";

const faqs = [
  { question: "How large can a custom bronze statue be?", answer: "We produce statues from 24\" portrait scale to 10-foot+ heroic monuments. Life-size (approximately 6 feet for a standing figure) is the most popular for stadium and campus installations." },
  { question: "How accurate is the athlete's likeness?", answer: "Exact. Our master sculptors use photogrammetric techniques to replicate every facial feature, athletic build, and signature pose from the photos you provide. Family members consistently describe the result as 'uncanny.'" },
  { question: "What is the lead time for a full statue?", answer: "Digital sculpt proof within 48 hours. Full production through casting and patina typically takes 16–28 weeks depending on size and complexity." },
  { question: "Can statues be installed outdoors?", answer: "Yes. Our silicon bronze statues are specifically engineered for outdoor environments and rated for 200+ year durability. We coordinate all structural and installation engineering." },
];

const positions = [
  { sport: "Football", poses: ["Passing stance", "Heisman pose", "Lineman set", "Receiving catch"] },
  { sport: "Basketball", poses: ["Shooting form", "Dunk position", "Defensive stance", "Championship raise"] },
  { sport: "Baseball", poses: ["Pitching windup", "Batting stance", "Fielding position", "Trophy hold"] },
  { sport: "Hockey", poses: ["Skating stride", "Slap shot", "Goalie save", "Trophy lift"] },
];

export default function CustomBronzeStatues() {
  return (
    <div className="bg-obsidian text-parchment">
      <SEOHead
        title="Custom Bronze Athlete Statues — Life-Size & Heroic Scale | Champions in Bronze"
        description="Custom life-size and heroic-scale bronze athlete statues for stadiums, universities, and Hall of Fame installations. Exact photo likeness. Museum quality. American made."
        canonical="/custom-bronze-athlete-statues"
      />

      <ProductHero
        image={heroImg}
        label="Signature Work · American Foundry"
        title="Custom Bronze Athlete Statues"
        subtitle="Life-size and heroic-scale bronze statues sculpted from your actual photographs. Exact athlete likeness — designed for stadium entrances, arena lobbies, and Hall of Fame installations."
        cta1="Request Concept Design"
        cta1Link="/request-concept-design"
        cta2="View Pricing Guide"
        cta2Link="/bronze-statue-pricing"
      />

      <TrustBadges />

      {/* Key Details */}
      <section className="py-28 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <div className="aspect-[3/4] overflow-hidden rounded-sm">
                <img src={heroImg} alt="Custom bronze athlete statue" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Exact Photo Likeness</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-tight text-parchment">
                Every Feature.<br />Every Detail.<br />Immortalized.
              </h2>
              <p className="mt-6 text-parchment/60 text-lg leading-relaxed">
                Our master sculptors use advanced photogrammetric techniques to replicate exact bone structure, muscle definition, facial features, and athletic stance — all from photographs you provide.
              </p>
              <ul className="mt-8 space-y-3 border-l border-bronze/30 pl-6">
                {[
                  "Sculpted from high-resolution photographs — no in-person sessions required",
                  "Silicon bronze or aluminum — indoor and outdoor rated",
                  "24\" tabletop through 10-foot+ heroic scale",
                  "Custom pose design — any sport, any moment",
                  "48-hour digital proof before any physical work begins",
                  "Full installation engineering and coordination",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <span className="w-1.5 h-1.5 bg-gold flex-shrink-0 rounded-full" />
                    <span className="font-sans text-sm text-parchment/65">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 mt-10">
                <Link to="/request-concept-design" className="inline-flex items-center gap-2 bg-bronze hover:bg-gold text-parchment px-8 py-4 font-sans text-sm uppercase tracking-[0.15em] font-semibold transition-all duration-300">
                  Start Your Commission <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/hall-of-fame-bronze-displays" className="inline-flex items-center gap-2 border border-bronze/40 hover:border-gold text-parchment/70 hover:text-parchment px-8 py-4 font-sans text-sm uppercase tracking-[0.15em] transition-all duration-300">
                  Hall of Fame Displays
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Sport Positions */}
      <section className="py-20 border-t border-bronze/10 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Any Sport. Any Pose.</span>
              <h2 className="font-serif text-4xl mt-3 text-parchment">Athletic Positions We Sculpt</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {positions.map((s, i) => (
              <FadeIn key={s.sport} delay={i * 0.08}>
                <div className="border border-bronze/20 bg-obsidian p-6 rounded-sm">
                  <p className="font-serif text-xl text-gold mb-4">{s.sport}</p>
                  <ul className="space-y-2">
                    {s.poses.map((pose) => (
                      <li key={pose} className="flex items-center gap-3">
                        <span className="w-1 h-1 bg-bronze rounded-full flex-shrink-0" />
                        <span className="font-sans text-sm text-parchment/55">{pose}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <p className="text-parchment/40 font-sans text-xs uppercase tracking-[0.3em] text-center mb-8">Related Collections</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: "Bronze Athlete Busts", to: "/bronze-athlete-busts" },
                { label: "Hall of Fame Displays", to: "/hall-of-fame-bronze-displays" },
                { label: "Stadium Installations", to: "/stadium-bronze-statues" },
                { label: "Donor Recognition", to: "/donor-recognition" },
                { label: "View Pricing", to: "/bronze-statue-pricing" },
              ].map((link) => (
                <Link key={link.to} to={link.to}
                  className="border border-bronze/25 hover:border-gold text-parchment/55 hover:text-parchment px-5 py-2.5 font-sans text-xs uppercase tracking-[0.1em] transition-colors duration-200 rounded-sm">
                  {link.label}
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <Suspense fallback={<div className="h-40" />}>
        <FAQSection faqs={faqs} />
      </Suspense>
      <Suspense fallback={<div className="h-40" />}>
        <QuoteForm title="Commission Your Bronze Statue" subtitle="Upload athlete photos and project details. Digital sculpt proof within 48 hours." source="pro" />
      </Suspense>
    </div>
  );
}