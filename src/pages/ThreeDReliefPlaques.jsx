import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Camera } from "lucide-react";
import SEOHead from "../components/shared/SEOHead";
import ProductHero from "../components/shared/ProductHero";
import TrustBadges from "../components/shared/TrustBadges";
import FadeIn from "../components/shared/FadeIn";
import STLGallery from "../components/shared/STLGallery";
import FAQSection from "../components/shared/FAQSection";
import QuoteForm from "../components/shared/QuoteForm";
import { base44 } from "@/api/base44Client";
import ProcessGallery from "../components/shared/ProcessGallery";

const heroImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/90136d985_3987887D-191A-419C-B621-221DF36585E5.png";
const img1 = "https://media.base44.com/images/public/69e6638934292a547ec97753/90136d985_3987887D-191A-419C-B621-221DF36585E5.png";
const img2 = "https://media.base44.com/images/public/69e6638934292a547ec97753/f54e9ac4d_ED04FD70-945D-4463-AC78-050B841D9D0C.png";
const img3 = "https://media.base44.com/images/public/69e6638934292a547ec97753/807fb8285_1EF9640F-BCCF-47C1-8ADB-FF7ACD382588.png";
const img4 = "https://media.base44.com/images/public/69e6638934292a547ec97753/fde18b17d_82360375-ACAD-438B-BC4F-F588D804FAFC.png";
const img5 = "https://media.base44.com/images/public/69e6638934292a547ec97753/f91a2af55_0BB7CEA4-F96D-4C51-BADB-946A7C8080BB.png";
const img6 = "https://media.base44.com/images/public/69e6638934292a547ec97753/a9a624b83_57AF450C-DA6C-4768-9FD6-6B877E40CB2E.png";

const sports = ["All Sports", "Football", "Basketball", "Baseball", "Hockey", "Soccer", "Lacrosse", "Golf"];

const gallery = [
  { sport: "Football", img: img1, title: "QB Action Relief", sub: "NFL · Silicon Bronze · 18×24″", alt: "3D bas-relief football quarterback action bronze plaque — NFL bronze 18x24" },
  { sport: "Football", img: img2, title: "Championship Scene", sub: "NCAA · Bronze Patina · 24×30″", alt: "3D bas-relief NCAA football championship scene bronze plaque — 24x30" },
  { sport: "Basketball", img: img3, title: "MVP Portrait Plaque", sub: "NBA · Dark Bronze · 16×20″", alt: "3D bas-relief basketball MVP Hall of Fame portrait bronze plaque — NBA dark bronze 16x20" },
  { sport: "Basketball", img: img4, title: "Retirement Honor", sub: "NCAA · Aluminum · 20×24″", alt: "3D bas-relief basketball retirement honor plaque — NCAA aluminum 20x24" },
  { sport: "Baseball", img: img5, title: "Home Plate Relief", sub: "MLB · Bronze Cast · Custom shape", alt: "3D bas-relief baseball home plate shape bronze plaque — MLB custom cast" },
  { sport: "Hockey", img: img6, title: "Stanley Cup Scene", sub: "NHL · Bronze · 24×30″", alt: "3D bas-relief hockey Stanley Cup championship scene bronze plaque — NHL 24x30" },
  { sport: "Soccer", img: img1, title: "Championship Trophy", sub: "MLS · Bronze · 18×24″", alt: "3D bas-relief soccer championship bronze plaque — MLS bronze 18x24" },
  { sport: "Lacrosse", img: img2, title: "All-American Portrait", sub: "NCAA · Aluminum · 16×20″", alt: "3D bas-relief lacrosse All-American portrait plaque — NCAA aluminum 16x20" },
  { sport: "Golf", img: img3, title: "Tournament Champion", sub: "PGA · Silicon Bronze · 18×24″", alt: "3D bas-relief golf tournament champion bronze plaque — PGA bronze 18x24" },
];

