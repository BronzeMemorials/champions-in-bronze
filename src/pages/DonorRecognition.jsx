import { Link } from "react-router-dom";
import { ArrowRight, Phone, CheckCircle, Shield, Award, Clock, Users, Star, Building2, Layers, Trophy } from "lucide-react";
import SEOHead from "../components/shared/SEOHead";
import TrustBadges from "../components/shared/TrustBadges";
import FAQSection from "../components/shared/FAQSection";
import BustsAndStatuesSection from "../components/shared/BustsAndStatuesSection";
import QuoteForm from "../components/shared/QuoteForm";
import FadeIn from "../components/shared/FadeIn";
import TestimonialCarousel from "../components/shared/TestimonialCarousel";

const HERO_IMG = "https://media.base44.com/images/public/69e6638934292a547ec97753/ab5fbf767_generated_696960c2.png";

// Real plaque images from existing library
const PLAQUE_GALLERY = [
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/2488a7ab8_FOOTBALLCHAMPION18.png", label: "Football Naming Honor Plaque", desc: "Jersey #18 with Hall of Fame crest — full 3D bas-relief donor recognition" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/4c058dd72_BASEBALLCHAMPION34.png", label: "Baseball Program Legacy Plaque", desc: "Jersey #34, athlete relief, stadium background — named giving level" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/bdefded46_ChatGPTImageMay26202602_42_22PM.png", label: "Founding Patron Portrait Plaque", desc: "WBC Champion career honors with portrait relief cast in museum bronze" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/65fa9625c_PORTRAITSOCCER.png", label: "Athletic Hall Portrait Plaque", desc: "FIFA World Player career stats and Olympic honors in bronze relief" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/ea8025f43_PORTRAITBASKETBALL.png", label: "Program Donor Recognition Plaque", desc: "NBA All-Star honors with championship details — individual donor recognition" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/738d1540f_PORTRAITFOOTBALL21.png", label: "Legacy Donor Commemorative Plaque", desc: "Career passing records and achievements permanently cast in bronze" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/6ac4828f3_IMG_1392.jpeg", label: "Portrait Donor Plaque", desc: "Home plate portrait — 29 years of program service honored in bronze" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/983a3990d_IMG_1396.jpeg", label: "Home Plate Donor Plaque", desc: "Photo-cast portrait & career stats — individual naming recognition" },
];

const WALL_INSTALLS = [
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/775fca918_47E80D20-855E-4F7E-BBF8-D319E64030C0.png", label: "Folsom Field — Colorado Buffaloes", desc: "Full stadium bronze installation — architectural landmark donor dedication" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/e2544f1e5_5A4799E5-4305-4837-8127-4D64CDA9C083.png", label: "Athletic Facility Dedication Wall", desc: "Coach portrait with stadium relief — naming rights program recognition" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/21ba8abbb_1A74E1E5-FBBE-4985-B495-629E12ACE53F.png", label: "Team Logo Dimensional Installation", desc: "Backlit bronze team logo — lobby centerpiece for capital campaigns" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/5bf816b28_95F91176-9214-4C6E-9E07-C8A0C5729B70.png", label: "Championship History Wall", desc: "Narrative plaque with team mascot — 1964 championship recognition" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/319f68c6c_8EDB86A3-0823-4A9F-B2C0-A3EC13DAD290.png", label: "Institutional Entrance Plaque", desc: "Bronze identification sign — architectural entrance donor recognition" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/b1bd5d877_A36CAD0F-9174-4537-ACB3-920546444A1D.png", label: "University Legacy Seal", desc: "Detroit College of Law / MSU Law bronze seal — institutional donor wall" },
];

const SEALS = [
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/2b48561be_D3F0E98F-7ED5-4B04-8DD9-F0D76C2DA8C7.png", label: "Penn State University Seal" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/02178ed4c_D12B6A40-5DD3-4D3E-8FB6-E4E73664D056.png", label: "Northwest Mississippi CC Seal" },
];

