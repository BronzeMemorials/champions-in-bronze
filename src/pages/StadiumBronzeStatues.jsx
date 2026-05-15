import { Link } from "react-router-dom";
import { ArrowRight, Trophy, Users, Star, Shield, Landmark, Heart, Award } from "lucide-react";
import TrustBadges from "../components/shared/TrustBadges";
import FadeIn from "../components/shared/FadeIn";
import SEOHead from "../components/shared/SEOHead";
import SocialProofBar from "../components/shared/SocialProofBar";
import QuoteForm from "../components/shared/QuoteForm";
import FAQSection from "../components/shared/FAQSection";

const heroImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/f9ff2eea2_1FD764A1-3FE3-43F7-B620-ECD28F936C38.png";
const donorImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/5c025f1df_9D2C184B-2F6D-44F3-8F73-DA9EF4C4B828.png";
const plaqueImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/f54e9ac4d_ED04FD70-945D-4463-AC78-050B841D9D0C.png";
const statueImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/fde18b17d_82360375-ACAD-438B-BC4F-F588D804FAFC.png";
const jerseyImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/90136d985_3987887D-191A-419C-B621-221DF36585E5.png";

const offerings = [
  {
    image: statueImg,
    label: "Landmark Pieces",
    title: "Bronze & Aluminum Statues",
    desc: "Life-size through heroic-scale athlete statues for stadium entrances, plazas, and legacy corridors. Engineered to stand for 200+ years.",
    to: "/custom-bronze-athlete-statues",
  },
  {
    image: jerseyImg,
    label: "Hall of Fame",
    title: "Hall of Fame Displays",
    desc: "3D bas-relief portrait plaques, photo image cast inductee displays, and full Hall of Fame corridor installations that honor legends permanently.",
    to: "/hall-of-fame-bronze-displays",
  },
  {
    image: donorImg,
    label: "Recognition Walls",
    title: "Donor Recognition Walls",
    desc: "Modular bronze naming-rights environments and donor recognition walls that inspire generational giving and close major gifts.",
    to: "/donor-recognition",
  },
  {
    image: plaqueImg,
    label: "Championship History",
    title: "Championship & Commemorative Plaques",
    desc: "Championship banners cast in bronze, commemorative game plaques, retired number displays, and milestone markers that preserve history forever.",
    to: "/3d-relief-plaques",
  },
];

const pillars = [
  { icon: Landmark, title: "Create A Legendary Environment", desc: "Transform every entrance, corridor, and concourse into an immersive legacy experience that makes every visitor feel the weight of history." },
  { icon: Trophy, title: "Honor The Champions", desc: "Bronze statues, Hall of Fame displays, and championship installations that permanently celebrate the athletes and coaches who built the program." },
  { icon: Heart, title: "Inspire Recruits & Future Athletes", desc: "The facilities that win recruiting battles are the ones that feel legendary. A bronze legacy environment signals to recruits: this program is elite." },
  { icon: Users, title: "Recognize Donors & Build Culture", desc: "Naming-rights walls and donor recognition environments that close major gifts and create lifelong institutional loyalty." },
  { icon: Shield, title: "Preserve History Permanently", desc: "Silicon bronze rated for 200+ years outdoors. Your championship moments, your legends, your tradition — preserved forever." },
  { icon: Star, title: "Elevate Prestige & Identity", desc: "The most respected programs in the country have one thing in common: facilities that feel like hallowed ground. We build that." },
];

const stats = [
  { stat: "200+", label: "Stadium & Arena Installations", desc: "NFL, NCAA, and professional facilities across all 50 states." },
  { stat: "200yrs", label: "Outdoor Durability Rating", desc: "Silicon bronze engineered to outlast every athlete it honors." },
  { stat: "1 hr", label: "Artwork Proof Turnaround", desc: "Every project receives a museum-quality proof within the hour." },
];

const faqs = [
  { question: "What types of stadium installations do you create?", answer: "We create the full range of bronze recognition environments for athletic facilities: life-size and heroic-scale athlete statues, Hall of Fame corridor displays, donor recognition walls, championship plaques, commemorative game markers, retired number displays, and architectural bronze lettering. We handle everything from a single plaque to a full multi-zone legacy environment." },
  { question: "What structural considerations are required for stadium statues?", answer: "All outdoor stadium statues include full structural engineering — custom base design, seismic anchoring, wind load calculations, and corrosion-resistant mounting hardware. We coordinate directly with your facility engineering team." },
  { question: "How long does a stadium legacy project take?", answer: "Artwork proofs are delivered within the hour. Plaques and wall components are typically completed in 6–10 weeks. Full statue commissions range from 6–18 months depending on scope. We meet athletic department deadlines — homecoming installations, stadium openings, and ceremony unveilings." },
  { question: "How long do outdoor bronze installations last?", answer: "Silicon bronze properly installed and maintained is rated 200+ years outdoors. We provide detailed care instructions and offer ongoing maintenance support to ensure your installation looks exceptional for generations." },
  { question: "Can you match existing bronze on our property?", answer: "Yes. Our patina artists can match virtually any existing bronze patina — from classic green verdigris to dark brown or warm amber. We provide patina samples before finalizing." },
  { question: "Do you handle the full installation?", answer: "Yes. We manage all logistics — delivery, crane coordination if needed, structural installation, and final patina touch-up. Most plaque installations are completed in 1 day. Large statue installations are 1–3 days." },
];

