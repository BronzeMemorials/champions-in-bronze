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
    <div className="py-10 border-y border-bronze/20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8">
          {badges.map((badge, i) => (
            <FadeIn key={badge.label} delay={i * 0.08}>
              <div className="flex flex-col items-center text-center gap-2 min-w-[100px]">
                <div className="w-10 h-10 rounded-sm bg-bronze/10 border border-bronze/20 flex items-center justify-center">
                  <badge.icon className="w-4 h-4 text-gold" />
                </div>
                <p className="font-serif text-base text-parchment leading-tight">{badge.label}</p>
                <p className="text-base text-black font-normal">{badge.sub}</p>
              </div>
            </FadeIn>
          ))}

          {/* Phone CTA — stands out as a button */}
          <FadeIn delay={0.45}>
            <a
              href="tel:7723090412"
              className="flex flex-col items-center justify-center gap-2 px-6 py-4 rounded-sm border-2 border-gold bg-gradient-to-b from-yellow-500 to-yellow-700 shadow-lg hover:shadow-xl hover:from-yellow-400 hover:to-yellow-600 transition-all duration-300 group min-w-[130px]"
              style={{ boxShadow: "0 4px 18px rgba(180,130,0,0.45), 0 1px 4px rgba(0,0,0,0.2)" }}
            >
              <div className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <p className="font-sans font-black text-white text-sm uppercase tracking-widest leading-tight text-center">Call Now</p>
              <p className="font-sans font-bold text-white text-base leading-tight whitespace-nowrap">772-309-0412</p>
            </a>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}