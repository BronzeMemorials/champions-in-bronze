import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Camera } from "lucide-react";
import SEOHead from "../components/shared/SEOHead";
import ProductHero from "../components/shared/ProductHero";
import TrustBadges from "../components/shared/TrustBadges";
import FadeIn from "../components/shared/FadeIn";
import VideoModelGallery from "../components/shared/VideoModelGallery";
import FAQSection from "../components/shared/FAQSection";
import QuoteForm from "../components/shared/QuoteForm";
import { base44 } from "@/api/base44Client";
import ProcessGallery from "../components/shared/ProcessGallery";

const heroImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/fde18b17d_82360375-ACAD-438B-BC4F-F588D804FAFC.png";
const img1 = "https://media.base44.com/images/public/69e6638934292a547ec97753/fde18b17d_82360375-ACAD-438B-BC4F-F588D804FAFC.png";
const img2 = "https://media.base44.com/images/public/69e6638934292a547ec97753/f91a2af55_0BB7CEA4-F96D-4C51-BADB-946A7C8080BB.png";
const img3 = "https://media.base44.com/images/public/69e6638934292a547ec97753/a9a624b83_57AF450C-DA6C-4768-9FD6-6B877E40CB2E.png";

const faqs = [
  { question: "Do you need the athlete present for sculpting?", answer: "No. Every bust and statue is created entirely from photographs you provide. Our master sculptors recreate exact likeness — expression, bone structure, muscle definition — from high-resolution photos alone. No in-person sessions required, ever." },
  { question: "How accurate is the likeness from photos?", answer: "Extremely accurate. We specialize in true photographic replication — your exact facial structure, expression, and presence. Not an artistic interpretation. Clients regularly describe the result as 'uncanny' and 'emotionally overwhelming.'" },
  { question: "What is the size range?", answer: "We produce busts from tabletop 12-inch scale to heroic 9-foot+ full statues. Most commission requests are life-size (approximately 6 feet for a standing figure) or 1/2-life heroic busts. All sizes available." },
  { question: "Bronze vs. aluminum — which should I choose?", answer: "Bronze is the traditional museum choice — rich amber warmth, exceptional detail retention, 200-year proven outdoor longevity. Aluminum is significantly lighter and lower cost, ideal for indoor installations and budget-conscious programs. Both are beautiful." },
  { question: "What is the typical lead time?", answer: "Artwork and 3D digital sculpt proof within 48 hours. Full-scale clay sculpting through cast and patina typically takes 16–24 weeks depending on size and complexity. Rush options available." },
  { question: "Can you create a bust from an old photograph?", answer: "Yes. We regularly work with historical photographs, including black-and-white and low-resolution archival images. Our sculptors are trained in photogrammetric reconstruction and historical reference research." },
];

