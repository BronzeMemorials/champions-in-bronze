import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";

export default function RelatedProducts({ products }) {
  const safeProducts = Array.isArray(products) ? products : [];
  if (!safeProducts.length) return null;
  return (
    <section className="py-28 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Explore More</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 text-parchment">Related Products</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safeProducts.map((product, i) => (
            <FadeIn key={product.to} delay={i * 0.1}>
              <Link to={product.to} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="font-serif text-lg text-parchment group-hover:text-gold transition-colors">{product.title}</h3>
                  <ArrowRight className="w-4 h-4 text-bronze group-hover:text-gold transition-colors group-hover:translate-x-1 duration-300" />
                </div>
                <p className="text-parchment/50 text-sm mt-1">{product.desc}</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}