import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FadeIn from "../components/shared/FadeIn";
import SocialProofBar from "../components/shared/SocialProofBar";
import TrustBadges from "../components/shared/TrustBadges";
import ProcessTimeline from "../components/shared/ProcessTimeline";
import TestimonialCarousel from "../components/shared/TestimonialCarousel";
import QuoteForm from "../components/shared/QuoteForm";
import SectionHeading from "../components/shared/SectionHeading";

const hallImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/f9ff2eea2_1FD764A1-3FE3-43F7-B620-ECD28F936C38.png";
const donorImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/5c025f1df_9D2C184B-2F6D-44F3-8F73-DA9EF4C4B828.png";
const plaqueImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/f54e9ac4d_ED04FD70-945D-4463-AC78-050B841D9D0C.png";
const jerseyImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/90136d985_3987887D-191A-419C-B621-221DF36585E5.png";
const statueImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/fde18b17d_82360375-ACAD-438B-BC4F-F588D804FAFC.png";

const collegiateProducts = [
  {
    image: jerseyImg,
    label: "Most Requested",
    title: "3D Bas Relief Hall of Fame Plaques",
    desc: "Hand-sculpted portrait reliefs of your inductees. Created from photos — no in-person sessions needed. The definitive standard for collegiate Halls of Fame.",
    to: "/college-hall-of-fame-plaques",
  },
  {
    image: statueImg,
    label: "Landmark Pieces",
    title: "Campus & Facility Statues",
    desc: "Life-size and heroic-scale bronze or aluminum statues for stadium entrances, athletic centers, and campus landmarks that define program identity.",
    to: "/bronze-player-statues",
  },
  {
    image: donorImg,
    label: "Fundraising Driver",
    title: "Athletic Donor Recognition Walls",
    desc: "Modular bronze donor displays that inspire alumni giving. Facilities report 40%+ increases in donations after installation.",
    to: "/athletic-donor-walls",
  },
  {
    image: plaqueImg,
    label: "Campaigns",
    title: "Capital Campaign Recognition",
    desc: "Naming-rights plaques, building dedications, and campaign milestone markers — designed to close major gifts.",
    to: "/capital-campaign-recognition",
  },
];

const collegiateTestimonials = [
  { quote: "The 3D bas relief portraits in our Hall of Fame are extraordinary. Inductees and their families are moved to tears when they see themselves immortalized in bronze.", name: "Dr. Michael Torres", title: "Athletic Director, Division I University" },
  { quote: "Our donor wall has been the single greatest fundraising tool we've ever installed. Alumni see their names in bronze and want to be part of it.", name: "Patricia Lawson", title: "Associate AD, Power 5 Conference" },
  { quote: "Champions in Bronze delivered our campus statue on time for homecoming. The quality is on par with any monument I've seen at a professional stadium.", name: "Thomas Reeves", title: "VP of University Advancement" },
  { quote: "Artwork proof in 48 hours — as promised. The entire process from quote to installation was professional and seamless.", name: "Jennifer Huang", title: "Facilities Director, Big East University" },
];

