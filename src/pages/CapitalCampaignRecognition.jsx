import ProductHero from "../components/shared/ProductHero";
import TrustBadges from "../components/shared/TrustBadges";
import SectionHeading from "../components/shared/SectionHeading";
import FeatureList from "../components/shared/FeatureList";
import FAQSection from "../components/shared/FAQSection";
import RelatedProducts from "../components/shared/RelatedProducts";
import QuoteForm from "../components/shared/QuoteForm";
import FadeIn from "../components/shared/FadeIn";

const plaqueImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/5b198cd19_generated_1a12a43b.png";
const donorImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/ab5fbf767_generated_696960c2.png";
const hallImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/502c0767b_generated_e375b9ec.png";
const lettersImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/5574c762c_generated_64635338.png";

const faqs = [
  { question: "Can recognition pieces be phased with the campaign?", answer: "Yes. We design and deliver in phases aligned with your campaign milestones — groundbreaking, naming-rights, completion, and ongoing annual recognition." },
  { question: "What types of recognition are included?", answer: "Building naming plaques, room dedications, campaign milestone markers, donor walls, and contributor displays. Each type is designed in the same visual language for brand consistency." },
  { question: "Do you provide renderings for donor presentations?", answer: "Absolutely. We provide photorealistic 3D renderings showing donors exactly how their recognition will look in the completed facility. These are powerful tools for closing major gifts." },
];

const relatedProducts = [
  { to: "/athletic-donor-walls", image: donorImg, title: "Donor Walls", desc: "Permanent donor recognition displays." },
  { to: "/college-hall-of-fame-plaques", image: hallImg, title: "Hall of Fame", desc: "Portrait plaques for inductees." },
  { to: "/dimensional-metal-letters", image: lettersImg, title: "Dimensional Letters", desc: "Naming-rights signage in cast bronze." },
];

export default function CapitalCampaignRecognition() {
  return (
    <div className="bg-obsidian text-parchment">
      <ProductHero
        image={plaqueImg}
        label="Campaign Recognition"
        title="Capital Campaign Recognition"
        subtitle="Naming-rights displays, building dedication plaques, and campaign milestone markers — designed to align with your advancement timeline and drive major gifts."
      />
      <TrustBadges />

      <QuoteForm title="Request Your Free Artwork Proof" subtitle="Tell us about your capital campaign — we'll deliver a digital proof within the hour." source="edu" />

      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn delay={0.1}>
              <SectionHeading label="Advancement Partner" title="Bronze That Closes Gifts" />
              <p className="text-parchment/60 text-lg leading-relaxed -mt-8">
                Capital campaigns succeed when donors can visualize their impact. Our bronze recognition 
                pieces give development officers a tangible, emotional tool — showing prospects exactly how 
                their name will appear, permanently, in the facility they're helping build.
              </p>
              <FeatureList features={[
                "Building Naming Plaques",
                "Room Dedication Displays",
                "Campaign Milestone Markers",
                "Photorealistic 3D Renderings",
                "Phased Delivery Timeline",
                "Consistent Brand Language",
              ]} />
            </FadeIn>
            <FadeIn>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <img src={plaqueImg} alt="Capital campaign plaque" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <RelatedProducts products={relatedProducts} />
      <QuoteForm title="Get a Quote — Artwork Within The Hour" subtitle="No commitment required. Museum-quality artwork proof delivered fast." source="edu" />
      <FAQSection faqs={faqs} />
      <QuoteForm title="Partner With Us" subtitle="Share your campaign details. Recognition concepts and renderings delivered in 48 hours." source="edu" />
    </div>
  );
}