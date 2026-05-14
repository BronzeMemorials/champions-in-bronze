import ProductHero from "../components/shared/ProductHero";
import TrustBadges from "../components/shared/TrustBadges";
import SectionHeading from "../components/shared/SectionHeading";
import FeatureList from "../components/shared/FeatureList";
import FAQSection from "../components/shared/FAQSection";
import RelatedProducts from "../components/shared/RelatedProducts";
import TestimonialCarousel from "../components/shared/TestimonialCarousel";
import QuoteForm from "../components/shared/QuoteForm";
import FadeIn from "../components/shared/FadeIn";

const donorImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/ab5fbf767_generated_696960c2.png";
const hallImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/502c0767b_generated_e375b9ec.png";
const plaqueImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/5b198cd19_generated_1a12a43b.png";
const jerseyImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/4262e1b6f_generated_6dae4386.png";

const faqs = [
  { question: "How does a donor wall increase giving?", answer: "When alumni and boosters see peers' names permanently displayed in the facility they love, it creates powerful social proof and emotional motivation. Our collegiate clients report 30–40% increases in donor participation after installation." },
  { question: "Can we add donors annually?", answer: "Absolutely. Every wall system we design includes expansion capacity for 25+ years of growth. New plaques match existing ones perfectly — we maintain templates on file for each installation." },
  { question: "What giving tiers work best?", answer: "Most successful programs use 4–5 tiers: e.g., Champion ($100K+), All-American ($50K+), Varsity ($25K+), Letterwinner ($10K+), and Booster ($5K+). We customize tier names to reflect your institution's culture." },
  { question: "Do you work with development officers?", answer: "Yes. We partner closely with advancement offices and booster clubs. We provide campaign materials, renderings, and donor presentation packages to help close major gifts." },
];

const relatedProducts = [
  { to: "/college-hall-of-fame-plaques", image: hallImg, title: "College Hall of Fame", desc: "Portrait plaques for your hall of fame." },
  { to: "/retired-jersey-displays", image: jerseyImg, title: "Retired Jersey Displays", desc: "Bronze relief retired number displays." },
  { to: "/capital-campaign-recognition", image: plaqueImg, title: "Capital Campaigns", desc: "Naming-rights and milestone markers." },
];

export default function AthleticDonorWalls() {
  return (
    <div className="bg-obsidian text-parchment">
      <ProductHero
        image={donorImg}
        label="Donor Recognition"
        title="Athletic Donor Recognition Walls"
        subtitle="Transform alumni giving into permanent bronze recognition. Modular systems designed for NCAA athletic departments, booster clubs, and university advancement offices."
      />
      <TrustBadges />

      <QuoteForm title="Request Your Free Artwork Proof" subtitle="Tell us about your donor wall project — we'll deliver a digital proof within the hour." source="edu" />

      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <img src={donorImg} alt="Athletic donor wall" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <SectionHeading label="Fundraising Tool" title="The Most Powerful Tool in Your Development Arsenal" />
              <p className="text-parchment/60 text-lg leading-relaxed -mt-8">
                When prospective donors walk through your athletic facility and see names of their peers permanently 
                cast in bronze, it creates an emotional imperative to contribute. A donor wall isn't just recognition — 
                it's a <em className="text-gold">capital campaign accelerator.</em>
              </p>
              <FeatureList features={[
                "Custom Tier Systems (4–6 Levels)",
                "25+ Year Expansion Capacity",
                "Development Presentation Packages",
                "Full Design & Installation",
                "Annual Addition Service",
                "Lighting Consultation",
              ]} />
            </FadeIn>
          </div>
        </div>
      </section>

      <RelatedProducts products={relatedProducts} />
      <TestimonialCarousel />
      <QuoteForm title="Get a Quote — Artwork Within The Hour" subtitle="No commitment required. Museum-quality artwork proof delivered fast." source="edu" />
      <FAQSection faqs={faqs} />
      <QuoteForm title="Design Your Donor Wall" subtitle="Share your facility photos and campaign details. Concepts delivered in 48 hours." source="edu" />
    </div>
  );
}