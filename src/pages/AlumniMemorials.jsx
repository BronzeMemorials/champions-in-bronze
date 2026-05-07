import ProductHero from "../components/shared/ProductHero";
import TrustBadges from "../components/shared/TrustBadges";
import FAQSection from "../components/shared/FAQSection";
import QuoteForm from "../components/shared/QuoteForm";
import FadeIn from "../components/shared/FadeIn";

const heroImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/502c0767b_generated_e375b9ec.png";
const img1 = "https://media.base44.com/images/public/69e6638934292a547ec97753/4262e1b6f_generated_6dae4386.png";
const img2 = "https://media.base44.com/images/public/69e6638934292a547ec97753/5b198cd19_generated_1a12a43b.png";
const img3 = "https://media.base44.com/images/public/69e6638934292a547ec97753/ab5fbf767_generated_696960c2.png";

const faqs = [
  { question: "Can alumni portraits be included?", answer: "Yes. Alumni recognition plaques can incorporate actual photographs of the honoree using our Photo ImageCasting process — their real image permanently cast alongside their name, years, and tribute text." },
  { question: "Can this be a complete alumni recognition wall?", answer: "Absolutely. We design and fabricate complete alumni recognition systems — individual plaques, multi-decade recognition walls, distinguished alumni galleries, and legacy corridors." },
  { question: "Do you serve secondary schools as well as universities?", answer: "Yes. We serve K-12 schools, community colleges, four-year universities, professional programs, and military academies — any institution that wants to honor its alumni permanently." },
  { question: "What is the starting cost?", answer: "Individual alumni recognition plaques start at $495. Complete alumni recognition wall systems are quoted based on scope and inductee count." },
];

export default function AlumniMemorials() {
  return (
    <div className="bg-obsidian text-parchment">
      <ProductHero
        image={heroImg}
        label="Alumni · Legacy · Recognition"
        title="Alumni Recognition & Memorial Displays"
        subtitle="Honor the men and women who shaped your institution. Individual alumni recognition plaques, distinguished alumni galleries, and complete legacy wall installations — built in bronze to last generations."
        cta1="Start Your Alumni Display"
        cta1Link="/request-quote"
        cta2="View Portfolio"
        cta2Link="/portfolio"
      />

      <TrustBadges />

      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Alumni Recognition Formats</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-3 text-parchment">Legacy That Endures</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: img1, title: "Distinguished Alumni Plaque", desc: "Individual plaque with Photo ImageCasting portrait, name, graduation year, career achievements, and tribute text." },
              { img: img2, title: "Alumni Legacy Wall", desc: "Complete multi-inductee recognition wall with unified aesthetic and modular design for ongoing addition of honorees." },
              { img: img3, title: "In Memoriam Display", desc: "Memorial recognition for deceased alumni, honoring their life and contribution with bronze permanence." },
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

      <FAQSection faqs={faqs} title="Alumni Recognition FAQ" />
      <QuoteForm title="Honor Your Alumni in Bronze" subtitle="Tell us about your program. Design proposal and pricing within 48 hours." source="edu" />
    </div>
  );
}