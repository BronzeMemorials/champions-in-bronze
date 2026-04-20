import { Link } from "react-router-dom";
import { ArrowRight, Shield, Award, Star, Zap } from "lucide-react";
import FadeIn from "../components/shared/FadeIn";
import SocialProofBar from "../components/shared/SocialProofBar";
import TrustBadges from "../components/shared/TrustBadges";
import ProcessTimeline from "../components/shared/ProcessTimeline";
import TestimonialCarousel from "../components/shared/TestimonialCarousel";
import QuoteForm from "../components/shared/QuoteForm";
import SectionHeading from "../components/shared/SectionHeading";

const statueImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/d74e93030_generated_7f57395d.png";
const plaqueImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/5b198cd19_generated_1a12a43b.png";
const reliefImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/4262e1b6f_generated_6dae4386.png";
const donorImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/ab5fbf767_generated_696960c2.png";
const foundryImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/35f2fea4a_generated_46168e9a.png";

const products = [
  {
    image: reliefImg,
    label: "Most Popular",
    title: "3D Bas Relief Plaques",
    desc: "Museum-quality three-dimensional portrait and action plaques cast in bronze or aluminum. Perfect for Hall of Fame inductees, award presentations, and permanent installations.",
    to: "/3d-relief-jersey-plaques",
    cta: "See Relief Plaques",
  },
  {
    image: statueImg,
    label: "Signature Work",
    title: "Bronze & Aluminum Statues",
    desc: "Life-size and heroic-scale figures hand-sculpted by master artists. Every muscle, every expression — captured forever in solid cast bronze or lightweight aluminum.",
    to: "/bronze-player-statues",
    cta: "See Statues",
  },
  {
    image: plaqueImg,
    label: "Championship",
    title: "Championship & Award Plaques",
    desc: "Commemorate titles, records, and milestones. Flat and raised-relief bronze plaques for trophies, locker rooms, stadium corridors, and donor recognition.",
    to: "/championship-bronze-plaques",
    cta: "See Plaques",
  },
  {
    image: donorImg,
    label: "Major Installations",
    title: "Donor Recognition Walls",
    desc: "Transform capital campaigns into permanent bronze landmarks. Modular systems designed to grow with your facility for decades.",
    to: "/stadium-donor-walls",
    cta: "See Donor Walls",
  },
];

const trust = [
  { icon: Zap, label: "48-Hour Artwork", sub: "Proof delivered fast" },
  { icon: Shield, label: "Lasts 100+ Years", sub: "Outdoor guaranteed" },
  { icon: Award, label: "Museum Quality", sub: "Hand-finished bronze" },
  { icon: Star, label: "Made in the USA", sub: "American foundry" },
];

export default function ProHome() {
  return (
    <div className="bg-obsidian text-parchment">

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={statueImg} alt="Life-size bronze statue" className="w-full h-full object-cover opacity-30 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/20 via-obsidian/65 to-obsidian" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 pt-32 pb-20">
          <FadeIn>
            <span className="text-gold font-sans tracking-[0.4em] uppercase text-xs font-semibold">
              America's Sports Bronze Foundry
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.92] mt-6 max-w-5xl">
              Immortalizing<br />
              <span className="text-bronze-light italic">Champions.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-xl md:text-2xl text-parchment/70 leading-relaxed font-sans font-light">
              3D bas relief plaques and life-size statues in bronze and aluminum —
              built to honor athletic greatness for the next century.
            </p>
            <div className="mt-12 flex flex-wrap gap-5">
              <Link to="/request-quote" className="bg-bronze hover:bg-gold text-parchment px-10 py-5 font-sans text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                Get Instant Price
              </Link>
              <Link to="/portfolio" className="border border-parchment/20 hover:border-gold text-parchment px-10 py-5 font-sans text-sm uppercase tracking-[0.2em] transition-all duration-300">
                View Portfolio
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Trust bar */}
      <div className="py-8 border-y border-bronze/20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trust.map((t, i) => (
              <FadeIn key={t.label} delay={i * 0.08}>
                <div className="flex items-center gap-3">
                  <t.icon className="w-5 h-5 text-gold flex-shrink-0" />
                  <div>
                    <p className="font-serif text-sm text-parchment font-semibold">{t.label}</p>
                    <p className="text-xs text-parchment/50">{t.sub}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      <SocialProofBar
        logos={["NFL", "MLB", "NBA", "NHL", "NCAA", "PGA"]}
        caption="Trusted by Franchises, Athletic Departments & Hall of Fame Committees Nationwide"
      />

      {/* Products Grid */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="What We Create"
            title="Sports Recognition in Bronze & Aluminum"
            subtitle="Every piece is individually sculpted, cast, hand-patined, and built to last outdoors for over 100 years."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((p, i) => (
              <FadeIn key={p.to} delay={i * 0.1}>
                <Link to={p.to} className="group relative aspect-[16/10] overflow-hidden block rounded-sm">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold/20 border border-gold/40 text-gold text-xs font-sans uppercase tracking-[0.15em] px-3 py-1">{p.label}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-serif text-2xl text-parchment group-hover:text-gold transition-colors duration-300">{p.title}</h3>
                    <p className="text-parchment/50 mt-2 text-sm max-w-md">{p.desc}</p>
                    <div className="flex items-center gap-2 mt-4 text-gold text-sm font-sans uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>{p.cta}</span><ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Bas Relief Feature */}
      <section className="py-28 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm group">
                <img src={reliefImg} alt="3D bas relief plaque" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-bronze/5 mix-blend-overlay" />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Our Core Specialty</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-tight text-parchment">
                3D Bas Relief —<br />The Gold Standard.
              </h2>
              <p className="mt-6 text-parchment/60 text-lg leading-relaxed">
                Unlike flat photo plaques, our 3D bas relief portraits are hand-sculpted from photographs, 
                capturing every dimension of a face or an athlete in action. The result is a living, 
                tactile work of art that commands attention on any wall.
              </p>
              <ul className="mt-8 space-y-3 border-l border-bronze/30 pl-6">
                {[
                  "Sculpted from photos — no in-person sessions needed",
                  "Available in bronze or aluminum",
                  "Custom borders: plain, sport-themed, or architectural",
                  "Indoor and outdoor rated — lasts 100+ years",
                  "Artwork proof in 48 hours",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <span className="w-2 h-2 bg-gold flex-shrink-0" />
                    <span className="font-sans text-sm text-parchment/70">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/3d-relief-jersey-plaques" className="inline-flex items-center gap-2 mt-10 bg-bronze hover:bg-gold text-parchment px-8 py-4 font-sans text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                See Relief Plaque Options <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Foundry Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={foundryImg} alt="Bronze foundry process" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-obsidian" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <FadeIn>
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">The Lost-Wax Process</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-tight text-parchment">
                Ancient Craft.<br />Modern Precision.
              </h2>
              <p className="mt-6 text-parchment/60 text-lg leading-relaxed">
                Every sculpture begins as clay under the hands of a master, undergoes silicon molding, 
                wax casting, ceramic shell coating, and finally — the pour. Molten bronze at 2,100°F 
                fills every contour, every muscle fiber, every expression.
              </p>
              <Link to="/process" className="inline-flex items-center gap-2 mt-10 bg-bronze hover:bg-gold text-parchment px-8 py-4 font-sans text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                See Our Process <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <ProcessTimeline />
      <TestimonialCarousel />
      <QuoteForm
        title="Get Your Instant Price"
        subtitle="Upload your project brief and we'll deliver artwork and pricing within 48 hours. We don't miss deadlines."
        source="pro"
      />
    </div>
  );
}