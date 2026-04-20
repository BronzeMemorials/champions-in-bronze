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
  { question: "What makes 3D relief different from standard plaques?", answer: "3D relief plaques feature a fully three-dimensional jersey raised 1/2 to 1 inch from the surface, with incredible fabric texture, fold details, and shadow depth. It looks like a real jersey was pressed into bronze." },
  { question: "What is the price range?", answer: "3D relief jersey plaques start at $895 for standard sizes (11×14). Larger formats and custom configurations range up to $2,500. Volume discounts available for team orders." },
  { question: "Can I order multiple for a team?", answer: "Absolutely. We offer volume pricing for team orders of 5 or more. Each plaque is individually customized with the player's name, number, and stats." },
];

const relatedProducts = [
  { to: "/custom-jersey-plaques", image: jerseyImg, title: "Standard Jersey Plaques", desc: "Cast bronze jersey plaques from $495." },
  { to: "/bronze-paperweights", image: paperweightImg, title: "Bronze Paperweights", desc: "Executive desk pieces from $150." },
  { to: "/request-quote", image: plaqueImg, title: "Custom Commission", desc: "Unique projects and bulk orders." },
];

export default function ReliefJerseyPlaques() {
  return (
    <div className="bg-obsidian text-parchment">
      <ProductHero
        image={jerseyImg}
        label="Museum Quality"
        title="3D Relief Jersey Plaques"
        subtitle="The pinnacle of jersey commemoration. Three-dimensional fabric texture, hand-sculpted details, and museum-quality casting that stops people in their tracks."
        cta1="Order Now"
        cta1Link="/request-quote"
        cta2="See Standard Plaques"
        cta2Link="/custom-jersey-plaques"
      />
      <TrustBadges />

      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn delay={0.1}>
              <SectionHeading label="From $895" title="You Can Feel the Fabric" />
              <p className="text-parchment/60 text-lg leading-relaxed -mt-8">
                Our 3D relief process creates a fully three-dimensional jersey that rises from the plaque surface 
                with extraordinary detail — every stitch, every fold, every wrinkle captured in permanent bronze. 
                It's the closest thing to touching history.
              </p>
              <FeatureList features={[
                "1/2\" to 1\" Relief Depth",
                "Fabric Texture Detail",
                "Hand-Sculpted Folds & Wrinkles",
                "Custom Patina Finish",
                "Premium Wood or Metal Backing",
                "Individually Numbered Edition",
              ]} />
              <Link to="/request-quote" className="inline-flex mt-10 bg-bronze hover:bg-gold text-parchment px-8 py-4 font-sans text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                Order Your Relief Plaque
              </Link>
            </FadeIn>
            <FadeIn>
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <img src={jerseyImg} alt="3D relief jersey plaque" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <RelatedProducts products={relatedProducts} />
      <FAQSection faqs={faqs} />
      <QuoteForm title="Commission Your 3D Relief" subtitle="Upload photos of the jersey. Detailed proof within 48 hours." source="shop" />
    </div>
  );
}