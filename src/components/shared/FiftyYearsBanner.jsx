import { Star, Award, Shield } from "lucide-react";
import FadeIn from "./FadeIn";

export default function FiftyYearsBanner() {
  return (
    <section className="relative py-8 overflow-hidden" style={{backgroundColor: "#F5F0E8"}}>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">

            {/* Left — icons */}
            <div className="hidden md:flex items-center gap-6 flex-shrink-0">
              <Star className="w-8 h-8 fill-current" style={{color: "#B8860B"}} />
              <Award className="w-12 h-12 fill-current" style={{color: "#B8860B"}} />
              <Star className="w-8 h-8 fill-current" style={{color: "#B8860B"}} />
            </div>

            {/* Center — main text */}
            <div className="text-center flex-1">
              <p className="font-sans text-xs uppercase tracking-[0.4em] mb-2 font-bold text-black">Est. 1974</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-black leading-tight">
                Celebrating{" "}
                <span style={{color: "#111", textShadow: "0 0 12px #DAA520, 0 0 24px #B8860B"}}>50 Years</span>
                <br className="hidden md:block" /> of Bronze Excellence
              </h2>
              <p className="mt-3 text-black font-sans text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                Five decades of crafting legacy — honoring athletes, institutions, donors, and champions across America. Every plaque, bust, and statue a testament to enduring quality and timeless recognition.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mt-4 text-black font-sans text-xs uppercase tracking-[0.2em]">
                <span>Over 50,000 Satisfied Customers</span>
                <span style={{color: "#B8860B"}}>·</span>
                <span>All 50 States</span>
                <span style={{color: "#B8860B"}}>·</span>
                <span>Made in the USA</span>
              </div>
            </div>

            {/* Right — icons */}
            <div className="hidden md:flex items-center gap-6 flex-shrink-0">
              <Star className="w-8 h-8 fill-current" style={{color: "#B8860B"}} />
              <Shield className="w-12 h-12 fill-current" style={{color: "#B8860B"}} />
              <Star className="w-8 h-8 fill-current" style={{color: "#B8860B"}} />
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}