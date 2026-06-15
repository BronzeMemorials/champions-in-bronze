import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Award, Shield, Star, Building2 } from "lucide-react";
import FadeIn from "../components/shared/FadeIn";
import TrustBadges from "../components/shared/TrustBadges";
import SectionHeading from "../components/shared/SectionHeading";
import SEOHead from "../components/shared/SEOHead";
import { usePhotoLikeness } from "../hooks/usePhotoLikeness";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Champions in Bronze",
  "description": "America's premier bronze recognition manufacturer. Hall of Fame plaques, photo image cast plaques, donor recognition walls, championship plaques, and bronze busts for universities, stadiums, and professional athletic organizations.",
  "url": "https://www.championsinbronze.com",
  "telephone": "+17723090412",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "US"
  },
  "priceRange": "$$$$",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Bronze Recognition Products",
    "itemListElement": [
    { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "3D Bas-Relief Bronze Plaques" } },
    { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Photo Image Cast Plaques" } },
    { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Hall of Fame Plaques" } },
    { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Donor Recognition Walls" } },
    { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Bronze Athlete Busts" } },
    { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Championship Bronze Plaques" } },
    { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Custom Bronze Statues" } }]

  }
};

const faqSchemaItems = [
{ q: "What types of bronze plaques do you produce?", a: "We produce the full spectrum of athletic recognition plaques: 3D bas-relief plaques, photo image cast plaques, Hall of Fame plaques, championship plaques, donor recognition plaques, retired jersey displays, stadium dedication plaques, and memorial plaques. Every format is available in bronze or aluminum, custom-sized for your installation." },
{ q: "How does your photo image casting process work?", a: "Our proprietary Photo ImageCasting process permanently embeds actual photographs — not drawings — into bronze or aluminum. We use your submitted photos as the master; the finished plaque contains your exact image cast in metal. No in-person sessions required. Artwork proof within 48 hours." },
{ q: "What is the typical lead time for plaques?", a: "Digital artwork proof within the hour. Physical production is 15–30 days for standard plaques, 6–10 weeks for large Hall of Fame series and donor wall systems. Rush 5-day service available on select sizes." },
{ q: "Do you handle complete Hall of Fame installations?", a: "Yes. We are a full-service Hall of Fame manufacturer — from initial concept and layout design through fabrication, crating, and on-site installation. We coordinate directly with your facility management team." },
{ q: "What is the investment range for a Hall of Fame plaque program?", a: "Every program is custom-quoted based on scope, number of inductees, formats, and installation complexity. Request a quote and we'll deliver a full proposal and artwork proof within the hour — no commitment required." },
{ q: "Bronze vs. aluminum — which is right for my project?", a: "Bronze is the museum standard — rich amber warmth, exceptional detail, 200-year outdoor proven durability. Aluminum is significantly lighter and lower cost, ideal for indoor installations or budget-sensitive programs. We recommend bronze for permanent outdoor installations and aluminum for interior walls." },
{ q: "What is a bronze plaque made of?", a: "Bronze plaques are typically manufactured from architectural-grade cast bronze alloy, commonly ASTM B584, designed for long-term outdoor durability, corrosion resistance, and detailed artwork reproduction." },
{ q: "How long do bronze plaques last outdoors?", a: "A properly manufactured cast bronze plaque can last 50–100+ years outdoors with minimal maintenance. Bronze is one of the most durable recognition materials available for institutional signage, donor recognition walls, Hall of Fame displays, championship plaques, and athletic facility dedications." },
{ q: "What is the difference between cast bronze and aluminum plaques?", a: "Cast bronze offers a richer appearance, higher prestige, deeper relief detail, and longer-term value. Aluminum plaques are lighter and more economical but are generally considered a lower-tier architectural product compared to bronze plaques used for Hall of Fame recognition, donor walls, memorial installations, and university signage systems." },
{ q: "Can bronze plaques include photos or portraits?", a: "Yes. Bronze plaques can include etched photographs, 2D relief portraits, or full 3D bas-relief image castings created from photographs for Hall of Fame plaques, donor recognition displays, athletic awards, memorial plaques, championship recognition, and stadium commemorations." },
{ q: "What is a bas-relief bronze plaque?", a: "A bas-relief bronze plaque features raised sculpted artwork that projects from the background surface. Bas-relief bronze plaques are commonly used for Hall of Fame displays, donor recognition walls, veterans memorials, university dedications, and commemorative recognition systems." },
{ q: "What is the difference between a bronze bust and a bronze statue?", a: "A bronze bust typically includes the head and upper torso mounted on a pedestal, while a bronze statue is a full-body sculptural figure. Bronze busts and statues are commonly installed in universities, stadiums, Hall of Fame facilities, donor recognition programs, and athletic complexes." },
{ q: "How are bronze busts created from photographs?", a: "Artists digitally sculpt a likeness using reference photographs, then produce a clay or digital model before casting the final piece in bronze using the lost-wax casting process." },
{ q: "What finishes are available for bronze plaques?", a: "Common finishes include Satin Bronze, Statuary Bronze, Oxidized Bronze, Dark Oxidized, Polished Bronze, and Chemically Patinated finishes." },
{ q: "How much do bronze plaques cost?", a: "Pricing depends on plaque size, thickness, relief depth, artwork complexity, border style, finish, and mounting requirements. Every project is custom-quoted — request a quote for exact pricing." },
{ q: "How long does it take to manufacture a bronze plaque?", a: "Standard production timelines are typically 4–8 weeks depending on complexity, approvals, and artwork requirements. Rush production may also be available." },
{ q: "Can logos and custom artwork be added to bronze plaques?", a: "Yes. Bronze plaques can include corporate logos, university branding, military seals, athletic insignias, architectural renderings, custom borders, and sculpted relief artwork." },
{ q: "Are bronze statues and busts solid bronze?", a: "Most professional bronze sculptures are hollow cast bronze for structural integrity and weight management while maintaining substantial wall thickness and durability." },
{ q: "What is the lost-wax casting process?", a: "The lost-wax casting process is a traditional bronze casting method where a wax model is created, encased in ceramic, melted out, and replaced with molten bronze to capture extremely fine sculptural detail." },
{ q: "Why do universities and stadiums choose bronze instead of other materials?", a: "Bronze conveys permanence, prestige, tradition, and legacy recognition. It is considered the premier material for donor recognition plaques, championship commemorations, Hall of Fame installations, and stadium branding systems." }];


const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqSchemaItems.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": { "@type": "Answer", "text": a }
  }))
};

import ProcessTimeline from "../components/shared/ProcessTimeline";
import TestimonialCarousel from "../components/shared/TestimonialCarousel";
import QuoteForm from "../components/shared/QuoteForm";
import FAQSection from "../components/shared/FAQSection";

// Hero slides — plaque & recognition first
const heroSlides = [
{
  img: "https://media.base44.com/images/public/69e6638934292a547ec97753/90136d985_3987887D-191A-419C-B621-221DF36585E5.png",
  label: "Hall of Fame Plaques & Recognition Systems",
  title: "Championship\nRecognition\nCast in Bronze."
},
{
  img: "https://media.base44.com/images/public/69e6638934292a547ec97753/f54e9ac4d_ED04FD70-945D-4463-AC78-050B841D9D0C.png",
  label: "Photo Image Cast Plaques — Proprietary Process",
  title: "Permanent\nRecognition.\nExact Likeness."
},
{
  img: "https://media.base44.com/images/public/69e6638934292a547ec97753/5c025f1df_9D2C184B-2F6D-44F3-8F73-DA9EF4C4B828.png",
  label: "Donor Recognition Walls & Legacy Systems",
  title: "Legacy Cast\nin Bronze.\nForever."
},
{
  img: "https://media.base44.com/images/public/69e6638934292a547ec97753/807fb8285_1EF9640F-BCCF-47C1-8ADB-FF7ACD382588.png",
  label: "Hall of Fame Busts & Portrait Recognition",
  title: "Immortalize\nEvery\nLegend."
}];


// SECTION 1 — Bronze Plaques (dominant)
const plaquProducts = [
{
  image: "https://media.base44.com/images/public/69e6638934292a547ec97753/90136d985_3987887D-191A-419C-B621-221DF36585E5.png",
  label: "Most Requested",
  title: "3D Bas-Relief Plaques",
  desc: "High-depth sculptural plaques capturing exact athlete likeness from photographs. Championship moments, Hall of Fame recognition, retired jersey dedications.",
  to: "/3d-bas-relief-plaques",
  cta: "View Relief Plaques"
},
{
  image: "https://media.base44.com/images/public/69e6638934292a547ec97753/f54e9ac4d_ED04FD70-945D-4463-AC78-050B841D9D0C.png",
  label: "Proprietary Process",
  title: "Photo Image Cast Plaques",
  desc: "Real photographs permanently cast into bronze. Career retrospectives, team histories, and championship moments — your exact images cast forever in museum-grade bronze.",
  to: "/photo-image-casting-plaques",
  cta: "View Photo Cast"
},
{
  image: "https://media.base44.com/images/public/69e6638934292a547ec97753/f9ff2eea2_1FD764A1-3FE3-43F7-B620-ECD28F936C38.png",
  label: "Hall of Fame",
  title: "Hall of Fame Plaques",
  desc: "Complete Hall of Fame plaque systems for universities, stadiums, and professional athletic organizations. Individual and series installations.",
  to: "/hall-of-fame-plaques",
  cta: "View Hall of Fame"
},
{
  image: "https://media.base44.com/images/public/69e6638934292a547ec97753/5c025f1df_9D2C184B-2F6D-44F3-8F73-DA9EF4C4B828.png",
  label: "Capital Programs",
  title: "Donor Recognition Plaques",
  desc: "Permanent bronze donor recognition for capital campaigns, naming rights, and athletic facility dedications. Portrait photo-casting included.",
  to: "/donor-recognition",
  cta: "View Donor Systems"
},
{
  image: "https://media.base44.com/images/public/69e6638934292a547ec97753/2ef20594e_92544757-7bd9-4667-b3d0-ce1097be4314.png",
  label: "Stadium Grade",
  title: "Championship & Retirement Plaques",
  desc: "Championship recognition, retired jersey displays, and milestone tributes. Engineered for permanent stadium and arena installation.",
  to: "/championship-bronze-plaques",
  cta: "View Championship"
},
{
  image: "https://media.base44.com/images/public/69e6638934292a547ec97753/a9a624b83_57AF450C-DA6C-4768-9FD6-6B877E40CB2E.png",
  label: "Memorial & Dedication",
  title: "Stadium Dedication Plaques",
  desc: "Stadium naming rights, facility dedications, memorial plaques, and architectural recognition signage for venues of all scales.",
  to: "/dedication-plaques",
  cta: "View Dedication Plaques"
}];


