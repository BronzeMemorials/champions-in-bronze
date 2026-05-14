import { useState, useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Camera } from "lucide-react";
import ProductHero from "../components/shared/ProductHero";
import TrustBadges from "../components/shared/TrustBadges";
import FadeIn from "../components/shared/FadeIn";
import STLGallery from "../components/shared/STLGallery";
import { base44 } from "@/api/base44Client";

const FAQSection = lazy(() => import("../components/shared/FAQSection"));
const QuoteForm = lazy(() => import("../components/shared/QuoteForm"));

const heroImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/90136d985_3987887D-191A-419C-B621-221DF36585E5.png";
const img1 = "https://media.base44.com/images/public/69e6638934292a547ec97753/90136d985_3987887D-191A-419C-B621-221DF36585E5.png";
const img2 = "https://media.base44.com/images/public/69e6638934292a547ec97753/f54e9ac4d_ED04FD70-945D-4463-AC78-050B841D9D0C.png";
const img3 = "https://media.base44.com/images/public/69e6638934292a547ec97753/807fb8285_1EF9640F-BCCF-47C1-8ADB-FF7ACD382588.png";
const img4 = "https://media.base44.com/images/public/69e6638934292a547ec97753/fde18b17d_82360375-ACAD-438B-BC4F-F588D804FAFC.png";
const img5 = "https://media.base44.com/images/public/69e6638934292a547ec97753/f91a2af55_0BB7CEA4-F96D-4C51-BADB-946A7C8080BB.png";
const img6 = "https://media.base44.com/images/public/69e6638934292a547ec97753/a9a624b83_57AF450C-DA6C-4768-9FD6-6B877E40CB2E.png";

const sports = ["All Sports", "Football", "Basketball", "Baseball", "Hockey", "Soccer", "Lacrosse", "Golf"];

const gallery = [
  { sport: "Football", img: img1, title: "QB Action Relief", sub: "NFL · Silicon Bronze · 18×24″" },
  { sport: "Football", img: img2, title: "Championship Scene", sub: "NCAA · Bronze Patina · 24×30″" },
  { sport: "Basketball", img: img3, title: "MVP Portrait Plaque", sub: "NBA · Dark Bronze · 16×20″" },
  { sport: "Basketball", img: img4, title: "Retirement Honor", sub: "NCAA · Aluminum · 20×24″" },
  { sport: "Baseball", img: img5, title: "Home Plate Relief", sub: "MLB · Bronze Cast · Custom shape" },
  { sport: "Hockey", img: img6, title: "Stanley Cup Scene", sub: "NHL · Bronze · 24×30″" },
  { sport: "Soccer", img: img1, title: "Championship Trophy", sub: "MLS · Bronze · 18×24″" },
  { sport: "Lacrosse", img: img2, title: "All-American Portrait", sub: "NCAA · Aluminum · 16×20″" },
  { sport: "Golf", img: img3, title: "Tournament Champion", sub: "PGA · Silicon Bronze · 18×24″" },
];

const faqs = [
  { question: "What makes 3D bas relief different from a flat plaque?", answer: "A 3D bas relief is a fully sculpted work — figures, faces, and action poses rise physically from the surface with up to 1 inch of dimensional depth. Light plays across the contours and changes with viewing angle. It's the difference between a photograph and a sculpture." },
  { question: "Is my athlete's exact likeness captured?", answer: "Yes. We use your photographs to sculpt accurate likeness — not a generic pose or stock figure. Your athlete's actual face, build, and expression are captured from the photos you submit. No in-person sessions required." },
  { question: "What sports and shapes are available?", answer: "Every sport. We create sport-shaped plaques including home plate, pennant, jersey outline, basketball, football, puck, and any custom architectural form. We also offer standard rectangular, oval, and arched formats." },
  { question: "What is the price range?", answer: "3D bas relief plaques start at $895 for standard portrait formats. Multi-figure championship scenes and large-format installations are quoted individually. Volume pricing available for Hall of Fame series." },
  { question: "How fast is turnaround?", answer: "Digital artwork proof within 48 hours. Physical production is 15–30 days for standard plaques. Rush 5-day service available on select sizes." },
  { question: "Indoor vs outdoor?", answer: "Both. Silicon bronze is fully outdoor-rated for 100+ years. Aluminum is ideal for indoor and is significantly lighter. We recommend bronze for permanent outdoor installations and aluminum for interior walls." },
];