const faqs = [
  { question: "What makes 3D bas relief different from a flat plaque?", answer: "A 3D bas relief is a fully sculpted work — figures, faces, and action poses rise physically from the surface with up to 1 inch of dimensional depth. Light plays across the contours and changes with viewing angle. It's the difference between a photograph and a sculpture." },
  { question: "Is my athlete's exact likeness captured?", answer: "Yes. We use your photographs to sculpt accurate likeness — not a generic pose or stock figure. Your athlete's actual face, build, and expression are captured from the photos you submit. No in-person sessions required." },
  { question: "What sports and shapes are available?", answer: "Every sport. We create sport-shaped plaques including home plate, pennant, jersey outline, basketball, football, puck, and any custom architectural form. We also offer standard rectangular, oval, and arched formats." },
  { question: "What is the price range?", answer: "Every project is custom-quoted based on size, material, and complexity. Request a quote and we'll deliver a full proposal and artwork proof within the hour — no commitment required." },
  { question: "How fast is turnaround?", answer: "Digital artwork proof within 48 hours. Physical production is 15–30 days for standard plaques. Rush 5-day service available on select sizes." },
  { question: "Indoor vs outdoor?", answer: "Both. Silicon bronze is fully outdoor-rated for 100+ years. Aluminum is ideal for indoor and is significantly lighter. We recommend bronze for permanent outdoor installations and aluminum for interior walls." },
];

