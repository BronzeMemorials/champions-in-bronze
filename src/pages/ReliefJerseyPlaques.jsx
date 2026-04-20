import { Link } from "react-router-dom";
import ProductHero from "../components/shared/ProductHero";
import TrustBadges from "../components/shared/TrustBadges";
import FAQSection from "../components/shared/FAQSection";
import QuoteForm from "../components/shared/QuoteForm";
import ProductGallerySection from "../components/shared/ProductGallerySection";
import FadeIn from "../components/shared/FadeIn";

const img1 = "https://media.base44.com/images/public/69e6638934292a547ec97753/4262e1b6f_generated_6dae4386.png";
const img2 = "https://media.base44.com/images/public/69e6638934292a547ec97753/5b198cd19_generated_1a12a43b.png";
const img3 = "https://media.base44.com/images/public/69e6638934292a547ec97753/ab5fbf767_generated_696960c2.png";
const img4 = "https://media.base44.com/images/public/69e6638934292a547ec97753/502c0767b_generated_e375b9ec.png";
const img5 = "https://media.base44.com/images/public/69e6638934292a547ec97753/d74e93030_generated_7f57395d.png";
const img6 = "https://media.base44.com/images/public/69e6638934292a547ec97753/8f84177a0_generated_c8d564f9.png";

const faqs = [
  {
    question: "What makes 3D bas relief different from a flat plaque?",
    answer: "A 3D bas relief is a fully sculpted, three-dimensional work of art. Figures, portraits, and action poses rise up to 1 inch from the surface with incredible detail — jersey fabric texture, facial expression, muscle definition. It's the difference between a photo and a sculpture.",
  },
  {
    question: "Do you need the athlete present for sculpting?",
    answer: "No. We create every relief entirely from photographs you provide. Upload high-resolution photos from multiple angles and our sculptors handle everything digitally and by hand — no in-person sessions required.",
  },
  {
    question: "What materials are available?",
    answer: "We cast in traditional silicon bronze (warm amber patina, the gold standard for outdoor installations) and in aluminum (lighter weight, lower cost, excellent for indoor applications). Both are rated for 100+ year outdoor durability.",
  },
  {
    question: "What is the price range?",
    answer: "3D bas relief plaques start at $895 for 12×18 inch single-portrait format. Championship scene plaques, multi-figure compositions, and large-format installations are quoted individually. Volume pricing available for series orders (Hall of Fame, donor walls, etc.).",
  },
  {
    question: "How fast is turnaround?",
    answer: "Artwork proof within 48 hours of order. Production is 15–30 days depending on complexity. Rush 5-day service available on standard sizes. We don't miss deadlines.",
  },
  {
    question: "Can sport-specific shapes be used?",
    answer: "Absolutely. We cast plaques in home plate shape, pennant shape, jersey outline, basketball, football, and any custom shape. The shape itself becomes part of the design.",
  },
];

