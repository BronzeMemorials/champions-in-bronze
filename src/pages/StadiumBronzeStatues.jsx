import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductHero from "../components/shared/ProductHero";
import TrustBadges from "../components/shared/TrustBadges";
import FadeIn from "../components/shared/FadeIn";
import SEOHead from "../components/shared/SEOHead";

const FAQSection = lazy(() => import("../components/shared/FAQSection"));
const QuoteForm = lazy(() => import("../components/shared/QuoteForm"));

const heroImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/35f2fea4a_generated_46168e9a.png";

const faqs = [
  { question: "What structural considerations are required for stadium statues?", answer: "All outdoor stadium statues include full structural engineering — custom base design, seismic anchoring, wind load calculations, and corrosion-resistant mounting hardware. We coordinate directly with your facility engineering team." },
  { question: "What is the installation process?", answer: "We manage all logistics — delivery, crane coordination if needed, structural installation, and final patina touch-up. Most installations are completed in 1–2 days." },
  { question: "How long do outdoor bronze statues last?", answer: "Silicon bronze properly installed and maintained is rated 200+ years outdoors. We provide detailed care instructions and offer ongoing maintenance support." },
  { question: "Can you match existing bronze on our property?", answer: "Yes. Our patina artists can match virtually any existing bronze patina — from classic green verdigris to dark brown or warm amber. We provide patina samples before finalizing." },
];

export default function StadiumBronzeStatues() {
  return (
    <div className="bg-obsidian text-parchment">
      <SEOHead
        title="Stadium Bronze Statues & Legacy Installations | Champions in Bronze"
        description="Bronze statues and legacy installations for NFL stadiums, NCAA arenas, and athletic facilities. Life-size through heroic scale. Engineered for outdoor permanence."
        canonical="/stadium-bronze-statues"
      />

      <ProductHero
        image={heroImg}
        label="Stadium-Grade Installations"
        title="Stadium Bronze Statues & Legacy Plazas"
        subtitle="From entrance plazas welcoming 80,000 fans to intimate legacy corridors — bronze installations engineered for the demands of professional and collegiate athletic facilities."
        cta1="Request Concept Design"
        cta1Link="/request-concept-design"
        cta2="View Hall of Fame Work"
        cta2Link="/hall-of-fame-bronze-displays"
      />

      <TrustBadges />

      <section className="py-28 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img src={heroImg} alt="Stadium bronze installation" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Designed for Stadium Scale</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-tight text-parchment">
                Where Champions<br />Are Remembered.
              </h2>
              <p className="mt-6 text-parchment/60 text-lg leading-relaxed">
                Stadium entrances define first impressions. Legacy corridors inspire generations. Our bronze installations transform athletic facilities into permanent monuments to achievement.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  "NFL Stadium Experience", "NCAA Division I", "Arena Entrances", "Legacy Plazas",
                  "Fan Engagement Zones", "Championship Monuments", "Outdoor Rated 200yr", "Full Engineering Support",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                    <span className="font-sans text-sm text-parchment/60">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 mt-10">
                <Link to="/request-concept-design" className="inline-flex items-center gap-2 bg-bronze hover:bg-gold text-parchment px-8 py-4 font-sans text-sm uppercase tracking-[0.15em] font-semibold transition-all duration-300">
                  Discuss Your Project <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/custom-bronze-athlete-statues" className="inline-flex items-center gap-2 border border-bronze/40 hover:border-gold text-parchment/70 hover:text-parchment px-8 py-4 font-sans text-sm uppercase tracking-[0.15em] transition-all duration-300">
                  View Bronze Statues
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-bronze/10 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <p className="text-parchment/40 font-sans text-xs uppercase tracking-[0.3em] text-center mb-8">Related Collections</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: "Custom Bronze Statues", to: "/custom-bronze-athlete-statues" },
                { label: "Hall of Fame Displays", to: "/hall-of-fame-bronze-displays" },
                { label: "Donor Recognition", to: "/donor-recognition" },
                { label: "College Athletics", to: "/college-athletic-recognition" },
                { label: "Pricing Guide", to: "/bronze-statue-pricing" },
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
        <QuoteForm title="Design Your Stadium Legacy" subtitle="Tell us your vision. Full concept design and structural recommendation within 48 hours." source="pro" />
      </Suspense>
    </div>
  );
}