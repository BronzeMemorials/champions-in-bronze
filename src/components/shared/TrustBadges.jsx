import { Shield, Award, Flag, Camera, Zap, Phone } from "lucide-react";
import FadeIn from "./FadeIn";

const badges = [
  { icon: Flag, label: "Made in USA", sub: "American Foundry" },
  { icon: Shield, label: "100-Year Guarantee", sub: "Outdoor Rated" },
  { icon: Award, label: "Museum Quality", sub: "Institutional Grade" },
  { icon: Camera, label: "Immortalize in Bronze", sub: "Exact Likeness" },
  { icon: Zap, label: "Free Artwork Within The Hour", sub: "Send Us Your Photo" },
];

export default function TrustBadges() {
  return (
    <div className="py-6 bg-gradient-to-r from-slate-50 via-white to-slate-50 border-y-2 border-bronze/30 shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-nowrap justify-center items-stretch gap-2 lg:gap-3 overflow-x-auto">
          {badges.map((badge, i) => (
            <FadeIn key={badge.label} delay={i * 0.08}>
              <div className="flex flex-col items-center text-center gap-2 min-w-[100px] px-3 py-3 rounded-lg hover:bg-white/60 transition-all duration-300">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-gold/30 to-bronze/20 border-2 border-gold/40 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                  <badge.icon className="w-5 h-5 text-gold font-bold" />
                </div>
                <p className="font-serif text-xs md:text-sm text-parchment font-black leading-tight uppercase tracking-wider">{badge.label}</p>
                <p className="text-xs text-slate-600 font-semibold">{badge.sub}</p>
              </div>
            </FadeIn>
          ))}

          {/* Call Now — stands out */}
          <FadeIn delay={0.45}>
            <a
              href="tel:7723090412"
              className="flex flex-col items-center justify-center gap-2 px-6 py-3 rounded-lg border-3 border-gold hover:border-yellow-400 transition-all duration-300 group hover:scale-105 hover:shadow-lg shrink-0"
              style={{ background: "linear-gradient(135deg, #DAA520 0%, #FFD700 50%, #DAA520 100%)", boxShadow: "0 6px 20px rgba(218,165,32,0.5)" }}
            >
              <Phone className="w-6 h-6 text-black group-hover:scale-110 transition-transform" />
              <p className="font-sans font-black text-black text-xs uppercase tracking-widest leading-tight">Call Now</p>
              <p className="font-sans font-black text-black text-base leading-tight whitespace-nowrap">772-309-0412</p>
            </a>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}