const faqs = [
  { question: "Can donor portraits be included on individual plaques?", answer: "Yes. Major donor plaques can include a Photo ImageCasting portrait — their actual photograph permanently cast in bronze alongside their name and giving level. This is one of the most powerful recognition tools available and dramatically increases donor pride and participation." },
  { question: "Can the donor wall expand as new donors are added?", answer: "Absolutely. Every donor wall we design includes a modular expansion system. New donor names, new giving levels, and new campaign phases can be added seamlessly year after year as your program grows — no need to replace the existing wall." },
  { question: "What giving tiers and recognition levels do you support?", answer: "Any structure you define. We fabricate systems with unlimited naming tiers — Founding Patron, Platinum, Gold, Silver, Bronze, Friends — each with distinct visual treatment, border weight, and letter sizing in the bronze to reflect the giving level." },
  { question: "What is the ROI on a donor recognition wall?", answer: "Athletic departments consistently report 30–50% increases in alumni donor participation after installing a visible, prestigious recognition wall. Prospective donors want to see their name in bronze alongside past supporters — it's the most powerful fundraising tool available." },
  { question: "What types of facilities do you serve?", answer: "We serve NFL and NCAA stadiums, university athletic departments, high school facilities, hospitals, museums, libraries, performing arts centers, and corporate campuses. Any institution with a donor recognition program benefits from permanent bronze." },
  { question: "How long does a full donor wall installation take?", answer: "Design and fabrication runs 8–16 weeks for full wall systems. Individual donor plaques can be produced in 15–30 days. We offer rush production when deadlines require it." },
  { question: "Do you handle installation?", answer: "Yes. We coordinate professional installation nationwide. Our team handles anchoring, mounting, and final placement — your staff doesn't need to do anything except approve the final product." },
  { question: "What bronze alloys do you use?", answer: "We cast in bronze — the same alloy used in fine art and museum sculpture. It's rated 200+ years outdoors, develops a beautiful natural patina, and polishes to a brilliant warm gold. The highest quality available, period." },
];

const wallTypes = [
  {
    icon: Layers,
    title: "Multi-Tier Donor Recognition Walls",
    desc: "Floor-to-ceiling systems with Founding Patron, Gold, Silver, and Bronze tier sections. Architectural bronze dividers, dimensional headers, and individual name plaques — designed for permanent display in lobbies, hallways, and arenas.",
    img: "https://media.base44.com/images/public/69e6638934292a547ec97753/ab5fbf767_generated_696960c2.png",
  },
  {
    icon: Building2,
    title: "Naming Rights & Suite Dedication Plaques",
    desc: "Building, suite, field, court, locker room, and press box naming recognition. Architecture-scale bronze letters, dimensional signage, and dedication plaques permanently identifying your major naming-rights donors.",
    img: "https://media.base44.com/images/public/69e6638934292a547ec97753/775fca918_47E80D20-855E-4F7E-BBF8-D319E64030C0.png",
  },
  {
    icon: Trophy,
    title: "Capital Campaign Milestones",
    desc: "Campaign thermometers, phase-complete monuments, groundbreaking dedications, and goal-achieved recognition installations. Permanent bronze documentation of your campaign's success for future generations to see.",
    img: "https://media.base44.com/images/public/69e6638934292a547ec97753/21ba8abbb_1A74E1E5-FBBE-4985-B495-629E12ACE53F.png",
  },
  {
    icon: Users,
    title: "Portrait Donor Plaques",
    desc: "Individual plaques featuring the donor's actual portrait photograph permanently cast in bronze via Photo ImageCasting — alongside their name, giving level, and dedication copy. The ultimate recognition for leadership-level donors.",
    img: "https://media.base44.com/images/public/69e6638934292a547ec97753/bdefded46_ChatGPTImageMay26202602_42_22PM.png",
  },
];

const whyUs = [
  { icon: Clock, title: "Artwork Proof Within The Hour", desc: "Submit your donor list and we deliver a full digital proof of your wall design within the hour — no commitment required." },
  { icon: Shield, title: "200-Year Museum-Grade Bronze", desc: "We cast in the same alloy used in fine art and museum sculpture. Your donor wall will outlast every person in this generation." },
  { icon: Award, title: "50+ Years of Institutional Work", desc: "NFL stadiums, NCAA programs, Ivy League universities, hospitals, libraries — we've installed donor walls everywhere." },
  { icon: Star, title: "50,000+ Satisfied Customers", desc: "The most trusted name in institutional bronze recognition in the United States." },
  { icon: Users, title: "Modular Expansion System", desc: "Every wall is designed to grow. Add new donors, new tiers, new phases every year — seamlessly." },
  { icon: Building2, title: "100% Made in the USA", desc: "No overseas casting. No tariffs. No delays. Every plaque hand-finished in our American foundry." },
];

