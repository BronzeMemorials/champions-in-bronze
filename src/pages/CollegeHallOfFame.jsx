import ProductHero from "../components/shared/ProductHero";
import TrustBadges from "../components/shared/TrustBadges";
import SectionHeading from "../components/shared/SectionHeading";
import FeatureList from "../components/shared/FeatureList";
import FAQSection from "../components/shared/FAQSection";
import RelatedProducts from "../components/shared/RelatedProducts";
import QuoteForm from "../components/shared/QuoteForm";
import FadeIn from "../components/shared/FadeIn";

const hallImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/502c0767b_generated_e375b9ec.png";
const donorImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/ab5fbf767_generated_696960c2.png";
const jerseyImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/4262e1b6f_generated_6dae4386.png";
const plaqueImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/5b198cd19_generated_1a12a43b.png";

const faqs = [
  { question: "How many inductees per year can you accommodate?", answer: "Our systems handle any volume — from 1 to 25+ inductees per year. We design wall systems with decades of expansion capacity built in from day one." },
  { question: "Can you work from historical photographs?", answer: "Yes. Our sculptors regularly work from yearbook photos, newspaper clippings, and limited reference material to create accurate portrait reliefs for historical inductees." },
  { question: "What is included in a complete Hall of Fame display?", answer: "We provide the full system: individual portrait plaques, display wall structure, header signage, lighting consultation, layout design, and ongoing annual addition service." },
];

const relatedProducts = [
  { to: "/athletic-donor-walls", image: donorImg, title: "Donor Walls", desc: "Recognition displays for your contributors." },
  { to: "/retired-jersey-displays", image: jerseyImg, title: "Retired Jerseys", desc: "Bronze relief retired number displays." },
  { to: "/capital-campaign-recognition", image: plaqueImg, title: "Capital Campaigns", desc: "Campaign and naming recognition." },
];

export default function CollegeHallOfFame() {
  return (
    <div className="bg-obsidian text-parchment">
      <ProductHero
        image={hallImg}
        label="Collegiate Legacy"
        title="College Hall of Fame Plaques"
        subtitle="Hand-sculpted portrait plaques that honor your institution's greatest student-athletes. Designed for annual induction ceremonies and decades of expansion."
      />
      <TrustBadges />

      <QuoteForm title="Request Your Free Artwork Proof" subtitle="Tell us about your Hall of Fame project — we'll deliver a digital proof within the hour." source="edu" />

      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn delay={0.1}>
              <SectionHeading label="Tradition" title="A Ceremony They'll Never Forget" />
              <p className="text-parchment/60 text-lg leading-relaxed -mt-8">
                When a former student-athlete returns to campus and sees their portrait permanently cast in bronze — 
                surrounded by the legends who came before them — it's a moment that transcends athletics. 
                It tells every current recruit: <em className="text-gold">"This is a program that honors its own."</em>
              </p>
              <FeatureList features={[
                "Hand-Sculpted Portrait Reliefs",
                "Multi-Sport Display Systems",
                "Historical Inductee Capability",
                "Annual Ceremony Coordination",
                "Expandable Wall Systems",
                "Consistent Quality Across Decades",
              ]} />
            </FadeIn>
            <FadeIn>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <img src={hallImg} alt="College hall of fame" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <RelatedProducts products={relatedProducts} />
      <QuoteForm title="Get a Quote — Artwork Within The Hour" subtitle="No commitment required. Museum-quality artwork proof delivered fast." source="edu" />
      <FAQSection faqs={faqs} />
      <QuoteForm title="Start Your Hall of Fame" subtitle="Share your inductee roster and facility photos. Designs delivered in 48 hours." source="edu" />
    </div>
  );
}