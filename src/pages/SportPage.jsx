import { Link } from "react-router-dom";
import { ArrowRight, Camera } from "lucide-react";
import ProductHero from "../components/shared/ProductHero";
import TrustBadges from "../components/shared/TrustBadges";
import QuoteForm from "../components/shared/QuoteForm";
import FAQSection from "../components/shared/FAQSection";
import FadeIn from "../components/shared/FadeIn";

const imgs = [
  "https://media.base44.com/images/public/69e6638934292a547ec97753/4262e1b6f_generated_6dae4386.png",
  "https://media.base44.com/images/public/69e6638934292a547ec97753/5b198cd19_generated_1a12a43b.png",
  "https://media.base44.com/images/public/69e6638934292a547ec97753/ab5fbf767_generated_696960c2.png",
  "https://media.base44.com/images/public/69e6638934292a547ec97753/502c0767b_generated_e375b9ec.png",
  "https://media.base44.com/images/public/69e6638934292a547ec97753/d74e93030_generated_7f57395d.png",
  "https://media.base44.com/images/public/69e6638934292a547ec97753/8f84177a0_generated_c8d564f9.png",
];

const sharedFaqs = [
  { question: "Is the athlete's exact likeness captured?", answer: "Yes. We sculpt every relief and bust from the photographs you submit — not a generic athlete figure. Your player's actual face, build, and expression are captured feature by feature. No in-person sessions needed." },
  { question: "What products are available for this sport?", answer: "3D bas relief action plaques, portrait busts, championship plaques, Hall of Fame inductee displays, Photo ImageCast multi-photo collages, donor recognition plaques, and retired jersey/number displays." },
  { question: "How fast is turnaround?", answer: "Artwork proof within 48 hours. Standard plaques ship in 15–30 days. Busts and statues take 16–24 weeks depending on size." },
  { question: "What materials do you recommend for outdoor installation?", answer: "Silicon bronze is the traditional standard — warm amber patina, museum quality, rated 200+ years outdoors. Aluminum is lighter and lower cost, ideal for indoor applications." },
];

/**
 * Reusable sport page — pass sport name, hero image, and custom products
 */
export default function SportPage({ sport, league, heroImg, heroSubtitle, products }) {
  const img = heroImg || imgs[0];

  const defaultProducts = [
    { img: imgs[0], title: `${sport} 3D Bas Relief Plaque`, desc: "Sculpted from your actual player photographs. Single portrait or action scene.", to: "/3d-relief-plaques" },
    { img: imgs[1], title: `${sport} Portrait Bust`, desc: "Life-size or heroic-scale bronze or aluminum bust from photos.", to: "/busts-and-statues" },
    { img: imgs[2], title: `${sport} Hall of Fame Display`, desc: "Complete inductee plaque system — individual or full wall installation.", to: "/hall-of-fame" },
    { img: imgs[3], title: `${sport} Photo ImageCast Plaque`, desc: "Career-spanning photo collage permanently cast in bronze.", to: "/photo-imagecast-plaques" },
    { img: imgs[4], title: `${sport} Championship Plaque`, desc: "Season championship commemorative in bronze or aluminum.", to: "/3d-relief-plaques" },
    { img: imgs[5], title: `${sport} Donor Recognition Wall`, desc: "Fundraising recognition wall for your athletic program.", to: "/donor-recognition" },
  ];

  const displayProducts = products || defaultProducts;

  return (
    <div className="bg-obsidian text-parchment">
      <ProductHero
        image={img}
        label={`${league ? league + " · " : ""}${sport} Recognition`}
        title={`${sport} Bronze Plaques, Busts & Statues`}
        subtitle={heroSubtitle || `Custom 3D bas relief plaques, portrait busts, Hall of Fame displays, and Photo ImageCast career retrospectives for ${sport}. Every piece sculpted from your actual photographs — exact likeness guaranteed.`}
        cta1="Get Instant Price"
        cta1Link="/request-quote"
        cta2="View All Products"
        cta2Link="/3d-relief-plaques"
      />

      <TrustBadges />

      {/* Photo Accuracy Callout */}
      <section className="py-16 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-bronze/10 border border-bronze/30 rounded-sm p-7 md:p-10 flex flex-col md:flex-row items-center gap-6">
            <Camera className="w-10 h-10 text-gold flex-shrink-0" />
            <div>
              <h3 className="font-serif text-xl md:text-2xl text-parchment">Your Athlete's Exact Photographic Likeness. Not an Interpretation.</h3>
              <p className="mt-2 text-parchment/60 text-sm leading-relaxed">
                Every {sport} plaque and bust we create is sculpted from your submitted photographs. We capture real faces, real expressions, real moments — not generic sports figures. Upload your photos and we'll deliver a proof within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="mb-12">
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">{sport} Products</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-3 text-parchment">Bronze Recognition for {sport}</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayProducts.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <Link to={item.to} className="group relative aspect-[4/3] overflow-hidden rounded-sm block">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <h3 className="font-serif text-lg text-parchment group-hover:text-gold transition-colors">{item.title}</h3>
                    <p className="text-parchment/50 text-sm mt-1">{item.desc}</p>
                    <div className="flex items-center gap-2 mt-3 text-gold text-xs font-sans uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Learn More</span> <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Related sports */}
      <section className="py-16 border-t border-bronze/10 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-8">
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Browse by Sport</span>
              <h2 className="font-serif text-3xl mt-3 text-parchment">We Cover Every Sport</h2>
            </div>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Football", to: "/football" },
              { label: "Basketball", to: "/basketball" },
              { label: "Baseball", to: "/baseball" },
              { label: "Hockey", to: "/hockey" },
              { label: "Soccer", to: "/soccer" },
              { label: "Lacrosse", to: "/lacrosse" },
              { label: "Volleyball", to: "/volleyball" },
              { label: "Swimming", to: "/swimming" },
              { label: "Golf", to: "/golf" },
              { label: "Track & Field", to: "/track-field" },
              { label: "Wrestling", to: "/wrestling" },
              { label: "Tennis", to: "/tennis" },
              { label: "All Sports", to: "/all-sports" },
            ].map((s) => (
              <Link key={s.to} to={s.to}
                className={`font-sans text-xs uppercase tracking-[0.1em] px-4 py-2 border transition-colors duration-200 rounded-sm ${s.label === sport ? "bg-bronze border-bronze text-parchment" : "border-bronze/30 text-parchment/50 hover:border-gold hover:text-parchment"}`}>
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={sharedFaqs} title={`${sport} Plaque & Statue FAQ`} />
      <QuoteForm title={`Start Your ${sport} Commission`} subtitle={`Upload your photos and project details. ${sport} artwork proof within 48 hours.`} source="pro" />
    </div>
  );
}