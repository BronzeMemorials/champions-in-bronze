import FadeIn from "../components/shared/FadeIn";
import QuoteForm from "../components/shared/QuoteForm";
import { Link } from "react-router-dom";
import SEOHead from "../components/shared/SEOHead";

const materials = [
  {
    name: "Silicon Bronze",
    alloy: "97% Copper, 3% Silicon",
    color: "Warm Amber",
    use: "Statues, plaques, architectural",
    desc: "Our most popular alloy. Exceptional fluidity for fine detail, superior corrosion resistance, and the classic warm amber tone associated with outdoor monuments.",
  },
  {
    name: "Architectural Bronze",
    alloy: "57% Copper, 40% Zinc, 3% Lead",
    color: "Deep Golden Brown",
    use: "Letters, frames, doors",
    desc: "The standard for architectural applications. Machines and finishes beautifully, offering the deep golden-brown tone seen on historic buildings and institutional facades.",
  },
  {
    name: "Statuary Bronze",
    alloy: "85% Copper, 5% Tin, 5% Zinc, 5% Lead",
    color: "Rich Reddish Brown",
    use: "Portrait busts, figures",
    desc: "The traditional sculptural alloy used in fine art bronze casting for centuries. Captures the finest surface detail and develops a rich, deep patina over time.",
  },
];

const patinas = [
  { name: "Natural Oxidation", hex: "#6B4423", desc: "The classic dark brown-black finish. Applied with chemicals then sealed. Low maintenance, timeless appearance." },
  { name: "French Brown", hex: "#8C5E3C", desc: "A warm medium brown with golden undertones. The most versatile patina for indoor and outdoor applications." },
  { name: "Statuary Bronze", hex: "#A07850", desc: "A lighter, warmer tone revealing the natural copper color. Elegant for portrait and figure work." },
  { name: "Verde Antique", hex: "#5B7C5E", desc: "The classic green patina of aged outdoor bronzes. Develops naturally outdoors or can be chemically applied." },
  { name: "Florentine", hex: "#3D2B1F", desc: "Deep, nearly black with dark brown tones. Dramatic and formal. Popular for stadium installations." },
  { name: "Custom", hex: "#D4A017", desc: "We match any target color with custom chemical patina blends. Provide a reference image or Pantone code." },
];

export default function MaterialsFinishes() {
  return (
    <div className="bg-obsidian text-parchment pt-20">
      <SEOHead
        title="Bronze Alloys & Patina Finishes — Silicon Bronze, Architectural Bronze & Statuary Bronze | Champions in Bronze"
        description="Compare silicon bronze, architectural bronze, and statuary bronze alloys for plaques, busts, and statues. Explore patina finish options including natural oxidation, French brown, verde antique, and custom colors."
        canonical="/materials"
      />
      {/* Hero */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">The Science</span>
            <h1 className="font-serif text-5xl md:text-7xl mt-4 text-parchment">Materials & Finishes</h1>
            <p className="mt-6 text-parchment/60 text-xl leading-relaxed">
              The alloy determines the casting quality. The patina determines the legacy. 
              Understanding both helps you commission exactly the right piece.
            </p>
          </FadeIn>
        </div>
      </section>

      <QuoteForm title="Request Your Free Artwork Proof" subtitle="Tell us about your project — we'll deliver a digital proof within the hour." source="pro" />

      {/* Alloys */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="mb-16">
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Bronze Alloys</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-3 text-parchment">Which Alloy is Right for You?</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {materials.map((m, i) => (
              <FadeIn key={m.name} delay={i * 0.1}>
                <div className="border border-bronze/15 bg-secondary/30 p-8 rounded-sm h-full">
                  <h3 className="font-serif text-2xl text-parchment">{m.name}</h3>
                  <p className="text-gold text-xs font-sans tracking-[0.2em] uppercase mt-2">{m.alloy}</p>
                  <div className="mt-6 space-y-3">
                    <div className="flex gap-4">
                      <span className="text-parchment/40 text-xs uppercase tracking-wider font-sans w-16 flex-shrink-0">Color</span>
                      <span className="text-parchment/80 text-sm">{m.color}</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="text-parchment/40 text-xs uppercase tracking-wider font-sans w-16 flex-shrink-0">Best For</span>
                      <span className="text-parchment/80 text-sm">{m.use}</span>
                    </div>
                  </div>
                  <p className="text-parchment/50 text-sm leading-relaxed mt-6">{m.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Patinas */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="mb-16">
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Patina Options</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-3 text-parchment">Choose Your Finish</h2>
              <p className="mt-4 text-parchment/60 text-lg max-w-2xl">
                Patina is applied through a controlled chemical process, then sealed for decades of durability.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {patinas.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.08}>
                <div className="border border-bronze/15 bg-secondary/30 p-6 rounded-sm">
                  <div className="w-full h-16 rounded-sm mb-4" style={{ backgroundColor: p.hex }} />
                  <h3 className="font-serif text-lg text-parchment">{p.name}</h3>
                  <p className="text-parchment/50 text-sm leading-relaxed mt-2">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <QuoteForm title="Get a Quote — Artwork Within The Hour" subtitle="No commitment required. Museum-quality artwork proof delivered fast." source="pro" />

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-serif text-4xl text-parchment">Not Sure Which to Choose?</h2>
            <p className="text-parchment/60 mt-4 text-lg">Our team recommends the optimal alloy and patina based on your application, environment, and aesthetic goals.</p>
            <Link to="/request-quote" className="inline-flex mt-8 bg-bronze hover:bg-gold text-parchment px-10 py-5 font-sans text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300">
              Talk to an Expert
            </Link>
          </FadeIn>
        </div>
      </section>

      <QuoteForm title="Start Your Recognition Project Today" subtitle="Trusted by universities, stadiums, and Hall of Fame programs nationwide." source="pro" />
    </div>
  );
}