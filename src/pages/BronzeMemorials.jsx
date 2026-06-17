import { Camera } from "lucide-react";
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

const faqs = [
  { question: "Can a memorial include the person's actual photograph?", answer: "Yes — and we strongly recommend it. Our Photo ImageCasting process permanently casts your loved one's or honoree's actual photograph into the bronze memorial plaque. Their real face, their real expression — not a drawing or generic image. Cast forever." },
  { question: "What types of memorials do you produce?", answer: "Memorial plaques for walls and buildings, headstone plaques, commemorative tablets, in memoriam displays, eternal flame dedications, and complete memorial installations." },
  { question: "Are memorials outdoor-rated?", answer: "Yes. Silicon bronze is the material of choice for permanent outdoor memorials — rated for 200+ years of weather exposure. We use the same alloys as major public monuments." },
  { question: "How sensitive is the process?", answer: "Extremely. We have a dedicated memorial team that treats every commission with care and respect. We understand the weight of this work and we take it seriously." },
];

export default function BronzeMemorials() {
  return (
    <div className="bg-obsidian text-parchment">
      <ProductHero
        image={heroImg}
        label="Memorial · Commemorative · Eternal"
        title="Bronze Memorial Plaques"
        subtitle="Honor those who shaped your program, your institution, or your community. Memorial plaques cast in bronze — including the person's actual photograph — that stand as permanent tribute."
        cta1="Begin a Memorial"
        cta1Link="/request-quote"
        cta2="View Portfolio"
        cta2Link="/portfolio"
      />

      <TrustBadges />

      <QuoteForm title="Request Your Free Artwork Proof" subtitle="Tell us about your memorial project — we'll deliver a digital proof within the hour." source="pro" />

      <section className="py-20 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-bronze/10 border border-bronze/30 rounded-sm p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <Camera className="w-12 h-12 text-gold flex-shrink-0" />
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-parchment">Their Actual Photograph. Cast in Bronze. Forever.</h3>
              <p className="mt-3 text-parchment/60 leading-relaxed">
                Using our Photo ImageCasting process, your loved one's or honoree's actual photograph is permanently cast into the bronze memorial — not engraved, not printed, not interpreted. Their real face and expression, preserved with the permanence of bronze, for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { img: img1, title: "Wall & Building Memorials", desc: "In memoriam plaques mounted in lobbies, corridors, chapels, and athletic facilities. Includes portrait and tribute text." },
              { img: img2, title: "Outdoor Commemorative Tablets", desc: "Permanent outdoor monuments for gardens, courtyards, and campus walkways. Silicon bronze rated for 200+ years." },
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
      <FAQSection faqs={faqs} title="Bronze Memorial FAQ" />
      <QuoteForm title="Begin a Bronze Memorial" subtitle="Our memorial team will guide you through every step with care. Artwork proof within 48 hours." source="pro" />
    </div>
  );
}