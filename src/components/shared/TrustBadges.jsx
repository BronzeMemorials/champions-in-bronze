import { Shield, Award, Star, Flag, Camera, Zap } from "lucide-react";
import FadeIn from "./FadeIn";

const badges = [
  { icon: Flag, label: "Made in USA", sub: "American Foundry" },
  { icon: Shield, label: "Lifetime Durability", sub: "Guaranteed Forever" },
  { icon: Award, label: "Museum Quality", sub: "Hand-Finished" },
  { icon: Camera, label: "Exact Photo Replication", sub: "True Likeness" },
  { icon: Zap, label: "48-Hour Proofs", sub: "Delivered Fast" },
  { icon: Star, label: "100+ Year Outdoor", sub: "Durability Rated" },
];

export default function TrustBadges() {
  return (
    <div className="py-12 border-y border-bronze/20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, i) => (
            <FadeIn key={badge.label} delay={i * 0.08}>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-sm bg-bronze/10 border border-bronze/20 flex items-center justify-center">
                  <badge.icon className="w-4 h-4 text-gold" />
                </div>
                <p className="font-serif text-xs text-parchment font-semibold leading-tight">{badge.label}</p>
                <p className="text-xs text-parchment/50">{badge.sub}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}