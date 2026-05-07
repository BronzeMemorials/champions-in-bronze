import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
  { question: "Can you build a complete Hall of Fame wall system?", answer: "Yes. We design and fabricate complete Hall of Fame installations from concept to installation — individual inductee plaques, connecting wall panels, name bars, sport-themed borders, and modular systems that expand year after year as new inductees are added." },
  { question: "How are inductee likenesses captured?", answer: "From photographs you provide. Every inductee portrait — whether 3D relief bust or Photo ImageCasting — is created from your actual submitted photographs. No generic likenesses. No artist's interpretations. We capture the real person." },
  { question: "What is the cost of a full Hall of Fame installation?", answer: "Individual inductee plaques start at $895. Complete wall system installations — including architectural framework, lighting design consultation, and multiple inductee plaques — typically range from $25,000 to $250,000+ depending on scope." },
  { question: "Can new inductees be added over time?", answer: "Yes — and we design for it. Our modular Hall of Fame systems have defined space and connection points for future inductees. Simply call us when you have a new class and we'll match the existing style exactly." },
  { question: "Do you handle installation?", answer: "We coordinate professional installation. Our installation teams have placed Hall of Fame walls in stadiums, arenas, university athletic facilities, and high school gymnasiums across the country." },
];

const formats = [
  { title: "Individual Inductee Plaque", desc: "3D relief portrait + name, years, stats, and achievement text. Available in bronze or aluminum. The foundation of every Hall of Fame.", img: img1 },
  { title: "Photo ImageCasting Career Retrospective", desc: "Multiple photographs from the inductee's career permanently cast into bronze alongside their portrait relief and career statistics.", img: img2 },
  { title: "Full Wall Installation", desc: "Complete Hall of Fame wall system with architectural framework, unified aesthetic, sport-themed borders, and modular expansion design.", img: img3 },
];

export default function HallOfFamePage() {
  return (
    <div className="bg-obsidian text-parchment">
      <ProductHero
        image={heroImg}
        label="Hall of Fame · Recognition Systems"
        title="Hall of Fame Displays & Installations"
        subtitle="Individual inductee plaques, career retrospective panels, and complete wall installation systems. Every inductee portrait created from your actual photographs — not a generic likeness."
        cta1="Start Your Hall of Fame"
        cta1Link="/request-quote"
        cta2="View Portfolio"
        cta2Link="/portfolio"
      />

      <TrustBadges />

      {/* Formats */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Hall of Fame Products</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-3 text-parchment">Three Ways to Honor Greatness</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {formats.map((fmt, i) => (
              <FadeIn key={fmt.title} delay={i * 0.1}>
                <div className="border border-bronze/20 rounded-sm overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={fmt.img} alt={fmt.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-parchment">{fmt.title}</h3>
                    <p className="text-parchment/50 text-sm mt-3 leading-relaxed">{fmt.desc}</p>
                    <Link to="/request-quote" className="inline-flex items-center gap-2 mt-5 text-gold text-xs font-sans uppercase tracking-widest hover:text-parchment transition-colors">
                      Get a Quote <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-secondary/20 border-y border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { stat: "200+", label: "Hall of Fame Installations", desc: "Professional, collegiate, and secondary athletic programs nationwide." },
              { stat: "48 hrs", label: "Artwork Guarantee", desc: "Every inductee receives a professional proof within 48 hours." },
              { stat: "100+", label: "Year Durability", desc: "Your Hall of Fame will outlast the building. Guaranteed." },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.1}>
                <p className="font-serif text-5xl text-gold">{item.stat}</p>
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-parchment mt-3 font-semibold">{item.label}</p>
                <p className="text-parchment/50 mt-2 text-sm">{item.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Hall of Fame FAQ" />
      <QuoteForm title="Design Your Hall of Fame" subtitle="Tell us about your program and inductees. We'll deliver a complete design proposal within 48 hours." source="pro" />
    </div>
  );
}