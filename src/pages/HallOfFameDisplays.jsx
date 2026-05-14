import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductHero from "../components/shared/ProductHero";
import TrustBadges from "../components/shared/TrustBadges";
import FadeIn from "../components/shared/FadeIn";
import SEOHead from "../components/shared/SEOHead";

const FAQSection = lazy(() => import("../components/shared/FAQSection"));
const QuoteForm = lazy(() => import("../components/shared/QuoteForm"));

const heroImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/f9ff2eea2_1FD764A1-3FE3-43F7-B620-ECD28F936C38.png";

const faqs = [
  { question: "What goes into a complete Hall of Fame environment?", answer: "A full HOF installation typically includes portrait busts or relief plaques for each inductee, architectural signage, donor recognition panels, historical timeline displays, and trophy presentation areas. We design and produce all elements." },
  { question: "Can you renovate an existing Hall of Fame?", answer: "Yes. We specialize in both new installations and renovation of existing Hall of Fame environments — updating outdated displays to museum-quality bronze standards." },
  { question: "What size projects do you handle?", answer: "From a single inductee bust to 10,000 sq ft Hall of Fame environments. We have produced complete Hall of Fame corridors for NFL franchises, Division I universities, and professional arenas." },
  { question: "Do you handle project management?", answer: "Yes. We provide full project management from concept through installation — including architectural coordination, timeline management, and installation supervision." },
];

const elements = [
  { title: "Portrait Busts", desc: "Individual bronze busts for each inductee, custom-sized for your corridor." },
  { title: "3D Relief Plaques", desc: "High-depth sculptural plaques with career highlights and athletic imagery." },
  { title: "Photo Image Cast Panels", desc: "Real career photographs permanently cast into bronze — career retrospectives and team histories." },
  { title: "Recognition Walls", desc: "Large-format donor and supporter recognition bronze wall systems." },
  { title: "Architectural Signage", desc: "Dimensional bronze letters, logos, and brand identity elements." },
  { title: "Trophy Displays", desc: "Custom-designed trophy presentation cases and championship recognition systems." },
];

export default function HallOfFameDisplays() {
  return (
    <div className="bg-obsidian text-parchment">
      <SEOHead
        title="Hall of Fame Bronze Displays & Recognition Systems | Champions in Bronze"
        description="Complete Hall of Fame bronze environments — portrait busts, relief plaques, recognition walls, and architectural signage. Designed for NFL, NCAA, and professional sports facilities."
        canonical="/hall-of-fame-bronze-displays"
      />

      <ProductHero
        image={heroImg}
        label="Legacy Corridors · Recognition Systems"
        title="Hall of Fame Bronze Displays"
        subtitle="Complete Hall of Fame environments designed for sports franchises, universities, and athletic facilities. From individual inductee busts to full legacy corridors."
        cta1="Request Concept Design"
        cta1Link="/request-concept-design"
        cta2="View Bronze Busts"
        cta2Link="/bronze-athlete-busts"
      />

      <TrustBadges />

      <QuoteForm title="Request Your Free Artwork Proof" subtitle="Tell us about your Hall of Fame project — we'll deliver a digital proof within the hour." source="pro" />

      <section className="py-28 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Hall of Fame Elements</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-3 text-parchment">Everything Your Hall Deserves</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {elements.map((el, i) => (
              <FadeIn key={el.title} delay={i * 0.08}>
                <div className="border border-bronze/20 bg-secondary/30 p-8 rounded-sm hover:border-gold/40 transition-colors duration-300">
                  <p className="font-serif text-xl text-gold mb-3">{el.title}</p>
                  <p className="text-parchment/55 text-sm leading-relaxed">{el.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="py-16 border-t border-bronze/10 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <p className="text-parchment/40 font-sans text-xs uppercase tracking-[0.3em] text-center mb-8">Related Collections</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: "Portrait Busts", to: "/bronze-athlete-busts" },
                { label: "Bronze Statues", to: "/custom-bronze-athlete-statues" },
                { label: "3D Relief Plaques", to: "/3d-bas-relief-plaques" },
                { label: "Donor Recognition", to: "/donor-recognition" },
                { label: "Stadium Installations", to: "/stadium-bronze-statues" },
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

      <QuoteForm title="Get a Quote — Artwork Within The Hour" subtitle="No commitment required. Museum-quality artwork proof delivered fast." source="pro" />

      <Suspense fallback={<div className="h-40" />}>
        <FAQSection faqs={faqs} />
      </Suspense>
      <Suspense fallback={<div className="h-40" />}>
        <QuoteForm title="Design Your Hall of Fame" subtitle="Tell us about your Hall of Fame vision. Full concept design delivered within 48 hours." source="pro" />
      </Suspense>
    </div>
  );
}