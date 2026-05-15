import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductHero from "../components/shared/ProductHero";
import TrustBadges from "../components/shared/TrustBadges";
import FAQSection from "../components/shared/FAQSection";
import QuoteForm from "../components/shared/QuoteForm";
import FadeIn from "../components/shared/FadeIn";
import TestimonialCarousel from "../components/shared/TestimonialCarousel";

const heroImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/ab5fbf767_generated_696960c2.png";
const img1 = "https://media.base44.com/images/public/69e6638934292a547ec97753/4262e1b6f_generated_6dae4386.png";
const img2 = "https://media.base44.com/images/public/69e6638934292a547ec97753/5b198cd19_generated_1a12a43b.png";
const img3 = "https://media.base44.com/images/public/69e6638934292a547ec97753/502c0767b_generated_e375b9ec.png";

const faqs = [
  { question: "Can donor portraits be included?", answer: "Yes. Major donor plaques can include a Photo ImageCasting portrait of the donor — their actual photograph permanently cast in bronze alongside their name and giving level. This is one of the most powerful donor recognition tools available." },
  { question: "Can the donor wall grow over time?", answer: "Absolutely. Every donor wall we design includes a modular expansion system. New donor names, new giving levels, and new campaign phases can be added seamlessly as your program grows." },
  { question: "What giving tiers and recognition levels do you support?", answer: "Any structure you define. We fabricate recognition systems with unlimited naming tiers — Founding Patron, Gold, Silver, Bronze, Friends level — each with distinct visual treatment in the bronze." },
  { question: "What is the ROI on a donor recognition wall?", answer: "Athletic departments consistently report 30–50% increases in alumni donor participation after installing a visible, prestigious recognition wall. Prospective donors want to see their name in bronze alongside past supporters." },
  { question: "How long does a donor wall installation take?", answer: "Design and fabrication typically runs 8–16 weeks for full wall systems. Individual donor plaques can be produced in 15–30 days. Rush options available." },
];

export default function DonorRecognition() {
  return (
    <div className="bg-obsidian text-parchment">
      <ProductHero
        image={heroImg}
        label="Major Installations · Recognition Systems"
        title="Your Contribution Deserves Permanence."
        subtitle="Designed for universities, stadiums, athletic facilities, and capital campaigns, Champions in Bronze creates architectural donor recognition environments that transform generosity, leadership, and legacy into permanent bronze recognition crafted to inspire future generations."
        cta1="Start Your Donor Wall"
        cta1Link="/request-quote"
        cta2="View Portfolio"
        cta2Link="/portfolio"
      />

      <TrustBadges />

      <QuoteForm title="Request Your Free Artwork Proof" subtitle="Tell us about your project — we'll deliver a digital proof within the hour." source="pro" />

      {/* Donor positioning statement */}
      <section className="py-16 border-t border-bronze/10 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Recognition Worthy Of Your Legacy</span>
            <h2 className="font-serif text-3xl md:text-4xl mt-4 text-parchment leading-tight">
              Transform Generosity Into Lasting Legacy
            </h2>
            <p className="mt-6 text-parchment/60 text-lg leading-relaxed">
              Your contribution helped shape the future of the institution, the athletes, and the generations that follow. Champions in Bronze preserves that legacy through premium donor recognition displays, architectural bronze plaques, and commemorative installations designed to honor the impact behind your gift with permanent institutional recognition.
            </p>
            <p className="mt-4 text-parchment/60 text-lg leading-relaxed">
              Champions in Bronze creates elite donor recognition walls, commemorative bronze plaques, architectural recognition displays, and legacy installations designed to preserve the generosity, vision, and lasting institutional impact behind every contribution for generations to come.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Impact stat */}
      <section className="py-20 border-t border-bronze/10 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              { stat: "40%+", label: "Average Donor Increase", desc: "Athletic departments report significant alumni giving increases after installing prestigious bronze recognition." },
              { stat: "Any Scale", label: "Small Plaque to Full Wall", desc: "From individual donor portrait plaques to full multi-tier walls up to 60 feet wide. Every project custom-quoted." },
              { stat: "Forever", label: "Built to Last", desc: "Silicon bronze is rated 200+ years. Your donors will be recognized in perpetuity." },
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

      {/* Wall types */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Donor Recognition Formats</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-3 text-parchment">Preserve The Legacy Behind Your Gift.</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: img1, title: "Naming Rights Plaques", desc: "Building, suite, field, court, and room naming recognition. Architecture-scale bronze letters and plaques permanently identifying major donors." },
              { img: img2, title: "Multi-Tier Donor Walls", desc: "Complete recognition wall systems with Founding Patron, Gold, Silver, and Bronze tiers. Designed for expansion as new donors join." },
              { img: img3, title: "Capital Campaign Milestones", desc: "Campaign thermometers, milestone markers, and phase-complete monuments that chronicle the history of your fundraising achievement." },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-sm">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <h3 className="font-serif text-xl text-parchment">{item.title}</h3>
                    <p className="text-parchment/50 text-sm mt-2">{item.desc}</p>
                    <Link to="/request-quote" className="inline-flex items-center gap-2 mt-4 text-gold text-xs font-sans uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      Get a Quote <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <TestimonialCarousel />
      <QuoteForm title="Honor The Contribution That Changed Futures" subtitle="Your contribution deserves permanence. Museum-quality artwork proof delivered within the hour." source="pro" />
      <FAQSection faqs={faqs} title="Donor Recognition FAQ" />
      <QuoteForm title="Create A Legacy Future Generations Will See" subtitle="Tell us about your program and campaign goals. Design proposal and pricing within 48 hours." source="pro" />
    </div>
  );
}