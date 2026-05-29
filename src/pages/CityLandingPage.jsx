import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { base44 } from "@/api/base44Client";
import { ArrowRight, Phone, Shield, Award, Star, Clock, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import SEOHead from "../components/shared/SEOHead";
import TrustBadges from "../components/shared/TrustBadges";
import QuoteForm from "../components/shared/QuoteForm";
import FadeIn from "../components/shared/FadeIn";

// Images from the site
const IMAGES = {
  hero: "https://media.base44.com/images/public/69e6638934292a547ec97753/41c645d41_IMG_1398.jpg",
  plaque1: "https://media.base44.com/images/public/69e6638934292a547ec97753/2488a7ab8_FOOTBALLCHAMPION18.png",
  plaque2: "https://media.base44.com/images/public/69e6638934292a547ec97753/4c058dd72_BASEBALLCHAMPION34.png",
  plaque3: "https://media.base44.com/images/public/69e6638934292a547ec97753/950fe8a59_SOCCERCHAMPION10.png",
  plaque4: "https://media.base44.com/images/public/69e6638934292a547ec97753/692740c9e_BASKETBALLCHAMPION27.png",
  plaque5: "https://media.base44.com/images/public/69e6638934292a547ec97753/64fa5882c_GOLFCHAMPION.png",
  plaque6: "https://media.base44.com/images/public/69e6638934292a547ec97753/5a737d31d_BASEBALLCHAMPION72.png",
  bust1: "https://media.base44.com/images/public/69e6638934292a547ec97753/496d05ff8_99F60C02-07FA-4E6B-A2F7-A1DF3368DE0E.png",
  bust2: "https://media.base44.com/images/public/69e6638934292a547ec97753/1daa60284_ECEF0D5E-181D-4F24-8FD8-994D7F9B3730.png",
  bust3: "https://media.base44.com/images/public/69e6638934292a547ec97753/4d41d4287_0804D2D5-A521-470D-9D6D-8E45E69BA991.png",
  bust4: "https://media.base44.com/images/public/69e6638934292a547ec97753/82c049fdc_1EFEDCFE-9322-40E1-88FB-5223406FB921.png",
  statue1: "https://media.base44.com/images/public/69e6638934292a547ec97753/2ef20594e_92544757-7bd9-4667-b3d0-ce1097be4314.png",
  statue2: "https://media.base44.com/images/public/69e6638934292a547ec97753/385d62dba_ChatGPTImageMay28202608_46_07AM.png",
  statue3: "https://media.base44.com/images/public/69e6638934292a547ec97753/ae8cf7957_ChatGPTImageMay28202608_44_52AM.png",
  statue4: "https://media.base44.com/images/public/69e6638934292a547ec97753/147740e3b_4CA5A3D0-6148-4652-9EB3-BCF3DAE9DEC7.png",
  donor1: "https://media.base44.com/images/public/69e6638934292a547ec97753/775fca918_47E80D20-855E-4F7E-BBF8-D319E64030C0.png",
  donor2: "https://media.base44.com/images/public/69e6638934292a547ec97753/e2544f1e5_5A4799E5-4305-4837-8127-4D64CDA9C083.png",
  portrait1: "https://media.base44.com/images/public/69e6638934292a547ec97753/6ac4828f3_IMG_1392.jpeg",
  portrait2: "https://media.base44.com/images/public/69e6638934292a547ec97753/983a3990d_IMG_1396.jpeg",
  boxing1: "https://media.base44.com/images/public/69e6638934292a547ec97753/69f294441_IMG_1444.jpg",
  memorial1: "https://media.base44.com/images/public/69e6638934292a547ec97753/98c46810f_IMG_1399.jpg",
  seal1: "https://media.base44.com/images/public/69e6638934292a547ec97753/2b48561be_D3F0E98F-7ED5-4B04-8DD9-F0D76C2DA8C7.png",
  hof1: "https://media.base44.com/images/public/69e6638934292a547ec97753/bdefded46_ChatGPTImageMay26202602_42_22PM.png",
  hof2: "https://media.base44.com/images/public/69e6638934292a547ec97753/65fa9625c_PORTRAITSOCCER.png",
  hof3: "https://media.base44.com/images/public/69e6638934292a547ec97753/738d1540f_PORTRAITFOOTBALL21.png",
};

function formatCityName(slug) {
  if (!slug) return "";
  return slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

function formatStateName(slug) {
  if (!slug) return "";
  return slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
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

export default function CityLandingPage() {
  const { state, city } = useParams();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  const cityName = formatCityName(city);
  const stateName = formatStateName(state);

  useEffect(() => {
    if (!city || !state) return;
    setLoading(true);
    setContent(null);

    base44.integrations.Core.InvokeLLM({
      model: "claude_sonnet_4_6",
      prompt: `You are a professional copywriter for Champions In Bronze, the nation's premier sports recognition bronze company (since 1974). 

Write comprehensive SEO landing page content for the city of ${cityName}, ${stateName}.

CRITICAL RULES:
- Never mention any specific university, college, team, conference, league, mascot, or institution by name.
- Refer only generally to "athletic programs," "collegiate athletic departments," "universities," "colleges," "community colleges," "stadiums," "arenas," and "sports organizations" in ${cityName}.
- Research which sports are actively played in ${cityName} (considering colleges, universities, pro teams, and community sports) and include ONLY those sports.
- Write in a high-end institutional tone.
- Use ${cityName} and ${stateName} naturally throughout.
- All content must be at least 2,500 words total across all sections.

Return a JSON object with this exact structure:
{
  "seo_title": "string (60 chars max, include city name and bronze plaque keyword)",
  "seo_description": "string (155 chars max)",
  "h1": "string (include city name and primary keyword)",
  "hero_subtitle": "string (2 sentences, strong value proposition)",
  "intro_heading": "string",
  "intro_body": "string (3 paragraphs, 150+ words each, discuss legacy preservation, donor recognition, athletic achievement, facility enhancement in ${cityName})",
  "plaques_heading": "string",
  "plaques_body": "string (3 paragraphs, 100+ words each about 3D relief image cast bronze plaques, photo-to-bronze process, Hall of Fame recognition, retired jerseys, championship recognition, coach recognition)",
  "donor_heading": "string",
  "donor_body": "string (3 paragraphs, 100+ words each about donor walls, capital campaigns, booster clubs, stadium donor displays, arena donor recognition, expandability)",
  "hof_heading": "string",
  "hof_body": "string (3 paragraphs, 100+ words each about Hall of Fame installations, recognition galleries, championship history, legacy systems, retired athlete recognition)",
  "busts_heading": "string",
  "busts_body": "string (3 paragraphs, 100+ words each about coach busts, athletic director busts, donor busts, Hall of Fame busts, photo-based portrait creation)",
  "statues_heading": "string",
  "statues_body": "string (3 paragraphs, 100+ words each about life-size statues, larger-than-life statues, athlete recognition sculptures, coach statues, stadium entrance sculptures, arena lobby installations)",
  "sports": [
    {
      "name": "string (sport name, only include sports actually represented in ${cityName})",
      "heading": "string",
      "body": "string (2 paragraphs covering Hall of Fame plaques, donor recognition, championship recognition, facility displays, legacy programs, retired athlete recognition for this sport in ${cityName})"
    }
  ],
  "facility_heading": "string",
  "facility_body": "string (2 paragraphs about stadium signage, arena recognition, locker room displays, facility naming recognition, donor-funded capital projects)",
  "why_heading": "string",
  "why_points": [
    {"title": "string", "desc": "string (2 sentences)"}
  ],
  "faqs": [
    {"q": "string (question)", "a": "string (detailed 3-4 sentence answer)"}
  ]
}

For "sports": include ONLY sports actively represented in ${cityName} from this list: football, basketball, baseball, softball, soccer, volleyball, track and field, golf, swimming, tennis, lacrosse, hockey, wrestling. Research carefully. A major metro area will have most sports. A small college town may have only a few.

For "why_points": include exactly 7 points about: museum-quality craftsmanship, architectural-grade bronze, custom sculptural design, nationwide manufacturing, long-term durability, institutional project experience, custom donor recognition expertise.

For "faqs": create exactly 18 FAQs covering Hall of Fame plaques, donor walls, bronze busts, bronze statues, athletic recognition, stadium installations, fundraising recognition, photo-to-bronze conversion, project timelines, installation options. Make answers detailed and specific.`,
      response_json_schema: {
        type: "object",
        properties: {
          seo_title: { type: "string" },
          seo_description: { type: "string" },
          h1: { type: "string" },
          hero_subtitle: { type: "string" },
          intro_heading: { type: "string" },
          intro_body: { type: "string" },
          plaques_heading: { type: "string" },
          plaques_body: { type: "string" },
          donor_heading: { type: "string" },
          donor_body: { type: "string" },
          hof_heading: { type: "string" },
          hof_body: { type: "string" },
          busts_heading: { type: "string" },
          busts_body: { type: "string" },
          statues_heading: { type: "string" },
          statues_body: { type: "string" },
          sports: {
            type: "array",
            items: {
              type: "object",
              properties: {
                name: { type: "string" },
                heading: { type: "string" },
                body: { type: "string" }
              }
            }
          },
          facility_heading: { type: "string" },
          facility_body: { type: "string" },
          why_heading: { type: "string" },
          why_points: {
            type: "array",
            items: {
              type: "object",
              properties: {
                title: { type: "string" },
                desc: { type: "string" }
              }
            }
          },
          faqs: {
            type: "array",
            items: {
              type: "object",
              properties: {
                q: { type: "string" },
                a: { type: "string" }
              }
            }
          }
        }
      }
    }).then(setContent).catch(() => setContent(null)).finally(() => setLoading(false));
  }, [city, state]);

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

  const paragraphs = (text) => text?.split(/\n\n+/).filter(Boolean) || [];

  return (
    <div className="bg-white text-gray-900">
      <SEOHead
        title={content.seo_title}
        description={content.seo_description}
        canonical={`/${state}/${city}/`}
        ogImage={IMAGES.hero}
      />

      {/* PHONE BAR */}
      <div className="bg-[#1e3a5f] text-white text-center py-2 px-4">
        <a href="tel:7723090412" className="font-sans font-black text-base md:text-lg tracking-widest text-white hover:text-yellow-300 transition-colors">
          📞 <span className="font-black text-xl md:text-2xl">772-309-0412</span> — Call Now for a Direct Answer
        </a>
      </div>

      {/* HERO */}
      <section className="relative min-h-[65vh] flex items-center bg-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMAGES.hero} alt={`Bronze plaques and statues for ${cityName}`} className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <FadeIn>
            <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-4">Champions in Bronze · Since 1974 · {cityName}, {stateName}</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900 mb-6">{content.h1}</h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">{content.hero_subtitle}</p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link to="/request-quote" className="inline-flex items-center gap-2 px-8 py-4 font-sans font-bold uppercase tracking-widest text-sm text-black transition-all hover:scale-[1.02]" style={{ background: "linear-gradient(135deg, #B8860B 0%, #DAA520 30%, #FFD700 50%, #DAA520 70%, #B8860B 100%)" }}>
                Get Free Artwork Proof <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:7723090412" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-yellow-600 text-yellow-800 font-sans font-black uppercase tracking-widest text-lg hover:bg-yellow-50 transition-colors">
                <Phone className="w-5 h-5" /> 772-309-0412
              </a>
            </div>
            <div className="flex flex-wrap gap-5">
              {[
                { icon: Clock, text: "Artwork Proof Within The Hour" },
                { icon: Shield, text: "100-Year Outdoor Guarantee" },
                { icon: Award, text: "Made in the USA" },
                { icon: Star, text: "50,000+ Customers" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-gray-600 text-xs">
                  <Icon className="w-3.5 h-3.5 text-yellow-600" />
                  <span className="font-semibold">{text}</span>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="hidden lg:grid grid-cols-2 gap-3">
            {[IMAGES.plaque1, IMAGES.plaque2, IMAGES.plaque3, IMAGES.plaque4].map((src, i) => (
              <div key={i} className="overflow-hidden rounded border border-gray-200 shadow">
                <img src={src} alt={`Bronze sports plaque ${cityName}`} className="w-full h-auto object-cover" loading="lazy" />
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      <TrustBadges />

      {/* INTRO */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-8">{content.intro_heading}</h2>
            <div className="space-y-6">
              {paragraphs(content.intro_body).map((p, i) => (
                <p key={i} className="text-gray-700 text-base leading-relaxed">{p}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3D RELIEF PLAQUES */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">3-D Relief Image Cast Bronze</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">{content.plaques_heading}</h2>
              <div className="space-y-5">
                {paragraphs(content.plaques_body).map((p, i) => (
                  <p key={i} className="text-gray-700 text-base leading-relaxed">{p}</p>
                ))}
              </div>
              <Link to="/3d-relief-plaques" className="inline-flex items-center gap-2 mt-6 text-yellow-700 font-sans font-bold uppercase tracking-widest text-xs hover:text-yellow-600">
                View 3D Relief Plaques <ArrowRight className="w-3 h-3" />
              </Link>
            </FadeIn>
            <FadeIn delay={0.2} className="grid grid-cols-2 gap-3">
              {[IMAGES.hof1, IMAGES.hof2, IMAGES.portrait1, IMAGES.portrait2].map((src, i) => (
                <div key={i} className="overflow-hidden rounded border border-gray-200 shadow">
                  <img src={src} alt={`3D relief bronze plaque ${cityName}`} className="w-full h-auto object-cover" loading="lazy" />
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* DONOR WALLS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.1} className="order-2 lg:order-1 grid grid-cols-2 gap-3">
              {[IMAGES.donor1, IMAGES.donor2, IMAGES.seal1, IMAGES.memorial1].map((src, i) => (
                <div key={i} className="overflow-hidden rounded border border-gray-200 shadow">
                  <img src={src} alt={`Athletic donor recognition wall ${cityName}`} className="w-full h-auto object-cover" loading="lazy" />
                </div>
              ))}
            </FadeIn>
            <FadeIn className="order-1 lg:order-2">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Donor Recognition Systems</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">{content.donor_heading}</h2>
              <div className="space-y-5">
                {paragraphs(content.donor_body).map((p, i) => (
                  <p key={i} className="text-gray-700 text-base leading-relaxed">{p}</p>
                ))}
              </div>
              <Link to="/donor-recognition" className="inline-flex items-center gap-2 mt-6 text-yellow-700 font-sans font-bold uppercase tracking-widest text-xs hover:text-yellow-600">
                View Donor Recognition <ArrowRight className="w-3 h-3" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* HALL OF FAME */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Hall of Fame Installations</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">{content.hof_heading}</h2>
              <div className="space-y-5">
                {paragraphs(content.hof_body).map((p, i) => (
                  <p key={i} className="text-gray-700 text-base leading-relaxed">{p}</p>
                ))}
              </div>
              <Link to="/hall-of-fame" className="inline-flex items-center gap-2 mt-6 text-yellow-700 font-sans font-bold uppercase tracking-widest text-xs hover:text-yellow-600">
                View Hall of Fame Systems <ArrowRight className="w-3 h-3" />
              </Link>
            </FadeIn>
            <FadeIn delay={0.2} className="grid grid-cols-2 gap-3">
              {[IMAGES.plaque1, IMAGES.plaque4, IMAGES.hof3, IMAGES.plaque5].map((src, i) => (
                <div key={i} className="overflow-hidden rounded border border-gray-200 shadow">
                  <img src={src} alt={`Hall of Fame bronze plaque ${cityName}`} className="w-full h-auto object-cover" loading="lazy" />
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* BUSTS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Bronze Portrait Busts</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">{content.busts_heading}</h2>
            </div>
          </FadeIn>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeIn>
              <div className="space-y-5">
                {paragraphs(content.busts_body).map((p, i) => (
                  <p key={i} className="text-gray-700 text-base leading-relaxed">{p}</p>
                ))}
              </div>
              <Link to="/bronze-athlete-busts" className="inline-flex items-center gap-2 mt-6 text-yellow-700 font-sans font-bold uppercase tracking-widest text-xs hover:text-yellow-600">
                View Bronze Busts <ArrowRight className="w-3 h-3" />
              </Link>
            </FadeIn>
            <FadeIn delay={0.15} className="grid grid-cols-2 gap-3">
              {[IMAGES.bust1, IMAGES.bust2, IMAGES.bust3, IMAGES.bust4].map((src, i) => (
                <div key={i} className="overflow-hidden rounded border border-gray-200 shadow">
                  <img src={src} alt={`Bronze bust ${cityName}`} className="w-full h-auto object-cover" loading="lazy" />
                </div>
              ))}
            </FadeIn>
          </div>
        </div>
      </section>

      {/* STATUES */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Bronze Statues & Sculptures</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-4">{content.statues_heading}</h2>
            </div>
          </FadeIn>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <FadeIn delay={0.1} className="grid grid-cols-2 gap-3 order-2 lg:order-1">
              {[IMAGES.statue1, IMAGES.statue2, IMAGES.statue3, IMAGES.statue4].map((src, i) => (
                <div key={i} className="overflow-hidden rounded border border-gray-200 shadow">
                  <img src={src} alt={`Bronze athlete statue ${cityName}`} className="w-full h-auto object-cover" loading="lazy" />
                </div>
              ))}
            </FadeIn>
            <FadeIn className="order-1 lg:order-2">
              <div className="space-y-5">
                {paragraphs(content.statues_body).map((p, i) => (
                  <p key={i} className="text-gray-700 text-base leading-relaxed">{p}</p>
                ))}
              </div>
              <Link to="/busts-and-statues" className="inline-flex items-center gap-2 mt-6 text-yellow-700 font-sans font-bold uppercase tracking-widest text-xs hover:text-yellow-600">
                View Bronze Statues <ArrowRight className="w-3 h-3" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SPORTS-SPECIFIC */}
      {content.sports?.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-10">
                <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Sport-Specific Recognition Programs</span>
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900">Athletic Recognition by Sport — {cityName}</h2>
              </div>
            </FadeIn>
            <div className="grid md:grid-cols-2 gap-6">
              {content.sports.map((sport, i) => (
                <FadeIn key={sport.name} delay={i * 0.06}>
                  <div className="border-2 border-gray-200 hover:border-yellow-500 transition-all duration-300 p-7 rounded">
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
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Athletic Facility Recognition</span>
            <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-8">{content.facility_heading}</h2>
            <div className="space-y-5">
              {paragraphs(content.facility_body).map((p, i) => (
                <p key={i} className="text-gray-700 text-base leading-relaxed">{p}</p>
              ))}
            </div>
          </FadeIn>
          <FadeIn delay={0.15} className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
            {[IMAGES.donor1, IMAGES.plaque6, IMAGES.boxing1, IMAGES.hof3].map((src, i) => (
              <div key={i} className="overflow-hidden rounded border border-gray-200 shadow">
                <img src={src} alt={`Athletic facility bronze recognition ${cityName}`} className="w-full h-auto object-cover" loading="lazy" />
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Why Champions In Bronze</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">{content.why_heading}</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.why_points?.map((pt, i) => (
              <FadeIn key={pt.title} delay={i * 0.07}>
                <div className="flex items-start gap-4 p-6 border border-gray-200 hover:border-yellow-500 hover:shadow-md transition-all rounded">
                  <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-serif text-base text-gray-900 font-semibold mb-1">{pt.title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{pt.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-10 bg-yellow-50 border-y-2 border-yellow-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "50+", label: "Years in Business", desc: "In operation since 1974" },
              { stat: "50,000+", label: "Satisfied Customers", desc: "Pro, collegiate & secondary" },
              { stat: "~1 Hour", label: "Artwork Proof", desc: "Every project, guaranteed" },
              { stat: "100 Yrs", label: "Guaranteed Outdoors", desc: "Built to last a century" },
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

      {/* QUOTE FORM */}
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
              {content.faqs?.map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FINAL CTA */}
      <QuoteForm
        title={`Ready to Honor ${cityName}'s Athletic Legacy?`}
        subtitle={`Champions In Bronze serves athletic programs, universities, stadiums, arenas, and Hall of Fame committees throughout ${cityName}, ${stateName}. Over 50 years of institutional-grade bronze. Made in the USA.`}
        source="pro"
      />
    </div>
  );
}