// Repeating gallery data — swap images for real product photos
const gallerySections = [
  {
    label: "Football",
    title: "NFL & College Football 3D Bas Relief Plaques",
    items: [
      { image: img1, title: "Championship Action Relief", caption: "Full-figure quarterback sculpt | Custom border | Bronze patina", badge: "NFL" },
      { image: img2, title: "Hall of Fame Portrait Plaque", caption: "3D portrait bust | Career stats panel | Dark bronze finish", badge: "Hall of Fame" },
      { image: img3, title: "Super Bowl Championship Plaque", caption: "Trophy & scene relief | Team crest embossed | 18×24 inch", badge: "Championship" },
    ],
  },
  {
    label: "Basketball",
    title: "NBA & College Basketball 3D Relief Plaques",
    items: [
      { image: img4, title: "MVP Dunk Relief Plaque", caption: "Action pose | Jersey number raised | Custom border", badge: "NBA" },
      { image: img5, title: "Championship Ring Plaque", caption: "Championship scene | Gold inlay letters | Velvet-backed", badge: "Champions" },
      { image: img6, title: "Retirement Number Plaque", caption: "Jersey #  relief | Career highlights | Mounted on hardwood", badge: "Retired" },
    ],
  },
  {
    label: "Hockey",
    title: "NHL & College Hockey 3D Relief Plaques",
    items: [
      { image: img2, title: "Stanley Cup Champions Plaque", caption: "Celebration pose | Cup relief | Dark patina finish", badge: "NHL" },
      { image: img1, title: "Goalie Mask Portrait Relief", caption: "Custom shaped plaque | Equipment detail sculpt | Bronze", badge: "Hall of Fame" },
      { image: img3, title: "College Hockey Trophy Plaque", caption: "University seal | Player action relief | Alumni display", badge: "NCAA" },
    ],
  },
  {
    label: "Baseball",
    title: "MLB & College Baseball 3D Relief Plaques",
    items: [
      { image: img5, title: "Home Plate Shaped Plaque", caption: "Home plate cast bronze form | Full-figure relief | Any size", badge: "MLB" },
      { image: img4, title: "Hall of Fame Portrait Plaque", caption: "Portrait bust | Raised name & years | Classic patina", badge: "Hall of Fame" },
      { image: img6, title: "World Series Champions Plaque", caption: "Trophy & team relief | Custom inscription | 24×30 inch", badge: "Champions" },
    ],
  },
  {
    label: "Collegiate",
    title: "College Athletic Hall of Fame & Campus Plaques",
    items: [
      { image: img3, title: "Athletic Hall of Fame Inductee", caption: "3D portrait | University seal | Modular wall system", badge: "NCAA" },
      { image: img2, title: "Campus Legacy Monument Plaque", caption: "Architectural scale | Donor recognition | Outdoor rated", badge: "Legacy" },
      { image: img1, title: "Championship Banner Plaque", caption: "Season championship | Coach & player relief | Lobby display", badge: "Championship" },
    ],
  },
];

export default function ReliefJerseyPlaques() {
  return (
    <div className="bg-obsidian text-parchment">
      <ProductHero
        image={img1}
        label="Museum Quality · Sports Division"
        title="3D Bas Relief Bronze Plaques"
        subtitle="Hand-sculpted, three-dimensional bronze and aluminum plaques for every major sport. NFL, NBA, NHL, MLB, NCAA — we cast your championship history in permanent bronze."
        cta1="Get Instant Price"
        cta1Link="/request-quote"
        cta2="View Portfolio"
        cta2Link="/portfolio"
      />

      <TrustBadges />

      {/* Intro feature row */}
      <section className="py-20 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                { stat: "48 hrs", label: "Artwork Proof Delivered", sub: "Upload photos — we sculpt the rest" },
                { stat: "100+", label: "Years Outdoor Durability", sub: "Silicon bronze or aluminum" },
                { stat: "Any Sport", label: "Any League · Any Size", sub: "NFL · NBA · NHL · MLB · NCAA · PGA" },
              ].map((item) => (
                <div key={item.label} className="border border-bronze/20 bg-secondary/30 p-8 rounded-sm">
                  <p className="font-serif text-4xl text-gold">{item.stat}</p>
                  <p className="text-parchment font-sans text-sm uppercase tracking-[0.15em] mt-3 font-semibold">{item.label}</p>
                  <p className="text-parchment/50 text-sm mt-2">{item.sub}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Repeating gallery sections — 3 images + CTA bar */}
      {gallerySections.map((section, i) => (
        <ProductGallerySection
          key={section.label}
          label={section.label}
          title={section.title}
          items={section.items}
          source="pro"
        />
      ))}

      <FAQSection faqs={faqs} />

      <QuoteForm
        title="Get Your Instant Price"
        subtitle="Upload your photos or project brief. Artwork proof within 48 hours. We don't miss deadlines."
        source="pro"
      />
    </div>
  );
}