export default function CollegiateHome() {
  return (
    <div className="bg-obsidian text-parchment">

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={hallImg} alt="College Hall of Fame" className="w-full h-full object-cover opacity-30 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/30 via-obsidian/60 to-obsidian" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 pt-32 pb-20">
          <FadeIn>
            <span className="text-gold font-sans tracking-[0.4em] uppercase text-xs font-semibold">
              Collegiate Athletic Recognition
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.92] mt-6 max-w-5xl">
              Preserve The<br />
              <span className="text-bronze-light italic">Brotherhood Forever.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-xl text-parchment/70 leading-relaxed font-sans font-light">
              Championships are remembered for generations because of the players, coaches, sacrifices, and moments that built the legacy together. Champions in Bronze transforms those historic achievements into permanent bronze recognition designed to honor the team, preserve the culture, and immortalize the era that defined greatness.
            </p>
            <div className="mt-12 flex flex-wrap gap-5">
              <Link to="/request-quote" className="bg-bronze hover:bg-gold text-parchment px-10 py-5 font-sans text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                Get Instant Price
              </Link>
              <Link to="/portfolio" className="border border-parchment/20 hover:border-gold text-parchment px-10 py-5 font-sans text-sm uppercase tracking-[0.2em] transition-all duration-300">
                View College Portfolio
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <SocialProofBar
        logos={["NCAA", "SEC", "BIG TEN", "ACC", "PAC-12", "BIG 12"]}
        caption="Trusted by Athletic Departments and Booster Clubs at Major Institutions"
      />

      <TrustBadges />

      <QuoteForm title="Request Your Free Artwork Proof" subtitle="Tell us about your collegiate program — we'll deliver a digital proof within the hour." source="edu" />

      {/* Products Grid */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Immortalize The Team That Made History"
            title="Preserve A Championship For Generations"
            subtitle="Champions in Bronze creates elite championship displays, Hall of Fame installations, donor recognition environments, and commemorative bronze plaques designed to preserve the brotherhood, sacrifice, tradition, and championship legacy that define unforgettable teams and historic athletic eras."
            align="center"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {collegiateProducts.map((p, i) => (
              <FadeIn key={p.to} delay={i * 0.1}>
                <Link to={p.to} className="group relative aspect-[16/10] overflow-hidden block rounded-sm">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold/20 border border-gold/40 text-gold text-xs font-sans uppercase tracking-[0.15em] px-3 py-1">{p.label}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-serif text-2xl text-parchment group-hover:text-gold transition-colors">{p.title}</h3>
                    <p className="text-parchment/50 mt-2 text-sm">{p.desc}</p>
                    <div className="flex items-center gap-2 mt-4 text-gold text-sm font-sans uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Learn More</span> <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 3D Relief Feature */}
      <section className="py-28 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <img src={jerseyImg} alt="3D bas relief Hall of Fame plaque" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Honor The Team Future Players Will Remember</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-tight text-parchment">
                Celebrate The Era<br />That Defined Greatness.
              </h2>
              <p className="mt-6 text-parchment/60 text-lg leading-relaxed">
                Most Hall of Fame displays use a framed photograph. Ours are hand-sculpted, three-dimensional bronze portraits — a tactile, permanent work of art that honors the athlete's entire career, not just a moment. Created entirely from photos, delivered in 48 hours.
              </p>
              <p className="mt-4 text-parchment/60 text-lg leading-relaxed">
                Preserve the legacy built together — the brotherhood, sacrifice, tradition, and championship culture that future players will look up to for generations.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6">
                {[
                  { stat: "48 hrs", label: "Artwork Proof" },
                  { stat: "100+", label: "Years Outdoor" },
                  { stat: "Bronze\nor Aluminum", label: "Material Options" },
                  { stat: "Any Size", label: "Any Shape" },
                ].map((item) => (
                  <div key={item.label} className="border border-bronze/20 p-4 rounded-sm text-center">
                    <p className="font-serif text-2xl text-gold">{item.stat}</p>
                    <p className="text-parchment/50 text-xs uppercase tracking-wider mt-1 font-sans">{item.label}</p>
                  </div>
                ))}
              </div>
              <Link to="/college-hall-of-fame-plaques" className="inline-flex items-center gap-2 mt-10 bg-bronze hover:bg-gold text-parchment px-8 py-4 font-sans text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                See Hall of Fame Options <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-secondary/20 border-y border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 text-center">
            {[
              { stat: "40%", label: "Increase in Donor Participation", desc: "Athletic departments report significant alumni giving increases after bronze recognition installation." },
              { stat: "200+", label: "Collegiate Installations", desc: "Halls of Fame, donor walls, and campus statues at universities across all 50 states." },
              { stat: "48 hrs", label: "Artwork Guarantee", desc: "Every project receives professional drawings and a proof within 48 hours. We don't miss deadlines." },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.1}>
                <span className="font-serif text-5xl md:text-6xl text-gold">{item.stat}</span>
                <h3 className="font-sans text-sm uppercase tracking-[0.2em] text-parchment mt-4 font-semibold">{item.label}</h3>
                <p className="text-parchment/50 mt-3 text-sm">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline />
      <QuoteForm title="Honor The Team That Changed History" subtitle="Preserve the brotherhood for generations. Museum-quality artwork proof delivered within the hour." source="edu" />
      <TestimonialCarousel testimonials={collegiateTestimonials} />
      <QuoteForm
        title="Immortalize A Legacy Bigger Than The Game"
        subtitle="Tell us about your program. Receive artwork and pricing within 48 hours. We don't miss deadlines."
        source="edu"
      />
    </div>
  );
}