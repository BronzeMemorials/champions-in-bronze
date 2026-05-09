import { Link } from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import FadeIn from "../components/shared/FadeIn";
import TrustBadges from "../components/shared/TrustBadges";
import SectionHeading from "../components/shared/SectionHeading";
import SEOHead from "../components/shared/SEOHead";

const ProcessTimeline = lazy(() => import("../components/shared/ProcessTimeline"));
const TestimonialCarousel = lazy(() => import("../components/shared/TestimonialCarousel"));
const QuoteForm = lazy(() => import("../components/shared/QuoteForm"));
const FAQSection = lazy(() => import("../components/shared/FAQSection"));

const heroSlides = [
  {
    img: "https://media.base44.com/images/public/69e6638934292a547ec97753/fde18b17d_82360375-ACAD-438B-BC4F-F588D804FAFC.png",
    label: "Life-Size Bronze Statues",
    title: "Commemorate\nGreatness\nin Bronze.",
  },
  {
    img: "https://media.base44.com/images/public/69e6638934292a547ec97753/807fb8285_1EF9640F-BCCF-47C1-8ADB-FF7ACD382588.png",
    label: "Portrait Busts & Hall of Fame",
    title: "Immortalize\nthe Legend.",
  },
  {
    img: "https://media.base44.com/images/public/69e6638934292a547ec97753/90136d985_3987887D-191A-419C-B621-221DF36585E5.png",
    label: "3D Bas-Relief Plaques",
    title: "Permanent\nRecognition.",
  },
  {
    img: "https://media.base44.com/images/public/69e6638934292a547ec97753/5c025f1df_9D2C184B-2F6D-44F3-8F73-DA9EF4C4B828.png",
    label: "Donor Recognition Walls",
    title: "Legacy Cast\nin Bronze.",
  },
];

const products = [
  {
    image: "https://media.base44.com/images/public/69e6638934292a547ec97753/fde18b17d_82360375-ACAD-438B-BC4F-F588D804FAFC.png",
    label: "Signature Work",
    title: "Custom Bronze Athlete Statues",
    desc: "Life-size and heroic-scale figures for stadium entrances, arena lobbies, and campus landmarks. Every statue sculpted from your photographs — exact athletic likeness.",
    to: "/custom-bronze-athlete-statues",
    cta: "View Statues",
  },
  {
    image: "https://media.base44.com/images/public/69e6638934292a547ec97753/807fb8285_1EF9640F-BCCF-47C1-8ADB-FF7ACD382588.png",
    label: "Hall of Fame Quality",
    title: "Portrait Busts & Hall of Fame",
    desc: "Museum-quality portrait busts for Hall of Fame corridors, trophy rooms, and legacy displays. Tabletop through architectural scale.",
    to: "/bronze-athlete-busts",
    cta: "View Busts",
  },
  {
    image: "https://media.base44.com/images/public/69e6638934292a547ec97753/90136d985_3987887D-191A-419C-B621-221DF36585E5.png",
    label: "Most Requested",
    title: "3D Bas-Relief Plaques",
    desc: "High-depth sculptural plaques capturing exact athlete likeness from photographs. Sport-specific shapes. Stadium recognition. Championship moments.",
    to: "/3d-bas-relief-plaques",
    cta: "View Relief Plaques",
  },
  {
    image: "https://media.base44.com/images/public/69e6638934292a547ec97753/f54e9ac4d_ED04FD70-945D-4463-AC78-050B841D9D0C.png",
    label: "Proprietary Process",
    title: "Photo Image Cast Plaques",
    desc: "Real photographs permanently cast into bronze. Career retrospectives, team histories, and championship moments — your exact images, not drawings, cast forever.",
    to: "/photo-image-casting-plaques",
    cta: "View Photo Cast",
  },
  {
    image: "https://media.base44.com/images/public/69e6638934292a547ec97753/5c025f1df_9D2C184B-2F6D-44F3-8F73-DA9EF4C4B828.png",
    label: "Major Installations",
    title: "Donor Recognition Walls",
    desc: "Transform capital campaigns into permanent bronze landmarks. Donor portrait Photo ImageCasting included — your donor's face, cast in bronze forever.",
    to: "/donor-recognition",
    cta: "View Donor Walls",
  },
  {
    image: "https://media.base44.com/images/public/69e6638934292a547ec97753/f9ff2eea2_1FD764A1-3FE3-43F7-B620-ECD28F936C38.png",
    label: "Stadium Grade",
    title: "Stadium Legacy Installations",
    desc: "From entrance plazas to Hall of Fame corridors — full-scale bronze recognition environments designed for stadiums, arenas, and athletic facilities.",
    to: "/stadium-bronze-statues",
    cta: "View Stadium Work",
  },
];