export default function StadiumBronzeStatues() {
  return (
    <div className="bg-obsidian text-parchment">
      <SEOHead
        title="Stadium Bronze Legacy Installations | Champions in Bronze"
        description="Transform your stadium into legacy. Bronze statues, Hall of Fame displays, donor recognition walls, and championship installations for NFL and NCAA athletic facilities."
        canonical="/stadium-bronze-statues"
      />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Stadium legacy installation" className="w-full h-full object-cover opacity-25 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 via-obsidian/60 to-obsidian" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/90 via-obsidian/60 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 pt-32 pb-20">
          <FadeIn>
            <span className="text-gold font-sans tracking-[0.4em] uppercase text-xs font-semibold">
              Stadium & Arena Recognition
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.92] mt-6 max-w-5xl">
              Transform Your<br />
              <span className="text-bronze-light italic">Stadium Into Legacy.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-xl text-parchment/70 leading-relaxed font-sans font-light">
              The greatest stadiums are remembered not only for the games played inside them, but for the legacy, tradition, champions, and unforgettable moments they preserve for generations. Champions in Bronze creates premium architectural bronze recognition designed to honor greatness, celebrate history, inspire future athletes, and transform stadium environments into permanent symbols of championship culture.
            </p>
            <div className="mt-12 flex flex-wrap gap-5">
              <Link to="/request-concept-design" className="bg-bronze hover:bg-gold text-parchment px-10 py-5 font-sans text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                Request Concept Design
              </Link>
              <Link to="/portfolio" className="border border-parchment/20 hover:border-gold text-parchment px-10 py-5 font-sans text-sm uppercase tracking-[0.2em] transition-all duration-300">
                View Stadium Portfolio
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <SocialProofBar
        logos={["NFL", "NCAA", "NBA", "NHL", "MLS", "SEC", "BIG TEN", "ACC"]}
        caption="Trusted by Professional and Collegiate Athletic Facilities Nationwide"
      />

      <TrustBadges />

      <QuoteForm
        title="Build A Legacy Beyond The Game"
        subtitle="Tell us about your stadium vision — we'll deliver a full concept design and artwork proof within the hour."
        source="pro"
      />

      {/* EMOTIONAL POSITIONING */}
      <section className="py-28 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img src={statueImg} alt="Stadium bronze legacy" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">The Psychology Of A Legendary Facility</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-tight text-parchment">
                "We want this place<br />
                <span className="text-bronze-light italic">to feel legendary."</span>
              </h2>
              <p className="mt-6 text-parchment/60 text-lg leading-relaxed">
                Every athletic director, every head coach, every facility director we've ever worked with has said some version of that sentence. It's not really about plaques or statues. It's about creating an environment where athletes feel the weight of history — where recruits walk in and immediately understand that this program is elite, and where fans feel a deep, permanent emotional connection to the legacy of the teams they love.
              </p>
              <p className="mt-4 text-parchment/60 text-lg leading-relaxed">
                Champions in Bronze creates that feeling in bronze.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link to="/request-concept-design" className="inline-flex items-center gap-2 bg-bronze hover:bg-gold text-parchment px-8 py-4 font-sans text-sm uppercase tracking-[0.15em] font-semibold transition-all duration-300">
                  Start The Conversation <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* WHAT WE BUILD — FULL SHOWCASE */}
      <section className="py-28 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">The Full Stadium Legacy Suite</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 text-parchment">Celebrate Greatness<br />Throughout The Stadium</h2>
              <p className="mt-6 max-w-3xl mx-auto text-parchment/55 text-lg leading-relaxed">
                Champions in Bronze creates elite stadium recognition environments featuring Hall of Fame displays, donor recognition walls, championship installations, commemorative bronze plaques, athlete busts, and architectural legacy displays designed to transform athletic facilities into permanent monuments to greatness, tradition, and championship history.
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {offerings.map((p, i) => (
              <FadeIn key={p.to} delay={i * 0.1}>
                <Link to={p.to} className="group relative aspect-[16/10] overflow-hidden block rounded-sm">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold/20 border border-gold/40 text-gold text-xs font-sans uppercase tracking-[0.15em] px-3 py-1">{p.label}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-serif text-2xl text-parchment group-hover:text-gold transition-colors">{p.title}</h3>
                    <p className="text-parchment/50 mt-2 text-sm leading-relaxed">{p.desc}</p>
                    <div className="flex items-center gap-2 mt-4 text-gold text-sm font-sans uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Explore</span> <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHY STADIUMS CHOOSE US — 6 PILLARS */}
      <section className="py-28 border-t border-bronze/10 bg-secondary/10">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Honor The Tradition Behind The Program</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 text-parchment">Build A Stadium Legacy<br />For Generations</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <FadeIn key={pillar.title} delay={i * 0.08}>
                <div className="border border-bronze/20 bg-obsidian/50 p-8 rounded-sm h-full">
                  <div className="w-10 h-10 bg-gold/10 border border-gold/20 rounded-sm flex items-center justify-center mb-6">
                    <pillar.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-serif text-xl text-parchment mb-3">{pillar.title}</h3>
                  <p className="text-parchment/55 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 border-y border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 text-center">
            {stats.map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.1}>
                <span className="font-serif text-5xl md:text-6xl text-gold">{item.stat}</span>
                <h3 className="font-sans text-sm uppercase tracking-[0.2em] text-parchment mt-4 font-semibold">{item.label}</h3>
                <p className="text-parchment/50 mt-3 text-sm">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* RECRUITING ANGLE */}
      <section className="py-28 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn delay={0.2}>
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Impress Recruits. Inspire Athletes.</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-tight text-parchment">
                Preserve Championship<br />
                <span className="text-bronze-light italic">History Forever.</span>
              </h2>
              <p className="mt-6 text-parchment/60 text-lg leading-relaxed">
                When a recruit walks through your facility and sees bronze statues of the legends who came before them, championship plaques lining the corridor, and a Hall of Fame that tells the story of the program's greatness — they feel something. That feeling is what wins recruiting battles.
              </p>
              <p className="mt-4 text-parchment/60 text-lg leading-relaxed">
                The same environment that impresses recruits also inspires your current athletes to play harder, sacrifice more, and pursue the kind of legacy that earns their own place on that wall.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  "Recruiting Impact", "Championship Display", "Retired Numbers", "Legacy Corridors",
                  "Walk of Fame", "Donor Naming Rights", "Arena Entrances", "Outdoor Plazas",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full flex-shrink-0" />
                    <span className="font-sans text-sm text-parchment/60">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/request-concept-design" className="inline-flex items-center gap-2 mt-10 bg-bronze hover:bg-gold text-parchment px-8 py-4 font-sans text-sm uppercase tracking-[0.15em] font-semibold transition-all duration-300">
                Design Your Legacy Environment <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
            <FadeIn>
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img src={donorImg} alt="Stadium donor recognition wall" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FULL-WIDTH CTA BAND */}
      <section className="py-20 border-y border-bronze/20" style={{ background: "linear-gradient(135deg, #1a1208 0%, #2a1f0a 50%, #1a1208 100%)" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="text-gold font-sans tracking-[0.4em] uppercase text-xs font-semibold">Preserve The Moments Fans Remember Forever</span>
            <h2 className="font-serif text-4xl md:text-6xl mt-6 text-parchment leading-tight">
              Create A Championship<br />Legacy Environment.
            </h2>
            <p className="mt-6 text-parchment/60 text-lg leading-relaxed max-w-2xl mx-auto">
              One conversation. A full concept design delivered within the hour. No commitment required.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <Link to="/request-concept-design" className="bg-bronze hover:bg-gold text-parchment px-12 py-5 font-sans text-sm uppercase tracking-[0.25em] font-semibold transition-all duration-300">
                Request Concept Design
              </Link>
              <a href="tel:7723090412" className="border border-parchment/25 hover:border-gold text-parchment px-12 py-5 font-sans text-sm uppercase tracking-[0.2em] transition-all duration-300">
                Call 772-309-0412
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <QuoteForm
        title="Honor The Legends Who Built Greatness"
        subtitle="Tell us about your facility vision — artwork proof and concept design delivered within the hour."
        source="pro"
      />

      {/* RELATED */}
      <section className="py-16 border-t border-bronze/10 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <p className="text-parchment/40 font-sans text-xs uppercase tracking-[0.3em] text-center mb-8">Explore All Products</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: "Custom Bronze Statues", to: "/custom-bronze-athlete-statues" },
                { label: "Hall of Fame Displays", to: "/hall-of-fame-bronze-displays" },
                { label: "Donor Recognition", to: "/donor-recognition" },
                { label: "3D Relief Plaques", to: "/3d-relief-plaques" },
                { label: "Photo ImageCast Plaques", to: "/photo-imagecast-plaques" },
                { label: "College Athletics", to: "/college-athletic-recognition" },
                { label: "Busts & Statues", to: "/busts-and-statues" },
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

      <FAQSection faqs={faqs} />
      <QuoteForm
        title="Build A Stadium Worth Remembering"
        subtitle="Tell us your vision. Full concept design and artwork proof within the hour. We don't miss deadlines."
        source="pro"
      />
    </div>
  );
}