import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Camera, Pencil, Hammer, Package, CheckCircle } from "lucide-react";
import FadeIn from "../components/shared/FadeIn";
import SEOHead from "../components/shared/SEOHead";

const QuoteForm = lazy(() => import("../components/shared/QuoteForm"));

const steps = [
  {
    icon: Camera,
    step: "01",
    title: "Submit Your Photos & Vision",
    desc: "Share high-resolution photographs of your subject, your vision for the pose and size, and your installation environment. The more detail, the better your proof.",
    duration: "Day 1",
  },
  {
    icon: Pencil,
    step: "02",
    title: "Receive Your Digital Sculpt Proof",
    desc: "Within 48 hours, our master sculptors deliver a detailed 3D digital proof — exact likeness from your photos, precise to your specifications. You approve before any physical work begins.",
    duration: "Within 48 Hours",
  },
  {
    icon: Hammer,
    step: "03",
    title: "Clay Sculpting & Casting",
    desc: "Upon approval, our sculptors begin full-scale clay work using the ancient lost-wax process. Every detail is hand-sculpted, molded in silicon, and cast in solid bronze or aluminum.",
    duration: "8–24 Weeks",
  },
  {
    icon: Package,
    step: "04",
    title: "Patina & Hand Finishing",
    desc: "Each piece is hand-patinated by our master finishers — custom color matching for any environment. Indoor warm amber, outdoor weathered verdigris, or any custom specification.",
    duration: "2–4 Weeks",
  },
  {
    icon: CheckCircle,
    step: "05",
    title: "Installation & Reveal",
    desc: "We coordinate all logistics — shipping, crane coordination, structural installation, and opening day reveal. Your legacy, installed perfectly.",
    duration: "Scheduled",
  },
];

export default function HowItWorks() {
  return (
    <div className="bg-obsidian text-parchment">
      <SEOHead
        title="How It Works — Bronze Sculpture Process | Champions in Bronze"
        description="From photos to bronze in 5 steps. Digital sculpt proof in 48 hours. Full production in 16–28 weeks. Learn the Champions in Bronze commission process."
        canonical="/how-it-works"
      />

      <section className="pt-36 pb-16 border-b border-bronze/10">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <span className="text-gold font-sans tracking-[0.4em] uppercase text-xs font-semibold">The Commission Process</span>
            <h1 className="font-serif text-5xl md:text-7xl mt-4 leading-tight text-parchment">
              From Photos<br />to Bronze.
            </h1>
            <p className="mt-6 text-parchment/60 text-xl leading-relaxed max-w-2xl">
              Five steps. 48-hour proof. Museum quality. Every commission follows our proven process — refined over decades of stadium, arena, and Hall of Fame installations.
            </p>
          </FadeIn>
        </div>
      </section>

      <QuoteForm title="Request Your Free Artwork Proof" subtitle="Tell us about your project — we'll deliver a digital proof within the hour." source="pro" />

      <section className="py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="space-y-20">
            {steps.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.1}>
                <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-16 items-start">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 border-2 border-bronze/40 rounded-sm flex items-center justify-center bg-secondary/30">
                      <step.icon className="w-6 h-6 text-gold" />
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px h-20 bg-gradient-to-b from-bronze/30 to-transparent hidden md:block" />
                    )}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="font-sans text-xs text-parchment/30 uppercase tracking-[0.3em]">Step {step.step}</span>
                      <span className="font-sans text-xs text-gold border border-gold/30 px-3 py-1 uppercase tracking-wider">{step.duration}</span>
                    </div>
                    <h2 className="font-serif text-3xl text-parchment">{step.title}</h2>
                    <p className="text-parchment/60 text-lg leading-relaxed mt-4">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <QuoteForm title="Get a Quote — Artwork Within The Hour" subtitle="No commitment required. Museum-quality artwork proof delivered fast." source="pro" />

      <section className="py-16 border-t border-bronze/10 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <p className="text-parchment/40 font-sans text-xs uppercase tracking-[0.3em] text-center mb-8">Explore Further</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: "Materials & Finishes", to: "/materials-finishes" },
                { label: "Pricing Guide", to: "/bronze-statue-pricing" },
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
        <QuoteForm title="Start Your Commission" subtitle="Share your project details. We deliver a digital proof within 48 hours." source="pro" />
      </Suspense>
    </div>
  );
}