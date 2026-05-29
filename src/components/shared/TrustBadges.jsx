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
    <div className="py-8 border-y border-bronze/20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-nowrap justify-center items-center gap-3 lg:gap-4 overflow-x-auto">
          {badges.map((badge, i) => (
            <FadeIn key={badge.label} delay={i * 0.08}>
              <div className="flex flex-col items-center text-center gap-1.5 min-w-[90px]">
                <div className="w-9 h-9 rounded-sm bg-bronze/10 border border-bronze/20 flex items-center justify-center">
                  <badge.icon className="w-4 h-4 text-gold" />
                </div>
                <p className="font-serif text-sm text-parchment font-bold leading-tight">{badge.label}</p>
                <p className="text-xs text-black font-normal">{badge.sub}</p>
              </div>
            </FadeIn>
          ))}

          {/* Call Now — inline, stands out as a gold button */}
          <FadeIn delay={0.45}>
            <a
              href="tel:7723090412"
              className="flex flex-col items-center justify-center gap-1 px-5 py-3 border-2 border-yellow-600 hover:border-yellow-400 transition-all duration-300 group"
              style={{ background: "linear-gradient(135deg, #B8860B 0%, #DAA520 50%, #B8860B 100%)", boxShadow: "0 3px 14px rgba(180,130,0,0.4)" }}
            >
              <Phone className="w-4 h-4 text-black" />
              <p className="font-sans font-black text-black text-xs uppercase tracking-widest leading-tight">Call Now</p>
              <p className="font-sans font-black text-black text-sm leading-tight whitespace-nowrap">772-309-0412</p>
            </a>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}