const bustTypes = [
  {
    label: "Standard Hall of Fame Bust",
    img: "https://media.base44.com/images/public/69e6638934292a547ec97753/e7e3d4658_1E91D5BC-3065-45C0-97D6-B3B73A69B147.png",
  },
  {
    label: "Athlete Portrait Bust",
    img: "https://media.base44.com/images/public/69e6638934292a547ec97753/44848d9d9_482FCAAE-ECB5-4353-8F76-83047C14293B.png",
  },
  {
    label: "Coach Bust",
    img: "https://media.base44.com/images/public/69e6638934292a547ec97753/876a41f00_97391964-07D6-489A-9205-582199971031.png",
  },
  {
    label: "Championship Bust",
    img: "https://media.base44.com/images/public/69e6638934292a547ec97753/39c3cd6df_7478CDCB-3379-4806-A3C1-5217AE403299.png",
  },
  {
    label: "Stadium Donor Bust",
    img: "https://media.base44.com/images/public/69e6638934292a547ec97753/d3d24d314_AC0C6CDC-7A7A-4F16-9390-AD1C7E1A0EF3.png",
  },
  {
    label: "Historic Athlete Bust",
    img: "https://media.base44.com/images/public/69e6638934292a547ec97753/2066bf5b0_086E8FF7-8735-486A-8AD4-7F4FC37F21EE.png",
  },
];

const soccerPositions = [
  {
    position: "Forward Kick Pose",
    img: "https://media.base44.com/images/public/69e6638934292a547ec97753/f6b5763e1_0BB4AFDE-FA5D-4A01-8CB5-D9453AA9951F.png",
  },
  {
    position: "Goal Celebration Pose",
    img: "https://media.base44.com/images/public/69e6638934292a547ec97753/aceb82ef5_8C52F27A-8EA2-4D4F-AF16-D02E1C58BFD8.png",
  },
];

const hockeyPositions = [
  {
    position: "Goalie",
    img: "https://media.base44.com/images/public/69e6638934292a547ec97753/e44a376cd_CD24F754-D4D6-4C4F-9913-36FBB0C2F5D7.png",
  },
  {
    position: "Forward",
    img: "https://media.base44.com/images/public/69e6638934292a547ec97753/18d3f95a4_86AED4DB-6DE3-443F-B6D5-9A1ECB6B5D65.png",
  },
  {
    position: "Defenseman",
    img: "https://media.base44.com/images/public/69e6638934292a547ec97753/4b9032e0d_B9A32438-CA2C-4E28-8952-22DB0925B681.png",
  },
];

const baseballPositions = [
  {
    position: "Pitcher",
    img: "https://media.base44.com/images/public/69e6638934292a547ec97753/b27459035_F3B8712D-DC41-4B43-8236-36BD93C004B6.png",
  },
  {
    position: "Batter",
    img: "https://media.base44.com/images/public/69e6638934292a547ec97753/e991eeb20_D6CEFC45-7442-4F85-B951-76E2404E7719.png",
  },
  {
    position: "Catcher",
    img: "https://media.base44.com/images/public/69e6638934292a547ec97753/9354cdeae_6A6BF141-0B16-4BAA-B2A6-B4AB5070E20B.png",
  },
];

