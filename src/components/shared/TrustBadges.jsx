import { Shield, Award, Star, Flag } from "lucide-react";
import FadeIn from "./FadeIn";

const badges = [
  { icon: Flag, label: "Made in USA", sub: "American Foundry" },
  { icon: Shield, label: "Lifetime Durability", sub: "Guaranteed Forever" },
  { icon: Award, label: "Museum Quality", sub: "Hand-Finished" },
  { icon: Star, label: "48-Hour Drawings", sub: "Fast Turnaround" },
];

export default function TrustBadges() {
  return (
    <div className="py-12 border-y border-bronze/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, i) => (
            <FadeIn key={badge.label} delay={i * 0.1}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-sm bg-bronze/10 border border-bronze/20 flex items-center justify-center flex-shrink-0">
                  <badge.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="font-serif text-sm text-parchment font-semibold">{badge.label}</p>
                  <p className="text-xs text-parchment/50 mt-0.5">{badge.sub}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}