import { Link } from "react-router-dom";
import { ArrowRight, ShoppingBag } from "lucide-react";
import FadeIn from "../components/shared/FadeIn";
import TrustBadges from "../components/shared/TrustBadges";
import TestimonialCarousel from "../components/shared/TestimonialCarousel";

const jerseyImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/4262e1b6f_generated_6dae4386.png";
const paperweightImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/8f84177a0_generated_c8d564f9.png";
const plaqueImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/5b198cd19_generated_1a12a43b.png";

const shopProducts = [
  {
    image: jerseyImg,
    title: "Custom Jersey Plaques",
    desc: "Your jersey, immortalized in cast bronze. Perfect for retirement gifts, awards, and personal collections.",
    price: "From $495",
    to: "/custom-jersey-plaques",
  },
  {
    image: jerseyImg,
    title: "3D Relief Jersey Plaques",
    desc: "Museum-quality three-dimensional jersey relief with incredible fabric texture detail.",
    price: "From $895",
    to: "/3d-relief-jersey-plaques",
  },
  {
    image: paperweightImg,
    title: "Bronze Paperweights",
    desc: "Executive desk pieces, commemorative bronze pieces, and custom gift items.",
    price: "From $150",
    to: "/bronze-paperweights",
  },
];

const shopTestimonials = [
  { quote: "I gave my father a custom jersey plaque of his favorite player for his retirement. He was speechless. It's the most meaningful gift I've ever given.", name: "Michael Chen", title: "Customer, Jersey Plaque" },
  { quote: "The 3D relief plaque of my college jersey is absolutely stunning. The detail in the fabric texture is unbelievable. Museum quality.", name: "Sarah Mitchell", title: "Former D1 Athlete" },
  { quote: "We ordered bronze paperweights for our entire coaching staff. They were blown away. Championship quality at a collector's price.", name: "Coach Robert Ellis", title: "High School Athletic Director" },
];

export default function ShopHome() {
  return (
    <div className="bg-obsidian text-parchment">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={jerseyImg} alt="Bronze jersey plaque" className="w-full h-full object-cover opacity-25 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/30 via-obsidian/60 to-obsidian" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 pt-32 pb-20 text-center">
          <FadeIn>
            <span className="text-gold font-sans tracking-[0.4em] uppercase text-xs font-semibold">
              The Collector's Atelier
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.92] mt-6">
              Own a Piece of<br />
              <span className="text-bronze-light italic">Bronze History.</span>
            </h1>
            <p className="mt-8 max-w-2xl mx-auto text-xl text-parchment/70 leading-relaxed font-sans font-light">
              Custom jersey plaques, 3D relief sculptures, and executive bronze pieces — 
              museum-quality craftsmanship at collector's prices.
            </p>
            <div className="mt-12 flex flex-wrap justify-center gap-5">
              <Link to="/custom-jersey-plaques" className="bg-bronze hover:bg-gold text-parchment px-10 py-5 font-sans text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300 inline-flex items-center gap-2">
                <ShoppingBag className="w-4 h-4" /> Shop Now
              </Link>
              <Link to="/request-quote" className="border border-parchment/20 hover:border-gold text-parchment px-10 py-5 font-sans text-sm uppercase tracking-[0.2em] transition-all duration-300">
                Custom Orders
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <TrustBadges />

      {/* Products Grid */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Shop Collection</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-3 text-parchment">Collector-Grade Bronze</h2>
              <p className="mt-4 text-parchment/60 text-lg max-w-xl mx-auto">Every piece is individually cast, hand-finished, and shipped in a premium presentation box.</p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {shopProducts.map((product, i) => (
              <FadeIn key={product.to} delay={i * 0.15}>
                <Link to={product.to} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-secondary/20">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
                    <div className="absolute top-4 right-4 bg-obsidian/80 backdrop-blur-sm px-4 py-2 rounded-sm">
                      <span className="text-gold text-sm font-sans font-semibold">{product.price}</span>
                    </div>
                  </div>
                  <div className="mt-5">
                    <h3 className="font-serif text-xl text-parchment group-hover:text-gold transition-colors">{product.title}</h3>
                    <p className="text-parchment/50 text-sm mt-2">{product.desc}</p>
                    <div className="flex items-center gap-2 mt-3 text-bronze group-hover:text-gold transition-colors text-sm font-sans uppercase tracking-widest">
                      <span>View Details</span> <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Section */}
      <section className="py-28 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Perfect For</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 text-parchment">The Gift That Lasts Forever</h2>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { title: "Retirement Gifts", desc: "Honor a career in athletics with a personal bronze tribute." },
              { title: "Player Awards", desc: "MVP, All-Conference, and team awards in lasting bronze." },
              { title: "Coach Recognition", desc: "Thank the coach who changed everything." },
              { title: "Fan Collections", desc: "Bring your fandom to your desk or den." },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="text-center">
                  <h3 className="font-serif text-lg text-parchment">{item.title}</h3>
                  <p className="text-parchment/50 text-sm mt-2">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <TestimonialCarousel testimonials={shopTestimonials} />
    </div>
  );
}