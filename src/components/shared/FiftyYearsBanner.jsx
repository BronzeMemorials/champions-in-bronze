import { Star, Award, Shield } from "lucide-react";
import FadeIn from "./FadeIn";

export default function FiftyYearsBanner() {
  return (
    <section className="relative py-8 overflow-hidden bg-bronze/90">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "repeating-linear-gradient(45deg, #DAA520 0, #DAA520 1px, transparent 0, transparent 50%)",
        backgroundSize: "20px 20px"
      }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            {/* Left — icons */}
            <div className="hidden md:flex items-center gap-6 flex-shrink-0">
              <Star className="w-8 h-8 text-gold/60 fill-gold/30" />
              <Award className="w-12 h-12 text-gold/80 fill-gold/20" />
              <Star className="w-8 h-8 text-gold/60 fill-gold/30" />
            </div>

            {/* Center — main text */}
            <div className="text-center flex-1">
              <p className="font-sans text-xs uppercase tracking-[0.4em] mb-2 font-bold" style={{color: "#FFD700", textShadow: "0 0 8px #B8860B, 0 1px 2px rgba(0,0,0,0.8)"}}>Est. 1974</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-tight" style={{textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"}}>
                Celebrating <span style={{color: "#FFD700", textShadow: "0 0 10px #B8860B, 0 0 20px #DAA520, 0 1px 2px rgba(0,0,0,0.8)"}}>50 Years</span><br className="hidden md:block" /> of Bronze Excellence
              </h2>
              <p className="mt-3 text-white font-sans text-sm md:text-base leading-relaxed max-w-2xl mx-auto" style={{textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"}}>
                Five decades of crafting legacy — honoring athletes, institutions, donors, and champions across America. Every plaque, bust, and statue a testament to enduring quality and timeless recognition.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mt-4 text-white font-sans text-xs uppercase tracking-[0.2em]" style={{textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"}}>
                <span>Over 50,000 Satisfied Customers</span>
                <span className="text-gold/50">·</span>
                <span>All 50 States</span>
                <span className="text-gold/50">·</span>
                <span>Made in the USA</span>
              </div>
            </div>

            {/* Right — icons */}
            <div className="hidden md:flex items-center gap-6 flex-shrink-0">
              <Star className="w-8 h-8 text-gold/60 fill-gold/30" />
              <Shield className="w-12 h-12 text-gold/80 fill-gold/20" />
              <Star className="w-8 h-8 text-gold/60 fill-gold/30" />
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}