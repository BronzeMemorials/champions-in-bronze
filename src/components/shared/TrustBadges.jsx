import { Phone } from "lucide-react";
import FadeIn from "./FadeIn";

const badges = [
  { label: "Made in USA", sub: "American Foundry" },
  { label: "100-Year Guarantee", sub: "Outdoor Rated" },
  { label: "Museum Quality", sub: "Institutional Grade" },
  { label: "Immortalize in Bronze", sub: "Exact Likeness" },
  { label: "Free Artwork Within The Hour", sub: "Send Us Your Photo" },
];

export default function TrustBadges() {
  return (
    <div className="py-3 bg-gradient-to-r from-slate-50 via-white to-slate-50 border-y-2 border-bronze/30 shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-nowrap justify-center items-center gap-2 lg:gap-4">
          {badges.map((badge, i) => (
            <FadeIn key={badge.label} delay={i * 0.08}>
              <div className="flex flex-col items-center text-center px-1 py-1">
                <p className="font-serif text-[10px] md:text-xs text-parchment font-black leading-tight uppercase tracking-wide">{badge.label}</p>
                <p className="text-[10px] text-slate-600 font-semibold">{badge.sub}</p>
              </div>
            </FadeIn>
          ))}

          {/* Call Now — stands out */}
          <FadeIn delay={0.45}>
            <a
              href="tel:7723090412"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border-2 border-gold hover:border-yellow-400 transition-all duration-300 group hover:scale-105 hover:shadow-lg shrink-0"
              style={{ background: "linear-gradient(135deg, #DAA520 0%, #FFD700 50%, #DAA520 100%)", boxShadow: "0 4px 14px rgba(218,165,32,0.4)", outline: "none", WebkitTapHighlightColor: "transparent" }}
            >
              <Phone className="w-3.5 h-3.5 text-black group-hover:scale-110 transition-transform" />
              <div>
                <p className="font-sans font-black text-black text-[10px] uppercase tracking-widest leading-tight">Call Now</p>
                <p className="font-sans font-black text-black text-xs leading-tight whitespace-nowrap">772-309-0412</p>
              </div>
            </a>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}