const basketballPositions = [
  {
    position: "Guard",
    img: "https://media.base44.com/images/public/69e6638934292a547ec97753/61a13fc21_0D8CBDF0-E92C-4C8C-BB56-78829096663D.png",
  },
  {
    position: "Forward",
    img: "https://media.base44.com/images/public/69e6638934292a547ec97753/147740e3b_4CA5A3D0-6148-4652-9EB3-BCF3DAE9DEC7.png",
  },
  {
    position: "Center Dunk Pose",
    img: "https://media.base44.com/images/public/69e6638934292a547ec97753/020f34d62_5E076DD7-856B-4C90-A8C7-3BD2336FD64F.png",
  },
];

const footballPositions = [
  {
    position: "Quarterback",
    img: "https://media.base44.com/images/public/69e6638934292a547ec97753/1d6975353_D2D956EF-C9FD-46EA-9075-C55DEEFA131F.png",
  },
  {
    position: "Receiver",
    img: "https://media.base44.com/images/public/69e6638934292a547ec97753/9b8441874_FCBF2923-CF61-4AE0-B720-2DF6F527DF5E.png",
  },
  {
    position: "Lineman",
    img: "https://media.base44.com/images/public/69e6638934292a547ec97753/9d6be36e2_E381DDD7-91BC-4FD3-A999-05CCFF675570.png",
  },
  {
    position: "Running Back",
    img: "https://media.base44.com/images/public/69e6638934292a547ec97753/1bff77f0c_650A3449-F5F7-4EC2-8D17-D57C866CB4B5.png",
  },
];

const faqs = [
  { question: "Do you need the athlete present for sculpting?", answer: "No. Every bust and statue is created entirely from photographs you provide. Our master sculptors recreate exact likeness — expression, bone structure, and athletic presence — from high-resolution photos alone." },
  { question: "What is the typical lead time?", answer: "Digital sculpt proof within 48 hours of receiving your photos. Full production — clay sculpting through cast and patina — typically 16–24 weeks depending on size and complexity. Rush options available." },
  { question: "What sizes are available?", answer: "We produce everything from 6\" tabletop busts to 9-foot+ heroic statues. Most Hall of Fame commissions are life-size (approximately 6 feet for standing figures). All custom sizes available." },
  { question: "Bronze vs. aluminum — which is right for my project?", answer: "Silicon bronze is the museum standard — rich amber warmth, exceptional detail, 200-year outdoor proven durability. Aluminum is significantly lighter and lower cost, ideal for indoor installations or budget-sensitive programs." },
  { question: "What does a life-size statue cost?", answer: "Life-size bronze statues typically range from $35,000 to $150,000+ depending on complexity, pose, and installation requirements. Portrait busts start from $1,800. See our pricing guide for detailed ranges." },
];

