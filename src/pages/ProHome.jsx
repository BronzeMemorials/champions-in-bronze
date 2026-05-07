import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ArrowRight, Camera } from "lucide-react";
import FadeIn from "../components/shared/FadeIn";
import SocialProofBar from "../components/shared/SocialProofBar";
import TrustBadges from "../components/shared/TrustBadges";
import SectionHeading from "../components/shared/SectionHeading";

const ProcessTimeline = lazy(() => import("../components/shared/ProcessTimeline"));
const TestimonialCarousel = lazy(() => import("../components/shared/TestimonialCarousel"));
const QuoteForm = lazy(() => import("../components/shared/QuoteForm"));

const statueImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/d74e93030_generated_7f57395d.png";
const plaqueImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/5b198cd19_generated_1a12a43b.png";
const reliefImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/4262e1b6f_generated_6dae4386.png";
const donorImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/ab5fbf767_generated_696960c2.png";
const imageCastImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/502c0767b_generated_e375b9ec.png";
const foundryImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/35f2fea4a_generated_46168e9a.png";

const products = [
  { image: reliefImg, label: "Most Popular", title: "3D Bas Relief Plaques", desc: "Sculpted from your actual photographs — exact likeness, not an interpretation. Every face, action pose, and expression captured in dimensional bronze.", to: "/3d-relief-plaques", cta: "See Relief Plaques" },
  { image: statueImg, label: "Signature Work", title: "Bronze & Aluminum Busts & Statues", desc: "Life-size and heroic-scale figures — portrait busts through full statues — created from your photos. Exact likeness of coaches, athletes, and legends.", to: "/busts-and-statues", cta: "See Statues & Busts" },
  { image: imageCastImg, label: "Proprietary", title: "Photo ImageCasting Plaques", desc: "Multiple photographs permanently cast into bronze. Career retrospectives, team history, championship moments — your real images, not drawings, cast forever.", to: "/photo-imagecast-plaques", cta: "See Photo ImageCasting" },
  { image: donorImg, label: "Major Installations", title: "Donor Recognition Walls", desc: "Transform capital campaigns into permanent bronze landmarks. Includes donor portrait Photo ImageCasting — a real photo of your donor, cast in bronze.", to: "/donor-recognition", cta: "See Donor Walls" },
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
              3D bas relief plaques, busts, statues, and Photo ImageCasting bronze — created from your actual photographs. Exact likeness. Museum quality. American made.
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

      <TrustBadges />

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
            subtitle="Every piece is sculpted from your actual photographs — exact photographic likeness, individually cast, hand-patinated, and built to last 100+ years outdoors."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((p, i) => (
              <FadeIn key={p.to} delay={i * 0.1}>
                <Link to={p.to} className="group relative aspect-[16/10] overflow-hidden block rounded-sm">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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

      {/* Photo ImageCasting Feature */}
      <section className="py-28 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm group">
                <img src={imageCastImg} alt="Photo ImageCasting bronze plaque" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-bronze/5 mix-blend-overlay" />
                <div className="absolute bottom-6 left-6">
                  <span className="bg-gold/20 border border-gold/40 text-gold text-xs font-sans uppercase tracking-[0.15em] px-3 py-1">Photo ImageCasting™</span>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex items-center gap-3 mb-4">
                <Camera className="w-5 h-5 text-gold" />
                <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Our Most Requested Innovation</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl mt-2 leading-tight text-parchment">
                Your Real Photos.<br />Cast Into Bronze.<br />Forever.
              </h2>
              <p className="mt-6 text-parchment/60 text-lg leading-relaxed">
                Photo ImageCasting is our proprietary process for permanently casting high-resolution photographs — including multi-photo collages — directly into bronze or aluminum. Career retrospectives, championship moments, team history.
              </p>
              <p className="mt-4 text-parchment/60 text-lg leading-relaxed font-medium text-parchment/80">
                Not an artist's interpretation. Your exact photographic image. Cast forever.
              </p>
              <ul className="mt-8 space-y-3 border-l border-bronze/30 pl-6">
                {[
                  "Any number of photos in one composition",
                  "Cast in bronze or aluminum — not printed, not engraved",
                  "Outdoor-rated 100+ years",
                  "Single portrait to 60-foot wall installations",
                  "Artwork proof in 48 hours",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <span className="w-2 h-2 bg-gold flex-shrink-0" />
                    <span className="font-sans text-sm text-parchment/70">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/photo-imagecast-plaques" className="inline-flex items-center gap-2 mt-10 bg-bronze hover:bg-gold text-parchment px-8 py-4 font-sans text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                See Photo ImageCasting <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3D Relief Feature */}
      <section className="py-28 border-t border-bronze/10 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn delay={0.2} direction="right">
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Core Specialty</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-tight text-parchment">
                3D Bas Relief —<br />Your Athlete's<br />Exact Likeness.
              </h2>
              <p className="mt-6 text-parchment/60 text-lg leading-relaxed">
                Unlike flat engraved plaques, our 3D bas relief portraits are hand-sculpted from the photographs you provide. Every feature of your athlete's face is captured — bone structure, expression, even the shape of their eyes. No in-person sessions. No guesswork.
              </p>
              <ul className="mt-8 space-y-3 border-l border-bronze/30 pl-6">
                {[
                  "Sculpted from your photos — true photographic likeness",
                  "Bronze or aluminum — any sport, any size",
                  "Sport-shaped options: home plate, pennant, jersey, and more",
                  "Artwork proof in 48 hours",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <span className="w-2 h-2 bg-gold flex-shrink-0" />
                    <span className="font-sans text-sm text-parchment/70">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/3d-relief-plaques" className="inline-flex items-center gap-2 mt-10 bg-bronze hover:bg-gold text-parchment px-8 py-4 font-sans text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                See Relief Plaque Options <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
            <FadeIn>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm group">
                <img src={reliefImg} alt="3D bas relief plaque" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-bronze/5 mix-blend-overlay" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Sports nav */}
      <section className="py-16 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">We Cover Every Sport</span>
            <h2 className="font-serif text-3xl mt-3 text-parchment mb-8">Browse by Sport</h2>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Football", to: "/football" },
              { label: "Basketball", to: "/basketball" },
              { label: "Baseball", to: "/baseball" },
              { label: "Hockey", to: "/hockey" },
              { label: "Soccer", to: "/soccer" },
              { label: "Lacrosse", to: "/lacrosse" },
              { label: "Golf", to: "/golf" },
              { label: "All Sports →", to: "/all-sports" },
            ].map((s) => (
              <Link key={s.to} to={s.to} className="font-sans text-xs uppercase tracking-[0.1em] px-5 py-2.5 border border-bronze/30 text-parchment/60 hover:border-gold hover:text-parchment transition-colors duration-200 rounded-sm">
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Foundry Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={foundryImg} alt="Bronze foundry process" loading="lazy" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/80 to-obsidian" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-2xl">
            <FadeIn>
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">The Lost-Wax Process</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-tight text-parchment">Ancient Craft.<br />Modern Precision.</h2>
              <p className="mt-6 text-parchment/60 text-lg leading-relaxed">
                Every sculpture begins as clay under the hands of a master, undergoes silicon molding, wax casting, ceramic shell coating, and finally — the pour. Molten bronze at 2,100°F fills every contour.
              </p>
              <Link to="/process" className="inline-flex items-center gap-2 mt-10 bg-bronze hover:bg-gold text-parchment px-8 py-4 font-sans text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                See Our Process <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <Suspense fallback={<div className="h-40" />}>
        <ProcessTimeline />
      </Suspense>
      <Suspense fallback={<div className="h-40" />}>
        <TestimonialCarousel />
      </Suspense>
      <Suspense fallback={<div className="h-40" />}>
      <QuoteForm
        title="Get Your Instant Price"
        subtitle="Upload your photos and project brief. Artwork and pricing within 48 hours. We don't miss deadlines."
        source="pro"
      />
      </Suspense>
    </div>
  );
}