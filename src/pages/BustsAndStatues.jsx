import { Link } from "react-router-dom";
import { ArrowRight, Camera } from "lucide-react";
import ProductHero from "../components/shared/ProductHero";
import TrustBadges from "../components/shared/TrustBadges";
import FAQSection from "../components/shared/FAQSection";
import QuoteForm from "../components/shared/QuoteForm";
import FadeIn from "../components/shared/FadeIn";
import STLViewer from "../components/shared/STLViewer";

const heroImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/d74e93030_generated_7f57395d.png";
const img1 = "https://media.base44.com/images/public/69e6638934292a547ec97753/4262e1b6f_generated_6dae4386.png";
const img2 = "https://media.base44.com/images/public/69e6638934292a547ec97753/5b198cd19_generated_1a12a43b.png";
const img3 = "https://media.base44.com/images/public/69e6638934292a547ec97753/ab5fbf767_generated_696960c2.png";

const faqs = [
  { question: "Do you need the athlete present for sculpting?", answer: "No. Every bust and statue is created entirely from photographs you provide. Our master sculptors recreate exact likeness — expression, bone structure, muscle definition — from high-resolution photos alone. No in-person sessions required, ever." },
  { question: "How accurate is the likeness from photos?", answer: "Extremely accurate. We specialize in true photographic replication — your exact facial structure, expression, and presence. Not an artistic interpretation. Clients regularly describe the result as 'uncanny' and 'emotionally overwhelming.'" },
  { question: "What is the size range?", answer: "We produce busts from tabletop 12-inch scale to heroic 9-foot+ full statues. Most commission requests are life-size (approximately 6 feet for a standing figure) or 1/2-life heroic busts. All sizes available." },
  { question: "Bronze vs. aluminum — which should I choose?", answer: "Silicon bronze is the traditional museum choice — rich amber warmth, exceptional detail retention, 200-year proven outdoor longevity. Aluminum is significantly lighter and lower cost, ideal for indoor installations and budget-conscious programs. Both are beautiful." },
  { question: "What is the typical lead time?", answer: "Artwork and 3D digital sculpt proof within 48 hours. Full-scale clay sculpting through cast and patina typically takes 16–24 weeks depending on size and complexity. Rush options available." },
  { question: "Can you create a bust from an old photograph?", answer: "Yes. We regularly work with historical photographs, including black-and-white and low-resolution archival images. Our sculptors are trained in photogrammetric reconstruction and historical reference research." },
];

export default function BustsAndStatues() {
  return (
    <div className="bg-obsidian text-parchment">
      <ProductHero
        image={heroImg}
        label="Signature Work · American Foundry"
        title="Bronze & Aluminum Busts and Statues"
        subtitle="Life-size and heroic-scale figures sculpted from your actual photographs. Not an artist's interpretation — your exact likeness, expression, and presence, cast forever in solid bronze or aluminum."
        cta1="Start a Commission"
        cta1Link="/request-quote"
        cta2="View Portfolio"
        cta2Link="/portfolio"
      />

      <TrustBadges />

      {/* Photo Accuracy Feature */}
      <section className="py-28 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <img src={img1} alt="Bronze bust from photo" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="flex items-center gap-3 mb-4">
                <Camera className="w-5 h-5 text-gold" />
                <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Your Photos. Their Exact Likeness.</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-parchment">
                True Replication.<br />Not Interpretation.
              </h2>
              <p className="mt-6 text-parchment/60 text-lg leading-relaxed">
                Every bust and statue we create is built from the photographs you provide. Our master sculptors use advanced photogrammetric techniques to capture exact bone structure, expression lines, eye shape, and physical presence.
              </p>
              <p className="mt-4 text-parchment/60 text-lg leading-relaxed">
                The result is a sculpture that family members recognize instantly — not a generalized artistic likeness, but the actual person.
              </p>
              <ul className="mt-8 space-y-3 border-l border-bronze/30 pl-6">
                {[
                  "Sculpted from your high-resolution photographs",
                  "Exact facial structure, expression, and presence",
                  "Works with historical and archival photography",
                  "Digital 3D proof before any physical casting begins",
                  "Master American artisans — 20+ years experience",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <span className="w-2 h-2 bg-gold flex-shrink-0" />
                    <span className="font-sans text-sm text-parchment/70">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3D Viewer Demo */}
      <section className="py-20 border-t border-bronze/10 bg-secondary/10">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Interactive 3D Preview</span>
              <h2 className="font-serif text-3xl md:text-4xl mt-3 text-parchment">Explore a Bronze Bust in 3D</h2>
              <p className="mt-3 text-parchment/50 text-sm">Drag left or right to rotate. Use arrows below for precise control.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="bg-parchment/5 border border-bronze/20 rounded-sm p-4">
              <p className="text-center text-parchment/40 text-sm py-20 font-sans">
                Upload an STL file to display an interactive 3D preview here.<br />
                <span className="text-xs text-parchment/25 block mt-2">Contact us to add your model files — they'll appear with full horizontal-rotation controls.</span>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="mb-12">
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Gallery</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-3 text-parchment">Recent Commissions</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: img1, title: "Heroic Athlete Bust", sub: "Silicon bronze · Life-size · Stadium lobby" },
              { img: img2, title: "Coach Legacy Statue", sub: "Aluminum · 7-foot · Arena entrance" },
              { img: img3, title: "Hall of Fame Portrait Bust", sub: "Bronze · Tabletop scale · Inductee ceremony" },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="group relative aspect-[3/4] overflow-hidden rounded-sm">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <h3 className="font-serif text-lg text-parchment">{item.title}</h3>
                    <p className="text-parchment/50 text-xs mt-1">{item.sub}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Sizes & Specs */}
      <section className="py-20 border-t border-bronze/10 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Specifications</span>
              <h2 className="font-serif text-4xl mt-3 text-parchment">Available Formats</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Portrait Bust", range: "12″ – 36″", desc: "Head and shoulders. Pedestal-mounted. Perfect for Hall of Fame walls, award presentations, and office displays.", price: "From $1,800" },
              { title: "Half-Figure Bust", range: "36″ – 60″", desc: "Torso and above. Architectural scale. Common for locker room entrances and facility dedications.", price: "From $8,500" },
              { title: "Full Statue", range: "Life-size to 10′+", desc: "Full standing, action, or heroic-scale figures. Stadium entrances, arena lobbies, campus landmarks.", price: "From $35,000" },
            ].map((spec, i) => (
              <FadeIn key={spec.title} delay={i * 0.1}>
                <div className="border border-bronze/20 bg-obsidian p-8 rounded-sm">
                  <p className="font-serif text-2xl text-gold">{spec.title}</p>
                  <p className="text-parchment/40 text-sm mt-1 font-sans uppercase tracking-wider">{spec.range}</p>
                  <p className="text-parchment/60 text-sm mt-4 leading-relaxed">{spec.desc}</p>
                  <p className="text-bronze-light font-serif text-lg mt-6">{spec.price}</p>
                  <Link to="/request-quote" className="inline-flex items-center gap-2 mt-4 text-gold text-xs font-sans uppercase tracking-widest hover:text-parchment transition-colors">
                    Get a Quote <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} />
      <QuoteForm title="Commission Your Bust or Statue" subtitle="Upload your photos and project details. We'll deliver a digital sculpt proof within 48 hours." source="pro" />
    </div>
  );
}