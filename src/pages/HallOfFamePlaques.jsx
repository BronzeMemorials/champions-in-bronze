import ProductHero from "../components/shared/ProductHero";
import TrustBadges from "../components/shared/TrustBadges";
import SectionHeading from "../components/shared/SectionHeading";
import FeatureList from "../components/shared/FeatureList";
import FAQSection from "../components/shared/FAQSection";
import RelatedProducts from "../components/shared/RelatedProducts";
import TestimonialCarousel from "../components/shared/TestimonialCarousel";
import QuoteForm from "../components/shared/QuoteForm";
import FadeIn from "../components/shared/FadeIn";

const plaqueImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/5b198cd19_generated_1a12a43b.png";
const heroImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/d74e93030_generated_7f57395d.png";
const donorImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/ab5fbf767_generated_696960c2.png";
const hallImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/502c0767b_generated_e375b9ec.png";

const faqs = [
  { question: "How do you create accurate portrait likenesses?", answer: "We work from multiple reference photographs — ideally 5–10 images from different angles. Our sculptors create clay portraits that are reviewed and refined until the likeness is approved. We achieve 95%+ likeness accuracy." },
  { question: "Can you design the entire Hall of Fame display?", answer: "Yes. We provide full design services from conceptual layout through final installation. This includes wall systems, lighting consultation, plaque sizing, arrangement, and ongoing expansion planning." },
  { question: "What information is typically included on each plaque?", answer: "Standard Hall of Fame plaques include a portrait relief, inductee name, sport/position, years of service, career highlights, and induction year. Custom elements like team logos and statistical records are also available." },
  { question: "How do you handle annual additions?", answer: "We design all Hall of Fame systems for annual expansion. New inductee plaques are manufactured to exactly match existing plaques in finish, size, and mounting. We maintain templates on file for seamless additions." },
];

const relatedProducts = [
  { to: "/championship-bronze-plaques", image: plaqueImg, title: "Championship Plaques", desc: "Commemorative plaques for titles and records." },
  { to: "/bronze-player-statues", image: heroImg, title: "Bronze Statues", desc: "Life-size monuments for the most honored." },
  { to: "/stadium-donor-walls", image: donorImg, title: "Donor Walls", desc: "Recognition systems for contributors." },
];

export default function HallOfFamePlaques() {
  return (
    <div className="bg-obsidian text-parchment">
      <ProductHero
        image={hallImg}
        label="The Highest Honor"
        title="Hall of Fame Bronze Plaques"
        subtitle="The most respected form of athletic recognition. Hand-sculpted portrait reliefs cast in bronze — designed for annual additions and generations of honorees."
      />

      <TrustBadges />

      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn delay={0.1}>
              <SectionHeading label="Immortal Recognition" title="Where Legends Live Forever" />
              <p className="text-parchment/60 text-lg leading-relaxed -mt-8">
                A Hall of Fame plaque is the pinnacle of athletic recognition. It communicates to every visitor 
                — recruit, donor, fan — that <em className="text-gold">this institution honors its greats permanently.</em> Our 
                portrait plaques capture not just a likeness, but a personality, rendered in bronze that will 
                outlast the building itself.
              </p>
              <FeatureList features={[
                "Hand-Sculpted Portrait Reliefs",
                "Consistent Annual Expansion",
                "Custom Display Wall Systems",
                "Lighting Integration",
                "Indoor & Outdoor Rated",
                "Template-On-File for Re-Orders",
              ]} />
            </FadeIn>
            <FadeIn>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <img src={hallImg} alt="Hall of Fame bronze plaques" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <RelatedProducts products={relatedProducts} />
      <TestimonialCarousel />
      <FAQSection faqs={faqs} />
      <QuoteForm title="Start Your Hall of Fame" subtitle="Share your inductee information. Portrait concept and layout delivered in 48 hours." source="pro" />
    </div>
  );
}