// Simulate a wall of donor name plaques rendered in JSX
const SAMPLE_DONORS = [
  "The Richardson Family", "Robert & Helen Carter", "James A. Montgomery", "Williams Family Foundation",
  "Dr. Patricia Osei", "The Morrison Trust", "Edward & Louise Park", "Blackstone Athletic Fund",
  "The Thornton Family", "Alumni Class of 1987", "Dr. James R. Sullivan", "The Fitzgerald Foundation",
  "Mark & Carol Hughes", "Pioneer Athletic Trust", "Charles & Mary Davidson", "The Kelley Foundation",
  "University Club 1965", "Walter & Anne Pruitt", "The Garrison Family", "Alumni Class of 2001",
  "Dr. Robert Ashford", "The Harrington Fund", "Stephen & Jane Coleman", "Pinnacle Sports Trust",
  "The Langford Family", "Class of 1972 Legacy", "Kenneth & Susan Blake", "The Whitmore Trust",
  "George & Ann Prescott", "Athletic Boosters 2010", "The Jefferson Family", "Reynolds Foundation",
  "Dr. Michael Bradford", "The Lawson Family", "Alumni Class of 1995", "Gregory & Pam Stone",
  "The Wentworth Trust", "Centennial Donor Fund", "Howard & Barbara Mills", "The Chen Foundation",
  "Alumni Class of 1980", "James & Kathleen Fox", "The Garrison-Hill Fund", "Murray Family Trust",
  "Dr. Linda Carmichael", "Class of 1960 Legacy", "The Ellison Family", "Patrick & Mary O'Brien",
];

