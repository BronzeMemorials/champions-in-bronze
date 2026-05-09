import { Link } from "react-router-dom";
import { Camera, ArrowRight, Image, Layers, Award } from "lucide-react";
import ProductHero from "../components/shared/ProductHero";
import TrustBadges from "../components/shared/TrustBadges";
import FAQSection from "../components/shared/FAQSection";
import QuoteForm from "../components/shared/QuoteForm";
import FadeIn from "../components/shared/FadeIn";

const heroImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/f54e9ac4d_ED04FD70-945D-4463-AC78-050B841D9D0C.png";
const img1 = "https://media.base44.com/images/public/69e6638934292a547ec97753/f54e9ac4d_ED04FD70-945D-4463-AC78-050B841D9D0C.png";
const img2 = "https://media.base44.com/images/public/69e6638934292a547ec97753/90136d985_3987887D-191A-419C-B621-221DF36585E5.png";
const img3 = "https://media.base44.com/images/public/69e6638934292a547ec97753/5c025f1df_9D2C184B-2F6D-44F3-8F73-DA9EF4C4B828.png";

const faqs = [
  { question: "What exactly is a Photo ImageCasting plaque?", answer: "Photo ImageCasting is our proprietary process for permanently casting high-resolution photographic images — including multi-photo collages — directly into bronze or aluminum. The result is a permanent, weather-resistant bronze plaque that reproduces photographic detail at an astonishing level of clarity and depth." },
  { question: "How many photos can be included?", answer: "There is no set limit. Single portrait, 3-photo career retrospective, 20-photo collage, full team season — we work with any number of images. Our designers arrange them into a compelling composition before casting." },
  { question: "Is this the same as an engraved photo plaque?", answer: "No — and the difference is dramatic. Laser-engraved plaques burn a flat surface image. Photo ImageCasting creates actual depth and dimensional detail from the photograph. Light plays across the surface and changes with viewing angle, creating a living, tactile result." },
  { question: "Can black-and-white and color photos be mixed?", answer: "Yes. We frequently combine black-and-white archival photos with color action shots in the same composition. The bronze casting naturally unifies the visual tone across all images." },
  { question: "What sizes are available?", answer: "Plaques from 8×10 inches up to full wall-scale installations (8 feet x 12 feet+). Custom shapes available including home plate, pennant, jersey silhouette, and architectural forms." },
  { question: "Are Photo ImageCasting plaques outdoor-rated?", answer: "Yes. Cast bronze and aluminum are fully outdoor-rated for 100+ years. Your photos will remain legible and dramatic through any weather conditions permanently." },
];

const steps = [
  { icon: Image, step: "01", title: "Submit Your Photos", desc: "Upload your high-resolution photographs — team photos, action shots, career portraits, archival images. Any quantity, any era." },
  { icon: Layers, step: "02", title: "48-Hour Proof Delivered", desc: "Our designers create a digital composition and casting proof. You review exact layout, sizing, and text before any casting begins." },
  { icon: Camera, step: "03", title: "Photogrammetric Mastering", desc: "Your photographs are converted into precision casting masters using our proprietary Photo ImageCasting process — capturing every detail at foundry resolution." },
  { icon: Award, step: "04", title: "Cast in Bronze or Aluminum", desc: "Molten bronze or aluminum is poured into your master. The result is a permanent, weather-resistant plaque with astonishing photographic depth." },
];

export default function PhotoImageCast() {
  return (
    <div className="bg-obsidian text-parchment">
      <ProductHero
        image={heroImg}
        label="Proprietary Technology · American Foundry"
        title="Photo ImageCasting Bronze Plaques"
        subtitle="Your actual photographs — career highlights, team history, portrait collages — permanently cast into museum-quality bronze or aluminum. Not engraved. Not printed. Cast forever."
        cta1="Get Instant Price"
        cta1Link="/request-quote"
        cta2="See Examples"
        cta2Link="/portfolio"
      />

      <TrustBadges />

      {/* What Makes It Different */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn delay={0.2}>
              <div className="flex items-center gap-3 mb-4">
                <Camera className="w-5 h-5 text-gold" />
                <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">The Photo ImageCasting Difference</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight text-parchment">
                Your Real Photos.<br />Cast Into Bronze.<br />Forever.
              </h2>
              <p className="mt-6 text-parchment/60 text-lg leading-relaxed">
                Most bronze plaques use text and generic imagery. Photo ImageCasting uses <em>your actual photographs</em> — game-winning moments, team portraits, career milestones, archival history — and permanently casts them into bronze at museum quality.
              </p>
              <p className="mt-4 text-parchment/60 text-lg leading-relaxed">
                No interpretation. No generalization. The exact image you provide, with dimensional depth and bronze permanence that will last longer than any photograph, print, or digital display.
              </p>
              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  { stat: "Any #", label: "Photos per Plaque" },
                  { stat: "48 hrs", label: "Proof Delivered" },
                  { stat: "100+", label: "Years Durability" },
                  { stat: "Any Size", label: "Any Shape" },
                ].map((item) => (
                  <div key={item.label} className="border border-bronze/20 p-4 text-center rounded-sm">
                    <p className="font-serif text-2xl text-gold">{item.stat}</p>
                    <p className="text-parchment/50 text-xs uppercase tracking-wider mt-1">{item.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <img src={img1} alt="Photo ImageCasting plaque example" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="bg-gold/20 border border-gold/40 text-gold text-xs font-sans uppercase tracking-[0.15em] px-3 py-1">Photo ImageCasting™</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 border-t border-bronze/10 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">How It Works</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-3 text-parchment">Photos to Bronze in 4 Steps</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.1}>
                <div className="border border-bronze/20 bg-obsidian p-8 rounded-sm h-full">
                  <step.icon className="w-6 h-6 text-gold mb-4" />
                  <p className="font-serif text-4xl text-bronze/30">{step.step}</p>
                  <h3 className="font-serif text-xl text-parchment mt-2">{step.title}</h3>
                  <p className="text-parchment/50 text-sm mt-3 leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Perfect For</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-3 text-parchment">Every Recognition Occasion</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: img1, title: "Hall of Fame Induction", desc: "Career-spanning photo collage with stats — mounted alongside name and years of service." },
              { img: img2, title: "Championship Commemoration", desc: "Season highlights, trophy presentation, team portrait — all captured in a single bronze piece." },
              { img: img3, title: "Retirement Tribute", desc: "A career in photographs, permanently cast. Presented to the athlete or coach at retirement ceremony." },
              { img: img1, title: "Donor Recognition", desc: "Donor portrait and family photos alongside dedication text — a truly personal recognition." },
              { img: img2, title: "Alumni Memorial", desc: "Commemorate a beloved alumnus or athlete with photographs that capture their full story." },
              { img: img3, title: "Building Dedication", desc: "Photo history of the facility, founding donors, and inaugural events — cast for the lobby wall." },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-sm">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <h3 className="font-serif text-lg text-parchment">{item.title}</h3>
                    <p className="text-parchment/50 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Photo ImageCasting FAQ" />
      <QuoteForm
        title="Start Your Photo ImageCasting Plaque"
        subtitle="Upload your photos and tell us about your project. Artwork proof within 48 hours. We don't miss deadlines."
        source="pro"
      />
    </div>
  );
}