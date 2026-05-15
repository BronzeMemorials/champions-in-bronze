import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductHero from "../components/shared/ProductHero";
import TrustBadges from "../components/shared/TrustBadges";
import FAQSection from "../components/shared/FAQSection";
import QuoteForm from "../components/shared/QuoteForm";
import FadeIn from "../components/shared/FadeIn";
import SEOHead from "../components/shared/SEOHead";
import TestimonialCarousel from "../components/shared/TestimonialCarousel";

const heroImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/502c0767b_generated_e375b9ec.png";
const img1 = "https://media.base44.com/images/public/69e6638934292a547ec97753/4262e1b6f_generated_6dae4386.png";
const img2 = "https://media.base44.com/images/public/69e6638934292a547ec97753/5b198cd19_generated_1a12a43b.png";
const img3 = "https://media.base44.com/images/public/69e6638934292a547ec97753/ab5fbf767_generated_696960c2.png";

const faqs = [
  { question: "Can you build a complete Hall of Fame wall system?", answer: "Yes. We design and fabricate complete Hall of Fame installations from concept to installation — individual inductee plaques, connecting wall panels, name bars, sport-themed borders, and modular systems that expand year after year as new inductees are added." },
  { question: "How are inductee likenesses captured?", answer: "From photographs you provide. Every inductee portrait — whether 3D relief bust or Photo ImageCasting — is created from your actual submitted photographs. No generic likenesses. No artist's interpretations. We capture the real person." },
  { question: "What information is typically included on each plaque?", answer: "Standard Hall of Fame plaques include a portrait relief, inductee name, sport/position, years of service, career highlights, and induction year. Custom elements like team logos and statistical records are also available." },
  { question: "Can new inductees be added over time?", answer: "Yes — and we design for it. Our modular Hall of Fame systems have defined space and connection points for future inductees. Simply call us when you have a new class and we'll match the existing style exactly." },
  { question: "Can you renovate an existing Hall of Fame?", answer: "Yes. We specialize in both new installations and renovation of existing Hall of Fame environments — updating outdated displays to museum-quality bronze standards." },
  { question: "Do you handle installation?", answer: "We coordinate professional installation. Our installation teams have placed Hall of Fame walls in stadiums, arenas, university athletic facilities, and high school gymnasiums across the country." },
];

const formats = [
  { title: "Individual Inductee Plaque", desc: "3D relief portrait + name, years, stats, and achievement text. Available in bronze or aluminum. The foundation of every Hall of Fame.", img: img1 },
  { title: "Photo ImageCasting Career Retrospective", desc: "Multiple photographs from the inductee's career permanently cast into bronze alongside their portrait relief and career statistics.", img: img2 },
  { title: "Full Wall Installation", desc: "Complete Hall of Fame wall system with architectural framework, unified aesthetic, sport-themed borders, and modular expansion design.", img: img3 },
];

const elements = [
  { title: "Portrait Relief Plaques", desc: "Hand-sculpted portrait reliefs cast in bronze — the foundation of every Hall of Fame wall." },
  { title: "Photo Image Cast Panels", desc: "Real career photographs permanently cast into bronze — career retrospectives and team histories." },
  { title: "Multi-Inductee Wall Systems", desc: "Modular wall systems that expand annually as new inductees are added, matched exactly to the original finish." },
  { title: "Recognition Walls", desc: "Large-format donor and supporter recognition bronze wall systems integrated into the Hall." },
  { title: "Architectural Signage", desc: "Dimensional bronze letters, logos, and brand identity elements." },
  { title: "Championship Display Panels", desc: "Championship trophy cases and permanent bronze championship milestone displays." },
];

export default function HallOfFamePage() {
  return (
    <div className="bg-obsidian text-parchment">
      <SEOHead
        title="Hall of Fame Bronze Plaques & Recognition Systems | Champions in Bronze"
        description="Complete Hall of Fame bronze plaque systems — portrait relief plaques, photo image cast panels, wall installations, and recognition systems. Designed for universities, stadiums, and athletic facilities."
        canonical="/hall-of-fame"
      />

      <ProductHero
        image={heroImg}
        label="Hall of Fame · Recognition Systems"
        title="Hall of Fame Bronze Plaques & Recognition Systems"
        subtitle="Individual inductee portrait plaques, career retrospective panels, and complete wall installation systems. Every inductee portrait created from your actual photographs — not a generic likeness. Designed to expand annually."
        cta1="Start Your Hall of Fame"
        cta1Link="/request-quote"
        cta2="View Portfolio"
        cta2Link="/portfolio"
      />

      <TrustBadges />

      <QuoteForm title="Request Your Free Artwork Proof" subtitle="Tell us about your Hall of Fame project — we'll deliver a digital proof within the hour." source="pro" />

      {/* Emotional Statement */}
      <section className="py-20 bg-stone-100 border-t border-bronze/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="text-bronze font-sans tracking-[0.4em] uppercase text-xs font-semibold block mb-6">Why Hall of Fame</span>
            <blockquote className="font-serif text-2xl md:text-4xl leading-relaxed text-gray-900 italic mb-6">
              "Legends battled, sacrificed, and rose. Now their story lives in bronze. Champions fade only when forgotten — legacy lives forever."
            </blockquote>
            <div className="w-12 h-px bg-bronze mx-auto mb-6" />
            <p className="font-sans text-base text-gray-600 leading-relaxed">
              When champions see themselves immortalized in bronze, the emotion is overwhelming — because the pain, sacrifice, brotherhood, dedication, and greatness that shaped their lives are finally transformed into something permanent that future generations will remember forever.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Plaque Formats */}
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

      {/* What's Included */}
      <section className="py-20 border-t border-bronze/10 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Everything Your Hall Deserves</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-3 text-parchment">Complete Hall of Fame Elements</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {elements.map((el, i) => (
              <FadeIn key={el.title} delay={i * 0.08}>
                <div className="border border-bronze/20 bg-obsidian p-8 rounded-sm hover:border-gold/40 transition-colors duration-300">
                  <p className="font-serif text-xl text-gold mb-3">{el.title}</p>
                  <p className="text-parchment/55 text-sm leading-relaxed">{el.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {[
              { stat: "200+", label: "Hall of Fame Installations", desc: "Professional, collegiate, and secondary athletic programs nationwide." },
              { stat: "~1 hr", label: "Artwork Proof Guarantee", desc: "Every inductee receives a professional proof within the hour." },
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

      <TestimonialCarousel />

      <QuoteForm title="Get a Quote — Artwork Within The Hour" subtitle="No commitment required. Museum-quality artwork proof delivered fast." source="pro" />

      <FAQSection faqs={faqs} title="Hall of Fame FAQ" />
      <QuoteForm title="Design Your Hall of Fame" subtitle="Tell us about your program and inductees. We'll deliver a complete design proposal within 48 hours." source="pro" />
    </div>
  );
}