export default function ThreeDReliefPlaques() {
  const [activeSport, setActiveSport] = useState("All Sports");
  const [stlModels, setStlModels] = useState([]);
  const filtered = activeSport === "All Sports" ? gallery : gallery.filter((g) => g.sport === activeSport);

  useEffect(() => {
    base44.entities.ReliefPlaque3DModel.filter({ is_active: true })
      .then((results) => setStlModels(Array.isArray(results) ? results : []))
      .catch(() => setStlModels([]));
  }, []);

  return (
    <div className="bg-obsidian text-parchment">
      <SEOHead
        title="3D Bas-Relief Bronze Plaques — Hand-Sculpted from Athlete Photographs | Champions in Bronze"
        description="3D bas-relief bronze plaques hand-sculpted from your actual athlete photographs. Hall of Fame portrait plaques, championship scenes, and retired jersey displays in bronze or aluminum. Every sport. Artwork proof within 48 hours."
        canonical="/3d-relief-plaques"
        ogImage="https://media.base44.com/images/public/69e6638934292a547ec97753/90136d985_3987887D-191A-419C-B621-221DF36585E5.png"
      />
      <ProductHero
        image={heroImg}
        label="Museum Quality · Sports Division"
        title="3D Bas Relief Bronze Plaques"
        subtitle="Hand-sculpted from your actual photographs. Every face, every action pose — dimensional, permanent, and unmistakably authentic. Not an artist's interpretation of your athlete. Their real likeness."
        cta1="Request a Quote"
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
                Our sculptors use your submitted photographs as the master reference. Every 3D relief begins with your real images — faces captured feature by feature, action poses frame by frame. The finished bronze will be recognized by people who knew your athlete personally. That's our standard. A lifelike bronze relief is never about the cost — it is about honoring the sacrifice, preserving the brotherhood, immortalizing the journey, and ensuring the legacy that defined their athletic career will never be forgotten. Champions fade only when forgotten. Bronze holds what time cannot take.
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
              <p className="text-parchment/55 font-sans text-sm mt-3 max-w-2xl">Every sport. Every position. Every moment worth preserving forever. Browse our gallery of sculptural 3D bas-relief bronze plaques — each one created from actual athlete photographs and cast in museum-quality bronze or aluminum for Hall of Fame walls, championship displays, and retired number ceremonies.</p>
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
                  <img src={item.img} alt={item.alt || item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
              <h2 className="font-serif text-4xl text-parchment">Available Formats & Specs</h2>
              <p className="text-parchment/55 font-sans text-sm mt-3 max-w-xl mx-auto">Silicon bronze or aluminum. Any size. Any shape — including home plate, pennant, jersey silhouette, and custom architectural forms. Designed to expand annually for Hall of Fame programs that add inductees every year.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="border border-bronze/20 rounded-sm overflow-hidden">
              {[
                { size: "12 × 18″", material: "Bronze or Aluminum", relief: "Single portrait" },
                { size: "16 × 20″", material: "Bronze or Aluminum", relief: "Portrait + stats panel" },
                { size: "18 × 24″", material: "Silicon Bronze", relief: "Action scene" },
                { size: "24 × 30″", material: "Silicon Bronze", relief: "Multi-figure / championship" },
                { size: "Custom", material: "Any alloy", relief: "Any composition" },
              ].map((row, i) => (
                <div key={row.size} className={`grid grid-cols-3 gap-4 px-6 py-4 text-sm border-b border-bronze/10 last:border-0 ${i === 0 ? "bg-bronze/10 font-semibold text-parchment/80" : "text-parchment/60"}`}>
                  <span className="font-sans">{row.size}</span>
                  <span className="font-sans">{row.material}</span>
                  <span className="font-sans">{row.relief}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* STL 3D Interactive Gallery */}
      {stlModels.length > 0 && <STLGallery models={stlModels} />}

      {/* Portrait Hall of Fame Plaques */}
      <section className="py-28 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="mb-10 text-center">
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Hall of Fame Portraits</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-3 text-parchment">Champion Portrait Plaques</h2>
              <p className="text-parchment/55 font-sans text-sm mt-3 max-w-2xl mx-auto">Legendary athletes immortalized with career statistics, championship honors, and Hall of Fame recognition cast in museum-quality bronze.</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/bdefded46_ChatGPTImageMay26202602_42_22PM.png", label: "Brandon Raymond", desc: "Boxing Champion" },
              { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/65fa9625c_PORTRAITSOCCER.png", label: "Alex Morgan", desc: "Soccer Legend" },
              { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/ea8025f43_PORTRAITBASKETBALL.png", label: "Alexander Cole", desc: "Basketball Star" },
              { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/b48455b3e_PORTRAITBASEBALL12.png", label: "Jim Savage", desc: "Baseball Pitcher" },
              { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/738d1540f_PORTRAITFOOTBALL21.png", label: "Lucas Hayes", desc: "Football QB" },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.08}>
                <div className="group overflow-hidden rounded-sm border border-bronze/20 hover:border-gold transition-all duration-300">
                  <div className="aspect-[4/5] overflow-hidden bg-secondary/20 flex items-center justify-center">
                    <img src={item.url} alt={`${item.label} — ${item.desc} Hall of Fame bronze plaque`} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-3 text-center">
                    <p className="font-serif text-sm text-parchment font-semibold">{item.label}</p>
                    <p className="text-parchment/50 text-xs mt-1">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="mt-10 text-center">
              <Link to="/hall-of-fame" className="inline-flex items-center gap-2 border border-bronze/30 hover:border-gold text-parchment/60 hover:text-parchment px-8 py-3 font-sans text-xs uppercase tracking-[0.15em] transition-colors duration-200 rounded-sm">
                View Hall of Fame Gallery <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <QuoteForm title="Get a Quote — Artwork Within The Hour" subtitle="No commitment required. Museum-quality artwork proof delivered fast." source="pro" />

      <ProcessGallery
        title="Photo → Clay → Cast in Bronze"
        subtitle="See the complete transformation — from the reference photograph our sculptors work from, to the hand-sculpted clay mold, to the finished cast bronze plaque. Every likeness is captured exactly from your real photos."
        groups={[
          {
            label: "Gen. Norman Schwarzkopf — Military Hall of Fame Plaque",
            caption: "Color portrait photograph used as sculpting reference → hand-sculpted clay mold with medal insignia → finished cast bronze plaque.",
            steps: [
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/0a4d2f8f0_SCHWARZKOPF-photo.jpg", tag: "Photo", alt: "General Schwarzkopf reference photo" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/108110e75_SCHWARZKOPF-clay-mold.jpg", tag: "Clay Mold", alt: "General Schwarzkopf clay mold" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/767475c4f_schwarzkopf-ph-plaque.jpg", tag: "Finished Bronze", alt: "General Schwarzkopf finished bronze plaque" },
            ],
          },
          {
            label: "Manfred Hoffmann — Institutional Recognition Plaque",
            caption: "Original color photograph → detailed clay sculpt showing exact likeness.",
            steps: [
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/dff654d8a_Manfred_HoffmannHighRes-colorphoto.jpg", tag: "Photo", alt: "Manfred Hoffmann reference photo" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/125fa40c8_manfred-artis-clay-mold.jpg", tag: "Clay Mold", alt: "Manfred Hoffmann clay mold" },
            ],
          },
          {
            label: "Reynolds — Portrait Bas-Relief Plaque",
            caption: "From a formal portrait photo to a precision clay mold ready for bronze casting.",
            steps: [
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/cf9e2126a_REYNOLDS-pic-ts.jpg", tag: "Photo", alt: "Reynolds reference photo" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/c5d05c31e_reynolds-clay-ts.jpg", tag: "Clay Mold", alt: "Reynolds clay mold" },
            ],
          },
          {
            label: "Carol Hutchins — University of Michigan Softball Hall of Fame",
            caption: "NCAA Hall of Fame induction plaque for the winningest coach in NCAA softball history. Sports-specific relief with athletic portrait and comprehensive career stats.",
            steps: [
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/dc6a79710_2026-CAROL-HUTCHINS-bas-relief.jpg", tag: "Finished Bronze", alt: "Carol Hutchins Michigan Softball Hall of Fame plaque" },
            ],
          },
          {
            label: "Baseball — Clay Mold in Progress",
            caption: "A baseball player sculpted in clay wearing a 'P' cap — showing the precision of our relief sculpting before casting.",
            steps: [
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/03a853216_clay-baseball-man.jpg", tag: "Clay Mold", alt: "Baseball player clay mold in progress" },
            ],
          },
          {
            label: "Historical Marker Plaques — Installed in the Field",
            caption: "Completed cast bronze historical marker plaques installed on-site. The Jessie Andrews and John Gaines plaques feature 3D bas-relief portrait medallions at top with detailed narrative panels.",
            steps: [
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/9549ea0b4_2025-bas-relief-cast-bronze-plaque-Andrews.jpg", tag: "Finished Bronze", alt: "Jessie Andrews historical marker plaque" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/540027290_2025-bas-relief-cast-bronze-plaque-Gaines.jpg", tag: "Finished Bronze", alt: "John Gaines historical marker plaque" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/d7e79f62a_2025-bas-relief-cast-bronze-plaque-taniguchi.jpg", tag: "Finished Bronze", alt: "Isamu Taniguchi historical marker plaque" },
            ],
          },
          {
            label: "Dr Pepper Museum — Double Portrait Co-Founders Plaque",
            caption: "Two subjects sculpted in a single bas-relief composition — W.W. 'Foots' Clements and Wilton A. Lanning, Jr., Co-Founders 1988.",
            steps: [
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/d3e7b0f81_drpepper-440.jpg", tag: "Finished Bronze", alt: "Dr Pepper Museum & Free Enterprise Institute Co-Founders double portrait plaque" },
            ],
          },
          {
            label: "Veterans Memorial Relief Plaques",
            caption: "Panoramic narrative relief plaques honoring Vietnam, WWI, and WWII veterans. Multi-figure battle scene compositions with full text panels — designed for permanent outdoor memorial installations.",
            steps: [
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/b10d7478c_Vietnam-Veterans-Modeled-Feature-36-x-24-ts.jpg", tag: "Finished Bronze", alt: "Vietnam Veterans Memorial Relief Plaque" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/c16278797_WWI-Veterans-Modeled-Feature-36-x-24-ts.jpg", tag: "Finished Bronze", alt: "WWI Veterans Memorial Relief Plaque" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/fa624bcd9_WWII-Veterans-Modeled-Feature-36-x-24-ts.jpg", tag: "Finished Bronze", alt: "WWII Veterans Memorial Relief Plaque" },
            ],
          },
          {
            label: "Emergency Services Relief Plaques",
            caption: "Multi-figure narrative compositions for firefighter and police service recognition. Hall of Fame grade bas-relief for public safety institutions.",
            steps: [
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/4d72ca993_firefighter-service-plaque.jpg", tag: "Finished Bronze", alt: "Firefighter service relief plaque" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/506d7cbcb_relief-police.jpg", tag: "Finished Bronze", alt: "Police service relief plaque" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/fa624bcd9_18x24EmergencyServices.jpg", tag: "Finished Bronze", alt: "Emergency services relief plaque" },
            ],
          },
          {
            label: "Portrait Bas-Relief Plaques — Institutional Gallery",
            caption: "Individual and multi-subject portrait plaques for universities, banks, fraternal organizations, and community recognition programs.",
            steps: [
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/1a0471236_hunter-brooks-2.jpg", tag: "Finished Bronze", alt: "Hunter Brooks Watson memorial plaque" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/bb8ee0525_500-birk.jpg", tag: "Finished Bronze", alt: "Berkshire Hills Bancorp portrait plaque" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/3c32eaa2a_500-plummer.jpg", tag: "Finished Bronze", alt: "Harold Plummer recognition plaque" },
            ],
          },
        ]}
      />

      <FAQSection faqs={faqs} />
      <QuoteForm title="Get Your Instant Price" subtitle="Upload photos or a project brief. Artwork proof within 48 hours. We don't miss deadlines." source="pro" />
    </div>
  );
}