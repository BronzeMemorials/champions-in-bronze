import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FadeIn from "../components/shared/FadeIn";
import SocialProofBar from "../components/shared/SocialProofBar";
import TrustBadges from "../components/shared/TrustBadges";
import ProcessTimeline from "../components/shared/ProcessTimeline";
import TestimonialCarousel from "../components/shared/TestimonialCarousel";
import QuoteForm from "../components/shared/QuoteForm";
import SectionHeading from "../components/shared/SectionHeading";

const heroImage = "https://media.base44.com/images/public/69e6638934292a547ec97753/d74e93030_generated_7f57395d.png";
const donorWallImage = "https://media.base44.com/images/public/69e6638934292a547ec97753/ab5fbf767_generated_696960c2.png";
const lettersImage = "https://media.base44.com/images/public/69e6638934292a547ec97753/5574c762c_generated_64635338.png";
const plaqueImage = "https://media.base44.com/images/public/69e6638934292a547ec97753/5b198cd19_generated_1a12a43b.png";
const foundryImage = "https://media.base44.com/images/public/69e6638934292a547ec97753/35f2fea4a_generated_46168e9a.png";

const services = [
  {
    image: heroImage,
    title: "Life-Size Bronze Statues",
    desc: "Capturing the kinetic energy of greatness — hand-sculpted, cast in eternity.",
    to: "/bronze-player-statues",
  },
  {
    image: plaqueImage,
    title: "Championship Plaques",
    desc: "Commemorate titles, records, and milestones with museum-quality bronze.",
    to: "/championship-bronze-plaques",
  },
  {
    image: donorWallImage,
    title: "Stadium Donor Walls",
    desc: "Transform philanthropic visions into architectural bronze landmarks.",
    to: "/stadium-donor-walls",
  },
  {
    image: lettersImage,
    title: "Dimensional Metal Letters",
    desc: "Bold, precision-cast signage that commands attention at every entrance.",
    to: "/dimensional-metal-letters",
  },
];

export default function ProHome() {
  return (
    <div className="bg-obsidian text-parchment">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Life-size bronze statue at stadium" className="w-full h-full object-cover opacity-35 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/20 via-obsidian/60 to-obsidian" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 pt-32 pb-20">
          <FadeIn>
            <span className="text-gold font-sans tracking-[0.4em] uppercase text-xs font-semibold">
              America's Premier Bronze Foundry
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-[6.5rem] leading-[0.92] mt-6 max-w-5xl">
              Immortalizing<br />
              <span className="text-bronze-light italic">The Elite.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-xl md:text-2xl text-parchment/70 leading-relaxed font-sans font-light">
              We forge the physical legacy of sports history. From life-size bronze icons to
              stadium-scale donor walls — built for the next century.
            </p>
            <div className="mt-12 flex flex-wrap gap-5">
              <Link
                to="/request-quote"
                className="bg-bronze hover:bg-gold text-parchment px-10 py-5 font-sans text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300"
              >
                Start a Commission
              </Link>
              <Link
                to="/portfolio"
                className="border border-parchment/20 hover:border-gold text-parchment px-10 py-5 font-sans text-sm uppercase tracking-[0.2em] transition-all duration-300"
              >
                Explore the Gallery
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Social Proof */}
      <SocialProofBar
        logos={["NFL", "MLB", "NBA", "NHL", "MLS", "PGA"]}
        caption="Trusted by Ownership Groups and Hall of Fame Committees Nationwide"
      />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Services Grid */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="What We Create"
            title="Permanent Monuments to Athletic Greatness"
            subtitle="Every piece is custom-designed, hand-sculpted, and cast using the traditional lost-wax process — the same method used for millennia."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <FadeIn key={service.to} delay={i * 0.1}>
                <Link to={service.to} className="group relative aspect-[16/10] overflow-hidden block rounded-sm">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-serif text-2xl text-parchment group-hover:text-gold transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-parchment/50 mt-2 text-sm max-w-md">{service.desc}</p>
                    <div className="flex items-center gap-2 mt-4 text-gold text-sm font-sans uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Explore</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section — Statues */}
      <section className="py-28 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm group">
                <img
                  src={heroImage}
                  alt="Bronze player statue close-up"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-bronze/5 mix-blend-overlay" />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div>
                <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Sculptural Excellence</span>
                <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-tight text-parchment">
                  Life-Size Icons<br />Cast in Eternity.
                </h2>
                <p className="mt-6 text-parchment/60 text-lg leading-relaxed">
                  Our master sculptors capture the kinetic energy of the game — the tension of a
                  fastball, the grace of a touchdown catch — rendered in museum-quality cast bronze
                  that will endure for generations.
                </p>
                <ul className="mt-10 space-y-4 border-l border-bronze/30 pl-6">
                  {["Hand-Chiseled Details", "Weather-Resistant Patina", "Structural Engineering Included", "Full Installation Service"].map((item) => (
                    <li key={item} className="flex items-center gap-4">
                      <span className="w-2 h-2 bg-gold" />
                      <span className="font-sans uppercase text-sm tracking-widest text-parchment/70">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/bronze-player-statues"
                  className="inline-flex items-center gap-2 mt-12 text-gold border-b border-gold/40 pb-2 hover:border-gold transition-all font-sans text-sm uppercase tracking-widest"
                >
                  View Statue Portfolio <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Foundry Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={foundryImage} alt="Bronze foundry process" className="w-full h-full object-cover opacity-20" />
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
              <Link
                to="/production-process"
                className="inline-flex items-center gap-2 mt-10 bg-bronze hover:bg-gold text-parchment px-8 py-4 font-sans text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300"
              >
                See Our Process
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* Testimonials */}
      <TestimonialCarousel />

      {/* CTA Quote Form */}
      <QuoteForm
        title="Forge Your Legacy"
        subtitle="Upload your project brief. Receive shop drawings and a detailed proposal within 48 hours."
        source="pro"
      />
    </div>
  );
}