export default function DonorRecognition() {
  return (
    <div className="bg-white text-gray-900">
      <SEOHead
        title="Donor Recognition Walls & Bronze Plaques — Athletic & University Programs | Champions in Bronze"
        description="Architectural bronze donor recognition walls, naming-rights plaques, portrait donor plaques, and capital campaign displays for universities, stadiums, and athletic facilities. Multi-tier systems that inspire alumni giving. Artwork proof within the hour. 772-309-0412."
        canonical="/donor-recognition"
        ogImage={HERO_IMG}
      />

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center bg-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Bronze donor recognition wall — Champions in Bronze" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-4">Champions in Bronze · Since 1974</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900 mb-6">
              Bronze Donor Recognition Walls That Inspire Giving For Generations
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
              We design and fabricate complete donor recognition wall systems — from individual portrait plaques to 200-name installations — for universities, stadiums, arenas, hospitals, and athletic facilities nationwide. Artwork proof within the hour. Made in the USA.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link to="/request-quote" className="inline-flex items-center gap-2 px-8 py-4 font-sans font-bold uppercase tracking-widest text-sm text-black transition-all hover:scale-[1.02]" style={{ background: "linear-gradient(135deg, #B8860B 0%, #DAA520 30%, #FFD700 50%, #DAA520 70%, #B8860B 100%)" }}>
                Get Your Free Wall Design <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:7723090412" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-yellow-600 text-yellow-800 font-sans font-semibold uppercase tracking-widest text-sm hover:bg-yellow-50 transition-colors">
                <Phone className="w-4 h-4" /> 772-309-0412
              </a>
            </div>
            <div className="flex flex-wrap gap-6">
              {[
                { icon: Clock, text: "Wall Design Proof Within The Hour" },
                { icon: Shield, text: "200 Years Outdoors — Museum-Grade Bronze" },
                { icon: Award, text: "50+ Years of Institutional Work" },
                { icon: Star, text: "50,000+ Satisfied Customers" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-gray-600 text-xs">
                  <Icon className="w-3.5 h-3.5 text-yellow-600" />
                  <span className="font-semibold">{text}</span>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="hidden lg:block">
            <div className="grid grid-cols-2 gap-3">
              {[
                "https://media.base44.com/images/public/69e6638934292a547ec97753/2488a7ab8_FOOTBALLCHAMPION18.png",
                "https://media.base44.com/images/public/69e6638934292a547ec97753/bdefded46_ChatGPTImageMay26202602_42_22PM.png",
                "https://media.base44.com/images/public/69e6638934292a547ec97753/775fca918_47E80D20-855E-4F7E-BBF8-D319E64030C0.png",
                "https://media.base44.com/images/public/69e6638934292a547ec97753/983a3990d_IMG_1396.jpeg",
              ].map((url, i) => (
                <div key={i} className="rounded border border-gray-200 shadow bg-gray-100 flex items-center justify-center p-2">
                  <img src={url} alt="Bronze donor recognition plaque" className="w-full h-auto object-contain" loading="lazy" />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <TrustBadges />

      {/* PROOF BANNER */}
      <div className="bg-yellow-50 border-y-2 border-yellow-300 py-6 px-6 text-center">
        <p className="font-serif text-xl md:text-2xl text-gray-900 mb-1">Free Wall Design Proof — <span className="text-yellow-700">Delivered Within The Hour</span></p>
        <p className="text-gray-600 text-sm mb-4">Send us your donor list. We'll show you exactly what your recognition wall will look like — no commitment required.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/request-quote" className="inline-flex items-center gap-2 px-6 py-3 font-bold text-black text-sm uppercase tracking-widest" style={{ background: "linear-gradient(135deg, #B8860B 0%, #DAA520 50%, #B8860B 100%)" }}>
            Request Free Design Proof <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="tel:7723090412" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-yellow-600 text-yellow-800 font-bold text-sm uppercase tracking-widest hover:bg-yellow-100 transition-colors">
            <Phone className="w-4 h-4" /> Call Now: 772-309-0412
          </a>
        </div>
      </div>

      {/* IMPACT STATS */}
      <section className="py-14 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "40%+", label: "Avg Donor Increase", desc: "Athletic programs see dramatic alumni giving growth after installation" },
              { stat: "200+", label: "Plaques Per Wall", desc: "Single installations can recognize hundreds of donors at once" },
              { stat: "200 Yrs", label: "Museum-Grade Bronze", desc: "The same alloy used in fine art and museum sculpture" },
              { stat: "1 Hour", label: "Design Proof", desc: "We deliver your wall concept within the hour, no commitment" },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.1}>
                <p className="font-serif text-4xl md:text-5xl text-yellow-700">{item.stat}</p>
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-gray-900 mt-2 font-bold">{item.label}</p>
                <p className="text-gray-500 mt-1 text-xs leading-relaxed">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SIMULATED DONOR WALL */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">What 200 Donor Plaques Looks Like</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">Your Donors. Permanently Cast in Bronze.</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
                Every name below represents a real bronze plaque — individually cast, hand-finished, and mounted to your wall. This is how a full donor recognition installation looks at scale.
              </p>
            </div>
          </FadeIn>

          {/* Architectural bronze wall — oxidized bronze aesthetic */}
          <FadeIn delay={0.1}>
            {/* Outer wall border — single line bronze with leatherette background */}
            <div style={{ 
              border: "2px solid #8B6914",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Crect width='60' height='60' fill='%232e1c0a'/%3E%3Cpath d='M5 8 Q8 4 12 7 Q16 10 13 14 Q10 18 6 15 Q2 12 5 8Z' fill='%23251408' stroke='%23200e05' stroke-width='0.5'/%3E%3Cpath d='M20 3 Q24 0 27 4 Q30 8 26 11 Q22 14 19 10 Q16 6 20 3Z' fill='%23291508' stroke='%23200e05' stroke-width='0.5'/%3E%3Cpath d='M38 6 Q42 2 46 6 Q50 10 46 14 Q42 18 38 14 Q34 10 38 6Z' fill='%23221208' stroke='%231a0d04' stroke-width='0.5'/%3E%3Cpath d='M52 10 Q56 6 59 10 Q62 14 58 18 Q54 22 51 18 Q48 14 52 10Z' fill='%23271508' stroke='%23200e05' stroke-width='0.5'/%3E%3Cpath d='M2 22 Q6 18 10 22 Q14 26 10 30 Q6 34 2 30 Q-2 26 2 22Z' fill='%232a1608' stroke='%23200e05' stroke-width='0.5'/%3E%3Cpath d='M15 20 Q20 16 24 20 Q28 24 24 29 Q20 34 15 29 Q10 24 15 20Z' fill='%231e1006' stroke='%231a0d04' stroke-width='0.5'/%3E%3Cpath d='M33 18 Q37 14 41 18 Q45 22 41 27 Q37 32 33 27 Q29 22 33 18Z' fill='%23291508' stroke='%23200e05' stroke-width='0.5'/%3E%3Cpath d='M50 22 Q54 18 57 22 Q60 26 57 31 Q54 36 50 31 Q46 26 50 22Z' fill='%23221208' stroke='%231a0d04' stroke-width='0.5'/%3E%3Cpath d='M8 36 Q12 32 16 36 Q20 40 16 45 Q12 50 8 45 Q4 40 8 36Z' fill='%232a1608' stroke='%23200e05' stroke-width='0.5'/%3E%3Cpath d='M25 34 Q30 30 34 35 Q38 40 33 44 Q28 48 24 44 Q20 40 25 34Z' fill='%23241308' stroke='%23200e05' stroke-width='0.5'/%3E%3Cpath d='M44 36 Q48 32 52 36 Q56 40 52 45 Q48 50 44 45 Q40 40 44 36Z' fill='%232a1608' stroke='%231a0d04' stroke-width='0.5'/%3E%3Cpath d='M2 50 Q6 46 10 50 Q14 54 10 58 Q6 62 2 58 Q-2 54 2 50Z' fill='%23221208' stroke='%23200e05' stroke-width='0.5'/%3E%3Cpath d='M18 48 Q22 44 26 48 Q30 52 26 57 Q22 62 18 57 Q14 52 18 48Z' fill='%232a1608' stroke='%231a0d04' stroke-width='0.5'/%3E%3Cpath d='M38 50 Q42 46 46 50 Q50 54 46 58 Q42 62 38 58 Q34 54 38 50Z' fill='%23271508' stroke='%23200e05' stroke-width='0.5'/%3E%3Cpath d='M54 48 Q58 44 61 48 Q64 52 61 57 Q58 62 54 57 Q50 52 54 48Z' fill='%23221208' stroke='%231a0d04' stroke-width='0.5'/%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
              padding: "2px", 
              boxShadow: "0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(218,165,32,0.3), inset 0 0 30px rgba(0,0,0,0.7)" 
            }}>
              {/* Inner inset border */}
              <div style={{ 
                border: "1px solid #8B6914", 
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Crect width='60' height='60' fill='%232e1c0a'/%3E%3Cpath d='M5 8 Q8 4 12 7 Q16 10 13 14 Q10 18 6 15 Q2 12 5 8Z' fill='%23251408' stroke='%23200e05' stroke-width='0.5'/%3E%3Cpath d='M20 3 Q24 0 27 4 Q30 8 26 11 Q22 14 19 10 Q16 6 20 3Z' fill='%23291508' stroke='%23200e05' stroke-width='0.5'/%3E%3Cpath d='M38 6 Q42 2 46 6 Q50 10 46 14 Q42 18 38 14 Q34 10 38 6Z' fill='%23221208' stroke='%231a0d04' stroke-width='0.5'/%3E%3Cpath d='M52 10 Q56 6 59 10 Q62 14 58 18 Q54 22 51 18 Q48 14 52 10Z' fill='%23271508' stroke='%23200e05' stroke-width='0.5'/%3E%3Cpath d='M2 22 Q6 18 10 22 Q14 26 10 30 Q6 34 2 30 Q-2 26 2 22Z' fill='%232a1608' stroke='%23200e05' stroke-width='0.5'/%3E%3Cpath d='M15 20 Q20 16 24 20 Q28 24 24 29 Q20 34 15 29 Q10 24 15 20Z' fill='%231e1006' stroke='%231a0d04' stroke-width='0.5'/%3E%3Cpath d='M33 18 Q37 14 41 18 Q45 22 41 27 Q37 32 33 27 Q29 22 33 18Z' fill='%23291508' stroke='%23200e05' stroke-width='0.5'/%3E%3Cpath d='M50 22 Q54 18 57 22 Q60 26 57 31 Q54 36 50 31 Q46 26 50 22Z' fill='%23221208' stroke='%231a0d04' stroke-width='0.5'/%3E%3Cpath d='M8 36 Q12 32 16 36 Q20 40 16 45 Q12 50 8 45 Q4 40 8 36Z' fill='%232a1608' stroke='%23200e05' stroke-width='0.5'/%3E%3Cpath d='M25 34 Q30 30 34 35 Q38 40 33 44 Q28 48 24 44 Q20 40 25 34Z' fill='%23241308' stroke='%23200e05' stroke-width='0.5'/%3E%3Cpath d='M44 36 Q48 32 52 36 Q56 40 52 45 Q48 50 44 45 Q40 40 44 36Z' fill='%232a1608' stroke='%231a0d04' stroke-width='0.5'/%3E%3Cpath d='M2 50 Q6 46 10 50 Q14 54 10 58 Q6 62 2 58 Q-2 54 2 50Z' fill='%23221208' stroke='%23200e05' stroke-width='0.5'/%3E%3Cpath d='M18 48 Q22 44 26 48 Q30 52 26 57 Q22 62 18 57 Q14 52 18 48Z' fill='%232a1608' stroke='%231a0d04' stroke-width='0.5'/%3E%3Cpath d='M38 50 Q42 46 46 50 Q50 54 46 58 Q42 62 38 58 Q34 54 38 50Z' fill='%23271508' stroke='%23200e05' stroke-width='0.5'/%3E%3Cpath d='M54 48 Q58 44 61 48 Q64 52 61 57 Q58 62 54 57 Q50 52 54 48Z' fill='%23221208' stroke='%231a0d04' stroke-width='0.5'/%3E%3C/svg%3E")`,
                backgroundSize: "60px 60px",
                padding: "24px" 
              }}>

                {/* Wall title */}
                <div className="text-center mb-6">
                  <p className="font-serif tracking-widest uppercase" style={{ fontSize: "1.6rem", color: "#DAA520", textShadow: "0 1px 3px rgba(0,0,0,0.8), 0 0 12px rgba(218,165,32,0.4)", letterSpacing: "0.25em" }}>Champions Wall of Honor</p>
                  <p className="font-sans uppercase mt-1" style={{ fontSize: "0.65rem", color: "#B8860B", letterSpacing: "0.35em", textShadow: "0 1px 2px rgba(0,0,0,0.6)" }}>Founding Donors · Established in Bronze</p>
                </div>

                {/* Tier: Founding Patron */}
                <div className="mb-6">
                  <p className="font-serif text-center mb-4 uppercase" style={{ fontSize: "0.75rem", color: "#DAA520", letterSpacing: "0.3em", textShadow: "0 1px 3px rgba(0,0,0,0.8), 0 0 8px rgba(218,165,32,0.3)" }}>— Founding Patrons —</p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {SAMPLE_DONORS.slice(0, 6).map((name, i) => (
                      <div key={i} className="relative" style={{ border: "1px solid #8B6914", background: "#4a3510", padding: "10px 20px", boxShadow: "inset 0 1px 0 rgba(218,165,32,0.15), 0 2px 6px rgba(0,0,0,0.4)" }}>
                        {/* Screw hole left */}
                        <div className="absolute left-1.5 top-1/2 -translate-y-1/2">
                          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, #c8a045, #5a3d10)", border: "1px solid #3a2508", boxShadow: "inset 0 1px 2px rgba(0,0,0,0.6)" }} />
                        </div>
                        {/* Screw hole right */}
                        <div className="absolute right-1.5 top-1/2 -translate-y-1/2">
                          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, #c8a045, #5a3d10)", border: "1px solid #3a2508", boxShadow: "inset 0 1px 2px rgba(0,0,0,0.6)" }} />
                        </div>
                        <p className="font-serif text-center" style={{ fontSize: "0.8rem", color: "#DAA520", textShadow: "0 1px 2px rgba(0,0,0,0.8), 0 0 6px rgba(218,165,32,0.25)", lineHeight: 1.3 }}>{name}</p>
                        <p className="font-sans text-center uppercase mt-1" style={{ fontSize: "0.55rem", color: "#B8860B", letterSpacing: "0.2em", textShadow: "0 1px 1px rgba(0,0,0,0.6)" }}>Founding Patron</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tier: Gold */}
                <div className="mb-6">
                  <p className="font-serif text-center mb-4 uppercase" style={{ fontSize: "0.7rem", color: "#DAA520", letterSpacing: "0.3em", textShadow: "0 1px 3px rgba(0,0,0,0.8), 0 0 8px rgba(218,165,32,0.3)" }}>— Gold Donors —</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {SAMPLE_DONORS.slice(6, 18).map((name, i) => (
                      <div key={i} className="relative" style={{ border: "1px solid #8B6914", background: "#4a3510", padding: "8px 14px", boxShadow: "inset 0 1px 0 rgba(218,165,32,0.12), 0 2px 4px rgba(0,0,0,0.4)" }}>
                        <div className="absolute left-1 top-1/2 -translate-y-1/2">
                          <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, #c8a045, #5a3d10)", border: "1px solid #3a2508", boxShadow: "inset 0 1px 1px rgba(0,0,0,0.6)" }} />
                        </div>
                        <div className="absolute right-1 top-1/2 -translate-y-1/2">
                          <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, #c8a045, #5a3d10)", border: "1px solid #3a2508", boxShadow: "inset 0 1px 1px rgba(0,0,0,0.6)" }} />
                        </div>
                        <p className="font-serif text-center" style={{ fontSize: "0.7rem", color: "#DAA520", textShadow: "0 1px 2px rgba(0,0,0,0.8), 0 0 5px rgba(218,165,32,0.2)", lineHeight: 1.3 }}>{name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tier: Silver */}
                <div className="mb-6">
                  <p className="font-serif text-center mb-4 uppercase" style={{ fontSize: "0.65rem", color: "#DAA520", letterSpacing: "0.3em", textShadow: "0 1px 3px rgba(0,0,0,0.8), 0 0 8px rgba(218,165,32,0.3)" }}>— Silver Donors —</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1.5">
                    {SAMPLE_DONORS.slice(18, 36).map((name, i) => (
                      <div key={i} className="relative" style={{ border: "1px solid #8B6914", background: "#4a3510", padding: "6px 12px", boxShadow: "inset 0 1px 0 rgba(218,165,32,0.1), 0 1px 3px rgba(0,0,0,0.4)" }}>
                        <div className="absolute left-1 top-1/2 -translate-y-1/2">
                          <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, #c8a045, #5a3d10)", border: "1px solid #3a2508" }} />
                        </div>
                        <div className="absolute right-1 top-1/2 -translate-y-1/2">
                          <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, #c8a045, #5a3d10)", border: "1px solid #3a2508" }} />
                        </div>
                        <p className="font-serif text-center" style={{ fontSize: "0.6rem", color: "#DAA520", textShadow: "0 1px 1px rgba(0,0,0,0.8)", lineHeight: 1.3 }}>{name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tier: Bronze / Friends */}
                <div>
                  <p className="font-serif text-center mb-4 uppercase" style={{ fontSize: "0.6rem", color: "#DAA520", letterSpacing: "0.3em", textShadow: "0 1px 3px rgba(0,0,0,0.8), 0 0 8px rgba(218,165,32,0.3)" }}>— Bronze Donors & Friends —</p>
                  <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1">
                    {SAMPLE_DONORS.slice(12).map((name, i) => (
                      <div key={i} className="relative" style={{ border: "1px solid #7a5c10", background: "#4a3510", padding: "5px 10px", boxShadow: "inset 0 1px 0 rgba(218,165,32,0.08), 0 1px 2px rgba(0,0,0,0.3)" }}>
                        <div className="absolute left-0.5 top-1/2 -translate-y-1/2">
                          <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, #c8a045, #5a3d10)", border: "1px solid #3a2508" }} />
                        </div>
                        <div className="absolute right-0.5 top-1/2 -translate-y-1/2">
                          <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: "radial-gradient(circle at 35% 35%, #c8a045, #5a3d10)", border: "1px solid #3a2508" }} />
                        </div>
                        <p className="font-serif text-center truncate" style={{ fontSize: "0.55rem", color: "#C8960C", textShadow: "0 1px 1px rgba(0,0,0,0.8)", lineHeight: 1.3 }}>{name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center mt-6 pt-4" style={{ borderTop: "1px solid #5a4010" }}>
                  <p className="font-sans uppercase" style={{ fontSize: "0.55rem", color: "#7a6020", letterSpacing: "0.25em" }}>Every plaque above is individually cast in museum-quality bronze · Champions in Bronze · Since 1974</p>
                </div>

              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="text-center mt-8">
              <Link to="/request-quote" className="inline-flex items-center gap-2 px-8 py-4 font-bold text-black uppercase tracking-widest text-sm" style={{ background: "linear-gradient(135deg, #B8860B 0%, #DAA520 50%, #B8860B 100%)" }}>
                Get Your Wall Designed Like This <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* WALL TYPES */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Complete Recognition Systems</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">Every Format. Every Scale.</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
                From a single naming-rights plaque to a 200-donor full-wall installation — we design, fabricate, and install every type of bronze donor recognition system used in institutional settings nationwide.
              </p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-6">
            {wallTypes.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="group flex flex-col overflow-hidden border-2 border-gray-200 hover:border-yellow-500 transition-all duration-300 shadow-sm hover:shadow-lg bg-white">
                  <div className="bg-gray-50 flex items-center justify-center p-3">
                    <img src={item.img} alt={item.title + " — Champions in Bronze"} className="w-full h-auto object-contain group-hover:scale-[1.03] transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-sm bg-yellow-50 border border-yellow-200 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-yellow-600" />
                      </div>
                      <h3 className="font-serif text-xl text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">{item.desc}</p>
                    <Link to="/request-quote" className="inline-flex items-center gap-1 mt-4 text-yellow-700 font-sans text-xs uppercase tracking-widest font-bold hover:text-yellow-600 transition-colors">
                      Get a Quote <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* INDIVIDUAL PLAQUE GALLERY */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Individual Donor Plaque Examples</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">Every Plaque. Custom Cast. One of a Kind.</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
                Each bronze plaque is individually designed and cast — featuring the donor's name, giving level, portrait, sport affiliation, or any custom content your program requires.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {PLAQUE_GALLERY.map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="group overflow-hidden border border-gray-200 bg-white hover:border-yellow-500 hover:shadow-lg transition-all duration-300 flex flex-col">
                  <div className="flex items-center justify-center p-3 bg-gray-50" style={{ minHeight: "200px" }}>
                    <img src={item.url} alt={item.label + " — Champions in Bronze donor plaque"} className="w-full h-auto object-contain group-hover:scale-[1.03] transition-transform duration-500" style={{ maxHeight: "220px" }} loading="lazy" />
                  </div>
                  <div className="p-4 flex flex-col flex-1 bg-white">
                    <p className="font-serif text-sm text-gray-900 font-semibold leading-tight">{item.label}</p>
                    <p className="text-gray-500 text-xs mt-1 leading-relaxed flex-1">{item.desc}</p>
                    <p className="mt-3 text-yellow-700 font-sans text-xs uppercase tracking-widest font-bold group-hover:text-yellow-600 transition-colors">→ Get a Quote</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* REAL INSTALLATION PHOTOS */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Actual Completed Installations</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">Real Projects. Real Institutions.</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base">NFL stadiums, NCAA programs, Ivy League universities, hospitals, and athletic facilities — we've served them all.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WALL_INSTALLS.map((item, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div className="group overflow-hidden border border-gray-200 bg-white hover:border-yellow-500 hover:shadow-xl transition-all duration-300 flex flex-col">
                  <div className="flex items-center justify-center p-4 bg-gray-50" style={{ minHeight: "220px" }}>
                    <img src={item.url} alt={item.label + " — Champions in Bronze installation"} className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500" style={{ maxHeight: "240px" }} loading="lazy" />
                  </div>
                  <div className="p-5 bg-white flex flex-col flex-1">
                    <p className="font-serif text-base text-gray-900 font-semibold">{item.label}</p>
                    <p className="text-gray-500 text-sm mt-1 flex-1">{item.desc}</p>
                    <Link to="/request-quote" className="inline-flex items-center gap-1 mt-3 text-yellow-700 font-sans text-xs uppercase tracking-widest font-bold hover:text-yellow-600 transition-colors">
                      Commission a Similar Installation <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 bg-yellow-50 border-y-2 border-yellow-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Why Champions in Bronze</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">America's Premier Donor Recognition Foundry</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base">For over 50 years, we've been the foundry of choice for institutions that demand the absolute best.</p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.07}>
                <div className="bg-white border border-yellow-200 p-6 hover:border-yellow-500 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-sm bg-yellow-50 border border-yellow-200 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-yellow-600" />
                  </div>
                  <h3 className="font-serif text-lg text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">How It Works</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">From Donor List to Installed Wall</h2>
              <p className="text-gray-600 mt-4 max-w-xl mx-auto text-base">Our proven process gets your donor wall designed, fabricated, and installed with zero stress on your team.</p>
            </div>
          </FadeIn>
          <div className="space-y-0">
            {[
              { step: "01", title: "Submit Your Donor List", desc: "Send us your donor names, giving levels, and any photos or logos. That's all we need to get started." },
              { step: "02", title: "Receive Your Artwork Proof — Within The Hour", desc: "Our design team produces a full digital mockup of your wall within the hour. See exactly what it will look like in bronze before you commit." },
              { step: "03", title: "Approve & We Begin Casting", desc: "Once you approve the design, we pour and cast every plaque in our American foundry. Museum-grade bronze, hand-finished to perfection." },
              { step: "04", title: "Delivery & Professional Installation", desc: "We ship or coordinate professional installation nationwide. Your wall is mounted, leveled, and ready for your unveiling event." },
            ].map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.1}>
                <div className="flex gap-6 py-8 border-b border-gray-100 last:border-0">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 border-2 border-yellow-500 flex items-center justify-center">
                      <span className="font-serif text-xl text-yellow-700">{item.step}</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="font-serif text-xl text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="hidden md:flex items-center">
                    <CheckCircle className="w-6 h-6 text-yellow-500" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* UNIVERSITY SEALS */}
      <section className="py-12 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-8">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Institutional Seals & Medallions</span>
              <h2 className="font-serif text-3xl md:text-4xl text-gray-900">Precision-Cast University & Institutional Seals</h2>
              <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm">Perfect as centerpieces for donor walls, entranceway features, and capital campaign monuments.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 gap-6">
            {SEALS.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group overflow-hidden border border-gray-200 bg-white hover:border-yellow-500 hover:shadow-lg transition-all duration-300 flex flex-col">
                  <div className="flex items-center justify-center p-6 bg-gray-50" style={{ minHeight: "260px" }}>
                    <img src={item.url} alt={item.label + " — bronze seal Champions in Bronze"} className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500" style={{ maxHeight: "280px" }} loading="lazy" />
                  </div>
                  <div className="p-5 bg-white">
                    <p className="font-serif text-base text-gray-900 font-semibold">{item.label}</p>
                    <Link to="/request-quote" className="inline-flex items-center gap-1 mt-2 text-yellow-700 font-sans text-xs uppercase tracking-widest font-bold hover:text-yellow-600 transition-colors">
                      Commission a Seal <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      <QuoteForm
        title="Get Your Free Donor Wall Design — Within The Hour"
        subtitle="Send us your donor list. We'll design your wall, show you a full proof, and give you everything you need to move forward. No commitment required."
        source="pro"
      />

      <BustsAndStatuesSection />
      <FAQSection faqs={faqs} title="Donor Recognition Wall FAQ" />

      <QuoteForm
        title="Ready to Honor the Donors Who Made It Possible?"
        subtitle="Over 50,000 satisfied customers. 200-year bronze. Artwork proof within the hour. 100% Made in the USA."
        source="pro"
      />
    </div>
  );
}