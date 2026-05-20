import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Shield, Award, Star, Clock, CheckCircle } from "lucide-react";
import TrustBadges from "../components/shared/TrustBadges";
import FAQSection from "../components/shared/FAQSection";
import QuoteForm from "../components/shared/QuoteForm";
import FadeIn from "../components/shared/FadeIn";
import SEOHead from "../components/shared/SEOHead";
import TestimonialCarousel from "../components/shared/TestimonialCarousel";
import PlaqueQuoteModal from "../components/shared/PlaqueQuoteModal";

const HERO_IMG = "https://media.base44.com/images/public/69e6638934292a547ec97753/41c645d41_IMG_1398.jpg";

const ALUMINUM_PLAQUES = [
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/2fc825874_80D0FA19-643C-40C6-823A-126BF14722B3.png", label: "Dave Budin — Brooklyn College", desc: "Silver court dedication plaque with photo-image casting", cta: "Start Your Court Dedication" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/8fe706754_IMG_1401.jpeg", label: "T.J. Fleming — \"Forever a Saint\"", desc: "Narrative memorial plaque cast in aluminum", cta: "Preserve Their Memory Forever" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/d5ef8feaa_IMG_1402.jpg", label: "Drew Passmore Field", desc: "Photo image cast field dedication — memorial naming plaque", cta: "Dedicate a Field or Facility" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/39d2bb4cd_IMG_1395.jpg", label: "Ross Linstrom Field Memorial", desc: "Baseball home plate shaped memorial plaque — In Memory of His Passion and Dedication, 2013", cta: "Commission a Field Memorial Plaque" },
  { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/336251898_IMG_1400.jpg", label: "Bill Shover Field of Dreams", desc: "Diamond-shaped field dedication plaque — Salvation Army / baseball", cta: "Dedicate a Field in Bronze" },
];

const faqs = [
  { question: "What is the difference between aluminum and bronze plaques?", answer: "Aluminum plaques offer the same custom relief craftsmanship and photo-image casting as bronze at a lower price point. They are lighter, making them ideal for interior installations. Bronze is the traditional choice for prestige and permanent outdoor applications rated 100+ years." },
  { question: "Are aluminum plaques outdoor-rated?", answer: "Yes — aluminum is weather-resistant and suitable for many outdoor applications. For permanent, century-long outdoor installations, we recommend bronze. For interior or budget-conscious projects, aluminum is an excellent choice." },
  { question: "Can aluminum plaques include photo portraits?", answer: "Yes. Our Photo ImageCasting process works with aluminum just as it does with bronze — real photographs permanently cast into the metal surface." },
  { question: "How much do aluminum plaques cost?", answer: "Aluminum plaques typically start around $395–$800 depending on size and complexity, making them a cost-effective alternative to bronze for schools, community organizations, and growing programs." },
  { question: "How long does production take?", answer: "Artwork proof delivered within the hour. Production typically runs 3–4 weeks from approval." },
];

function GalleryGrid({ items, onPlaqueClick }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, i) =>
        <FadeIn key={i} delay={i * 0.05}>
          <div
            className="group rounded border border-gray-200 bg-white hover:border-yellow-500 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            onClick={() => onPlaqueClick && onPlaqueClick(item)}>
            <div className="flex items-center justify-center p-3 bg-gray-100" style={{ minHeight: "240px" }}>
              <img
                src={item.url}
                alt={item.label + " — Champions in Bronze Aluminum Plaque"}
                className="w-full h-auto object-contain group-hover:scale-[1.03] transition-transform duration-500"
                style={{ maxHeight: "260px" }}
                loading="lazy" />
            </div>
            <div className="p-4 bg-white flex flex-col flex-1">
              <p className="font-serif text-sm text-gray-900 font-semibold leading-tight">{item.label}</p>
              <p className="text-gray-500 text-xs mt-1 leading-relaxed flex-1">{item.desc}</p>
              <p className="mt-3 text-yellow-700 font-sans text-xs uppercase tracking-widest font-bold group-hover:text-yellow-600 transition-colors">
                → {item.cta || "Get a Quote"}
              </p>
            </div>
          </div>
        </FadeIn>
      )}
    </div>
  );
}

