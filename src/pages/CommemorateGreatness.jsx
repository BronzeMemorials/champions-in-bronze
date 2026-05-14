import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FadeIn from "../components/shared/FadeIn";
import SEOHead from "../components/shared/SEOHead";

const QuoteForm = lazy(() => import("../components/shared/QuoteForm"));

const heroImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/d74e93030_generated_7f57395d.png";

const legacies = [
  {
    title: "The Athlete Who Changed Everything",
    desc: "Some athletes don't just win — they redefine what's possible. A life-size bronze statue ensures future generations understand exactly who stood on that field, in that arena, at that historic moment.",
    cta: "Commission a Statue",
    to: "/custom-bronze-athlete-statues",
  },
  {
    title: "The Coach Who Built a Dynasty",
    desc: "Coaches build more than teams — they build character, tradition, and legacy. A portrait bust or Hall of Fame installation honors the architect behind the wins.",
    cta: "View Portrait Busts",
    to: "/bronze-athlete-busts",
  },
  {
    title: "The Program That Defines a University",
    desc: "Athletic programs shape entire university identities. A Hall of Fame corridor, donor wall, and championship monument transform a facility into a permanent monument to program greatness.",
    cta: "View College Recognition",
    to: "/college-athletic-recognition",
  },
  {
    title: "The Donor Who Made It Possible",
    desc: "Behind every championship facility is a donor who believed first. Photo ImageCasting permanently places their image, name, and legacy in bronze — inspiring future generations of giving.",
    cta: "View Donor Recognition",
    to: "/donor-recognition",
  },
];

export default function CommemorateGreatness() {
  return (
    <div className="bg-obsidian text-parchment">
      <SEOHead
        title="Commemorate Greatness in Bronze | Champions in Bronze"
        description="Every legend deserves a permanent monument. Custom bronze sculptures for athletes, coaches, programs, and donors. Museum quality. Hall of Fame worthy. American made."
        canonical="/commemorate-greatness"
      />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Commemorate greatness in bronze" className="w-full h-full object-cover opacity-20 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-parchment/20 via-parchment/60 to-parchment/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-parchment/70 to-transparent" />
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10 pt-36 pb-28">
          <FadeIn>
            <span className="text-gold font-sans tracking-[0.5em] uppercase text-xs font-semibold">A Permanent Tribute</span>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-[7.5rem] leading-[0.88] mt-6 text-obsidian">
              Commemorate<br />
              <span className="text-bronze italic">Greatness.</span>
            </h1>
            <p className="mt-10 text-xl md:text-2xl text-obsidian/70 leading-relaxed max-w-2xl font-sans font-light">
              Not every achievement can be described in words. Some legacies demand permanence. Bronze is forever.
            </p>
            <div className="flex flex-wrap gap-4 mt-12">
              <Link to="/request-concept-design" className="bg-bronze hover:bg-gold text-parchment px-12 py-5 font-sans text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                Begin the Commission
              </Link>
              <Link to="/custom-bronze-athlete-statues" className="border border-parchment/20 hover:border-gold text-parchment px-12 py-5 font-sans text-sm uppercase tracking-[0.2em] transition-all duration-300">
                Explore Bronze Collections
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <QuoteForm title="Request Your Free Artwork Proof" subtitle="Tell us about your project — we'll deliver a digital proof within the hour." source="pro" />

      {/* Legacy Stories */}
      <section className="py-28 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Who Deserves Bronze</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-3 text-parchment">Every Legend Has a Story.<br />Only Bronze Tells It Forever.</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-8">
            {legacies.map((story, i) => (
              <FadeIn key={story.title} delay={i * 0.1}>
                <div className="border border-bronze/20 bg-secondary/30 p-10 rounded-sm hover:border-gold/40 transition-colors duration-300 flex flex-col">
                  <p className="font-serif text-2xl text-gold leading-tight">{story.title}</p>
                  <p className="text-parchment/55 text-base leading-relaxed mt-5 flex-1">{story.desc}</p>
                  <Link to={story.to} className="inline-flex items-center gap-2 mt-8 text-gold text-xs font-sans uppercase tracking-widest hover:text-parchment transition-colors">
                    {story.cta} <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-t border-bronze/10 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Stadium Installations" },
              { value: "200yr", label: "Bronze Durability" },
              { value: "48hr", label: "Proof Delivered" },
              { value: "100%", label: "Photo Likeness" },
            ].map((stat) => (
              <FadeIn key={stat.label}>
                <div>
                  <p className="font-serif text-5xl text-gold">{stat.value}</p>
                  <p className="font-sans text-xs text-parchment/40 uppercase tracking-[0.2em] mt-2">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <QuoteForm title="Get a Quote — Artwork Within The Hour" subtitle="No commitment required. Museum-quality artwork proof delivered fast." source="pro" />

      {/* Internal Links */}
      <section className="py-16 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <p className="text-parchment/40 font-sans text-xs uppercase tracking-[0.3em] text-center mb-8">Explore the Collections</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: "Custom Bronze Statues", to: "/custom-bronze-athlete-statues" },
                { label: "Portrait Busts", to: "/bronze-athlete-busts" },
                { label: "Hall of Fame Displays", to: "/hall-of-fame-bronze-displays" },
                { label: "Stadium Installations", to: "/stadium-bronze-statues" },
                { label: "3D Relief Plaques", to: "/3d-bas-relief-plaques" },
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
        <QuoteForm title="Commemorate Their Greatness" subtitle="Tell us the story. We'll deliver a concept design worthy of the legacy." source="pro" />
      </Suspense>
    </div>
  );
}