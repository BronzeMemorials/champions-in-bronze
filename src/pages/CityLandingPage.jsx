import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { ArrowRight, Phone, Shield, Award, Star, Clock, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import SEOHead from "../components/shared/SEOHead";
import TrustBadges from "../components/shared/TrustBadges";
import QuoteForm from "../components/shared/QuoteForm";
import FadeIn from "../components/shared/FadeIn";
import TestimonialCarousel from "../components/shared/TestimonialCarousel";
import PlaqueQuoteModal from "../components/shared/PlaqueQuoteModal";
import VideoModelGallery from "../components/shared/VideoModelGallery";

// ─── Static image data (mirrors HallOfFamePage) ───────────────────────────────
const SPORTS_PLAQUES = [
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/2488a7ab8_FOOTBALLCHAMPION18.png", label: "Football Hall of Fame", desc: "Football #18 jersey with running back & Hall of Fame crest — full 3D relief", cta: "Immortalize Your Football Legend" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/4c058dd72_BASEBALLCHAMPION34.png", label: "Baseball Hall of Fame", desc: "Jersey #34, batter stance, stadium background & Hall of Fame shield", cta: "Start Your Baseball Legacy" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/950fe8a59_SOCCERCHAMPION10.png", label: "Soccer Hall of Fame", desc: "Player relief with World Cup trophy & Hall of Fame crest", cta: "Honor Your Soccer Champion" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/0b8503384_FEMALESOCCERNUM10.png", label: "Women's Soccer Hall of Fame", desc: "Women's soccer relief with trophy & Hall of Fame shield", cta: "Celebrate Her Legacy in Bronze" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/692740c9e_BASKETBALLCHAMPION27.png", label: "Basketball Hall of Fame", desc: "Player dunking — #23 with Hall of Fame crest & laurels", cta: "Begin the Hall of Fame Journey" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/64fa5882c_GOLFCHAMPION.png", label: "Golf Hall of Fame", desc: "Golfer silhouette on course with Hall of Fame shield & CB ring", cta: "Honor a Golf Legend Today" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/5a737d31d_BASEBALLCHAMPION72.png", label: "Baseball Jersey Plaque", desc: "Raymond #72 jersey with catcher, stadium & championship ring", cta: "Create Your Custom Jersey Plaque" },
];

const PHOTO_PLAQUES = [
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/bdefded46_ChatGPTImageMay26202602_42_22PM.png", label: "Hall of Fame Boxer", desc: "WBC Super Welterweight Champion with career highlights and championship honors cast in bronze", cta: "Honor a Boxing Legend" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/65fa9625c_PORTRAITSOCCER.png", label: "Hall of Fame Forward", desc: "FIFA World Player of the Year with career stats and Olympic honors in bronze relief", cta: "Immortalize a Soccer Star" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/ea8025f43_PORTRAITBASKETBALL.png", label: "Hall of Fame Basketball", desc: "NBA All-Star with championship and accolade details cast in bronze", cta: "Honor a Basketball Legend" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/b48455b3e_PORTRAITBASEBALL12.png", label: "Hall of Fame Pitcher", desc: "Cy Young Award winner with career accomplishments immortalized in bronze", cta: "Cast a Pitcher's Legacy" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/738d1540f_PORTRAITFOOTBALL21.png", label: "Hall of Fame Quarterback", desc: "Elite quarterback with career passing records and highlights in bronze", cta: "Honor a Football Legend" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/6ac4828f3_IMG_1392.jpeg", label: "Portrait Plaque — 29 Years Service", desc: "Home plate portrait plaque — years of service honored in bronze", cta: "Cast a Portrait Like This" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/983a3990d_IMG_1396.jpeg", label: "Hall of Fame Photo Cast", desc: "Home plate Hall of Fame plaque with photo-cast portrait & career stats", cta: "Immortalize a Legend in Bronze" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/edcca70fb_420FA2B8-7869-4B3D-8DD1-141EAA6CED7F.png", label: "Baseball Memorial Portrait", desc: "Home plate portrait plaque — baseball memorial in bronze", cta: "Honor a Baseball Legend Today" },
];

const INSTITUTIONAL = [
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/775fca918_47E80D20-855E-4F7E-BBF8-D319E64030C0.png", label: "Stadium Bronze Relief", desc: "Aerial stadium bronze relief — architectural landmark plaque", cta: "Get Your Stadium Plaque Quote" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/e2544f1e5_5A4799E5-4305-4837-8127-4D64CDA9C083.png", label: "Coach Portrait Stadium Plaque", desc: "Coach portrait with stadium relief — College Football Hall of Famer", cta: "Honor Your Program's Legacy" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/21ba8abbb_1A74E1E5-FBBE-4985-B495-629E12ACE53F.png", label: "Dimensional Team Logo Plaque", desc: "Dimensional team logo plaque — backlit bronze relief", cta: "Cast Your Team Logo in Bronze" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/5bf816b28_95F91176-9214-4C6E-9E07-C8A0C5729B70.png", label: "Championship History Plaque", desc: "Historical narrative plaque with championship recognition", cta: "Preserve Your Championship History" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/319f68c6c_8EDB86A3-0823-4A9F-B2C0-A3EC13DAD290.png", label: "Institutional Bronze Sign", desc: "Institutional bronze identification sign — architectural entrance plaque", cta: "Commission an Entrance Plaque" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/b1bd5d877_A36CAD0F-9174-4537-ACB3-920546444A1D.png", label: "University Bronze Seal", desc: "University law bronze seal — precision cast institutional emblem", cta: "Cast Your Institution's Seal" },
];

