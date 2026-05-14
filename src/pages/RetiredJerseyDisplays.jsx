import ProductHero from "../components/shared/ProductHero";
import TrustBadges from "../components/shared/TrustBadges";
import SectionHeading from "../components/shared/SectionHeading";
import FeatureList from "../components/shared/FeatureList";
import FAQSection from "../components/shared/FAQSection";
import RelatedProducts from "../components/shared/RelatedProducts";
import QuoteForm from "../components/shared/QuoteForm";
import FadeIn from "../components/shared/FadeIn";

const jerseyImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/4262e1b6f_generated_6dae4386.png";
const donorImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/ab5fbf767_generated_696960c2.png";
const hallImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/502c0767b_generated_e375b9ec.png";
const plaqueImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/5b198cd19_generated_1a12a43b.png";

const faqs = [
  { question: "What level of detail can you capture in a jersey?", answer: "Our 3D relief process captures fabric texture, stitching patterns, numbers, letters, and team logos with extraordinary fidelity. The result looks like a real jersey frozen in bronze." },
  { question: "What display options are available?", answer: "Individual wall-mounted plaques, multi-jersey display walls, freestanding cases, and integrated hall of fame systems. Each includes a nameplate with player info and career highlights." },
  { question: "Can you match our school colors in the patina?", answer: "We offer custom patina treatments that can approximate school colors while maintaining the bronze medium. Traditional brown, verde, and custom-colored patinas are all available." },
];

const relatedProducts = [
  { to: "/college-hall-of-fame-plaques", image: hallImg, title: "Hall of Fame", desc: "Portrait plaques for your hall of fame." },
  { to: "/athletic-donor-walls", image: donorImg, title: "Donor Walls", desc: "Recognition for contributors." },
  { to: "/capital-campaign-recognition", image: plaqueImg, title: "Capital Campaigns", desc: "Campaign recognition displays." },
];

export default function RetiredJerseyDisplays() {
  return (
    <div className="bg-obsidian text-parchment">
      <ProductHero
        image={jerseyImg}
        label="Number Retirement"
        title="Retired Jersey Displays"
        subtitle="Transform retired numbers into stunning bronze relief displays. Three-dimensional fabric texture, hand-finished patina, and permanent installation for arenas and corridors."
      />
      <TrustBadges />

      <QuoteForm title="Request Your Free Artwork Proof" subtitle="Tell us about your retired jersey display — we'll deliver a digital proof within the hour." source="edu" />

      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <img src={jerseyImg} alt="Retired jersey bronze display" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <SectionHeading label="Beyond the Banner" title="Retirement Worthy of the Honor" />
              <p className="text-parchment/60 text-lg leading-relaxed -mt-8">
                A fabric banner fades. A bronze relief lasts forever. Our retired jersey displays 
                capture the texture, number, and identity of the jersey in three-dimensional cast bronze — 
                creating a monument as permanent as the achievement it represents.
              </p>
              <FeatureList features={[
                "3D Fabric Texture Relief",
                "Custom Patina & Finish",
                "Integrated Player Nameplate",
                "Career Highlights Panel",
                "Wall-Mount & Freestanding Options",
                "Multi-Jersey Display Systems",
              ]} />
            </FadeIn>
          </div>
        </div>
      </section>

      <RelatedProducts products={relatedProducts} />
      <QuoteForm title="Get a Quote — Artwork Within The Hour" subtitle="No commitment required. Museum-quality artwork proof delivered fast." source="edu" />
      <FAQSection faqs={faqs} />
      <QuoteForm title="Commission a Jersey Display" subtitle="Send us the jersey details and installation photos. Designs in 48 hours." source="edu" />
    </div>
  );
}