// SECTION 2 — Hall of Fame Systems
const hofSystems = [
{ icon: Award, title: "Complete Hall of Fame Walls", desc: "Full-corridor installations from concept through mounting. Plaques, busts, timelines, and illuminated displays." },
{ icon: Building2, title: "Athletic Recognition Corridors", desc: "University and professional facility legacy corridors. Custom layouts, sport-specific shapes, and archival histories." },
{ icon: Shield, title: "Donor Recognition Systems", desc: "Multi-tier donor walls integrating photo-cast portraits, name panels, and legacy recognition at any scale." },
{ icon: Star, title: "Championship Display Systems", desc: "Championship trophy cases, banner recognition, and permanent bronze championship milestone displays." }];


// SECTION 3 — Busts
const bustTypes = [
{
  label: "Standard Hall of Fame Bust",
  img: "https://media.base44.com/images/public/69e6638934292a547ec97753/496d05ff8_99F60C02-07FA-4E6B-A2F7-A1DF3368DE0E.png",
  alt: "Standard Hall of Fame bronze bust — sculpted from athlete photograph"
},
{
  label: "Athlete Portrait Bust",
  img: "https://media.base44.com/images/public/69e6638934292a547ec97753/1daa60284_ECEF0D5E-181D-4F24-8FD8-994D7F9B3730.png",
  alt: "Custom athlete portrait bronze bust — exact likeness from photographs, no in-person sessions"
},
{
  label: "Coach Bust",
  img: "https://media.base44.com/images/public/69e6638934292a547ec97753/4d41d4287_0804D2D5-A521-470D-9D6D-8E45E69BA991.png",
  alt: "Coach portrait bronze bust — sculpted from photographs for Hall of Fame or recognition wall"
},
{
  label: "Championship Bust",
  img: "https://media.base44.com/images/public/69e6638934292a547ec97753/82c049fdc_1EFEDCFE-9322-40E1-88FB-5223406FB921.png",
  alt: "Championship bronze bust — bronze, museum quality"
},
{
  label: "Stadium Donor Bust",
  img: "https://media.base44.com/images/public/69e6638934292a547ec97753/580dca88d_BA78C4BD-B3AA-4B99-9EE6-70D7AC769604.png",
  alt: "Stadium donor recognition bronze bust — permanent bronze portrait for capital campaign"
},
{
  label: "Historic Athlete Bust",
  img: "https://media.base44.com/images/public/69e6638934292a547ec97753/4b1801f52_A48B1FB3-444D-4741-AE40-D4E863E0F068.png",
  alt: "Historic athlete bronze bust — created from archival photographs"
}];


