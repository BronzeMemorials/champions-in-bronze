import { Link } from "react-router-dom";
import ProductHero from "../components/shared/ProductHero";
import TrustBadges from "../components/shared/TrustBadges";
import SectionHeading from "../components/shared/SectionHeading";
import FeatureList from "../components/shared/FeatureList";
import FAQSection from "../components/shared/FAQSection";
import RelatedProducts from "../components/shared/RelatedProducts";
import QuoteForm from "../components/shared/QuoteForm";
import FadeIn from "../components/shared/FadeIn";

const jerseyImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/4262e1b6f_generated_6dae4386.png";
const paperweightImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/8f84177a0_generated_c8d564f9.png";
const plaqueImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/5b198cd19_generated_1a12a43b.png";

const faqs = [
  { question: "What information do I need to provide?", answer: "We need the player name, number, team name, and any specific design references (colors, logo, year). Upload photos of the actual jersey for best results. We handle the rest." },
  { question: "How long does production take?", answer: "Standard production is 3–4 weeks. Rush orders (2 weeks) are available for an additional fee. You'll receive a digital proof within 48 hours of ordering." },
  { question: "What sizes are available?", answer: "Our standard sizes are 8×10, 11×14, and 16×20 inches. Custom sizes are available upon request." },
  { question: "Can I include career statistics?", answer: "Absolutely. We can include career stats, honors, years of service, and custom dedication text on the plaque." },
];

const relatedProducts = [
  { to: "/3d-relief-jersey-plaques", image: jerseyImg, title: "3D Relief Jersey Plaques", desc: "Museum-quality three-dimensional relief." },
  { to: "/bronze-paperweights", image: paperweightImg, title: "Bronze Paperweights", desc: "Executive desk pieces and gifts." },
  { to: "/request-quote", image: plaqueImg, title: "Custom Commission", desc: "Need something unique? Let's talk." },
];

export default function CustomJerseyPlaques() {
  return (
    <div className="bg-obsidian text-parchment">
      <ProductHero
        image={jerseyImg}
        label="Collector's Edition"
        title="Custom Jersey Plaques"
        subtitle="Your jersey, immortalized in cast bronze. The perfect retirement gift, player award, or personal tribute to a career in athletics."
        cta1="Order Now"
        cta1Link="/request-quote"
        cta2="See 3D Relief Options"
        cta2Link="/3d-relief-jersey-plaques"
      />
      <TrustBadges />

      <QuoteForm title="Request Your Free Artwork Proof" subtitle="Tell us about your jersey plaque — we'll deliver a digital proof within the hour." source="shop" />

      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <img src={jerseyImg} alt="Custom jersey plaque" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <SectionHeading label="From $495" title="A Career Deserves More Than a Frame" />
              <p className="text-parchment/60 text-lg leading-relaxed -mt-8">
                Fabric fades. Signatures yellow. A cast bronze jersey plaque is the only tribute that matches 
                the permanence of an athletic career. Every plaque is individually cast, hand-finished, 
                and shipped in a premium presentation box.
              </p>
              <FeatureList features={[
                "Individually Cast Bronze",
                "Hand-Finished Patina",
                "Custom Text & Statistics",
                "Premium Presentation Box",
                "Multiple Size Options",
                "3–4 Week Production",
              ]} />
              <Link to="/request-quote" className="inline-flex mt-10 bg-bronze hover:bg-gold text-parchment px-8 py-4 font-sans text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                Order Your Plaque
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <RelatedProducts products={relatedProducts} />
      <QuoteForm title="Get a Quote — Artwork Within The Hour" subtitle="No commitment required. Museum-quality artwork proof delivered fast." source="shop" />
      <FAQSection faqs={faqs} />
      <QuoteForm title="Order Your Jersey Plaque" subtitle="Tell us about the jersey you want immortalized." source="shop" />
    </div>
  );
}