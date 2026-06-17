import ProductHero from "../components/shared/ProductHero";
import TrustBadges from "../components/shared/TrustBadges";
import FAQSection from "../components/shared/FAQSection";
import QuoteForm from "../components/shared/QuoteForm";
import FadeIn from "../components/shared/FadeIn";
import SportPlaquesShowcase from "../components/shared/SportPlaquesShowcase";
import BustPlaquesShowcase from "../components/shared/BustPlaquesShowcase";

const heroImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/5b198cd19_generated_1a12a43b.png";
const img1 = "https://media.base44.com/images/public/69e6638934292a547ec97753/4262e1b6f_generated_6dae4386.png";
const img2 = "https://media.base44.com/images/public/69e6638934292a547ec97753/ab5fbf767_generated_696960c2.png";
const img3 = "https://media.base44.com/images/public/69e6638934292a547ec97753/d74e93030_generated_7f57395d.png";

const faqs = [
  { question: "What occasions do dedication plaques cover?", answer: "Building dedications, room naming, scholarship endowments, event sponsorship, anniversary commemorations, field and court naming, locker room dedications, and any occasion where permanent recognition is desired." },
  { question: "Can donor portraits be included on dedication plaques?", answer: "Yes. We frequently incorporate Photo ImageCasting portraits of the honoree or donor alongside dedication text — a truly personal and prestigious recognition piece." },
  { question: "What is the minimum order size?", answer: "A single plaque. We produce individual dedication plaques from $395. Volume pricing for multiple plaques (e.g., series of scholarship rooms)." },
  { question: "How long does production take?", answer: "Standard dedication plaques ship in 15–21 days after artwork approval. Rush service available. Artwork proof within 48 hours of order." },
];

export default function DedicationPlaques() {
  return (
    <div className="bg-obsidian text-parchment">
      <ProductHero
        image={heroImg}
        label="Dedication · Naming Rights · Scholarship"
        title="Dedication & Naming Plaques"
        subtitle="Building dedications, room naming, scholarship endowments, and event sponsorship recognition. Permanent bronze markers that honor generosity for as long as the building stands."
        cta1="Get a Quote"
        cta1Link="/request-quote"
        cta2="View Portfolio"
        cta2Link="/portfolio"
      />

      <TrustBadges />

      <QuoteForm title="Request Your Free Artwork Proof" subtitle="Tell us about your project — we'll deliver a digital proof within the hour." source="pro" />

      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Dedication Plaque Formats</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-3 text-parchment">Every Occasion Deserves Bronze</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: img1, title: "Building & Facility Dedication", desc: "Architecture-scale plaques for main entrances, lobbies, and building cornerstones. Includes Photo ImageCasting portrait of naming donor or honoree." },
              { img: img2, title: "Room & Scholarship Naming", desc: "Smaller format plaques for named rooms, labs, suites, and scholarship endowments. Clear donor recognition at the point of impact." },
              { img: img3, title: "Event & Anniversary Plaques", desc: "Commemorative plaques for program anniversaries, championship years, groundbreaking ceremonies, and institutional milestones." },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="border border-bronze/20 rounded-sm overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-parchment">{item.title}</h3>
                    <p className="text-parchment/50 text-sm mt-3 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <QuoteForm title="Get a Quote — Artwork Within The Hour" subtitle="No commitment required. Museum-quality artwork proof delivered fast." source="pro" />
      <SportPlaquesShowcase />
      <BustPlaquesShowcase />
      <FAQSection faqs={faqs} title="Dedication Plaque FAQ" />
      <QuoteForm title="Start Your Dedication Plaque" subtitle="Tell us about the occasion and honoree. Artwork proof within 48 hours." source="pro" />
    </div>
  );
}