// SECTION 4 — Statues (reduced, showcase only)
const soccerPositions = [
{ position: "Forward Kick Pose", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/f6b5763e1_0BB4AFDE-FA5D-4A01-8CB5-D9453AA9951F.png" },
{ position: "Goal Celebration Pose", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/aceb82ef5_8C52F27A-8EA2-4D4F-AF16-D02E1C58BFD8.png" }];

const hockeyPositions = [
{ position: "Goalie", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/e44a376cd_CD24F754-D4D6-4C4F-9913-36FBB0C2F5D7.png" },
{ position: "Forward", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/18d3f95a4_86AED4DB-6DE3-443F-B6D5-9A1ECB6B5D65.png" },
{ position: "Defenseman", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/4b9032e0d_B9A32438-CA2C-4E28-8952-22DB0925B681.png" }];

const baseballPositions = [
{ position: "Pitcher", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/ae8cf7957_ChatGPTImageMay28202608_44_52AM.png" },
{ position: "Batter", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/e991eeb20_D6CEFC45-7442-4F85-B951-76E2404E7719.png" },
{ position: "Catcher", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/9354cdeae_6A6BF141-0B16-4BAA-B2A6-B4AB5070E20B.png" }];

const basketballPositions = [
{ position: "Guard", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/385d62dba_ChatGPTImageMay28202608_46_07AM.png" },
{ position: "Forward", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/147740e3b_4CA5A3D0-6148-4652-9EB3-BCF3DAE9DEC7.png" },
{ position: "Center Dunk Pose", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/020f34d62_5E076DD7-856B-4C90-A8C7-3BD2336FD64F.png" }];

const footballPositions = [
{ position: "Quarterback", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/2ef20594e_92544757-7bd9-4667-b3d0-ce1097be4314.png" },
{ position: "Passing Stance", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/d4cc26079_ChatGPTImageMay28202608_47_38AM.png" },
{ position: "Lineman", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/9d6be36e2_E381DDD7-91BC-4FD3-A999-05CCFF675570.png" },
{ position: "Running Back", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/1bff77f0c_650A3449-F5F7-4EC2-8D17-D57C866CB4B5.png" }];


const faqs = [
{ question: "What types of bronze plaques do you produce?", answer: "We produce the full spectrum of athletic recognition plaques: 3D bas-relief plaques, photo image cast plaques, Hall of Fame plaques, championship plaques, donor recognition plaques, retired jersey displays, stadium dedication plaques, and memorial plaques. Every format is available in bronze or aluminum, custom-sized for your installation." },
{ question: "How does your photo image casting process work?", answer: "Our proprietary Photo ImageCasting process permanently embeds actual photographs — not drawings — into bronze or aluminum. We use your submitted photos as the master; the finished plaque contains your exact image cast in metal. No in-person sessions required. Artwork proof within 48 hours." },
{ question: "What is the typical lead time for plaques?", answer: "Digital artwork proof within the hour. Physical production is 15–30 days for standard plaques, 6–10 weeks for large Hall of Fame series and donor wall systems. Rush 5-day service available on select sizes." },
{ question: "Do you handle complete Hall of Fame installations?", answer: "Yes. We are a full-service Hall of Fame manufacturer — from initial concept and layout design through fabrication, crating, and on-site installation. We coordinate directly with your facility management team." },
{ question: "What is the investment range for a Hall of Fame plaque program?", answer: "Every program is custom-quoted based on scope, number of inductees, formats, and installation complexity. Request a quote and we'll deliver a full proposal and artwork proof within the hour — no commitment required." },
{ question: "Bronze vs. aluminum — which is right for my project?", answer: "Bronze is the museum standard — rich amber warmth, exceptional detail, 200-year outdoor proven durability. Aluminum is significantly lighter and lower cost, ideal for indoor installations or budget-sensitive programs. We recommend bronze for permanent outdoor installations and aluminum for interior walls." }];


function SportGrid({ positions, sport, cols = "lg:grid-cols-3" }) {
  return (
    <div className={`grid grid-cols-2 ${cols} gap-4 md:gap-6`}>
      {positions.map((item, i) =>
      <FadeIn key={item.position} delay={i * 0.08}>
          <div className="group relative overflow-hidden rounded-sm bg-white border border-bronze/20 shadow-sm hover:shadow-md hover:border-bronze/50 transition-all duration-300">
            <div className="aspect-[3/4] overflow-hidden bg-secondary/30">
              <img src={item.img} alt={`Bronze ${sport} ${item.position} statue — life-size athletic sculpture from photograph`}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-4 text-center border-t border-bronze/10">
              <p className="font-serif text-base text-parchment">{item.position}</p>
              <p className="text-parchment/40 font-sans text-base uppercase tracking-widest mt-1">{sport}</p>
            </div>
          </div>
        </FadeIn>
      )}
    </div>);

}

export default function ProHome() {
  const current = heroSlides[0];
  const photoLikenessPhrase = usePhotoLikeness();

  return (
    <div className="bg-obsidian text-parchment">
      <SEOHead
        title="Champions in Bronze — Bronze Hall of Fame Plaques, Busts & Statues | American Foundry"
        description="America's premier bronze recognition manufacturer. Hall of Fame plaques, photo image cast plaques, donor recognition walls, championship bronze plaques, and athlete busts for universities, stadiums, and professional athletic organizations. Artwork proof within the hour. Made in USA."
        canonical="/"
        ogImage="https://media.base44.com/images/public/69e6638934292a547ec97753/90136d985_3987887D-191A-419C-B621-221DF36585E5.png" />
      
      

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={current.img} alt="Champions in Bronze — Hall of Fame plaques, busts, and bronze statues" className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/60 to-white/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/85 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 pb-20 sm:pb-28 pt-32 sm:pt-40 w-full">
          <FadeIn>
            <span className="font-sans tracking-[0.4em] uppercase text-base font-semibold block mb-5 text-[hsl(var(--foreground))] text-center">LEGACY TRIBUTES IN PLAQUES, BUSTS, & STATUES

            </span>
            <h1 className="font-serif sm:text-6xl md:text-8xl lg:text-[7rem] leading-[0.9] text-parchment w-full text-center text-3xl">Immortalize
Your Legacy 
Champions Deserve 
to Live Forever</h1>
            <p className="mt-6 max-w-2xl text-base sm:text-xl md:text-xl text-parchment/70 leading-relaxed font-sans font-medium normal-case">Champions in Bronze transforms greatness into permanent legacy through elite Hall of Fame plaques, donor recognition walls, championship displays, athlete busts, and commemorative bronze statues created from your exact photograph — designed to honor sacrifice, celebrate champions, preserve brotherhood, and immortalize the moments that deserve to be remembered for generations.
            </p>
            
            
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <Link to="/request-quote" className="text-center bg-bronze hover:bg-gold text-white px-6 py-4 sm:px-10 sm:py-5 font-sans text-xl uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                Request Quote
              </Link>
              <Link to="/hall-of-fame-bronze-displays" className="text-center bg-parchment/10 hover:bg-parchment/20 border border-parchment/30 hover:border-bronze text-parchment px-6 py-4 sm:px-10 sm:py-5 font-sans text-xl uppercase tracking-[0.2em] transition-all duration-300">
                Start Hall of Fame Project
              </Link>
              <Link to="/photo-image-casting-plaques" className="text-center border border-parchment/30 hover:border-bronze text-parchment px-6 py-4 sm:px-10 sm:py-5 font-sans text-xl uppercase tracking-[0.2em] transition-all duration-300">
                Upload Photos for Plaque Design
              </Link>
            </div>
          </FadeIn>


        </div>

        <a href="#plaques" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-parchment/50 hover:text-bronze transition-colors">
          <span className="font-sans text-base uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </section>

      <QuoteForm title="Request Your Free Artwork Proof" subtitle="Tell us about your project — we'll deliver a digital proof within the hour." source="pro" />

      {/* ── TRUSTED BY ── */}
      <section className="py-8 border-y border-bronze/20 bg-obsidian">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-12">
            <span className="text-parchment/50 font-sans text-base uppercase tracking-[0.3em] whitespace-nowrap flex-shrink-0">Trusted By</span>
            <div className="flex flex-wrap justify-center gap-3 md:gap-10">
              {["Athletic Departments", "Hall of Fame Committees", "Stadium & Arena Operators", "Universities & Colleges", "Donor Foundations", "Booster & Alumni Organizations"].map((org) => <span key={org} className="text-parchment/60 font-sans text-base uppercase tracking-[0.15em] hover:text-bronze transition-colors text-center">{org}</span>)}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT CATEGORY ROWS ── */}
      <section className="py-10 md:py-16 bg-white border-b border-bronze/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-14 md:space-y-20">

          {/* Row 1 — Photo Image Casting Bronze Plaques */}
          <FadeIn>
            <div className="mb-6">
              <span className="text-bronze font-sans tracking-[0.3em] uppercase text-base font-semibold">Category 01</span>
              <h2 className="font-serif text-3xl text-parchment mt-1">Photo Image Casting Bronze Plaques</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[{ img: "https://media.base44.com/images/public/69e6638934292a547ec97753/f54e9ac4d_ED04FD70-945D-4463-AC78-050B841D9D0C.png", label: "Hall of Fame Portrait Plaque", alt: "Hall of Fame portrait Photo ImageCast bronze plaque — exact athlete likeness from photographs", desc: "Your real photographs — career highlights, championship moments, team history — permanently cast into museum-quality bronze.", cta: "View Hall of Fame Plaques", to: "/hall-of-fame-plaques" }, { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/f9ff2eea2_1FD764A1-3FE3-43F7-B620-ECD28F936C38.png", label: "Championship Tribute Plaque", alt: "Championship tribute Photo ImageCast bronze plaque — real photos permanently cast in museum-quality bronze", desc: "Not engraved. Not printed. Not an artist's interpretation. Your exact image, cast forever in museum-quality bronze.", cta: "View Championship Plaques", to: "/championship-bronze-plaques" }, { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/5c025f1df_9D2C184B-2F6D-44F3-8F73-DA9EF4C4B828.png", label: "Donor Recognition Plaque", alt: "Donor recognition Photo ImageCast bronze plaque — donor portrait permanently cast in museum-quality bronze", desc: "The most powerful recognition product in athletics today — permanent bronze casting with your exact image cast forever.", cta: "View Donor Plaques", to: "/donor-recognition" }].map((item, i) => <div key={i} className="group flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden border border-bronze/20 group-hover:border-bronze/50 transition-all duration-300 shadow-sm">
                    <img src={item.img} alt={item.alt || item.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="pt-3 pb-4 border-b border-bronze/15 flex flex-col gap-2">
                    <div>
                      <p className="font-serif text-xl text-parchment">{item.label}</p>
                      <p className="text-black font-sans mt-1 leading-relaxed text-base">{item.desc}</p>
                    </div>
                    <Link to={item.to} className="text-bronze hover:text-gold font-sans text-base uppercase tracking-widest flex items-center gap-1 transition-colors">{item.cta} <ArrowRight className="w-3 h-3" /></Link>
                  </div>
                </div>)}
            </div>
            <div className="mt-5">
              <Link to="/photo-image-casting-plaques" className="inline-flex items-center gap-2 bg-bronze hover:bg-gold text-white px-7 py-3.5 font-sans text-base uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                View All Photo Image Cast Plaques <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </FadeIn>

          {/* Row 2 — 3D Bas-Relief with Photo Image Casting */}
          <FadeIn>
            <div className="mb-6">
              <span className="text-bronze font-sans tracking-[0.3em] uppercase text-base font-semibold">Category 02</span>
              <h2 className="font-serif text-3xl text-parchment mt-1">3D Bas-Relief with Photo Image Casting</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/90136d985_3987887D-191A-419C-B621-221DF36585E5.png", label: "Football Relief & Photo Cast", desc: "High-depth sculptural action figures rising from the surface with your actual photographs cast permanently into bronze.", cta: "Request Quote", to: "/request-quote" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/2ef20594e_92544757-7bd9-4667-b3d0-ce1097be4314.png", label: "Basketball Relief & Photo Cast", desc: "Figures, faces, and moments sculpted in up to 1 inch of dimensional depth. Light plays across the contours.", cta: "Request Quote", to: "/request-quote" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/f54e9ac4d_ED04FD70-945D-4463-AC78-050B841D9D0C.png", label: "Baseball Relief & Photo Cast", desc: "Every viewing angle reveals something new. The ultimate tribute for Hall of Fame inductees and championship programs.", cta: "Request Quote", to: "/request-quote" }].
              map((item, i) =>
              <div key={i} className="group flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden border border-bronze/20 group-hover:border-bronze/50 transition-all duration-300 shadow-sm">
                    <img src={item.img} alt={item.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="pt-3 pb-4 border-b border-bronze/15 flex flex-col gap-2">
                    <div>
                      <p className="font-serif text-xl text-parchment">{item.label}</p>
                      <p className="text-black font-sans mt-1 leading-relaxed text-base">{item.desc}</p>
                    </div>
                    <Link to={item.to} className="text-bronze hover:text-gold font-sans text-base uppercase tracking-widest flex items-center gap-1 transition-colors">{item.cta} <ArrowRight className="w-3 h-3" /></Link>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-5">
              <Link to="/3d-bas-relief-plaques" className="inline-flex items-center gap-2 bg-bronze hover:bg-gold text-white px-7 py-3.5 font-sans text-base uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                View All 3D Bas-Relief + Photo Cast Plaques <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </FadeIn>

          {/* Row 3 — 3D Bas-Relief Plaques */}
          <FadeIn>
            <div className="mb-6">
              <span className="text-bronze font-sans tracking-[0.3em] uppercase text-base font-semibold">Category 03</span>
              <h2 className="font-serif text-3xl text-parchment mt-1">3D Bas-Relief Plaques</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/2ef20594e_92544757-7bd9-4667-b3d0-ce1097be4314.png", label: "Championship Relief Plaque", desc: "Athletes, moments, and championship scenes rise physically from the surface with up to 1 inch of dimensional depth.", cta: "View Championship Plaques", to: "/championship-bronze-plaques" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/90136d985_3987887D-191A-419C-B621-221DF36585E5.png", label: "Hall of Fame Relief Plaque", desc: "Every face captured from your actual photographs — not a generic figure. Hand-sculpted by master artisans.", cta: "View Hall of Fame", to: "/hall-of-fame-plaques" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/a9a624b83_57AF450C-DA6C-4768-9FD6-6B877E40CB2E.png", label: "Athletic Recognition Plaque", desc: "Cast in bronze and built to last 100+ years outdoors. The most prestigious form of athletic plaque recognition.", cta: "View All Plaques", to: "/3d-bas-relief-plaques" }].
              map((item, i) =>
              <div key={i} className="group flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden border border-bronze/20 group-hover:border-bronze/50 transition-all duration-300 shadow-sm">
                    <img src={item.img} alt={item.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="pt-3 pb-4 border-b border-bronze/15 flex flex-col gap-2">
                    <div>
                      <p className="font-serif text-xl text-parchment">{item.label}</p>
                      <p className="text-black font-sans mt-1 leading-relaxed text-base">{item.desc}</p>
                    </div>
                    <Link to={item.to} className="text-bronze hover:text-gold font-sans text-base uppercase tracking-widest flex items-center gap-1 transition-colors">{item.cta} <ArrowRight className="w-3 h-3" /></Link>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-5">
              <Link to="/3d-bas-relief-plaques" className="inline-flex items-center gap-2 bg-bronze hover:bg-gold text-white px-7 py-3.5 font-sans text-base uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                View All 3D Bas-Relief Plaques <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </FadeIn>

          {/* Row 4 — Standard Bronze Plaques */}
          <FadeIn>
            <div className="mb-6">
              <span className="text-bronze font-sans tracking-[0.3em] uppercase text-base font-semibold">Category 04</span>
              <h2 className="font-serif text-3xl text-parchment mt-1">Standard Bronze Plaques</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/a9a624b83_57AF450C-DA6C-4768-9FD6-6B877E40CB2E.png", label: "Stadium Dedication Plaque", desc: "Cast architectural bronze plaques for facility dedications, memorial installations, alumni recognition, and institutional signage.", cta: "View Dedication Plaques", to: "/dedication-plaques" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/f9ff2eea2_1FD764A1-3FE3-43F7-B620-ECD28F936C38.png", label: "Memorial Bronze Plaque", desc: "Bronze or aluminum. Available in any size, any shape for complete customization.", cta: "View Memorial Plaques", to: "/bronze-memorials" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/5c025f1df_9D2C184B-2F6D-44F3-8F73-DA9EF4C4B828.png", label: "Alumni Recognition Plaque", desc: "Every format rated for 100+ years of outdoor permanence. The institutional standard for universities and stadiums.", cta: "View Alumni Memorials", to: "/alumni-memorials" }].
              map((item, i) =>
              <div key={i} className="group flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden border border-bronze/20 group-hover:border-bronze/50 transition-all duration-300 shadow-sm">
                    <img src={item.img} alt={item.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="pt-3 pb-4 border-b border-bronze/15 flex flex-col gap-2">
                    <div>
                      <p className="font-serif text-xl text-parchment">{item.label}</p>
                      <p className="text-black font-sans mt-1 leading-relaxed text-base">{item.desc}</p>
                    </div>
                    <Link to={item.to} className="text-bronze hover:text-gold font-sans text-base uppercase tracking-widest flex items-center gap-1 transition-colors">{item.cta} <ArrowRight className="w-3 h-3" /></Link>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-5">
              <Link to="/championship-bronze-plaques" className="inline-flex items-center gap-2 bg-bronze hover:bg-gold text-white px-7 py-3.5 font-sans text-base uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                View All Standard Bronze Plaques <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </FadeIn>

          {/* Row 5 — Busts */}
          <FadeIn>
            <div className="mb-6">
              <span className="text-bronze font-sans tracking-[0.3em] uppercase text-base font-semibold">Category 05</span>
              <h2 className="font-serif text-3xl text-parchment mt-1">Busts</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/496d05ff8_99F60C02-07FA-4E6B-A2F7-A1DF3368DE0E.png", label: "Hall of Fame Bust", desc: "When champions see themselves immortalized in bronze, the emotion is overwhelming. Created from your exact photographs.", cta: "View Hall of Fame Busts", to: "/bronze-athlete-busts" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/1daa60284_ECEF0D5E-181D-4F24-8FD8-994D7F9B3730.png", label: "Athlete Portrait Bust", desc: "Advanced sculptural technology with no in-person sessions required. No generic likenesses. Museum-quality craftsmanship.", cta: "View Athlete Busts", to: "/bronze-athlete-busts" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/4d41d4287_0804D2D5-A521-470D-9D6D-8E45E69BA991.png", label: "Coach Portrait Bust", desc: "Hall of Fame corridors, trophy rooms, and legacy recognition environments designed for permanent institutional display.", cta: "Request a Bust Quote", to: "/request-quote" }].
              map((item, i) =>
              <div key={i} className="group flex flex-col">
                  <div className="overflow-hidden border border-bronze/20 group-hover:border-bronze/50 transition-all duration-300 shadow-sm bg-secondary/20">
                    <img src={item.img} alt={item.label} className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="pt-3 pb-4 border-b border-bronze/15 flex flex-col gap-2">
                    <div>
                      <p className="font-serif text-xl text-parchment">{item.label}</p>
                      <p className="text-black font-sans text-base mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                    <Link to={item.to} className="text-bronze hover:text-gold font-sans text-base uppercase tracking-widest flex items-center gap-1 transition-colors">{item.cta} <ArrowRight className="w-3 h-3" /></Link>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-5">
              <Link to="/bronze-athlete-busts" className="inline-flex items-center gap-2 bg-bronze hover:bg-gold text-white px-7 py-3.5 font-sans text-base uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                View All Bronze Busts <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </FadeIn>

          {/* Row 6 — Statues */}
          <FadeIn>
            <div className="mb-6">
              <span className="text-bronze font-sans tracking-[0.3em] uppercase text-base font-semibold">Category 06</span>
              <h2 className="font-serif text-3xl text-parchment mt-1">Statues</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/2ef20594e_92544757-7bd9-4667-b3d0-ce1097be4314.png", label: "Football Quarterback Statue", desc: "Legends battled, sacrificed, and rose. Now their story lives in bronze. Life-size and heroic-scale sculptures.", cta: "View Football Statues", to: "/football" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/385d62dba_ChatGPTImageMay28202608_46_07AM.png", label: "Basketball Guard Statue", desc: "Sculpted from your actual photographs for stadium entrances, arena lobbies, and campus landmarks.", cta: "View Basketball Statues", to: "/basketball" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/ae8cf7957_ChatGPTImageMay28202608_44_52AM.png", label: "Baseball Pitcher Statue", desc: "Every figure captures exact likeness — bone structure, athletic stance, personality. Champions fade only when forgotten.", cta: "View Baseball Statues", to: "/baseball" }].
              map((item, i) =>
              <div key={i} className="group flex flex-col">
                  <div className="overflow-hidden border border-bronze/20 group-hover:border-bronze/50 transition-all duration-300 shadow-sm bg-secondary/20">
                    <img src={item.img} alt={item.label} className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="pt-3 pb-4 border-b border-bronze/15 flex flex-col gap-2">
                    <div>
                      <p className="font-serif text-xl text-parchment">{item.label}</p>
                      <p className="text-black font-sans text-base mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                    <Link to={item.to} className="text-bronze hover:text-gold font-sans text-base uppercase tracking-widest flex items-center gap-1 transition-colors">{item.cta} <ArrowRight className="w-3 h-3" /></Link>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-5">
              <Link to="/custom-bronze-athlete-statues" className="inline-flex items-center gap-2 bg-bronze hover:bg-gold text-white px-7 py-3.5 font-sans text-base uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                View All Bronze Statues <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </FadeIn>

          {/* Row 7 — 3D Bronze Jerseys */}
          <FadeIn>
            <div className="mb-6">
              <span className="text-bronze font-sans tracking-[0.3em] uppercase text-base font-semibold">Category 07</span>
              <h2 className="font-serif text-3xl text-parchment mt-1">3D Bronze Jerseys</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/2ef20594e_92544757-7bd9-4667-b3d0-ce1097be4314.png", label: "Retired Jersey Plaque", desc: "The number that defined a career — cast permanently in bronze. Dimensional 3D bronze jersey plaques.", cta: "View Retired Jersey Plaques", to: "/retired-jersey-displays" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/90136d985_3987887D-191A-419C-B621-221DF36585E5.png", label: "Championship Jersey Display", desc: "For retired number ceremonies, championship tributes, and Hall of Fame installations. Available in any team colors.", cta: "View Championship Displays", to: "/championship-bronze-plaques" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/a9a624b83_57AF450C-DA6C-4768-9FD6-6B877E40CB2E.png", label: "Hall of Fame Jersey Plaque", desc: "Cast in bronze or aluminum with custom typography. The most visually striking way to honor a retired number.", cta: "View Hall of Fame", to: "/hall-of-fame-plaques" }].
              map((item, i) =>
              <div key={i} className="group flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden border border-bronze/20 group-hover:border-bronze/50 transition-all duration-300 shadow-sm">
                    <img src={item.img} alt={item.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="pt-3 pb-4 border-b border-bronze/15 flex flex-col gap-2">
                    <div>
                      <p className="font-serif text-xl text-parchment">{item.label}</p>
                      <p className="text-black font-sans text-base mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                    <Link to={item.to} className="text-bronze hover:text-gold font-sans text-base uppercase tracking-widest flex items-center gap-1 transition-colors">{item.cta} <ArrowRight className="w-3 h-3" /></Link>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-5">
              <Link to="/3d-relief-jersey-plaques" className="inline-flex items-center gap-2 bg-bronze hover:bg-gold text-white px-7 py-3.5 font-sans text-base uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                View All 3D Bronze Jersey Plaques <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </FadeIn>

          {/* Row 8 — Donor Recognition Walls */}
          <FadeIn>
            <div className="mb-6">
              <span className="text-bronze font-sans tracking-[0.3em] uppercase text-base font-semibold">Category 08</span>
              <h2 className="font-serif text-3xl text-parchment mt-1">Donor Recognition Walls</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/f9ff2eea2_1FD764A1-3FE3-43F7-B620-ECD28F936C38.png", label: "Stadium Donor Recognition Wall", desc: "Your contribution deserves permanence. Architectural donor recognition environments that transform generosity into permanent bronze.", cta: "View Stadium Donor Walls", to: "/stadium-donor-walls" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/5c025f1df_9D2C184B-2F6D-44F3-8F73-DA9EF4C4B828.png", label: "Athletic Facility Donor Wall", desc: "Leadership and legacy transformed into permanent bronze recognition designed to inspire future generations.", cta: "View Athletic Donor Walls", to: "/athletic-donor-walls" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/a9a624b83_57AF450C-DA6C-4768-9FD6-6B877E40CB2E.png", label: "Capital Campaign Recognition Wall", desc: "Installed at universities, stadiums, athletic facilities, and capital campaigns nationwide.", cta: "View Capital Campaigns", to: "/capital-campaign-recognition" }].
              map((item, i) =>
              <div key={i} className="group flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden border border-bronze/20 group-hover:border-bronze/50 transition-all duration-300 shadow-sm">
                    <img src={item.img} alt={item.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="pt-3 pb-4 border-b border-bronze/15 flex flex-col gap-2">
                    <div>
                      <p className="font-serif text-xl text-parchment">{item.label}</p>
                      <p className="text-black font-sans text-base mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                    <Link to={item.to} className="text-bronze hover:text-gold font-sans text-base uppercase tracking-widest flex items-center gap-1 transition-colors">{item.cta} <ArrowRight className="w-3 h-3" /></Link>
                  </div>
                </div>
              )}
            </div>
            <div className="mt-5">
              <Link to="/donor-recognition" className="inline-flex items-center gap-2 bg-bronze hover:bg-gold text-white px-7 py-3.5 font-sans text-base uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                View All Donor Recognition Walls <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ── RECENT WORK GALLERY ── */}
      <section className="py-10 md:py-14 bg-white border-b border-bronze/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="mb-6">
              <span className="text-bronze font-sans tracking-[0.3em] uppercase text-base font-semibold">Recent Work</span>
              <h2 className="font-serif text-3xl text-parchment mt-1">Photo Image Cast & 3D Bas-Relief Gallery</h2>
              <p className="text-black font-sans text-base mt-2 max-w-3xl">Real artwork proofs — basketball, baseball, football, soccer, softball, and volleyball — cast in bronze from actual photographs.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/3a420fcb9_cast-bronze-bas-relief-image-cast-basketball-actuion.jpg", label: "Basketball Action — Hall of Fame Plaque" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/3f591fbc5_cast-bronze-bas-relief-image-cast-football-circle.jpg", label: "Football Hall of Fame Circle Plaque" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/b24142f8b_cast-bronze-bas-relief-image-cast-plaque-baseball.jpg", label: "Baseball Hall of Fame Relief Plaque" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/6a129b51e_cast-bronze-bas-relief-image-cast-recognition-circle.jpg", label: "Recognition Circle — Hall of Fame Plaque" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/b1e4ad47f_cast-bronze-bas-relief-image-cast-bronze-plaque-baseball-boy.jpg", label: "Youth Baseball — 3D Bas-Relief Plaque" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/cffa3fd54_cast-bronze-bas-relief-image-cast-bronze-plaque-baseball-boy-card.jpg", label: "Baseball Card Photo ImageCast Plaque" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/fde11c96b_cast-bronze-bas-relief-image-cast-bronze-statue-baseball-boy.jpg", label: "Youth Baseball Bronze Bust" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/30599141b_cast-bronze-bas-relief-image-cast-soccer-circle.jpg", label: "Soccer Hall of Fame Circle Plaque" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/fc1fffc70_cast-bronze-bas-relief-image-cast-softball-catcher-off-frame.jpg", label: "Softball Catcher Hall of Fame Plaque" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/38aa9fc20_cast-bronze-bas-relief-image-cast-softball-off-frame.jpg", label: "Softball Pitcher Hall of Fame Plaque" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/cc48709e7_cast-bronze-bas-relief-image-cast-volleyball-action.jpg", label: "Volleyball Hall of Fame Action Plaque" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/1fb685c10_cast-bronze-bas-relief-image-cast-volleyball-circle.jpg", label: "Volleyball Circle Recognition Plaque" },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.04}>
                <div className="group overflow-hidden border border-bronze/20 hover:border-bronze/50 transition-all duration-300 shadow-sm">
                  <div className="aspect-square overflow-hidden bg-secondary/20">
                    <img src={item.img} alt={item.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="px-2 py-2 border-t border-bronze/10">
                    <p className="font-sans text-[11px] text-black font-semibold leading-tight">{item.label}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div className="mt-6">
              <Link to="/request-quote" className="inline-flex items-center gap-2 bg-bronze hover:bg-gold text-white px-7 py-3.5 font-sans text-base uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                Request Your Free Artwork Proof <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <QuoteForm title="Get a Quote — Artwork Within The Hour" subtitle="Tell us about your project — we'll deliver a digital proof within the hour." source="pro" />

      <TrustBadges />

      {/* ── SPORT CATEGORY ROWS ── */}
      <section className="py-10 md:py-16 bg-secondary/20 border-b border-bronze/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <p className="text-center text-bronze font-sans tracking-[0.3em] uppercase text-base font-semibold mb-2">By Sport</p>
            <h2 className="font-serif text-4xl text-parchment text-center mb-16">Bronze Recognition by Sport</h2>
          </FadeIn>
          <div className="space-y-20">

            {/* Football */}
            <FadeIn>
              <div className="mb-6">
                <span className="text-bronze font-sans tracking-[0.3em] uppercase text-base font-semibold">Sport 01</span>
                <h3 className="font-serif text-3xl text-parchment mt-1">Football</h3>
                <p className="text-black font-sans text-xl mt-2 max-w-2xl">The sacrifice, brotherhood, and grind of football deserves permanent recognition. Hall of Fame portrait plaques, championship commemorations, retired jersey tributes, donor recognition walls, and life-size bronze statues — sculpted from actual photographs and built to honor every player, coach, and program that gave everything to the game.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/f54e9ac4d_ED04FD70-945D-4463-AC78-050B841D9D0C.png", label: "Football Hall of Fame Plaque", cta: "View Hall of Fame Plaques", to: "/hall-of-fame-plaques" },
                { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/496d05ff8_99F60C02-07FA-4E6B-A2F7-A1DF3368DE0E.png", label: "Football Portrait Bust", cta: "View Bronze Busts", to: "/bronze-athlete-busts" },
                { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/2ef20594e_92544757-7bd9-4667-b3d0-ce1097be4314.png", label: "Football Quarterback Statue", cta: "View Football Statues", to: "/football" }].
                map((item, i) =>
                <div key={i} className="group flex flex-col">
                    <div className="overflow-hidden border border-bronze/20 group-hover:border-bronze/50 transition-all duration-300 shadow-sm bg-secondary/20">
                      <img src={item.img} alt={item.label} className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="pt-3 pb-4 border-b border-bronze/15 flex items-center justify-between">
                      <p className="font-serif text-xl text-parchment">{item.label}</p>
                      <Link to={item.to} className="text-bronze hover:text-gold font-sans text-base uppercase tracking-widest flex items-center gap-1 transition-colors whitespace-nowrap ml-3">{item.cta} <ArrowRight className="w-3 h-3" /></Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-5">
                <Link to="/football" className="inline-flex items-center gap-2 bg-bronze hover:bg-gold text-white px-7 py-3.5 font-sans text-base uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                  View All Football Bronze <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </FadeIn>

            {/* Basketball */}
            <FadeIn>
              <div className="mb-6">
                <span className="text-bronze font-sans tracking-[0.3em] uppercase text-base font-semibold">Sport 02</span>
                <h3 className="font-serif text-3xl text-parchment mt-1">Basketball</h3>
                <p className="text-black font-sans text-xl mt-2 max-w-2xl">From arena-entrance statues to Hall of Fame portrait plaques and championship trophy recognition — basketball programs trust Champions in Bronze to capture the legends, the moments, and the championships that define programs and inspire future generations.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/90136d985_3987887D-191A-419C-B621-221DF36585E5.png", label: "Basketball Hall of Fame Plaque", cta: "View Hall of Fame Plaques", to: "/hall-of-fame-plaques" },
                { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/1daa60284_ECEF0D5E-181D-4F24-8FD8-994D7F9B3730.png", label: "Basketball Portrait Bust", cta: "View Bronze Busts", to: "/bronze-athlete-busts" },
                { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/385d62dba_ChatGPTImageMay28202608_46_07AM.png", label: "Basketball Player Statue", cta: "View Basketball Statues", to: "/basketball" }].
                map((item, i) =>
                <div key={i} className="group flex flex-col">
                    <div className="overflow-hidden border border-bronze/20 group-hover:border-bronze/50 transition-all duration-300 shadow-sm bg-secondary/20">
                      <img src={item.img} alt={item.label} className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="pt-3 pb-4 border-b border-bronze/15 flex items-center justify-between">
                      <p className="font-serif text-xl text-parchment">{item.label}</p>
                      <Link to={item.to} className="text-bronze hover:text-gold font-sans text-base uppercase tracking-widest flex items-center gap-1 transition-colors whitespace-nowrap ml-3">{item.cta} <ArrowRight className="w-3 h-3" /></Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-5">
                <Link to="/basketball" className="inline-flex items-center gap-2 bg-bronze hover:bg-gold text-white px-7 py-3.5 font-sans text-base uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                  View All Basketball Bronze <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </FadeIn>

            {/* Baseball */}
            <FadeIn>
              <div className="mb-6">
                <span className="text-bronze font-sans tracking-[0.3em] uppercase text-base font-semibold">Sport 03</span>
                <h3 className="font-serif text-3xl text-parchment mt-1">Baseball</h3>
                <p className="text-black font-sans text-xl mt-2 max-w-2xl">Baseball is the sport of legacy. Retired numbers, Hall of Fame walls, stadium dedication plaques, and bronze statues that anchor the identity of every ballpark. Champions in Bronze creates baseball recognition designed to outlast the stadium itself.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/f54e9ac4d_ED04FD70-945D-4463-AC78-050B841D9D0C.png", label: "Baseball Hall of Fame Plaque", cta: "View Hall of Fame Plaques", to: "/hall-of-fame-plaques" },
                { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/580dca88d_BA78C4BD-B3AA-4B99-9EE6-70D7AC769604.png", label: "Baseball Portrait Bust", cta: "View Bronze Busts", to: "/bronze-athlete-busts" },
                { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/ae8cf7957_ChatGPTImageMay28202608_44_52AM.png", label: "Baseball Pitcher Statue", cta: "View Baseball Statues", to: "/baseball" }].
                map((item, i) =>
                <div key={i} className="group flex flex-col">
                    <div className="overflow-hidden border border-bronze/20 group-hover:border-bronze/50 transition-all duration-300 shadow-sm bg-secondary/20">
                      <img src={item.img} alt={item.label} className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="pt-3 pb-4 border-b border-bronze/15 flex items-center justify-between">
                      <p className="font-serif text-xl text-parchment">{item.label}</p>
                      <Link to={item.to} className="text-bronze hover:text-gold font-sans text-base uppercase tracking-widest flex items-center gap-1 transition-colors whitespace-nowrap ml-3">{item.cta} <ArrowRight className="w-3 h-3" /></Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-5">
                <Link to="/baseball" className="inline-flex items-center gap-2 bg-bronze hover:bg-gold text-white px-7 py-3.5 font-sans text-base uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                  View All Baseball Bronze <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </FadeIn>

            {/* Women's Basketball */}
            <FadeIn>
              <div className="mb-6">
                <span className="text-bronze font-sans tracking-[0.3em] uppercase text-base font-semibold">Sport 04</span>
                <h3 className="font-serif text-3xl text-parchment mt-1">Women's Basketball</h3>
                <p className="text-black font-sans text-xl mt-2 max-w-2xl">Every champion deserves recognition that matches their greatness. Hall of Fame plaques, portrait busts, and bronze statues celebrating women's basketball excellence — the legends who built programs, broke records, and inspired the next generation of athletes.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/f54e9ac4d_ED04FD70-945D-4463-AC78-050B841D9D0C.png", label: "Women's Hall of Fame Plaque", cta: "View Hall of Fame Plaques", to: "/hall-of-fame-plaques" },
                { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/4b1801f52_A48B1FB3-444D-4741-AE40-D4E863E0F068.png", label: "Women's Portrait Bust", cta: "View Bronze Busts", to: "/bronze-athlete-busts" },
                { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/385d62dba_ChatGPTImageMay28202608_46_07AM.png", label: "Women's Basketball Statue", cta: "View Basketball Statues", to: "/basketball" }].
                map((item, i) =>
                <div key={i} className="group flex flex-col">
                    <div className="overflow-hidden border border-bronze/20 group-hover:border-bronze/50 transition-all duration-300 shadow-sm bg-secondary/20">
                      <img src={item.img} alt={item.label} className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="pt-3 pb-4 border-b border-bronze/15 flex items-center justify-between">
                      <p className="font-serif text-xl text-parchment">{item.label}</p>
                      <Link to={item.to} className="text-bronze hover:text-gold font-sans text-base uppercase tracking-widest flex items-center gap-1 transition-colors whitespace-nowrap ml-3">{item.cta} <ArrowRight className="w-3 h-3" /></Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-5">
                <Link to="/basketball" className="inline-flex items-center gap-2 bg-bronze hover:bg-gold text-white px-7 py-3.5 font-sans text-base uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                  View All Women's Basketball Bronze <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </FadeIn>

            {/* Soccer */}
            <FadeIn>
              <div className="mb-6">
                <span className="text-bronze font-sans tracking-[0.3em] uppercase text-base font-semibold">Sport 05</span>
                <h3 className="font-serif text-3xl text-parchment mt-1">Soccer</h3>
                <p className="text-black font-sans text-xl mt-2 max-w-2xl">The beautiful game deserves beautiful recognition. Championship commemorations, Hall of Fame induction plaques, donor walls, and bronze statues for soccer programs, MLS facilities, and collegiate athletics — crafted from your exact photographs to honor the players and moments that defined your program.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/90136d985_3987887D-191A-419C-B621-221DF36585E5.png", label: "Soccer Hall of Fame Plaque", cta: "View Hall of Fame Plaques", to: "/hall-of-fame-plaques" },
                { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/82c049fdc_1EFEDCFE-9322-40E1-88FB-5223406FB921.png", label: "Soccer Portrait Bust", cta: "View Bronze Busts", to: "/bronze-athlete-busts" },
                { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/2ef20594e_92544757-7bd9-4667-b3d0-ce1097be4314.png", label: "Soccer Player Statue", cta: "View Soccer Statues", to: "/soccer" }].
                map((item, i) =>
                <div key={i} className="group flex flex-col">
                    <div className="overflow-hidden border border-bronze/20 group-hover:border-bronze/50 transition-all duration-300 shadow-sm bg-secondary/20">
                      <img src={item.img} alt={item.label} className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="pt-3 pb-4 border-b border-bronze/15 flex items-center justify-between">
                      <p className="font-serif text-xl text-parchment">{item.label}</p>
                      <Link to={item.to} className="text-bronze hover:text-gold font-sans text-base uppercase tracking-widest flex items-center gap-1 transition-colors whitespace-nowrap ml-3">{item.cta} <ArrowRight className="w-3 h-3" /></Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-5">
                <Link to="/soccer" className="inline-flex items-center gap-2 bg-bronze hover:bg-gold text-white px-7 py-3.5 font-sans text-base uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                  View All Soccer Bronze <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </FadeIn>

            {/* Hockey */}
            <FadeIn>
              <div className="mb-6">
                <span className="text-bronze font-sans tracking-[0.3em] uppercase text-base font-semibold">Sport 06</span>
                <h3 className="font-serif text-3xl text-parchment mt-1">Hockey</h3>
                <p className="text-black font-sans text-xl mt-2 max-w-2xl">Hockey is about grit, sacrifice, and brotherhood. Champions in Bronze captures that spirit in bronze — arena-entrance statues, locker room Hall of Fame plaques, championship recognition, and donor walls that honor every player and supporter who made the program what it is.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/2ef20594e_92544757-7bd9-4667-b3d0-ce1097be4314.png", label: "Hockey Hall of Fame Plaque", cta: "View Hall of Fame Plaques", to: "/hall-of-fame-plaques" },
                { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/4d41d4287_0804D2D5-A521-470D-9D6D-8E45E69BA991.png", label: "Hockey Portrait Bust", cta: "View Bronze Busts", to: "/bronze-athlete-busts" },
                { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/2ef20594e_92544757-7bd9-4667-b3d0-ce1097be4314.png", label: "Hockey Player Statue", cta: "View Hockey Statues", to: "/hockey" }].
                map((item, i) =>
                <div key={i} className="group flex flex-col">
                    <div className="overflow-hidden border border-bronze/20 group-hover:border-bronze/50 transition-all duration-300 shadow-sm bg-secondary/20">
                      <img src={item.img} alt={item.label} className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="pt-3 pb-4 border-b border-bronze/15 flex items-center justify-between">
                      <p className="font-serif text-xl text-parchment">{item.label}</p>
                      <Link to={item.to} className="text-bronze hover:text-gold font-sans text-base uppercase tracking-widest flex items-center gap-1 transition-colors whitespace-nowrap ml-3">{item.cta} <ArrowRight className="w-3 h-3" /></Link>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-5">
                <Link to="/hockey" className="inline-flex items-center gap-2 bg-bronze hover:bg-gold text-white px-7 py-3.5 font-sans text-base uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                  View All Hockey Bronze <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
                                                                 SECTION 1 — BRONZE PLAQUES (DOMINANT)
                                                              ══════════════════════════════════════════ */}
      <section id="plaques" className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-bronze text-parchment text-base font-sans uppercase tracking-[0.2em] px-3 py-1.5 font-semibold">Most Requested Products</span>
            </div>
            <SectionHeading
              label="Immortalize Champions. Preserve Legacy For Generations."
              title="Hall of Fame Plaques.\nChampionship Recognition.\nDonor Legacy Systems."
              subtitle="Champions in Bronze transforms greatness into permanent legacy through elite Hall of Fame plaques, donor recognition walls, championship displays, athlete busts, and commemorative bronze statues — designed for universities, stadiums, and athletic facilities that honor sacrifice, celebrate champions, and immortalize the moments that deserve to be remembered for generations." />
            
          </FadeIn>

          {/* Featured 2-up hero plaques */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {plaquProducts.slice(0, 2).map((p, i) =>
            <FadeIn key={p.to} delay={i * 0.1}>
                <Link to={p.to} className="group relative aspect-[16/10] overflow-hidden block rounded-sm">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-parchment/90 via-parchment/40 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-bronze text-parchment text-base font-sans uppercase tracking-[0.15em] px-3 py-1 font-semibold">{p.label}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-serif text-2xl text-parchment group-hover:text-gold transition-colors duration-300">{p.title}</h3>
                    <p className="text-black mt-2 text-xl leading-relaxed line-clamp-2">{p.desc}</p>
                    <div className="flex items-center gap-2 mt-4 text-gold text-base font-sans uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>{p.cta}</span><ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            )}
          </div>

          {/* 4-up remaining plaques */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plaquProducts.slice(2).map((p, i) =>
            <FadeIn key={p.to} delay={i * 0.07}>
                <Link to={p.to} className="group relative aspect-[4/5] overflow-hidden block rounded-sm">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-parchment/90 via-parchment/40 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-gold/15 border border-gold/30 text-gold text-base font-sans uppercase tracking-[0.12em] px-2 py-0.5">{p.label}</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="font-serif text-xl text-parchment group-hover:text-gold transition-colors duration-300">{p.title}</h3>
                    <p className="text-black mt-1 text-base leading-relaxed line-clamp-2">{p.desc}</p>
                    <div className="flex items-center gap-2 mt-3 text-gold text-base font-sans uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>{p.cta}</span><ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            )}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link to="/3d-bas-relief-plaques" className="inline-flex items-center gap-2 bg-bronze hover:bg-gold text-parchment px-8 py-4 font-sans text-xl uppercase tracking-[0.15em] font-semibold transition-all duration-300">
                Browse All Plaque Types <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/request-quote" className="inline-flex items-center gap-2 border border-bronze/40 hover:border-gold text-parchment/70 hover:text-parchment px-8 py-4 font-sans text-xl uppercase tracking-[0.15em] transition-all duration-300">
                Request a Plaque Quote
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════
                                                                 SECTION 2 — HALL OF FAME SYSTEMS
                                                              ══════════════════════════════════════════ */}
      <section className="py-28 border-t border-bronze/10 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden rounded-sm">
                  <img src="https://media.base44.com/images/public/69e6638934292a547ec97753/f9ff2eea2_1FD764A1-3FE3-43F7-B620-ECD28F936C38.png"
                  alt="Complete Hall of Fame bronze plaque wall installation — university athletic facility" loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-bronze/90 p-6 rounded-sm hidden md:block">
                  <p className="font-serif text-3xl text-parchment">50,000+</p>
                  <p className="font-sans text-base text-parchment/60 uppercase tracking-widest mt-1">Satisfied Customers</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-base font-semibold">Immortalize Champions. Preserve Legacy For Generations.</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-4 leading-tight text-parchment">Honor Greatness. Forever.</h2>
              <p className="mt-6 text-black text-xl leading-relaxed">
                Champions in Bronze creates elite recognition environments — from individual Hall of Fame portrait plaques to 60-foot donor recognition walls and illuminated legacy corridors — designed to honor sacrifice, celebrate champions, preserve brotherhood, and immortalize the moments, people, and history that deserve to be remembered for generations.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {hofSystems.map((s) =>
                <div key={s.title} className="border border-bronze/20 bg-white p-5 rounded-sm shadow-sm">
                    <s.icon className="w-5 h-5 text-gold mb-3" />
                    <p className="font-serif text-xl text-parchment leading-tight">{s.title}</p>
                    <p className="text-black text-base font-sans mt-2 leading-relaxed">{s.desc}</p>
                  </div>
                )}
              </div>
              <div className="flex flex-wrap gap-4 mt-10">
                <Link to="/hall-of-fame-bronze-displays" className="inline-flex items-center gap-2 bg-bronze hover:bg-gold text-parchment px-8 py-4 font-sans text-xl uppercase tracking-[0.15em] font-semibold transition-all duration-300">
                  View Hall of Fame Systems <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/request-concept-design" className="inline-flex items-center gap-2 border border-bronze/40 hover:border-gold text-parchment/70 hover:text-parchment px-8 py-4 font-sans text-xl uppercase tracking-[0.15em] transition-all duration-300">
                  Start Hall of Fame Project
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Institutional Stats Bar */}
      <section className="py-14 border-y border-bronze/10 bg-obsidian">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
            { value: "~1hr", label: "Artwork Proof Delivery" },
            { value: "200yr", label: "Outdoor Durability Rating" },
            { value: "100%", label: "Photo Likeness Accuracy" },
            { value: "Made\nUSA", label: "American Foundry" }].
            map((stat) =>
            <div key={stat.label} className="text-center">
                <p className="font-serif text-3xl md:text-4xl text-gold whitespace-pre-line leading-tight">{stat.value}</p>
                <p className="text-parchment/40 text-base font-sans uppercase tracking-wider mt-2">{stat.label}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
                                                                 SECTION 3 — BUSTS (Premium Upsell)
                                                              ══════════════════════════════════════════ */}
      <section className="py-28 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <SectionHeading
              label="Preserve Legacy For Generations"
              title="Hall of Fame Bronze Busts"
              subtitle={`Immortalize champions and preserve legendary athletic legacy for future generations. Each bust is created from your exact photograph using advanced sculptural technology and architectural bronze craftsmanship — designed to honor sacrifice, celebrate champions, and immortalize the people that deserve to be remembered forever. ${photoLikenessPhrase}.`}
              align="center" />
            
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {bustTypes.map((item, i) =>
            <FadeIn key={item.label} delay={i * 0.08}>
                <div className="group relative overflow-hidden rounded-sm bg-white border border-bronze/20 shadow-sm hover:shadow-md hover:border-bronze/50 transition-all duration-300">
                  <div className="aspect-[3/4] overflow-hidden bg-secondary/30">
                    <img src={item.img} alt={item.alt || item.label}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-4 text-center border-t border-bronze/10">
                    <p className="font-serif text-base text-parchment">{item.label}</p>
                  </div>
                </div>
              </FadeIn>
            )}
          </div>
          <FadeIn delay={0.3}>
            <div className="text-center mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/bronze-athlete-busts" className="inline-flex items-center gap-2 bg-bronze hover:bg-gold text-parchment px-8 py-4 font-sans text-xl uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                View All Busts <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/request-quote" className="inline-flex items-center gap-2 border border-bronze/30 hover:border-gold text-parchment/60 hover:text-parchment px-8 py-4 font-sans text-xl uppercase tracking-[0.2em] transition-all duration-300">
                Request Bust Quote
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── EMOTIONAL MONUMENT SECTION ── */}
      <section className="py-28 bg-stone-100 border-t border-bronze/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="text-bronze font-sans tracking-[0.4em] uppercase text-base font-semibold block mb-8">Why Bronze</span>
            <blockquote className="font-serif text-2xl md:text-4xl leading-relaxed text-black italic mb-10">
              "The tears come when champions realize their sacrifice, brotherhood, and journey will outlive the game — and be remembered forever in bronze."
            </blockquote>
            <div className="w-16 h-px bg-bronze mx-auto mb-10" />
            <p className="font-sans text-base md:text-xl text-black leading-relaxed max-w-3xl mx-auto mb-12">
              A lifelike bronze bust is never about the cost — it is about honoring the sacrifice, preserving the brotherhood, immortalizing the journey, and ensuring the legacy that defined their life will never be forgotten.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="grid md:grid-cols-3 gap-8 text-left mt-4">
              <div className="border-l-2 border-bronze/40 pl-6">
                <p className="font-serif text-xl text-black leading-relaxed">
                  Legends battled, sacrificed, and rose.<br />
                  Now their story lives in bronze.<br />
                  Champions fade only when forgotten —<br />
                  <span className="text-bronze-dark font-semibold not-italic">Legacy lives forever.</span>
                </p>
              </div>
              <div className="border-l-2 border-bronze/40 pl-6">
                <p className="font-serif text-xl text-black leading-relaxed">
                  Crowds fade into night.<br />
                  Champions live on in bronze.<br />
                  <span className="text-bronze-dark font-semibold not-italic">Legacy remains.</span>
                </p>
              </div>
              <div className="border-l-2 border-bronze/40 pl-6">
                <p className="font-serif text-xl text-black leading-relaxed">
                  Champions rise high.<br />
                  Bronze holds what time cannot take.<br />
                  <span className="text-bronze-dark font-semibold not-italic">Legacy lives on.</span>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PROCESS */}
      <ProcessTimeline />

      {/* TESTIMONIALS */}
      <TestimonialCarousel />

      {/* ══════════════════════════════════════════
                                                                 SECTION 4 — STATUES (Signature / Reduced)
                                                              ══════════════════════════════════════════ */}
      <section className="py-28 border-t border-bronze/10 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <SectionHeading
              label="Honor Sacrifice. Celebrate Champions. Preserve Brotherhood."
              title="Exact Likeness. Sculpted From Your Photograph. Immortalized In Bronze."
              subtitle={`Champions in Bronze transforms greatness into permanent legacy through elite bronze statues created from your exact photograph — designed for universities, stadiums, athletic facilities, and legacy recognition environments built to immortalize the moments, people, and history that deserve to be remembered for generations. ${photoLikenessPhrase}.`}
              align="center" />
            
          </FadeIn>

          {/* Football */}
          <div className="mb-12">
            <FadeIn><p className="font-serif text-2xl text-gold mb-6">Football</p></FadeIn>
            <SportGrid positions={footballPositions} sport="Football" cols="lg:grid-cols-4" />
          </div>

          {/* Soccer */}
          <div className="mb-12">
            <FadeIn><p className="font-serif text-2xl text-gold mb-6">Soccer</p></FadeIn>
            <SportGrid positions={soccerPositions} sport="Soccer" cols="lg:grid-cols-2" />
          </div>

          {/* Hockey */}
          <div className="mb-12">
            <FadeIn><p className="font-serif text-2xl text-gold mb-6">Hockey</p></FadeIn>
            <SportGrid positions={hockeyPositions} sport="Hockey" />
          </div>

          {/* Baseball */}
          <div className="mb-12">
            <FadeIn><p className="font-serif text-2xl text-gold mb-6">Baseball</p></FadeIn>
            <SportGrid positions={baseballPositions} sport="Baseball" />
          </div>

          {/* Basketball */}
          <div className="mb-10">
            <FadeIn><p className="font-serif text-2xl text-gold mb-6">Basketball</p></FadeIn>
            <SportGrid positions={basketballPositions} sport="Basketball" />
          </div>

          <FadeIn delay={0.3}>
            <div className="text-center mt-4">
              <Link to="/all-sports" className="inline-flex items-center gap-2 border border-bronze/30 hover:border-gold text-parchment/60 hover:text-parchment px-8 py-4 font-sans text-xl uppercase tracking-[0.2em] transition-all duration-300">
                Browse All Sports <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection faqs={faqs} />

      {/* FINAL CTA */}
      <section className="relative py-40 overflow-hidden bg-secondary/40">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <FadeIn>
            <span className="text-bronze font-sans tracking-[0.4em] uppercase text-base font-semibold">Immortalize Champions. Preserve Legacy For Generations.</span>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-7xl mt-6 leading-tight text-parchment">Immortalize champions, preserve legendary <span className="text-bronze-light italic">athletic legacy forever.</span></h2>
            <p className="mt-6 text-black text-base sm:text-xl leading-relaxed max-w-2xl mx-auto">
              From a single Hall of Fame plaque to a complete 60-foot donor recognition wall — Champions in Bronze creates elite bronze recognition designed to honor sacrifice, celebrate champions, preserve brotherhood, and immortalize the moments that deserve to be remembered for generations.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mt-10">
              <Link to="/request-quote" className="text-center bg-bronze hover:bg-gold text-white px-8 py-4 sm:px-12 sm:py-5 font-sans text-xl uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                Request a Quote
              </Link>
              <Link to="/hall-of-fame-bronze-displays" className="text-center border border-parchment/30 hover:border-bronze text-parchment px-8 py-4 sm:px-12 sm:py-5 font-sans text-xl uppercase tracking-[0.2em] transition-all duration-300">
                Start Hall of Fame Project
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <QuoteForm
        title="Request Your Recognition Project Quote"
        subtitle="Tell us your project type. We deliver a digital proof and pricing within the hour."
        source="pro" />

      {/* ── FULL SEO FAQ — 20 Questions ── */}
      <section className="py-20 bg-white border-t border-bronze/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-bronze font-sans tracking-[0.3em] uppercase text-base font-semibold">Knowledge Base</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 text-parchment">20 Frequently Asked Questions About Bronze Plaques, Bronze Busts &amp; Bronze Statues</h2>
          </div>
          <div className="space-y-8">
            {[
            { q: "What is a bronze plaque made of?", a: "Bronze plaques are typically manufactured from architectural-grade cast bronze alloy, commonly ASTM B584, designed for long-term outdoor durability, corrosion resistance, and detailed artwork reproduction. Cast bronze is widely used for Hall of Fame plaques, donor recognition plaques, memorial plaques, university recognition systems, and stadium dedication signage." },
            { q: "How long do bronze plaques last outdoors?", a: "A properly manufactured cast bronze plaque can last 50–100+ years outdoors with minimal maintenance. Bronze is one of the most durable recognition materials available for institutional signage, donor recognition walls, Hall of Fame displays, championship plaques, and athletic facility dedications." },
            { q: "What is the difference between cast bronze and aluminum plaques?", a: "Cast bronze offers a richer appearance, higher prestige, deeper relief detail, and longer-term value. Aluminum plaques are lighter and more economical but are generally considered a lower-tier architectural product compared to bronze plaques used for Hall of Fame recognition, donor walls, memorial installations, and university signage systems." },
            { q: "Can bronze plaques include photos or portraits?", a: "Yes. Bronze plaques can include etched photographs, 2D relief portraits, or full 3D bas-relief image castings created from photographs for Hall of Fame plaques, donor recognition displays, athletic awards, memorial plaques, championship recognition, and stadium commemorations." },
            { q: "What is a bas-relief bronze plaque?", a: "A bas-relief bronze plaque features raised sculpted artwork that projects from the background surface. Bas-relief bronze plaques are commonly used for Hall of Fame displays, donor recognition walls, veterans memorials, university dedications, and commemorative recognition systems." },
            { q: "What is the difference between a bronze bust and a bronze statue?", a: "A bronze bust typically includes the head and upper torso mounted on a pedestal, while a bronze statue is a full-body sculptural figure. Bronze busts and statues are commonly installed in universities, stadiums, Hall of Fame facilities, donor recognition programs, and athletic complexes." },
            { q: "How are bronze busts created from photographs?", a: "Artists digitally sculpt a likeness using reference photographs, then produce a clay or digital model before casting the final piece in bronze using the lost-wax casting process. Custom bronze busts are popular for Hall of Fame inductees, championship coaches, donor recognition, alumni recognition, and athletic legacy installations." },
            { q: "Are bronze plaques ADA compliant?", a: "Yes. Bronze plaques can be manufactured to meet ADA requirements including tactile raised lettering, Grade 2 Braille, contrast requirements, and proper character sizing. ADA bronze signage is widely used in universities, hospitals, stadiums, municipal buildings, and architectural Division 10 signage projects." },
            { q: "What finishes are available for bronze plaques?", a: "Common finishes include Satin Bronze, Statuary Bronze, Oxidized Bronze, Dark Oxidized, Polished Bronze, and Chemically Patinated finishes. Custom architectural finishes are also available for donor recognition plaques, Hall of Fame displays, memorial plaques, bronze statues, and stadium signage systems." },
            { q: "How are bronze plaques mounted?", a: "Typical mounting methods include stud mounting, flush wall mounting, stand-off mounting, masonry anchors, monument mounting, and post and panel systems. Mounting depends on the installation surface and plaque size. Bronze plaques for universities, donor walls, stadiums, and memorial installations often require engineered mounting systems." },
            { q: "Can bronze plaques be installed outdoors near the ocean?", a: "Yes. Bronze performs extremely well in coastal environments. Over time it naturally develops a protective patina that helps resist corrosion. Bronze memorial plaques, donor recognition plaques, and stadium signage are commonly installed in coastal environments throughout the United States." },
            { q: "What sizes are available for bronze plaques?", a: "Bronze plaques can range from small memorial markers to large donor recognition walls and stadium recognition systems exceeding several feet in width and height. Custom sizes are available for Hall of Fame plaques, athletic recognition systems, university signage, and commemorative installations." },
            { q: "How much do bronze plaques cost?", a: "Pricing depends on plaque size, thickness, relief depth, artwork complexity, border style, finish, and mounting requirements. Custom cast bronze plaques are premium architectural products designed for long-term donor recognition, Hall of Fame installations, memorial projects, university branding, and stadium dedications. Request a quote for exact pricing." },
            { q: "What industries commonly use bronze plaques?", a: "Major markets include universities, athletic facilities, stadiums, municipal buildings, veterans memorials, churches, hospitals, corporate headquarters, donor recognition programs, and Hall of Fame installations. Bronze plaques are widely used anywhere permanent recognition, donor appreciation, or commemorative signage is required." },
            { q: "How long does it take to manufacture a bronze plaque?", a: "Standard production timelines are typically 4–8 weeks depending on complexity, approvals, and artwork requirements. Rush production may also be available for donor recognition projects, Hall of Fame ceremonies, university dedications, and championship recognition events." },
            { q: "Can logos and custom artwork be added to bronze plaques?", a: "Yes. Bronze plaques can include corporate logos, university branding, military seals, athletic insignias, architectural renderings, custom borders, and sculpted relief artwork. Custom bronze plaques are frequently designed for donor recognition walls, Hall of Fame plaques, stadium dedications, memorial installations, and collegiate athletic facilities." },
            { q: "Are bronze statues and busts solid bronze?", a: "Most professional bronze sculptures are hollow cast bronze for structural integrity and weight management while maintaining substantial wall thickness and durability. Bronze statues and bronze busts are commonly installed in universities, stadiums, Hall of Fame displays, donor recognition programs, and memorial gardens." },
            { q: "What is the lost-wax casting process?", a: "The lost-wax casting process is a traditional bronze casting method where a wax model is created, encased in ceramic, melted out, and replaced with molten bronze to capture extremely fine sculptural detail. This process is commonly used for bronze statues, bronze busts, Hall of Fame plaques, and donor recognition sculptures." },
            { q: "Do bronze plaques require maintenance?", a: "Very little maintenance is required. Occasional cleaning and waxing can preserve appearance, but bronze naturally ages with an attractive patina over time. Bronze memorial plaques, donor recognition walls, and Hall of Fame installations are designed for decades of outdoor durability." },
            { q: "Why do universities and stadiums choose bronze instead of other materials?", a: "Bronze conveys permanence, prestige, tradition, and legacy recognition. It is considered the premier material for donor recognition plaques, championship commemorations, Hall of Fame installations, university dedications, alumni recognition, athletic facility signage, and stadium branding systems." }].
            map((item, i) =>
            <div key={i} className="border-b border-bronze/20 pb-8">
                <p className="font-sans text-xl font-bold uppercase tracking-wider text-parchment mb-3">{item.q}</p>
                <p className="font-sans text-xl italic text-black leading-relaxed">{item.a}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>);

}