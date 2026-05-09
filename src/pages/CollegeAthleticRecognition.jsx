import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductHero from "../components/shared/ProductHero";
import TrustBadges from "../components/shared/TrustBadges";
import FadeIn from "../components/shared/FadeIn";
import SEOHead from "../components/shared/SEOHead";

const FAQSection = lazy(() => import("../components/shared/FAQSection"));
const QuoteForm = lazy(() => import("../components/shared/QuoteForm"));

const heroImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/ab5fbf767_generated_696960c2.png";

const faqs = [
  { question: "How does your work support donor-funded athletic programs?", answer: "Donor recognition walls with Photo ImageCasting of major donors — including their portraits cast permanently in bronze — significantly increase giving. We design donor walls that motivate multi-year and estate commitments." },
  { question: "Can you work within university procurement processes?", answer: "Yes. We have extensive experience working within university procurement requirements, including RFP responses, Board approval presentations, and facility management coordination." },
  { question: "Do you work with boosters and alumni associations?", answer: "Absolutely. Many of our commissions are funded and managed through booster clubs or alumni associations. We provide detailed project documentation and budget transparency required for these organizations." },
  { question: "What Division I schools have you worked with?", answer: "We've completed projects for programs across major athletic conferences — football, basketball, baseball, and multi-sport facilities. References available upon request." },
];

const programs = [
  { title: "Athletic Director Offices", desc: "Legacy displays, portrait busts, and championship recognition for the heart of your athletic department." },
  { title: "Football Facilities", desc: "Stadium entrance statues, locker room displays, and Hall of Fame corridors for major programs." },
  { title: "Basketball Arenas", desc: "Arena lobby installations, retired number displays, and inductee portrait collections." },
  { title: "Multi-Sport Complexes", desc: "Coordinated bronze recognition systems across all varsity sports facilities." },
  { title: "Donor Recognition", desc: "Capital campaign donor walls with Photo ImageCasting — your donors' faces, cast in bronze." },
  { title: "Legacy Corridors", desc: "Complete Hall of Fame and legacy corridor environments honoring program history." },
];

export default function CollegeAthleticRecognition() {
  return (
    <div className="bg-obsidian text-parchment">
      <SEOHead
        title="College Athletic Recognition — Division I Bronze Installations | Champions in Bronze"
        description="Custom bronze recognition systems for Division I athletic programs. Statues, Hall of Fame displays, donor walls, and legacy corridors. Designed for NCAA facilities."
        canonical="/college-athletic-recognition"
      />

      <ProductHero
        image={heroImg}
        label="Division I Athletic Programs"
        title="College Athletic Recognition in Bronze"
        subtitle="Bronze recognition systems designed for Division I athletic programs — from Hall of Fame corridors to donor recognition walls, stadium installations, and championship monuments."
        cta1="Request Concept Design"
        cta1Link="/request-concept-design"
        cta2="View Donor Recognition"
        cta2Link="/donor-recognition"
      />

      <TrustBadges />

      <section className="py-28 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Athletic Program Solutions</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-3 text-parchment">Every Facility. Every Sport.</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.08}>
                <div className="border border-bronze/20 bg-secondary/30 p-8 rounded-sm hover:border-gold/40 transition-colors duration-300">
                  <p className="font-serif text-xl text-gold mb-3">{p.title}</p>
                  <p className="text-parchment/55 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-bronze/10 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <p className="text-parchment/40 font-sans text-xs uppercase tracking-[0.3em] text-center mb-8">Related Collections</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: "Hall of Fame Displays", to: "/hall-of-fame-bronze-displays" },
                { label: "Donor Recognition", to: "/donor-recognition" },
                { label: "Stadium Installations", to: "/stadium-bronze-statues" },
                { label: "Bronze Statues", to: "/custom-bronze-athlete-statues" },
                { label: "Portrait Busts", to: "/bronze-athlete-busts" },
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
        <QuoteForm title="Elevate Your Athletic Program" subtitle="Tell us about your program. We'll design a bronze recognition plan within 48 hours." source="pro" />
      </Suspense>
    </div>
  );
}