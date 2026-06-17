import { Link } from "react-router-dom";
import { ArrowRight, Trophy, Star, MapPin, Award, Flag } from "lucide-react";
import SportPage from "./SportPage";
import FadeIn from "../components/shared/FadeIn";

const heroImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/ab5fbf767_generated_696960c2.png";
const PLAQUE_IMG = "https://media.base44.com/images/public/69e6638934292a547ec97753/a4fb0943f_e8c50451-6842-42de-9430-cb15069e3c81.png";
const CHAMPION_IMG = "https://media.base44.com/images/public/69e6638934292a547ec97753/b9f63bd6f_e8c50451-6842-42de-9430-cb15069e3c81.png";

const stats = [
  { label: "AJGA Rank", value: "#5", sub: "Nationally" },
  { label: "WAGR Best", value: "#3", sub: "World Amateur" },
  { label: "Tournament Wins", value: "11", sub: "AJGA & WAGR" },
  { label: "Wyndham Inv.", value: "Champion", sub: "65-65-68 (-12)" },
];

const accolades = [
  "2026 Wyndham Invitational Champion — 65-65-68 (-12)",
  "AJGA Rank #5 Nationally (June 2026)",
  "WAGR Best Rank #3 — World Amateur Golf Ranking",
  "11 tournament victories across AJGA & WAGR events",
  "Selected to 2025 Wyndham Cup East Team",
  "Verbal Commitment to University of Florida (SEC)",
  "T5 Rolex Tournament of Champions",
];

export default function GolfPage() {
  return (
    <SportPage sport="Golf" league="PGA · LPGA · NCAA · Club" heroImg={heroImg}
      heroSubtitle="Tournament champion recognition, club Hall of Fame displays, and locker room portrait plaques for golf programs. Cast from your actual photographs.">

      {/* ── JESSY HUEBNER FEATURED ATHLETE ── */}
      <section className="py-14 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-8">
              <span className="text-yellow-700 font-sans tracking-[0.3em] uppercase text-xs font-bold">Featured Athlete</span>
              <h2 className="font-serif text-3xl md:text-4xl mt-3 text-gray-900">Jessy Huebner — 2026 Wyndham Invitational Champion</h2>
              <p className="text-gray-600 mt-2 text-sm max-w-2xl mx-auto">
                A rising star immortalized in museum-quality bronze. Commission your own Hall of Fame plaque from photographs.
              </p>
            </div>
          </FadeIn>

          {/* Champion Image + Stats */}
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-10">
            <FadeIn delay={0.1}>
              <div className="rounded-sm overflow-hidden border-2 border-yellow-200 shadow-xl">
                <img src={CHAMPION_IMG} alt="Jessy Huebner — Wyndham Invitational Champion with Hall of Fame bronze plaque" className="w-full h-auto" />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {stats.map((s, i) => (
                  <div key={s.label} className="bg-white border border-yellow-200 p-3 rounded-sm text-center">
                    <p className="font-serif text-xl md:text-2xl text-yellow-700">{s.value}</p>
                    <p className="font-sans text-xs uppercase tracking-[0.15em] text-gray-900 font-semibold mt-0.5">{s.label}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{s.sub}</p>
                  </div>
                ))}
              </div>

              {/* Bio cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { icon: MapPin, title: "Hometown", text: "Port St. Lucie, FL" },
                  { icon: Award, title: "Class", text: "2027 · Imagine Learning" },
                  { icon: Flag, title: "College", text: "University of Florida (SEC)" },
                ].map((item, i) => (
                  <div key={item.title} className="flex items-center gap-3 bg-white border border-gray-200 p-3 rounded-sm">
                    <item.icon className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                    <div>
                      <p className="font-sans text-xs uppercase tracking-wider text-gray-500 font-semibold">{item.title}</p>
                      <p className="text-gray-800 text-sm font-semibold">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Accolades + Plaque */}
          <div className="grid lg:grid-cols-2 gap-8">
            <FadeIn delay={0.15}>
              <h3 className="font-serif text-xl text-gray-900 mb-4">Career Highlights</h3>
              <div className="space-y-2">
                {accolades.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 p-3 rounded-sm">
                    <Trophy className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-800 text-sm font-semibold leading-snug">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Link to="/request-quote" className="inline-flex items-center gap-2 px-6 py-3 font-sans font-bold uppercase tracking-widest text-sm text-black" style={{ background: "linear-gradient(135deg, #B8860B 0%, #DAA520 50%, #B8860B 100%)" }}>
                  Commission Your Golf Hall of Fame Plaque <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={0.25}>
              <div className="rounded-sm overflow-hidden border-2 border-yellow-200 shadow-xl">
                <img src={PLAQUE_IMG} alt="Jessy Huebner Hall of Fame bronze plaque — Wyndham Invitational Champion June 2026" className="w-full h-auto" />
              </div>
              <p className="text-center text-gray-500 text-xs mt-3 italic">
                Hand-sculpted bronze Hall of Fame plaque — exact likeness from photographs. Artwork proof within the hour.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </SportPage>
  );
}