const SEALS = [
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/2b48561be_D3F0E98F-7ED5-4B04-8DD9-F0D76C2DA8C7.png", label: "University Seal in Bronze", desc: "Precision-cast university seal — exact likeness, permanently in bronze", cta: "Cast Your University Seal in Bronze" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/02178ed4c_D12B6A40-5DD3-4D3E-8FB6-E4E73664D056.png", label: "Community College Bronze Seal", desc: "Backlit bronze college seal — institutional grade, 100-year durability", cta: "Commission Your College Seal" },
];

const MEMORIAL_PLAQUES = [
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/98c46810f_IMG_1399.jpg", label: "Coach Memorial Plaque", desc: "Football-shaped memorial plaque with photo cast — coach legacy preserved in bronze", cta: "Honor a Coach's Legacy in Bronze" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/d032cf91d_IMG_1394.jpeg", label: "Athlete Memorial Plaque", desc: "Home plate honor plaque — cast in warm bronze for lasting remembrance", cta: "Create a Lasting Tribute in Bronze" },
];

const CHAMPIONSHIP_PLAQUES = [
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/587b2767d_IMG_1393.jpg", label: "Custom-Shape Award Plaque", desc: "Baseball-shaped recognition plaque — sport-specific custom shaped award", cta: "Design a Custom-Shaped Award Plaque" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/367d75e3c_IMG_1397.jpeg", label: "Tournament Memorial Plaque", desc: "Memorial soccer ball bronze plaque — community tribute in bronze", cta: "Create a Tournament Memorial Plaque" },
];

