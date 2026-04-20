import { Link } from "react-router-dom";
import ProductHero from "../components/shared/ProductHero";
import TrustBadges from "../components/shared/TrustBadges";
import SectionHeading from "../components/shared/SectionHeading";
import FeatureList from "../components/shared/FeatureList";
import FAQSection from "../components/shared/FAQSection";
import RelatedProducts from "../components/shared/RelatedProducts";
import QuoteForm from "../components/shared/QuoteForm";
import FadeIn from "../components/shared/FadeIn";

const paperweightImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/8f84177a0_generated_c8d564f9.png";
const jerseyImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/4262e1b6f_generated_6dae4386.png";
const plaqueImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/5b198cd19_generated_1a12a43b.png";

const faqs = [
  { question: "What can be customized?", answer: "Everything — shape, size, text, logos, and design motifs. Popular options include team logos, mascots, championship years, and custom dedications. We work from your design or create one from scratch." },
  { question: "Are these suitable for corporate gifts?", answer: "Absolutely. Bronze paperweights are a sophisticated executive gift. We offer volume pricing and custom packaging for corporate orders, fundraising events, and award ceremonies." },
  { question: "What is the turnaround time?", answer: "Standard production is 2–3 weeks. Rush orders available in 7–10 business days. Volume orders of 25+ may require 4–6 weeks." },
  { question: "What sizes and weights are available?", answer: "Standard paperweights range from 3 to 6 inches across and weigh 8 oz to 2 lbs. Custom sizes up to desk-scale sculptures are available." },
];

const relatedProducts = [
  { to: "/custom-jersey-plaques", image: jerseyImg, title: "Jersey Plaques", desc: "Cast bronze jersey plaques from $495." },
  { to: "/3d-relief-jersey-plaques", image: jerseyImg, title: "3D Relief Plaques", desc: "Museum-quality three-dimensional relief." },
  { to: "/request-quote", image: plaqueImg, title: "Custom Commission", desc: "Unique projects and special orders." },
];

export default function BronzePaperweights() {
  return (
    <div className="bg-obsidian text-parchment">
      <ProductHero
        image={paperweightImg}
        label="Executive Collection"
        title="Bronze Paperweights"
        subtitle="Handcrafted bronze desk pieces and commemorative items. The perfect executive gift, coaching award, or personal collection piece. Starting at $150."
        cta1="Order Now"
        cta1Link="/request-quote"
        cta2="View Jersey Plaques"
        cta2Link="/custom-jersey-plaques"
      />
      <TrustBadges />

      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <img src={paperweightImg} alt="Bronze paperweight" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <SectionHeading label="From $150" title="Weight & Substance for Your Desk" />
              <p className="text-parchment/60 text-lg leading-relaxed -mt-8">
                In a world of disposable gifts, a bronze paperweight stands apart. Each piece carries the 
                satisfying weight of real metal and the warmth of hand-finished patina — a daily reminder 
                of achievement, presented in a premium gift box.
              </p>
              <FeatureList features={[
                "Solid Cast Bronze",
                "Custom Logos & Text",
                "Hand-Finished Patina",
                "Premium Gift Packaging",
                "Volume Pricing Available",
                "2–3 Week Production",
              ]} />
              <Link to="/request-quote" className="inline-flex mt-10 bg-bronze hover:bg-gold text-parchment px-8 py-4 font-sans text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                Order Paperweights
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      <RelatedProducts products={relatedProducts} />
      <FAQSection faqs={faqs} />
      <QuoteForm title="Order Bronze Paperweights" subtitle="Tell us about your design, quantity, and timeline." source="shop" />
    </div>
  );
}