export default function BustsAndStatues() {
  const [models, setModels] = useState([]);

  useEffect(() => {
    base44.entities.Product3DModel.filter({ page: "busts_and_statues", is_active: true })
      .then((results) => setModels(Array.isArray(results) ? results : []))
      .catch(() => setModels([]));
  }, []);

  return (
    <div className="bg-obsidian text-parchment">
      <SEOHead
        title="Custom Bronze Athlete Busts & Statues — Exact Likeness from Photographs | Champions in Bronze"
        description="Custom bronze busts and full statues sculpted from your photographs — no in-person sessions required. Hall of Fame busts, life-size athlete statues, firefighter memorials, and military monuments. American foundry. 48-hour proof."
        canonical="/busts-and-statues"
        ogImage="https://media.base44.com/images/public/69e6638934292a547ec97753/fde18b17d_82360375-ACAD-438B-BC4F-F588D804FAFC.png"
      />
      <ProductHero
        image={heroImg}
        label="Signature Work · American Foundry"
        title="Exact Likeness. Sculpted From Your Photograph. Immortalized In Bronze."
        subtitle="Immortalize champions with elite bronze recognition created from their exact photograph and sculpted for Hall of Fame displays, donor recognition walls, championship installations, athlete busts, and commemorative statues built to preserve legacy for generations."
        cta1="Start a Commission"
        cta1Link="/request-quote"
        cta2="View Portfolio"
        cta2Link="/portfolio"
      />

      <TrustBadges />

      <QuoteForm title="Request Your Free Artwork Proof" subtitle="Tell us about your project — we'll deliver a digital proof within the hour." source="pro" />

      {/* Photo Accuracy Feature */}
      <section className="py-28 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <img src={img1} alt="Custom bronze bust sculpted from photograph — exact likeness, no in-person sessions" loading="lazy" className="w-full h-full object-cover" />
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
                Champions in Bronze creates elite Hall of Fame plaques, donor recognition walls, championship displays, athlete busts, and commemorative bronze statues from your exact photograph using advanced image casting, bas-relief sculpting, and dimensional bronze technology. Each piece is designed for universities, stadiums, arenas, athletic facilities, and legacy recognition environments where lifelike detail, architectural craftsmanship, and permanent recognition are required to honor greatness for generations.
              </p>
              <p className="mt-4 text-parchment/60 text-lg leading-relaxed">
                Champions in Bronze transforms your exact photograph into lifelike bronze recognition through advanced image casting, bas-relief sculpting, and dimensional bronze craftsmanship — the result is a sculpture that family members recognize instantly. A lifelike bronze bust is never about the cost — it is about honoring the sacrifice, preserving the brotherhood, immortalizing the journey, and ensuring the legacy that defined their life will never be forgotten.
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

      {/* 360° Video Gallery */}
      {models.length > 0 && <VideoModelGallery models={models} />}

      {/* Emotional Pull Quote */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <blockquote className="font-serif text-2xl md:text-3xl leading-relaxed text-gray-900 italic mb-6">
              "When champions see themselves immortalized in bronze, the emotion is overwhelming — because the pain, sacrifice, brotherhood, dedication, and greatness that shaped their lives are finally transformed into something permanent that future generations will remember forever."
            </blockquote>
            <div className="w-12 h-px bg-bronze mx-auto mb-6" />
            <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed">
              A lifelike bronze bust is never about the cost. It is about honoring the sacrifice, preserving the brotherhood, immortalizing the journey, and ensuring the legacy that defined their life will never be forgotten.
            </p>
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
              <p className="text-parchment/55 font-sans text-sm mt-3 max-w-2xl">Legends battled, sacrificed, and rose. Now their story lives in bronze. Every commission below was created from photographs provided by the client — no in-person sessions, no generic likenesses. Every figure is the real person, captured forever.</p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/8bf520da9_figherfighter-72-inches.png", title: "Firefighter Memorial Statue", sub: "Bronze · 72-inch · Memorial installation" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/ce2eda476_firefighter-72-inches.jpg", title: "Kneeling Firefighter", sub: "Bronze · Life-size · First responder memorial" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/bfca59864_vietnam-soldier.jpg", title: "Vietnam Soldier Statue", sub: "Bronze · Life-size · Veterans memorial" },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="group relative aspect-[3/4] overflow-hidden rounded-sm">
                  <img src={item.img} alt={item.title} loading="lazy" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
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
              <p className="text-parchment/55 font-sans text-sm mt-3 max-w-xl mx-auto">From tabletop awards to 10-foot heroic statues — every size, every format, created from your photographs. Designed for Hall of Fame walls, stadium entrances, arena lobbies, donor recognition environments, and campus landmarks.</p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Portrait Bust", range: "12″ – 36″", desc: "Head and shoulders. Pedestal-mounted. Perfect for Hall of Fame walls, award presentations, and office displays." },
              { title: "Half-Figure Bust", range: "36″ – 60″", desc: "Torso and above. Architectural scale. Common for locker room entrances and facility dedications." },
              { title: "Full Statue", range: "Life-size to 10′+", desc: "Full standing, action, or heroic-scale figures. Stadium entrances, arena lobbies, campus landmarks." },
            ].map((spec, i) => (
              <FadeIn key={spec.title} delay={i * 0.1}>
                <div className="border border-bronze/20 bg-obsidian p-8 rounded-sm">
                  <p className="font-serif text-2xl text-gold">{spec.title}</p>
                  <p className="text-parchment/40 text-sm mt-1 font-sans uppercase tracking-wider">{spec.range}</p>
                  <p className="text-parchment/60 text-sm mt-4 leading-relaxed">{spec.desc}</p>
                  <Link to="/request-quote" className="inline-flex items-center gap-2 mt-6 text-gold text-xs font-sans uppercase tracking-widest hover:text-parchment transition-colors">
                    Get a Quote <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <QuoteForm title="Get a Quote — Artwork Within The Hour" subtitle="No commitment required. Museum-quality artwork proof delivered fast." source="pro" />

      <ProcessGallery
        title="Statues & Sculptures — Real Work Gallery"
        subtitle="From life-size military and memorial statues to eagles, soldiers, firefighters, and institutional figures — every piece hand-sculpted by our master American artisans. Where applicable, we show the process from reference photo to clay mold to finished bronze."
        groups={[
          {
            label: "Eagle Sculptures — Foundry to Finished",
            caption: "Heroic-scale bronze eagle sculpted, assembled, and patina-finished in our American foundry — shown in-progress in the foundry, then as the completed tabletop sculpture.",
            steps: [
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/57ec33cb4_IMG_34042.jpg", tag: "In Foundry", alt: "Heroic bronze eagle — wings being assembled in our American foundry" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/9574a705a_Gorham-Eagle-Front-View.jpg", tag: "Finished Bronze", alt: "Gorham Eagle — completed heroic bronze sculpture, front view" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/172481efe_AmericanEagle-cr.jpg", tag: "Finished Bronze", alt: "Tabletop American Eagle — warm amber patina, museum-quality casting" },
            ],
          },
          {
            label: "Firefighter Memorial Statues",
            caption: "Life-size and 72-inch firefighter memorial statues in bronze. Same sculpture shown in two patina options — dark bronze and warm gold — demonstrating how finish color transforms the aesthetic.",
            steps: [
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/8bf520da9_figherfighter-72-inches.png", tag: "Finished Bronze", alt: "Firefighter 72-inch kneeling with axe statue" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/a736e67f3_table-top-firefighter-dark.jpg", tag: "Dark Patina", alt: "Kneeling firefighter — dark bronze patina" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/fee1a9240_table-top-firefighter-light-r.jpg", tag: "Gold Patina", alt: "Kneeling firefighter — warm gold patina" },
            ],
          },
          {
            label: "Firefighter Helmet — Custom Bronze Sculpture",
            caption: "Life-size replica bronze firefighter helmet — 'Captain 46, Houston' — cast in bronze with warm patina. Custom text and insignia cast in permanently.",
            steps: [
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/7c64e41ff_firefighter-helmet.jpg", tag: "Finished Bronze", alt: "Firefighter helmet bronze sculpture" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/0bb44a23f_firefighter-helmet-cr.jpg", tag: "Finished Bronze", alt: "Firefighter helmet cropped view" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/491e4c058_firefighter-helmet-cr-2.jpg", tag: "Finished Bronze", alt: "Firefighter helmet angle 2" },
            ],
          },
          {
            label: "Military Memorial Statues — Battle Cross & Soldier",
            caption: "M4 battle cross memorial statue (helmet, rifle, boots on base) alongside a kneeling Vietnam-era soldier — for veterans memorials and military installations.",
            steps: [
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/ff47f84a6_m4-rifle-cr.jpg", tag: "Finished Bronze", alt: "M4 battle cross memorial statue — helmet, rifle, boots" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/c0b8156f5_soldier-kneeling-800-crr.jpg", tag: "Finished Bronze", alt: "Kneeling soldier bronze statue — Vietnam era" },
            ],
          },
          {
            label: "Service Dog — Polychrome Bronze Sculpture",
            caption: "Full-color polychrome bronze German Shepherd service dog — realistic fur texture and coloring achieved through multi-layer patina application over bronze casting.",
            steps: [
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/d6b4c5020_service-dog.jpg", tag: "Finished Bronze", alt: "Service dog bronze sculpture" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/5f116da28_service-dogs.jpg", tag: "Finished Bronze", alt: "Service dog bronze sculpture angle 2" },
            ],
          },
          {
            label: "Soldier Saluting — Front & Back View",
            caption: "Life-size modern soldier in full tactical gear, saluting — showing full 360° sculpting detail. Front and back captured in one composite photograph.",
            steps: [
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/f860ddcd4_bronze-front-back-statue.jpg", tag: "Finished Bronze", alt: "Modern soldier saluting — front and back view showing full 360° sculpting detail" },
            ],
          },
          {
            label: "Portrait Bust — Photo to Clay to Cast",
            caption: "The complete bust creation process: original reference photograph → hand-sculpted clay mold → finished cast bronze. Shown here for an institutional subject.",
            steps: [
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/8f204e96a_Dr_Carl_Everett-pic.jpg", tag: "Photo", alt: "Portrait reference photo" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/cdaeeb4e4_Dr_Carl_Everett-clay-mold.jpg", tag: "Clay Mold", alt: "Portrait clay mold" },
            ],
          },
          {
            label: "Couple Portrait — Photo to Clay Mold",
            caption: "Two subjects captured together in a single bas-relief composition. From a casual couple photo to a precisely sculpted clay mold capturing both likenesses.",
            steps: [
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/cf9e2126a_REYNOLDS-pic-ts.jpg", tag: "Photo", alt: "Reynolds couple reference photo" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/c5d05c31e_reynolds-clay-ts.jpg", tag: "Clay Mold", alt: "Reynolds couple clay mold" },
            ],
          },
          {
            label: "Meade Woman — Clay Bust Mold",
            caption: "Hand-sculpted clay bust mold in progress — full head, hair texture, and shoulder detail captured from photographic reference.",
            steps: [
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/e556bcdc6_meade-woman.jpg", tag: "Clay Mold", alt: "Meade woman clay bust mold" },
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/c2734dc11_IMG_9572-meade-clay-mold.jpg", tag: "Clay Mold", alt: "Meade clay mold in studio" },
            ],
          },
          {
            label: "3D Printed Sculpture — Modern Process",
            caption: "For certain commissions, we use 3D printing as an intermediate step — digitally sculpted, printed at scale, then hand-finished and cast in bronze using the lost-wax process.",
            steps: [
              { img: "https://media.base44.com/images/public/69e6638934292a547ec97753/f81a6917b_3d-print-statue-man.jpg", tag: "3D Print", alt: "3D printed statue model" },
            ],
          },
        ]}
      />

      <FAQSection faqs={faqs} />
      <QuoteForm title="Commission Your Bust or Statue" subtitle="Upload your photos and project details. We'll deliver a digital sculpt proof within 48 hours." source="pro" />
    </div>
  );
}