import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductHero from "../components/shared/ProductHero";
import TrustBadges from "../components/shared/TrustBadges";
import FadeIn from "../components/shared/FadeIn";
import SEOHead from "../components/shared/SEOHead";
import FAQSection from "../components/shared/FAQSection";
import QuoteForm from "../components/shared/QuoteForm";

const heroImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/807fb8285_1EF9640F-BCCF-47C1-8ADB-FF7ACD382588.png";

const faqs = [
{ question: "What sizes are available for portrait busts?", answer: "We produce busts from 6\" tabletop scale through 36\" architectural scale. Most Hall of Fame commissions are 18\"–24\". Custom sizes available for any application." },
{ question: "Can a bust be created from historical photographs?", answer: "Yes. We regularly work with historical photographs, archival black-and-white images, and even low-resolution photography. Our sculptors are trained in historical reference research and photogrammetric reconstruction." },
{ question: "How long does a portrait bust take?", answer: "Digital sculpt proof within 48 hours. Full production typically 10–16 weeks depending on size and complexity." },
{ question: "Where are busts typically displayed?", answer: "Hall of Fame corridors, trophy rooms, athletic director offices, award ceremonies, boardrooms, athletic facilities, and private homes. We design for any environment." }];


const formats = [
{ title: "6\" Tabletop Bust", range: "From $9,990", desc: "Award presentations, ceremonial gifts, and personal recognition. Perfect for Hall of Fame inductee ceremonies." },
{ title: "12\" Portrait Bust", range: "From $14,990", desc: "Standard recognition scale. Trophy room displays, office collections, and wall-mounted presentations." },
{ title: "18\" Display Bust", range: "From $49,750", desc: "Architectural display scale. Ideal for Hall of Fame corridors, reception lobbies, and permanent recognition walls." },
{ title: "24\"+ Bust", range: "From $79,900", desc: "Monumental scale for major installations. Stadium lobbies, arena entrances, and landmark recognition environments." }];


export default function BronzeAthleteBusts() {
  return (
    <div className="bg-obsidian text-parchment">
      <SEOHead
        title="Bronze Athlete Portrait Busts — Hall of Fame Quality | Champions in Bronze"
        description="Custom bronze portrait busts for Hall of Fame recognition, award ceremonies, and legacy displays. Exact photo likeness. Museum quality. Tabletop through architectural scale."
        canonical="/bronze-athlete-busts" />
      

      <ProductHero
        image={heroImg}
        label="Hall of Fame Quality"
        title="Bronze Athlete Portrait Busts"
        subtitle="Museum-quality portrait busts sculpted from your photographs — for Hall of Fame corridors, trophy rooms, award ceremonies, and legacy recognition."
        cta1="Request Concept Design"
        cta1Link="/request-concept-design"
        cta2="View Pricing"
        cta2Link="/bronze-statue-pricing" />
      

      <TrustBadges />

      <QuoteForm title="Request Your Free Artwork Proof" subtitle="Tell us about your bust project — we'll deliver a digital proof within the hour." source="pro" />

      {/* Bust Gallery */}
      <section className="py-16 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Gallery</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-3 text-parchment">Bronze Bust Gallery</h2>
              <p className="text-parchment/55 font-sans text-sm mt-3 max-w-2xl mx-auto">Every bust created from your actual photographs — exact likeness, museum-quality bronze. No in-person sessions required.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {[
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/496d05ff8_99F60C02-07FA-4E6B-A2F7-A1DF3368DE0E.png", label: "Standard Hall of Fame Bust", desc: "Classic shoulder bust — the Hall of Fame standard" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/1daa60284_ECEF0D5E-181D-4F24-8FD8-994D7F9B3730.png", label: "Athlete Portrait Bust", desc: "Exact likeness from photographs — no in-person session" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/4d41d4287_0804D2D5-A521-470D-9D6D-8E45E69BA991.png", label: "Coach Portrait Bust", desc: "Coaches, administrators, and leaders honored in bronze" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/82c049fdc_1EFEDCFE-9322-40E1-88FB-5223406FB921.png", label: "Championship Bust", desc: "Championship-era likeness sculpted for trophy rooms" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/580dca88d_BA78C4BD-B3AA-4B99-9EE6-70D7AC769604.png", label: "Stadium Donor Bust", desc: "Major donor recognition — permanent bronze portrait" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/4b1801f52_A48B1FB3-444D-4741-AE40-D4E863E0F068.png", label: "Historic Athlete Bust", desc: "Created from archival photographs — any era" },
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="group overflow-hidden border border-bronze/20 hover:border-gold transition-all duration-300 bg-white rounded-sm shadow-sm">
                  <div className="bg-secondary/20 flex items-center justify-center p-2">
                    <img src={item.img} alt={item.label + " — Champions in Bronze"} className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-4 text-center border-t border-bronze/10">
                    <p className="font-serif text-base text-parchment font-semibold">{item.label}</p>
                    <p className="text-parchment/50 text-xs mt-1">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 border-t border-bronze/10 rounded-none">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Available Formats</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-3 text-parchment">Portrait Bust Sizes & Pricing</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {formats.map((f, i) =>
            <FadeIn key={f.title} delay={i * 0.1}>
                <div className="border border-bronze/20 bg-secondary/30 p-8 rounded-sm flex flex-col">
                  <p className="font-serif text-2xl text-gold">{f.title}</p>
                  <p className="text-bronze-light font-serif text-lg mt-2">{f.range}</p>
                  <p className="text-parchment/55 text-sm mt-4 leading-relaxed flex-1">{f.desc}</p>
                  <Link to="/request-concept-design" className="inline-flex items-center gap-2 mt-6 text-gold text-xs font-sans uppercase tracking-widest hover:text-parchment transition-colors">
                    Request Quote <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </FadeIn>
            )}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 border-t border-bronze/10 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <p className="text-parchment/40 font-sans text-xs uppercase tracking-[0.3em] text-center mb-8">Related Collections</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
              { label: "Hall of Fame Displays", to: "/hall-of-fame-bronze-displays" },
              { label: "Custom Bronze Statues", to: "/custom-bronze-athlete-statues" },
              { label: "3D Bas-Relief Plaques", to: "/3d-bas-relief-plaques" },
              { label: "Donor Recognition", to: "/donor-recognition" },
              { label: "Full Pricing Guide", to: "/bronze-statue-pricing" }].
              map((link) =>
              <Link key={link.to} to={link.to}
              className="border border-bronze/25 hover:border-gold text-parchment/55 hover:text-parchment px-5 py-2.5 font-sans text-xs uppercase tracking-[0.1em] transition-colors duration-200 rounded-sm">
                  {link.label}
                </Link>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      <QuoteForm title="Get a Quote — Artwork Within The Hour" subtitle="No commitment required. Museum-quality artwork proof delivered fast." source="pro" />

      <FAQSection faqs={faqs} />
      <QuoteForm title="Commission Your Portrait Bust" subtitle="Share your photos and we'll deliver a digital sculpt proof within 48 hours." source="pro" />
    </div>);

}