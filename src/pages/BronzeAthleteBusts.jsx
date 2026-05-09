import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductHero from "../components/shared/ProductHero";
import TrustBadges from "../components/shared/TrustBadges";
import FadeIn from "../components/shared/FadeIn";
import SEOHead from "../components/shared/SEOHead";

const FAQSection = lazy(() => import("../components/shared/FAQSection"));
const QuoteForm = lazy(() => import("../components/shared/QuoteForm"));

const heroImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/807fb8285_1EF9640F-BCCF-47C1-8ADB-FF7ACD382588.png";

const faqs = [
  { question: "What sizes are available for portrait busts?", answer: "We produce busts from 6\" tabletop scale through 36\" architectural scale. Most Hall of Fame commissions are 18\"–24\". Custom sizes available for any application." },
  { question: "Can a bust be created from historical photographs?", answer: "Yes. We regularly work with historical photographs, archival black-and-white images, and even low-resolution photography. Our sculptors are trained in historical reference research and photogrammetric reconstruction." },
  { question: "How long does a portrait bust take?", answer: "Digital sculpt proof within 48 hours. Full production typically 10–16 weeks depending on size and complexity." },
  { question: "Where are busts typically displayed?", answer: "Hall of Fame corridors, trophy rooms, athletic director offices, award ceremonies, boardrooms, athletic facilities, and private homes. We design for any environment." },
];

const formats = [
  { title: "6\" Tabletop Bust", range: "From $800", desc: "Award presentations, ceremonial gifts, and personal recognition. Perfect for Hall of Fame inductee ceremonies." },
  { title: "12\" Portrait Bust", range: "From $1,800", desc: "Standard recognition scale. Trophy room displays, office collections, and wall-mounted presentations." },
  { title: "18\" Display Bust", range: "From $3,500", desc: "Architectural display scale. Ideal for Hall of Fame corridors, reception lobbies, and permanent recognition walls." },
  { title: "24\"+ Bust", range: "Custom Quote", desc: "Monumental scale for major installations. Stadium lobbies, arena entrances, and landmark recognition environments." },
];

export default function BronzeAthleteBusts() {
  return (
    <div className="bg-obsidian text-parchment">
      <SEOHead
        title="Bronze Athlete Portrait Busts — Hall of Fame Quality | Champions in Bronze"
        description="Custom bronze portrait busts for Hall of Fame recognition, award ceremonies, and legacy displays. Exact photo likeness. Museum quality. Tabletop through architectural scale."
        canonical="/bronze-athlete-busts"
      />

      <ProductHero
        image={heroImg}
        label="Hall of Fame Quality"
        title="Bronze Athlete Portrait Busts"
        subtitle="Museum-quality portrait busts sculpted from your photographs — for Hall of Fame corridors, trophy rooms, award ceremonies, and legacy recognition."
        cta1="Request Concept Design"
        cta1Link="/request-concept-design"
        cta2="View Pricing"
        cta2Link="/bronze-statue-pricing"
      />

      <TrustBadges />

      <section className="py-28 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Available Formats</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-3 text-parchment">Portrait Bust Sizes & Pricing</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {formats.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.1}>
                <div className="border border-bronze/20 bg-secondary/30 p-8 rounded-sm flex flex-col">
                  <p className="font-serif text-2xl text-gold">{f.title}</p>
                  <p className="text-bronze-light font-serif text-lg mt-2">{f.range}</p>
                  <p className="text-parchment/55 text-sm mt-4 leading-relaxed flex-1">{f.desc}</p>
                  <Link to="/request-concept-design" className="inline-flex items-center gap-2 mt-6 text-gold text-xs font-sans uppercase tracking-widest hover:text-parchment transition-colors">
                    Request Quote <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 border-t border-bronze/10 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <p className="text-parchment/40 font-sans text-xs uppercase tracking-[0.3em] text-center mb-8">Related Collections</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: "Hall of Fame Displays", to: "/hall-of-fame-bronze-displays" },
                { label: "Custom Bronze Statues", to: "/custom-bronze-athlete-statues" },
                { label: "3D Bas-Relief Plaques", to: "/3d-bas-relief-plaques" },
                { label: "Donor Recognition", to: "/donor-recognition" },
                { label: "Full Pricing Guide", to: "/bronze-statue-pricing" },
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
        <QuoteForm title="Commission Your Portrait Bust" subtitle="Share your photos and we'll deliver a digital sculpt proof within 48 hours." source="pro" />
      </Suspense>
    </div>
  );
}