const BUST_TYPES = [
  { label: "Standard Hall of Fame Bust", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/496d05ff8_99F60C02-07FA-4E6B-A2F7-A1DF3368DE0E.png" },
  { label: "Athlete Portrait Bust", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/1daa60284_ECEF0D5E-181D-4F24-8FD8-994D7F9B3730.png" },
  { label: "Coach Bust", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/4d41d4287_0804D2D5-A521-470D-9D6D-8E45E69BA991.png" },
  { label: "Championship Bust", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/82c049fdc_1EFEDCFE-9322-40E1-88FB-5223406FB921.png" },
  { label: "Stadium Donor Bust", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/580dca88d_BA78C4BD-B3AA-4B99-9EE6-70D7AC769604.png" },
  { label: "Historic Athlete Bust", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/4b1801f52_A48B1FB3-444D-4741-AE40-D4E863E0F068.png" },
];

const FOOTBALL_POSITIONS = [
  { position: "Quarterback", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/2ef20594e_92544757-7bd9-4667-b3d0-ce1097be4314.png" },
  { position: "Passing Stance", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/d4cc26079_ChatGPTImageMay28202608_47_38AM.png" },
  { position: "Lineman", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/a1b9f2e1c_LINEMAN_LIGHT.png" },
  { position: "Running Back", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/f3d7c4a9e_RUNNINGBACK_LIGHT.png" },
];
const BASKETBALL_POSITIONS = [
  { position: "Guard", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/385d62dba_ChatGPTImageMay28202608_46_07AM.png" },
  { position: "Forward", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/147740e3b_4CA5A3D0-6148-4652-9EB3-BCF3DAE9DEC7.png" },
  { position: "Center Dunk Pose", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/020f34d62_5E076DD7-856B-4C90-A8C7-3BD2336FD64F.png" },
];
const BASEBALL_POSITIONS = [
  { position: "Pitcher", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/ae8cf7957_ChatGPTImageMay28202608_44_52AM.png" },
  { position: "Batter", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/e991eeb20_D6CEFC45-7442-4F85-B951-76E2404E7719.png" },
  { position: "Catcher", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/9354cdeae_6A6BF141-0B16-4BAA-B2A6-B4AB5070E20B.png" },
];
const SOCCER_POSITIONS = [
  { position: "Forward Kick Pose", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/cfc15c6d8_SOCCERKICK_LIGHT.png" },
  { position: "Goal Celebration Pose", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/e8f0b25a2_SOCCERCELEBRATION_LIGHT.png" },
];
const HOCKEY_POSITIONS = [
  { position: "Goalie", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/e44a376cd_CD24F754-D4D6-4C4F-9913-36FBB0C2F5D7.png" },
  { position: "Forward", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/18d3f95a4_86AED4DB-6DE3-443F-B6D5-9A1ECB6B5D65.png" },
  { position: "Defenseman", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/4b9032e0d_B9A32438-CA2C-4E28-8952-22DB0925B681.png" },
];

const HOF_PRODUCTS = [
  { title: "Individual Inductee Plaque", desc: "3D relief portrait + name, years of service, stats, and achievement text. The foundation of every Hall of Fame." },
  { title: "Jersey & Action Relief Plaques", desc: "Sport-specific themed plaques featuring the inductee's jersey number, action poses, stadium backgrounds, championship rings, and Hall of Fame crests." },
  { title: "Home Plate Portrait Plaques", desc: "Classic home plate shape with hand-sculpted portrait relief, career stats, and induction details. A timeless format for baseball, softball, and multi-sport halls." },
  { title: "Photo ImageCast Career Retrospective", desc: "Multiple career photographs permanently cast into bronze alongside portrait relief and statistics — the ultimate career retrospective." },
  { title: "University & Institutional Seals", desc: "Exact reproduction of university seals, school crests, and institutional emblems cast in museum-quality bronze with backlit display options." },
  { title: "Full Wall Installation System", desc: "Complete Hall of Fame wall system with architectural framework, unified aesthetic, sport-themed borders, and modular expansion design for future inductees." },
];

// ─── Reusable sub-components ──────────────────────────────────────────────────
function SportGrid({ positions, sport, cols = "lg:grid-cols-3" }) {
  return (
    <div className={`grid grid-cols-2 ${cols} gap-4 md:gap-6`}>
      {positions.map((item, i) => (
        <FadeIn key={item.position} delay={i * 0.08}>
          <div className="group relative overflow-hidden rounded-sm bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-yellow-500 transition-all duration-300">
            <div className="overflow-hidden">
              <img src={item.img} alt={`Bronze ${sport} ${item.position} statue`} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-4 text-center border-t border-gray-100">
              <p className="font-serif text-base text-gray-900">{item.position}</p>
              <p className="text-gray-400 font-sans text-xs uppercase tracking-widest mt-1">{sport}</p>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

function GalleryGrid({ items, columns = 4, onPlaqueClick }) {
  const colClass = columns === 3 ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : columns === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
  return (
    <div className={`grid ${colClass} gap-4`}>
      {items.map((item, i) => (
        <FadeIn key={i} delay={i * 0.05}>
          <div
            className="group rounded border border-gray-200 bg-white hover:border-yellow-500 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col overflow-hidden"
            onClick={() => onPlaqueClick && onPlaqueClick(item)}
          >
            <div className="overflow-hidden w-full">
              <img src={item.url} alt={item.label + " — Champions in Bronze"} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
            </div>
            <div className="p-4 bg-white flex flex-col flex-1">
              <p className="font-serif text-sm text-gray-900 font-semibold leading-tight">{item.label}</p>
              <p className="text-gray-500 text-xs mt-1 leading-relaxed flex-1">{item.desc}</p>
              <p className="mt-3 text-yellow-700 font-sans text-xs uppercase tracking-widest font-bold group-hover:text-yellow-600 transition-colors">→ {item.cta || "Get a Quote"}</p>
            </div>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-4 text-left gap-4">
        <span className="font-serif text-base text-gray-900 leading-snug">{q}</span>
        {open ? <ChevronUp className="w-4 h-4 text-yellow-600 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-yellow-600 flex-shrink-0" />}
      </button>
      {open && <p className="pb-4 text-gray-600 text-sm leading-relaxed">{a}</p>}
    </div>
  );
}

function formatCityName(slug) {
  if (!slug) return "";
  return slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}
function formatStateName(slug) {
  if (!slug) return "";
  return slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}
const paragraphs = (text) => text?.split(/\n\n+/).filter(Boolean) || [];

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function CityLandingPage() {
  const { state, city } = useParams();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedPlaque, setSelectedPlaque] = useState(null);
  const [glbModels, setGlbModels] = useState([]);

  const cityName = formatCityName(city);
  const stateName = formatStateName(state);

  useEffect(() => {
    base44.entities.Product3DModel.filter({ page: "hall_of_fame", is_active: true })
      .then(r => setGlbModels(Array.isArray(r) ? r : []))
      .catch(() => setGlbModels([]));
  }, []);

  useEffect(() => {
    if (!city || !state) return;
    setLoading(true);
    setContent(null);

    base44.entities.CityPage.filter({ state_slug: state, city_slug: city }, "-created_date", 1)
      .then((results) => {
        if (results?.length > 0) {
          try {
            setContent(JSON.parse(results[0].content));
            setLoading(false);
            return;
          } catch (e) { /* bad cache — regenerate */ }
        }
        generateContent();
      })
      .catch(() => generateContent());

    function generateContent() {
      base44.integrations.Core.InvokeLLM({
        model: "claude_sonnet_4_6",
        prompt: `You are a professional copywriter for Champions In Bronze, the nation's premier sports recognition bronze company (since 1974).

Write comprehensive SEO landing page content for the city of ${cityName}, ${stateName}.

CRITICAL RULES:
- Never mention any specific university, college, team, conference, league, mascot, or institution by name.
- Refer only generally to "athletic programs," "collegiate athletic departments," "universities," "colleges," "community colleges," "stadiums," "arenas," and "sports organizations" in ${cityName}.
- Research which sports are actively played in ${cityName} and include ONLY those sports.
- Write in a high-end institutional tone.
- Use ${cityName} and ${stateName} naturally throughout.
- All content must be at least 2,500 words total.

Return JSON with this exact structure:
{
  "seo_title": "string (60 chars max)",
  "seo_description": "string (155 chars max)",
  "h1": "string (include city name + primary keyword)",
  "hero_subtitle": "string (2 sentences, strong value proposition)",
  "intro_heading": "string",
  "intro_body": "string (3 paragraphs separated by double newlines, 150+ words each)",
  "plaques_heading": "string",
  "plaques_body": "string (3 paragraphs separated by double newlines, 100+ words each — 3D relief image cast process, Hall of Fame, retired jerseys, championship, coach recognition)",
  "donor_heading": "string",
  "donor_body": "string (3 paragraphs separated by double newlines — donor walls, capital campaigns, booster clubs, stadium/arena donor recognition, expandability)",
  "hof_heading": "string",
  "hof_body": "string (3 paragraphs separated by double newlines — HOF installations, recognition galleries, championship history, legacy systems, retired athletes)",
  "busts_heading": "string",
  "busts_body": "string (3 paragraphs separated by double newlines — coach busts, AD busts, donor busts, HOF busts, photo-based portrait creation)",
  "statues_heading": "string",
  "statues_body": "string (3 paragraphs separated by double newlines — life-size statues, larger-than-life, athlete sculptures, coach statues, stadium entrances, arena lobbies)",
  "sports": [
    {
      "name": "string",
      "heading": "string",
      "body": "string (2 paragraphs separated by double newlines — HOF plaques, donor recognition, championship recognition, facility displays, legacy programs, retired athletes)"
    }
  ],
  "facility_heading": "string",
  "facility_body": "string (2 paragraphs separated by double newlines — stadium signage, arena recognition, locker room displays, facility naming, donor-funded capital projects)",
  "why_heading": "string",
  "why_points": [{"title": "string", "desc": "string (2 sentences)"}],
  "faqs": [{"q": "string", "a": "string (3-4 sentence detailed answer)"}]
}

For "sports": ONLY include sports actively represented in ${cityName}: football, basketball, baseball, softball, soccer, volleyball, track and field, golf, swimming, tennis, lacrosse, hockey, wrestling. Major metro = most sports. Small college town = fewer.
For "why_points": exactly 7 points.
For "faqs": exactly 18 FAQs across: Hall of Fame plaques, donor walls, bronze busts, bronze statues, athletic recognition, stadium installations, fundraising recognition, photo-to-bronze conversion, project timelines, installation options.`,
        response_json_schema: {
          type: "object",
          properties: {
            seo_title: { type: "string" }, seo_description: { type: "string" },
            h1: { type: "string" }, hero_subtitle: { type: "string" },
            intro_heading: { type: "string" }, intro_body: { type: "string" },
            plaques_heading: { type: "string" }, plaques_body: { type: "string" },
            donor_heading: { type: "string" }, donor_body: { type: "string" },
            hof_heading: { type: "string" }, hof_body: { type: "string" },
            busts_heading: { type: "string" }, busts_body: { type: "string" },
            statues_heading: { type: "string" }, statues_body: { type: "string" },
            sports: { type: "array", items: { type: "object", properties: { name: { type: "string" }, heading: { type: "string" }, body: { type: "string" } } } },
            facility_heading: { type: "string" }, facility_body: { type: "string" },
            why_heading: { type: "string" },
            why_points: { type: "array", items: { type: "object", properties: { title: { type: "string" }, desc: { type: "string" } } } },
            faqs: { type: "array", items: { type: "object", properties: { q: { type: "string" }, a: { type: "string" } } } },
          }
        }
      })
        .then((result) => {
          setContent(result);
          base44.entities.CityPage.create({
            state_slug: state, city_slug: city,
            content: JSON.stringify(result),
            generated_at: new Date().toISOString(),
          }).catch(() => {});
        })
        .catch(() => setContent(null))
        .finally(() => setLoading(false));
    }
  }, [city, state]);

  // ─── Loading ────────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-6">
        <div className="w-10 h-10 border-4 border-yellow-400/30 border-t-yellow-600 rounded-full animate-spin" />
        <div className="text-center">
          <p className="font-serif text-2xl text-gray-900">Building Your {cityName} Page</p>
          <p className="text-gray-500 text-sm mt-2">Generating custom content for {cityName}, {stateName}…</p>
        </div>
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="font-serif text-2xl text-gray-900">Content unavailable</p>
        <p className="text-gray-500">Please try again or <a href="tel:7723090412" className="text-yellow-700 underline">call us at 772-309-0412</a>.</p>
      </div>
    );
  }

  const HERO_IMG = "https://media.base44.com/images/public/69e6638934292a547ec97753/41c645d41_IMG_1398.jpg";

  return (
    <div className="bg-white text-gray-900">
      <SEOHead title={content.seo_title} description={content.seo_description} canonical={`/${state}/${city}/`} ogImage={HERO_IMG} />

      {/* PHONE BAR */}
      <div className="bg-[#1e3a5f] text-white text-center py-2 px-4">
        <a href="tel:7723090412" className="font-sans font-black text-base md:text-lg tracking-widest text-white hover:text-yellow-300 transition-colors">
          📞 <span className="font-black text-xl md:text-2xl">772-309-0412</span> — Call Now for a Direct Answer
        </a>
      </div>

      <PlaqueQuoteModal plaque={selectedPlaque} onClose={() => setSelectedPlaque(null)} />

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center bg-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt={`Bronze plaques and statues for ${cityName}`} className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-8 items-center">
          <FadeIn>
            <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-4">Champions in Bronze · Since 1974 · {cityName}, {stateName}</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900 mb-6">{content.h1}</h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">{content.hero_subtitle}</p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link to="/request-quote" className="inline-flex items-center gap-2 px-8 py-4 font-sans font-bold uppercase tracking-widest text-sm text-black transition-all hover:scale-[1.02]" style={{ background: "linear-gradient(135deg, #B8860B 0%, #DAA520 30%, #FFD700 50%, #DAA520 70%, #B8860B 100%)" }}>
                Get Free Artwork Proof <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:7723090412" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-yellow-600 text-yellow-800 font-sans font-black uppercase tracking-widest text-xl hover:bg-yellow-50 transition-colors">
                <Phone className="w-5 h-5" /> 772-309-0412
              </a>
            </div>
            <div className="flex flex-wrap gap-6">
              {[
                { icon: Clock, text: "Artwork Proof Within The Hour" },
                { icon: Shield, text: "Guaranteed to Last 100 Years Outdoors" },
                { icon: Award, text: "Made in the USA" },
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
                { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/02dd920ee_FOOTBALL18.png", label: "Football Plaques", link: "/football" },
                { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/6a09b4726_BASEBALL34.png", label: "Baseball Plaques", link: "/baseball" },
                { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/47ca72da5_BASKETBALL27.png", label: "Basketball Plaques", link: "/basketball" },
                { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/2524c7a13_SOCCER10.png", label: "Soccer Plaques", link: "/soccer" },
              ].map((item, i) => (
                <Link key={i} to={item.link} className="group rounded border border-gray-200 shadow bg-white hover:border-yellow-500 hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden">
                  <img src={item.url} alt={item.label} className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300" loading="lazy" />
                  <p className="text-center text-yellow-700 font-sans text-xs font-bold uppercase tracking-widest py-2 group-hover:text-yellow-600">→ {item.label}</p>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* BUSTS & STATUES PREVIEW */}
      <section className="py-10 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn><p className="text-center font-sans text-xs uppercase tracking-[0.3em] text-yellow-700 font-bold mb-6">Bronze Busts & Life-Size Statues</p></FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/496d05ff8_99F60C02-07FA-4E6B-A2F7-A1DF3368DE0E.png", label: "Hall of Fame Bust", link: "/bronze-athlete-busts" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/1daa60284_ECEF0D5E-181D-4F24-8FD8-994D7F9B3730.png", label: "Athlete Portrait Bust", link: "/bronze-athlete-busts" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/2ef20594e_92544757-7bd9-4667-b3d0-ce1097be4314.png", label: "Football Statue", link: "/football" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/385d62dba_ChatGPTImageMay28202608_46_07AM.png", label: "Basketball Statue", link: "/basketball" },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <Link to={item.link} className="group rounded border border-gray-200 bg-white hover:border-yellow-500 hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden">
                  <div className="flex-1 overflow-hidden">
                    <img src={item.img} alt={item.label} className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-300" />
                  </div>
                  <p className="text-center text-yellow-700 font-sans text-xs font-bold uppercase tracking-widest py-2 border-t border-gray-100 group-hover:text-yellow-600">→ {item.label}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* INTRO */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Athletic Recognition in {cityName}</span>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-8">{content.intro_heading}</h2>
            <div className="space-y-6">
              {paragraphs(content.intro_body).map((p, i) => (
                <p key={i} className="text-gray-700 text-base leading-relaxed">{p}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SPORTS HOF PLAQUES GALLERY */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-8">
              <span className="font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-1" style={{ color: "#1e3a5f" }}>Sport-Specific Hall of Fame Plaques</span>
              <p className="font-sans text-sm font-semibold text-gray-700 mb-3">Football · Men's &amp; Women's Basketball · Baseball · Softball · Soccer · Volleyball</p>
              <p className="font-sans text-sm font-semibold text-gray-700 mb-4">Donor Walls · Hall of Fame · Retired Jerseys · Athletic Recognition</p>
              <h2 className="font-serif text-4xl md:text-5xl" style={{ color: "#1e3a5f" }}>Your Sport. Your Image. {cityName}.</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
                Football, baseball, basketball, soccer, golf, and more — each plaque custom designed around your sport, your image, and the moment being immortalized forever.
              </p>
            </div>
          </FadeIn>
          <GalleryGrid items={SPORTS_PLAQUES} columns={2} onPlaqueClick={setSelectedPlaque} />
          <div className="text-center mt-10">
            <Link to="/request-quote" className="inline-flex items-center gap-2 px-8 py-4 font-bold text-black uppercase tracking-widest text-sm" style={{ background: "linear-gradient(135deg, #B8860B 0%, #DAA520 50%, #B8860B 100%)" }}>
              Design Your {cityName} Hall of Fame Plaque <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3D RELIEF PLAQUES — text section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-8">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">3-D Relief Image Cast Bronze</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">{content.plaques_heading}</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Real photos permanently cast in bronze — athletes, coaches, and legends immortalized from your actual photographs.</p>
            </div>
          </FadeIn>
          <GalleryGrid items={PHOTO_PLAQUES} columns={2} onPlaqueClick={setSelectedPlaque} />
          <div className="max-w-4xl mx-auto mt-10 space-y-5">
            {paragraphs(content.plaques_body).map((p, i) => (
              <p key={i} className="text-gray-700 text-base leading-relaxed">{p}</p>
            ))}
            <Link to="/3d-relief-plaques" className="inline-flex items-center gap-2 text-yellow-700 font-sans font-bold uppercase tracking-widest text-xs hover:text-yellow-600">
              View All 3D Relief Plaques <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* HOF PRODUCTS GRID */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-8">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Hall of Fame Products</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">{content.hof_heading}</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Every piece custom-made in the USA. Artwork proof within the hour. No commitment to order.</p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {HOF_PRODUCTS.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.07}>
                <div className="border-2 border-gray-200 bg-white p-7 hover:border-yellow-500 hover:shadow-md transition-all duration-300 rounded">
                  <h3 className="font-serif text-lg text-gray-900 leading-tight mb-3">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{p.desc}</p>
                  <Link to="/request-quote" className="inline-flex items-center gap-1 text-yellow-700 font-sans text-xs uppercase tracking-widest font-bold hover:text-yellow-600 transition-colors">
                    Get a Quote <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="max-w-4xl mx-auto space-y-5">
            {paragraphs(content.hof_body).map((p, i) => (
              <p key={i} className="text-gray-700 text-base leading-relaxed">{p}</p>
            ))}
            <Link to="/hall-of-fame" className="inline-flex items-center gap-2 text-yellow-700 font-sans font-bold uppercase tracking-widest text-xs hover:text-yellow-600">
              View Hall of Fame Systems <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* 360° VIDEO GALLERY */}
      <VideoModelGallery models={glbModels} />

      {/* INSTITUTIONAL PLAQUES */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-8">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Universities · Stadiums · Athletic Programs</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">Institutional Bronze Plaques & Signage — {cityName}</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">From university seals to stadium dedications — we've served programs across the country with bronze that lasts generations.</p>
            </div>
          </FadeIn>
          <GalleryGrid items={INSTITUTIONAL} columns={3} onPlaqueClick={setSelectedPlaque} />
        </div>
      </section>

      {/* DONOR WALLS */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-8">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Donor Recognition Systems</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">{content.donor_heading}</h2>
            </div>
          </FadeIn>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-5">
              {paragraphs(content.donor_body).map((p, i) => (
                <FadeIn key={i} delay={i * 0.05}><p className="text-gray-700 text-base leading-relaxed">{p}</p></FadeIn>
              ))}
              <FadeIn><Link to="/donor-recognition" className="inline-flex items-center gap-2 text-yellow-700 font-sans font-bold uppercase tracking-widest text-xs hover:text-yellow-600">
                View Donor Recognition Systems <ArrowRight className="w-3 h-3" />
              </Link></FadeIn>
            </div>
            <FadeIn delay={0.15} className="grid grid-cols-2 gap-3">
              {[
                "https://media.base44.com/images/public/69e6638934292a547ec97753/775fca918_47E80D20-855E-4F7E-BBF8-D319E64030C0.png",
                "https://media.base44.com/images/public/69e6638934292a547ec97753/e2544f1e5_5A4799E5-4305-4837-8127-4D64CDA9C083.png",
                "https://media.base44.com/images/public/69e6638934292a547ec97753/2b48561be_D3F0E98F-7ED5-4B04-8DD9-F0D76C2DA8C7.png",
                "https://media.base44.com/images/public/69e6638934292a547ec97753/98c46810f_IMG_1399.jpg",
              ].map((src, i) => (
                <div key={i} className="overflow-hidden rounded border border-gray-200 shadow">
                  <img src={src} alt={`Athletic donor recognition ${cityName}`} className="w-full h-auto object-cover" loading="lazy" />
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SEALS */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-6">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">University Seals & Medallions</span>
              <h2 className="font-serif text-3xl md:text-4xl text-gray-900">Precision-Cast University Seals in Bronze</h2>
              <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm">Exact reproductions of university seals and institutional crests — perfect for entranceways, dedications, and Hall of Fame centerpieces.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SEALS.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group overflow-hidden rounded border border-gray-200 bg-white hover:border-yellow-500 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col" onClick={() => setSelectedPlaque(item)}>
                  <div className="flex items-center justify-center bg-white w-full" style={{ minHeight: "280px" }}>
                    <img src={item.url} alt={item.label + " — Champions in Bronze"} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <p className="font-serif text-sm text-gray-900 font-semibold">{item.label}</p>
                    <p className="text-gray-500 text-xs mt-1 flex-1">{item.desc}</p>
                    <p className="mt-3 text-yellow-700 font-sans text-xs uppercase tracking-widest font-bold group-hover:text-yellow-600 transition-colors">→ {item.cta}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* MEMORIAL & CHAMPIONSHIP */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-8">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Dedications · Memorials · Championship Awards</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">Memorial, Dedication & Championship Plaques</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Honor coaches, players, mentors, and championship moments. Bronze lasts forever — so does their legacy.</p>
            </div>
          </FadeIn>
          <div className="grid lg:grid-cols-2 gap-10">
            <GalleryGrid items={MEMORIAL_PLAQUES} columns={2} onPlaqueClick={setSelectedPlaque} />
            <GalleryGrid items={CHAMPIONSHIP_PLAQUES} columns={2} onPlaqueClick={setSelectedPlaque} />
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-4">Why Champions in Bronze</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">{content.why_heading}</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                For over 50 years, we've built Hall of Fames for NFL stadiums, NCAA athletic programs, and communities across {stateName}. Our proprietary Photo ImageCasting process captures exact likenesses from your photographs — no generic faces, no guesswork.
              </p>
              <div className="space-y-4">
                {[
                  "Artwork proof delivered within the hour — no commitment required",
                  "Every inductee portrait created from your actual submitted photographs",
                  "Museum-quality bronze built to last 100+ years outdoors",
                  "Modular systems designed to expand annually with new inductees",
                  "Over 50,000 satisfied customers nationwide",
                  "100% Made in the USA — no tariffs, no delays",
                  "Full installation coordination included",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "https://media.base44.com/images/public/69e6638934292a547ec97753/2488a7ab8_FOOTBALLCHAMPION18.png",
                  "https://media.base44.com/images/public/69e6638934292a547ec97753/950fe8a59_SOCCERCHAMPION10.png",
                  "https://media.base44.com/images/public/69e6638934292a547ec97753/64fa5882c_GOLFCHAMPION.png",
                  "https://media.base44.com/images/public/69e6638934292a547ec97753/775fca918_47E80D20-855E-4F7E-BBF8-D319E64030C0.png",
                ].map((url, i) => (
                  <div key={i} className="rounded border border-gray-200 shadow overflow-hidden bg-white">
                    <img src={url} alt="Hall of Fame bronze plaque Champions in Bronze" className="w-full h-auto object-cover" loading="lazy" />
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-10 bg-yellow-50 border-y-2 border-yellow-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "50+", label: "Years in Business", desc: "In operation since 1974" },
              { stat: "50,000+", label: "Satisfied Customers", desc: "Pro, collegiate & secondary" },
              { stat: "~1 Hour", label: "Artwork Proof", desc: "Every project, guaranteed" },
              { stat: "100 Yrs", label: "Guaranteed Outdoors", desc: "Built to last a century outside" },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.1}>
                <p className="font-serif text-4xl md:text-5xl text-yellow-700">{item.stat}</p>
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-gray-900 mt-2 font-bold">{item.label}</p>
                <p className="text-gray-600 mt-1 text-xs">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      {/* BUSTS */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Preserve Legacy For Generations</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">{content.busts_heading}</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base">Immortalize Hall of Fame inductees in museum-quality bronze — each bust created from your exact photographs. No in-person sessions required.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {BUST_TYPES.map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.08}>
                <div className="group relative overflow-hidden rounded-sm bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-yellow-500 transition-all duration-300">
                  <div className="overflow-hidden">
                    <img src={item.img} alt={item.label} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-4 text-center border-t border-gray-200">
                    <p className="font-serif text-base text-gray-900">{item.label}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="max-w-4xl mx-auto mt-10 space-y-5">
            {paragraphs(content.busts_body).map((p, i) => (
              <p key={i} className="text-gray-700 text-base leading-relaxed">{p}</p>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div className="text-center mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/bronze-athlete-busts" className="inline-flex items-center gap-2 px-8 py-4 font-sans font-bold uppercase tracking-widest text-sm text-black transition-all" style={{ background: "linear-gradient(135deg, #B8860B 0%, #DAA520 50%, #B8860B 100%)" }}>
                View All Bronze Busts <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/request-quote" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-yellow-600 text-yellow-800 font-sans font-semibold uppercase tracking-widest text-sm hover:bg-yellow-50 transition-colors">
                Request Bust Quote
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* STATUES */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Honor Sacrifice. Celebrate Champions.</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">{content.statues_heading}</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base">Life-size and heroic-scale bronze statues for stadium entrances, arena lobbies, and campus landmarks — sculpted from your actual photographs.</p>
            </div>
          </FadeIn>

          <div className="mb-12"><FadeIn><p className="font-serif text-2xl text-yellow-700 mb-6">Football</p></FadeIn><SportGrid positions={FOOTBALL_POSITIONS} sport="Football" cols="lg:grid-cols-4" /></div>
          <div className="mb-12"><FadeIn><p className="font-serif text-2xl text-yellow-700 mb-6">Basketball</p></FadeIn><SportGrid positions={BASKETBALL_POSITIONS} sport="Basketball" /></div>
          <div className="mb-12"><FadeIn><p className="font-serif text-2xl text-yellow-700 mb-6">Baseball</p></FadeIn><SportGrid positions={BASEBALL_POSITIONS} sport="Baseball" /></div>
          <div className="mb-12"><FadeIn><p className="font-serif text-2xl text-yellow-700 mb-6">Soccer</p></FadeIn><SportGrid positions={SOCCER_POSITIONS} sport="Soccer" cols="lg:grid-cols-2" /></div>
          <div className="mb-10"><FadeIn><p className="font-serif text-2xl text-yellow-700 mb-6">Hockey</p></FadeIn><SportGrid positions={HOCKEY_POSITIONS} sport="Hockey" /></div>

          <div className="max-w-4xl mx-auto mt-8 space-y-5">
            {paragraphs(content.statues_body).map((p, i) => (
              <p key={i} className="text-gray-700 text-base leading-relaxed">{p}</p>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div className="text-center mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/custom-bronze-athlete-statues" className="inline-flex items-center gap-2 px-8 py-4 font-sans font-bold uppercase tracking-widest text-sm text-black transition-all" style={{ background: "linear-gradient(135deg, #B8860B 0%, #DAA520 50%, #B8860B 100%)" }}>
                View All Bronze Statues <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/all-sports" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-yellow-600 text-yellow-800 font-sans font-semibold uppercase tracking-widest text-sm hover:bg-yellow-50 transition-colors">
                Browse All Sports <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SPORTS-SPECIFIC */}
      {content.sports?.length > 0 && (
        <section className="py-12 bg-gray-50 border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-8">
                <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Sport-Specific Recognition Programs</span>
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900">Athletic Recognition by Sport — {cityName}</h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Hall of Fame plaques, donor recognition, championship displays, and legacy programs for every sport in {cityName}.</p>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-6">
              {content.sports.map((sport, i) => (
                <FadeIn key={sport.name} delay={i * 0.06}>
                  <div className="border-2 border-gray-200 hover:border-yellow-500 transition-all duration-300 p-7 rounded bg-white">
                    <h3 className="font-serif text-xl text-gray-900 mb-4">{sport.heading}</h3>
                    <div className="space-y-3">
                      {paragraphs(sport.body).map((p, j) => (
                        <p key={j} className="text-gray-600 text-sm leading-relaxed">{p}</p>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FACILITY RECOGNITION */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Athletic Facility Recognition</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-8">{content.facility_heading}</h2>
              <div className="space-y-5">
                {paragraphs(content.facility_body).map((p, i) => (
                  <p key={i} className="text-gray-700 text-base leading-relaxed">{p}</p>
                ))}
              </div>
              <Link to="/donor-recognition" className="inline-flex items-center gap-2 mt-6 text-yellow-700 font-sans font-bold uppercase tracking-widest text-xs hover:text-yellow-600">
                View Facility Recognition <ArrowRight className="w-3 h-3" />
              </Link>
            </FadeIn>
            <FadeIn delay={0.15} className="grid grid-cols-2 gap-3">
              {[
                "https://media.base44.com/images/public/69e6638934292a547ec97753/69f294441_IMG_1444.jpg",
                "https://media.base44.com/images/public/69e6638934292a547ec97753/5a737d31d_BASEBALLCHAMPION72.png",
                "https://media.base44.com/images/public/69e6638934292a547ec97753/738d1540f_PORTRAITFOOTBALL21.png",
                "https://media.base44.com/images/public/69e6638934292a547ec97753/21ba8abbb_1A74E1E5-FBBE-4985-B495-629E12ACE53F.png",
              ].map((src, i) => (
                <div key={i} className="overflow-hidden rounded border border-gray-200 shadow">
                  <img src={src} alt={`Athletic facility bronze recognition ${cityName}`} className="w-full h-auto object-cover" loading="lazy" />
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>

      <QuoteForm
        title={`Request Your Free ${cityName} Bronze Artwork Proof`}
        subtitle={`Serving athletic programs, universities, stadiums, and Hall of Fame committees throughout ${cityName}, ${stateName}. Artwork proof within the hour. No commitment required.`}
        source="pro"
      />

      {/* FAQS */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Frequently Asked Questions</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">{cityName} Bronze Recognition — FAQs</h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="divide-y divide-gray-200 border-t border-gray-200">
              {content.faqs?.map((faq, i) => <FAQItem key={i} q={faq.q} a={faq.a} />)}
            </div>
          </FadeIn>
        </div>
      </section>

      <QuoteForm
        title={`Ready to Honor ${cityName}'s Athletic Legacy?`}
        subtitle={`Champions In Bronze serves athletic programs, universities, stadiums, arenas, and Hall of Fame committees throughout ${cityName}, ${stateName}. Over 50 years of institutional-grade bronze. Made in the USA.`}
        source="pro"
      />
    </div>
  );
}