export default function ProHome() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(t);
  }, []);

  const current = heroSlides[slide];

  return (
    <div className="bg-obsidian text-parchment">
      <SEOHead
        title="Champions in Bronze — Custom Bronze Athlete Statues, Busts & Plaques"
        description="America's premier custom bronze sculptor for athlete statues, Hall of Fame busts, 3D bas-relief plaques, and donor recognition walls. Museum quality. Stadium grade. Exact photo likeness."
        canonical="/"
      />

      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {heroSlides.map((s, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ${i === slide ? "opacity-100" : "opacity-0"}`}
          >
            <img src={s.img} alt={s.label} className="w-full h-full object-cover scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/60 to-white/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/85 to-transparent" />
          </div>
        ))}

        <div className="max-w-7xl mx-auto px-6 relative z-10 pb-28 pt-40 w-full">
          <FadeIn key={slide}>
            <span className="text-bronze font-sans tracking-[0.4em] uppercase text-xs font-semibold block mb-5">
              {current.label}
            </span>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] text-parchment max-w-4xl whitespace-pre-line">
              {current.title}
            </h1>
            <p className="mt-8 max-w-2xl text-xl text-parchment/70 leading-relaxed font-sans font-light">
              Custom bronze statues, portrait busts, 3D bas-relief plaques, and photo image cast plaques designed for athletes, stadiums, universities, and Hall of Fame recognition.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/request-concept-design" className="bg-bronze hover:bg-gold text-white px-10 py-5 font-sans text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                Request Concept Design
              </Link>
              <Link to="/custom-bronze-athlete-statues" className="border border-parchment/30 hover:border-bronze text-parchment px-10 py-5 font-sans text-sm uppercase tracking-[0.2em] transition-all duration-300">
                Explore Bronze Collections
              </Link>
            </div>
          </FadeIn>

          {/* Slide indicators */}
          <div className="flex gap-2 mt-14">
            {heroSlides.map((_, i) => (
              <button key={i} onClick={() => setSlide(i)}
                className={`h-0.5 transition-all duration-500 ${i === slide ? "bg-bronze w-10" : "bg-parchment/20 w-4"}`}
              />
            ))}
          </div>
        </div>

        <a href="#collections" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-parchment/50 hover:text-bronze transition-colors">
          <span className="font-sans text-xs uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </section>

      {/* TRUSTED BY */}
      <section className="py-10 border-y border-bronze/20 bg-obsidian">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
            <span className="text-parchment/50 font-sans text-xs uppercase tracking-[0.3em] whitespace-nowrap flex-shrink-0">Trusted By</span>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10">
              {["Professional Sports Franchises", "Athletic Facilities", "Universities & Colleges", "Hall of Fame Committees", "Stadium & Arena Operators", "Donor Recognition Programs"].map((org) => (
                <span key={org} className="text-parchment/60 font-sans text-xs uppercase tracking-[0.15em] hover:text-bronze transition-colors">{org}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* PRODUCT COLLECTIONS */}
      <section id="collections" className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Bronze Collections"
            title="Legacy Sculptures & Recognition Systems"
            subtitle="Every commission is sculpted from your actual photographs — exact photographic likeness, individually cast, hand-patinated, and built to last 100+ years outdoors."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <FadeIn key={p.to} delay={i * 0.08}>
                <Link to={p.to} className="group relative aspect-[4/5] overflow-hidden block rounded-sm">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-parchment/90 via-parchment/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold/15 border border-gold/30 text-gold text-xs font-sans uppercase tracking-[0.15em] px-3 py-1">{p.label}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-xl text-parchment group-hover:text-gold transition-colors duration-300">{p.title}</h3>
                    <p className="text-parchment/50 mt-2 text-sm leading-relaxed line-clamp-2">{p.desc}</p>
                    <div className="flex items-center gap-2 mt-4 text-gold text-xs font-sans uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>{p.cta}</span><ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* STADIUM INSTALLATIONS */}
      <section className="py-28 border-t border-bronze/10 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden rounded-sm">
                  <img src="https://media.base44.com/images/public/69e6638934292a547ec97753/f9ff2eea2_1FD764A1-3FE3-43F7-B620-ECD28F936C38.png"
                    alt="Stadium bronze installation" loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-bronze/90 p-6 rounded-sm hidden md:block">
                  <p className="font-serif text-3xl text-parchment">500+</p>
                  <p className="font-sans text-xs text-parchment/60 uppercase tracking-widest mt-1">Stadium Installations</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Stadium-Grade Installations</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-tight text-parchment">
                Built for Stadiums.<br />Designed for Eternity.
              </h2>
              <p className="mt-6 text-parchment/60 text-lg leading-relaxed">
                From entrance plazas welcoming 80,000 fans to intimate Hall of Fame corridors — our bronze installations are engineered for the demands of professional athletic facilities and university campuses.
              </p>
              <ul className="mt-8 space-y-3 border-l border-bronze/30 pl-6">
                {[
                  "Outdoor-rated for 100+ year durability",
                  "Engineered for stadium wind and seismic loads",
                  "Coordinated installation with facility management",
                  "Full project management from concept to opening day",
                  "Professional sports and collegiate installation experience",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <span className="w-1.5 h-1.5 bg-gold flex-shrink-0 rounded-full" />
                    <span className="font-sans text-sm text-parchment/65">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4 mt-10">
                <Link to="/stadium-bronze-statues" className="inline-flex items-center gap-2 bg-bronze hover:bg-gold text-parchment px-8 py-4 font-sans text-sm uppercase tracking-[0.15em] font-semibold transition-all duration-300">
                  View Stadium Work <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/request-concept-design" className="inline-flex items-center gap-2 border border-bronze/40 hover:border-gold text-parchment/70 hover:text-parchment px-8 py-4 font-sans text-sm uppercase tracking-[0.15em] transition-all duration-300">
                  Discuss Your Project
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* HALL OF FAME */}
      <section className="py-28 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn delay={0.2}>
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Hall of Fame Recognition</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-tight text-parchment">
                Hall of Fame<br />Worthy. Always.
              </h2>
              <p className="mt-6 text-parchment/60 text-lg leading-relaxed">
                We design complete Hall of Fame environments — from individual portrait busts to 60-foot donor recognition walls. Every installation communicates the prestige and permanence that a Hall of Fame demands.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-10">
                {[
                  { value: "48hrs", label: "Digital Proof Delivery" },
                  { value: "200yr", label: "Outdoor Durability" },
                  { value: "100%", label: "Photo Likeness Accuracy" },
                  { value: "#1", label: "Sports Bronze Studio, USA" },
                ].map((stat) => (
                  <div key={stat.label} className="border border-bronze/20 bg-white p-5 rounded-sm shadow-sm">
                    <p className="font-serif text-3xl text-gold">{stat.value}</p>
                    <p className="text-parchment/40 text-xs font-sans uppercase tracking-wider mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 mt-10">
                <Link to="/hall-of-fame-bronze-displays" className="inline-flex items-center gap-2 bg-bronze hover:bg-gold text-parchment px-8 py-4 font-sans text-sm uppercase tracking-[0.15em] font-semibold transition-all duration-300">
                  View Hall of Fame Work <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img src="https://media.base44.com/images/public/69e6638934292a547ec97753/f9ff2eea2_1FD764A1-3FE3-43F7-B620-ECD28F936C38.png"
                  alt="Hall of Fame bronze display" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* BUSTS */}
      <section className="py-28 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <SectionHeading
              label="Major Sellers"
              title="Bronze Portrait Busts"
              subtitle="Museum-quality portrait busts for Hall of Fame corridors, trophy rooms, and legacy displays. Sculpted from your photographs — exact likeness, every time."
              align="center"
            />
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {bustTypes.map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.08}>
                <div className="group relative overflow-hidden rounded-sm bg-white border border-bronze/20 shadow-sm hover:shadow-md hover:border-bronze/50 transition-all duration-300">
                  <div className="aspect-[3/4] overflow-hidden bg-secondary/30">
                    <img src={item.img} alt={item.label}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-4 text-center border-t border-bronze/10">
                    <p className="font-serif text-base text-parchment">{item.label}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div className="text-center mt-10">
              <Link to="/bronze-athlete-busts" className="inline-flex items-center gap-2 border border-bronze/30 hover:border-gold text-parchment/60 hover:text-parchment px-8 py-4 font-sans text-sm uppercase tracking-[0.2em] transition-all duration-300">
                View All Busts <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SPORT POSITIONS */}
      <section className="py-28 border-t border-bronze/10 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <SectionHeading
              label="Sport Position Statues"
              title="Every Position. Exact Likeness."
              subtitle="We sculpt any athletic position with precision — from a quarterback's release to a center's dunk. Tell us the athlete, the sport, the moment."
              align="center"
            />
          </FadeIn>

          {/* Football */}
          <div className="mb-12">
            <FadeIn>
              <p className="font-serif text-2xl text-gold mb-6">Football</p>
            </FadeIn>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {footballPositions.map((item, i) => (
                <FadeIn key={item.position} delay={i * 0.08}>
                  <div className="group relative overflow-hidden rounded-sm bg-white border border-bronze/20 shadow-sm hover:shadow-md hover:border-bronze/50 transition-all duration-300">
                    <div className="aspect-[3/4] overflow-hidden bg-secondary/30">
                      <img src={item.img} alt={`Bronze ${item.position} statue`}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="p-4 text-center border-t border-bronze/10">
                      <p className="font-serif text-base text-parchment">{item.position}</p>
                      <p className="text-parchment/40 font-sans text-xs uppercase tracking-widest mt-1">Football</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Soccer */}
          <div className="mb-12">
            <FadeIn>
              <p className="font-serif text-2xl text-gold mb-6">Soccer</p>
            </FadeIn>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {soccerPositions.map((item, i) => (
                <FadeIn key={item.position} delay={i * 0.08}>
                  <div className="group relative overflow-hidden rounded-sm bg-white border border-bronze/20 shadow-sm hover:shadow-md hover:border-bronze/50 transition-all duration-300">
                    <div className="aspect-[3/4] overflow-hidden bg-secondary/30">
                      <img src={item.img} alt={`Bronze ${item.position} statue`}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="p-4 text-center border-t border-bronze/10">
                      <p className="font-serif text-base text-parchment">{item.position}</p>
                      <p className="text-parchment/40 font-sans text-xs uppercase tracking-widest mt-1">Soccer</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Hockey */}
          <div className="mb-12">
            <FadeIn>
              <p className="font-serif text-2xl text-gold mb-6">Hockey</p>
            </FadeIn>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {hockeyPositions.map((item, i) => (
                <FadeIn key={item.position} delay={i * 0.08}>
                  <div className="group relative overflow-hidden rounded-sm bg-white border border-bronze/20 shadow-sm hover:shadow-md hover:border-bronze/50 transition-all duration-300">
                    <div className="aspect-[3/4] overflow-hidden bg-secondary/30">
                      <img src={item.img} alt={`Bronze ${item.position} statue`}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="p-4 text-center border-t border-bronze/10">
                      <p className="font-serif text-base text-parchment">{item.position}</p>
                      <p className="text-parchment/40 font-sans text-xs uppercase tracking-widest mt-1">Hockey</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Baseball */}
          <div className="mb-12">
            <FadeIn>
              <p className="font-serif text-2xl text-gold mb-6">Baseball</p>
            </FadeIn>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {baseballPositions.map((item, i) => (
                <FadeIn key={item.position} delay={i * 0.08}>
                  <div className="group relative overflow-hidden rounded-sm bg-white border border-bronze/20 shadow-sm hover:shadow-md hover:border-bronze/50 transition-all duration-300">
                    <div className="aspect-[3/4] overflow-hidden bg-secondary/30">
                      <img src={item.img} alt={`Bronze ${item.position} statue`}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="p-4 text-center border-t border-bronze/10">
                      <p className="font-serif text-base text-parchment">{item.position}</p>
                      <p className="text-parchment/40 font-sans text-xs uppercase tracking-widest mt-1">Baseball</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Basketball */}
          <div className="mb-10">
            <FadeIn>
              <p className="font-serif text-2xl text-gold mb-6">Basketball</p>
            </FadeIn>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {basketballPositions.map((item, i) => (
                <FadeIn key={item.position} delay={i * 0.08}>
                  <div className="group relative overflow-hidden rounded-sm bg-white border border-bronze/20 shadow-sm hover:shadow-md hover:border-bronze/50 transition-all duration-300">
                    <div className="aspect-[3/4] overflow-hidden bg-secondary/30">
                      <img src={item.img} alt={`Bronze ${item.position} statue`}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="p-4 text-center border-t border-bronze/10">
                      <p className="font-serif text-base text-parchment">{item.position}</p>
                      <p className="text-parchment/40 font-sans text-xs uppercase tracking-widest mt-1">Basketball</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          <FadeIn delay={0.3}>
            <div className="text-center mt-4">
              <Link to="/all-sports" className="inline-flex items-center gap-2 border border-bronze/30 hover:border-gold text-parchment/60 hover:text-parchment px-8 py-4 font-sans text-sm uppercase tracking-[0.2em] transition-all duration-300">
                Browse All Sports <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PROCESS */}
      <Suspense fallback={<div className="h-40" />}>
        <ProcessTimeline />
      </Suspense>

      {/* TESTIMONIALS */}
      <Suspense fallback={<div className="h-40" />}>
        <TestimonialCarousel />
      </Suspense>

      {/* PRICING PREVIEW */}
      <section className="py-28 border-t border-bronze/10 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <SectionHeading
              label="Investment Guide"
              title="Transparent Pricing. Zero Surprises."
              subtitle="We believe in transparent pricing that respects your planning process. Every commission is custom — these ranges reflect typical projects."
              align="center"
            />
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { category: "Portrait Busts", items: [{ size: '6"', range: "From $800" }, { size: '12"', range: "From $1,800" }, { size: '18"', range: "From $3,500" }], link: "/bronze-statue-pricing" },
              { category: "Relief Plaques", items: [{ size: "Standard", range: "From $1,200" }, { size: "Large Format", range: "From $4,500" }, { size: "Custom Shape", range: "From $6,500" }], link: "/bronze-statue-pricing" },
              { category: "Full Statues", items: [{ size: '36"', range: "From $12,000" }, { size: '60"', range: "From $35,000" }, { size: '72"+', range: "From $75,000" }], link: "/bronze-statue-pricing" },
            ].map((cat, i) => (
              <FadeIn key={cat.category} delay={i * 0.1}>
                <div className="border border-bronze/20 bg-white shadow-sm p-8 rounded-sm flex flex-col">
                  <p className="font-serif text-2xl text-gold mb-6">{cat.category}</p>
                  <ul className="space-y-4 flex-1">
                    {cat.items.map((item) => (
                      <li key={item.size} className="flex items-center justify-between border-b border-bronze/10 pb-4 last:border-0 last:pb-0">
                        <span className="font-sans text-sm text-parchment/60">{item.size}</span>
                        <span className="font-serif text-parchment">{item.range}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={cat.link} className="inline-flex items-center gap-2 mt-6 text-gold text-xs font-sans uppercase tracking-widest hover:text-parchment transition-colors">
                    Full Pricing Guide <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Suspense fallback={<div className="h-40" />}>
        <FAQSection faqs={faqs} />
      </Suspense>

      {/* FINAL CTA */}
      <section className="relative py-40 overflow-hidden bg-secondary/40">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <span className="text-bronze font-sans tracking-[0.4em] uppercase text-xs font-semibold">Begin Your Legacy</span>
            <h2 className="font-serif text-5xl md:text-7xl mt-6 leading-tight text-parchment">
              Their Legacy<br />Deserves Bronze.
            </h2>
            <p className="mt-8 text-parchment/60 text-xl leading-relaxed max-w-2xl mx-auto">
              Every great athlete, coach, and program deserves a permanent monument to their achievement. We deliver museum-quality bronze sculptures from concept to installation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <Link to="/request-concept-design" className="bg-bronze hover:bg-gold text-white px-12 py-5 font-sans text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                Start Your Legacy Sculpture
              </Link>
              <Link to="/commemorate-greatness" className="border border-parchment/30 hover:border-bronze text-parchment px-12 py-5 font-sans text-sm uppercase tracking-[0.2em] transition-all duration-300">
                Commemorate Greatness
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <Suspense fallback={<div className="h-40" />}>
        <QuoteForm
          title="Request Your Concept Design"
          subtitle="Share your vision. We deliver a digital sculpt proof and pricing within 48 hours."
          source="pro"
        />
      </Suspense>
    </div>
  );
}