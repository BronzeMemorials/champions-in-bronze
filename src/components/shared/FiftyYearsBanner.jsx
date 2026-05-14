import { Star, Award, Shield } from "lucide-react";
import FadeIn from "./FadeIn";

export default function FiftyYearsBanner() {
  return (
    <section className="relative py-16 overflow-hidden bg-bronze">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: "repeating-linear-gradient(45deg, #DAA520 0, #DAA520 1px, transparent 0, transparent 50%)",
        backgroundSize: "20px 20px"
      }} />
      <div className="absolute inset-0 bg-gradient-to-r from-bronze-dark/60 via-transparent to-bronze-dark/60" />

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
              <p className="font-sans text-xs uppercase tracking-[0.4em] text-gold/80 mb-2">Est. 1974</p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
                Celebrating <span className="text-gold">50 Years</span><br className="hidden md:block" /> of Bronze Excellence
              </h2>
              <p className="mt-4 text-white/70 font-sans text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                Five decades of crafting legacy — honoring athletes, institutions, donors, and champions across America. Every plaque, bust, and statue a testament to enduring quality and timeless recognition.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mt-6 text-white/60 font-sans text-xs uppercase tracking-[0.2em]">
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