export default function ThreeDReliefPlaques() {
  const [activeSport, setActiveSport] = useState("All Sports");
  const [stlModels, setStlModels] = useState([]);
  const filtered = activeSport === "All Sports" ? gallery : gallery.filter((g) => g.sport === activeSport);

  useEffect(() => {
    base44.entities.ReliefPlaque3DModel.filter({ is_active: true })
      .then(setStlModels)
      .catch(() => {});
  }, []);

  return (
    <div className="bg-obsidian text-parchment">
      <ProductHero
        image={heroImg}
        label="Museum Quality · Sports Division"
        title="3D Bas Relief Bronze Plaques"
        subtitle="Hand-sculpted from your actual photographs. Every face, every action pose — dimensional, permanent, and unmistakably authentic. Not an artist's interpretation of your athlete. Their real likeness."
        cta1="Get Instant Price"
        cta1Link="/request-quote"
        cta2="View Portfolio"
        cta2Link="/portfolio"
      />

      <TrustBadges />

      <QuoteForm title="Request Your Free Artwork Proof" subtitle="Tell us about your project — we'll deliver a digital proof within the hour." source="pro" />

      {/* Photo Accuracy Callout */}
      <section className="py-20 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-bronze/10 border border-bronze/30 rounded-sm p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <Camera className="w-12 h-12 text-gold flex-shrink-0" />
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-parchment">Your Exact Photographic Image. Not an Interpretation.</h3>
              <p className="mt-3 text-parchment/60 leading-relaxed">
                Our sculptors use your submitted photographs as the master reference. Every 3D relief begins with your real images — faces are captured feature by feature, action poses frame by frame. The finished bronze will be recognized by people who knew your athlete personally. That's our standard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sport Gallery */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="mb-10">
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Browse by Sport</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-3 text-parchment">3D Relief Plaque Gallery</h2>
            </div>
          </FadeIn>

          {/* Sport Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {sports.map((sport) => (
              <button
                key={sport}
                onClick={() => setActiveSport(sport)}
                className={`font-sans text-xs uppercase tracking-[0.1em] px-4 py-2 border transition-colors duration-200 rounded-sm ${
                  activeSport === sport
                    ? "bg-bronze border-bronze text-parchment"
                    : "border-bronze/30 text-parchment/50 hover:border-gold hover:text-parchment"
                }`}
              >
                {sport}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <FadeIn key={`${item.sport}-${item.title}`} delay={i * 0.07}>
                <div className="group relative aspect-[4/3] overflow-hidden rounded-sm">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-gold/20 border border-gold/40 text-gold text-xs font-sans uppercase tracking-[0.12em] px-2 py-0.5">{item.sport}</span>
                  </div>
                  <div className="absolute bottom-0 p-5">
                    <h3 className="font-serif text-lg text-parchment">{item.title}</h3>
                    <p className="text-parchment/50 text-xs mt-1">{item.sub}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-10 text-center">
              <Link to="/all-sports" className="inline-flex items-center gap-2 border border-bronze/30 hover:border-gold text-parchment/60 hover:text-parchment px-8 py-3 font-sans text-xs uppercase tracking-[0.15em] transition-colors duration-200 rounded-sm">
                View All Sports <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Spec Table */}
      <section className="py-20 border-t border-bronze/10 bg-secondary/20">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl text-parchment">Starting Prices & Specs</h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="border border-bronze/20 rounded-sm overflow-hidden">
              {[
                { size: "12 × 18″", material: "Bronze or Aluminum", relief: "Single portrait", price: "From $895" },
                { size: "16 × 20″", material: "Bronze or Aluminum", relief: "Portrait + stats panel", price: "From $1,200" },
                { size: "18 × 24″", material: "Silicon Bronze", relief: "Action scene", price: "From $1,800" },
                { size: "24 × 30″", material: "Silicon Bronze", relief: "Multi-figure / championship", price: "From $3,200" },
                { size: "Custom", material: "Any alloy", relief: "Any composition", price: "Quote on request" },
              ].map((row, i) => (
                <div key={row.size} className={`grid grid-cols-4 gap-4 px-6 py-4 text-sm border-b border-bronze/10 last:border-0 ${i === 0 ? "bg-bronze/10 font-semibold text-parchment/80" : "text-parchment/60"}`}>
                  <span className="font-sans">{row.size}</span>
                  <span className="font-sans">{row.material}</span>
                  <span className="font-sans">{row.relief}</span>
                  <span className="font-serif text-gold">{row.price}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* STL 3D Interactive Gallery */}
      {stlModels.length > 0 && <STLGallery models={stlModels} />}

      <QuoteForm title="Get a Quote — Artwork Within The Hour" subtitle="No commitment required. Museum-quality artwork proof delivered fast." source="pro" />

      <Suspense fallback={<div className="h-40" />}>
        <FAQSection faqs={faqs} />
      </Suspense>
      <Suspense fallback={<div className="h-40" />}>
        <QuoteForm title="Get Your Instant Price" subtitle="Upload photos or a project brief. Artwork proof within 48 hours. We don't miss deadlines." source="pro" />
      </Suspense>
    </div>
  );
}