export default function AluminumPlaques() {
  const [selectedPlaque, setSelectedPlaque] = useState(null);

  return (
    <div className="bg-white text-gray-900">
      <PlaqueQuoteModal plaque={selectedPlaque} onClose={() => setSelectedPlaque(null)} />
      <SEOHead
        title="Aluminum Plaques — Affordable Custom Recognition | Champions in Bronze"
        description="Custom aluminum plaques with photo-image casting — memorial plaques, field dedications, court naming, and recognition awards. Same craftsmanship as bronze at a lower price. Artwork proof within the hour. Made in the USA since 1974."
        canonical="/aluminum-plaques"
        ogImage={HERO_IMG} />

      {/* HERO */}
      <section className="relative min-h-[50vh] flex items-center bg-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Aluminum plaque — Champions in Bronze" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <FadeIn>
            <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-4">Champions in Bronze · Since 1974</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900 mb-6">
              Aluminum Plaques — Custom Relief & Photo Casting
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl">
              All the same custom craftsmanship — hand-sculpted relief portraits, photo-image casting, and custom shapes — in a lighter, more affordable aluminum. Ideal for interior installations, memorials, field dedications, and budget-conscious recognition programs.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link to="/request-quote" className="inline-flex items-center gap-2 px-8 py-4 font-sans font-bold uppercase tracking-widest text-sm text-black transition-all hover:scale-[1.02]" style={{ background: "linear-gradient(135deg, #B8860B 0%, #DAA520 30%, #FFD700 50%, #DAA520 70%, #B8860B 100%)" }}>
                Get a Free Proof <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:7723090412" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-yellow-600 text-yellow-800 font-sans font-semibold uppercase tracking-widest text-sm hover:bg-yellow-50 transition-colors">
                <Phone className="w-4 h-4" /> 772-309-0412
              </a>
            </div>
            <div className="flex flex-wrap gap-6">
              {[
                { icon: Clock, text: "Artwork Proof Within The Hour" },
                { icon: Shield, text: "Weather-Resistant Aluminum" },
                { icon: Award, text: "Made in the USA" },
                { icon: Star, text: "50,000+ Satisfied Customers" },
              ].map(({ icon: Icon, text }) =>
                <div key={text} className="flex items-center gap-2 text-gray-600 text-xs">
                  <Icon className="w-3.5 h-3.5 text-yellow-600" />
                  <span className="font-semibold">{text}</span>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      <TrustBadges />

      {/* GALLERY */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-8">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Completed Aluminum Projects</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">Custom Aluminum Plaques</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
                Memorial plaques, field dedications, court naming, and recognition awards — all custom-crafted in aluminum with the same attention to detail as our bronze work.
              </p>
            </div>
          </FadeIn>
          <GalleryGrid items={ALUMINUM_PLAQUES} onPlaqueClick={setSelectedPlaque} />
        </div>
      </section>

      {/* WHY ALUMINUM */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-4">Bronze vs. Aluminum</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">Same Craftsmanship. More Accessible Price.</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Aluminum plaques go through the same design and casting process as our bronze work — custom relief sculpture, photo-image casting, and precision finishing. The difference is material cost and weight, not quality or care.
              </p>
              <div className="space-y-4">
                {[
                  "Artwork proof delivered within the hour — no commitment required",
                  "Photo ImageCasting portraits from your actual photographs",
                  "Lighter weight — easier indoor mounting and installation",
                  "Cost-effective for schools, community organizations, and growing programs",
                  "Custom shapes: home plate, diamond, football, soccer ball, and more",
                  "100% Made in the USA",
                ].map((text, i) =>
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
                  </div>
                )}
              </div>
              <div className="mt-8">
                <p className="text-gray-600 text-sm">
                  Need something more permanent for outdoors?{" "}
                  <Link to="/hall-of-fame" className="text-yellow-700 font-bold hover:text-yellow-600 underline">See our bronze Hall of Fame plaques →</Link>
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {ALUMINUM_PLAQUES.slice(0, 4).map((item, i) =>
                  <div key={i} className="aspect-square overflow-hidden rounded border border-gray-200 shadow bg-gray-100 flex items-center justify-center p-2">
                    <img src={item.url} alt={item.label} className="w-full h-full object-contain" loading="lazy" />
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      <QuoteForm title="Request Your Free Artwork Proof — Within The Hour" subtitle="Tell us about your project. No commitment required. Proof delivered fast." source="pro" />

      <FAQSection faqs={faqs} title="Aluminum Plaques — Frequently Asked Questions" />

      <QuoteForm title="Start Your Aluminum Plaque Today" subtitle="Over 50,000 satisfied customers. Artwork within the hour." source="pro" />
    </div>
  );
}