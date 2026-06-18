import { Link } from "react-router-dom";
import { ArrowRight, Trophy, Star, MapPin, Award, Flag } from "lucide-react";
import SEOHead from "../components/shared/SEOHead";
import FadeIn from "../components/shared/FadeIn";
import QuoteForm from "../components/shared/QuoteForm";

const PLAQUE_IMG = "https://media.base44.com/images/public/69e6638934292a547ec97753/a4fb0943f_e8c50451-6842-42de-9430-cb15069e3c81.png";
const CHAMPION_IMG = "https://media.base44.com/images/public/69e6638934292a547ec97753/b9f63bd6f_e8c50451-6842-42de-9430-cb15069e3c81.png";

const stats = [
  { label: "AJGA Rank", value: "#4", sub: "Nationally" },
  { label: "WAGR Best Rank", value: "#3", sub: "World Amateur" },
  { label: "Tournament Wins", value: "11", sub: "AJGA & WAGR" },
  { label: "Top-10 Finishes", value: "16", sub: "Counting Events" },
];

const tournaments = [
  { year: "2026", event: "Wyndham Invitational", finish: "1st", score: "65-65-68 (-12)", note: "First AJGA Invitational victory — at Sedgefield CC" },
  { year: "2026", event: "Team TaylorMade Invitational", finish: "T7", score: "68-72-66", note: "Pelican Golf Club" },
  { year: "2026", event: "Junior Invitational at Sage Valley", finish: "14th", score: "71-75-75-69", note: "Elite international junior field" },
  { year: "2026", event: "Terra Cotta Invitational", finish: "8th", score: "—", note: "All-Ages amateur event" },
  { year: "2025", event: "Rolex Tournament of Champions", finish: "T5", score: "70-72-70-71", note: "TPC San Antonio" },
  { year: "2025", event: "The Junior PLAYERS Championship", finish: "T12", score: "71-75-72", note: "TPC Sawgrass — Rolex event" },
  { year: "2025", event: "Boy's Junior PGA Championship", finish: "T17", score: "67-70-70-70", note: "National junior major" },
  { year: "2025", event: "Wyndham Invitational", finish: "2nd", score: "—", note: "Sedgefield CC — runner-up" },
  { year: "2025", event: "Team TaylorMade Invitational", finish: "5th", score: "—", note: "Top-5 in elite junior field" },
  { year: "2025", event: "Wyndham Cup", finish: "East Team", score: "—", note: "Selected to represent the East squad" },
  { year: "2025", event: "North & South Amateur", finish: "17th", score: "—", note: "Pinehurst — historic amateur" },
  { year: "2025", event: "Golf Performance Academy Jr. Champ", finish: "1st", score: "—", note: "Victory" },
  { year: "2025", event: "Dustin Johnson World Junior", finish: "9th", score: "—", note: "Top-10 in DJ's event" },
  { year: "2025", event: "Simplify Boys Championship", finish: "9th", score: "—", note: "Carlton Woods" },
  { year: "2024", event: "The Elite Invitational", finish: "2nd", score: "—", note: "Runner-up" },
  { year: "2024", event: "South Beach International Amateur", finish: "—", score: "—", note: "All-Ages field" },
];

const accolades = [
  "2026 Wyndham Invitational Champion — 65-65-68 (-12)",
  "AJGA Rank #4 Nationally (June 2026)",
  "WAGR Best Rank #3 — World Amateur Golf Ranking",
  "11 tournament victories across AJGA & WAGR events",
  "Selected to 2025 Wyndham Cup East Team",
  "Verbal Commitment to University of Florida (SEC)",
  "Competed at TPC Sawgrass, Sage Valley, Pinehurst, and TPC San Antonio",
];

export default function JessyHuebnerPage() {
  return (
    <div className="bg-white text-gray-900">
      <SEOHead
        title="Jessy Huebner — AJGA #4 · Wyndham Invitational Champion · University of Florida Commit | Champions in Bronze"
        description="Jessy Huebner: AJGA Rank #4 nationally, 2026 Wyndham Invitational Champion, WAGR Best Rank #3, 11 tournament wins. University of Florida commit. Champion golfer immortalized in bronze. Artwork proof within the hour."
        canonical="/jessy-huebner"
        ogImage={PLAQUE_IMG}
      />

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden bg-gray-50">
        <div className="absolute inset-0">
          <img src={CHAMPION_IMG} alt="Jessy Huebner — Wyndham Invitational Champion with Hall of Fame bronze plaque" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-white/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24 w-full">
          <FadeIn>
            <span className="font-sans tracking-[0.35em] uppercase text-sm font-bold block mb-3 text-yellow-700">Champions in Bronze · Hall of Fame Collection</span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl leading-[0.95] text-gray-900 max-w-3xl">
              Jessy Huebner
            </h1>
            <p className="font-serif text-xl sm:text-2xl md:text-3xl text-yellow-700 mt-3">2026 Wyndham Invitational Champion</p>
            <p className="mt-5 max-w-2xl text-base sm:text-lg text-gray-600 leading-relaxed font-sans">
              AJGA Rank #4 nationally. WAGR Best Rank #3. 11 tournament victories. Verbal commitment to the University of Florida. A rising star in American golf — now immortalized in museum-quality bronze.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/request-quote" className="inline-flex items-center gap-2 px-8 py-4 font-sans font-bold uppercase tracking-widest text-sm text-black transition-all hover:scale-[1.02]" style={{ background: "linear-gradient(135deg, #B8860B 0%, #DAA520 30%, #FFD700 50%, #DAA520 70%, #B8860B 100%)" }}>
                Commission a Hall of Fame Plaque <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/hall-of-fame" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-yellow-600 text-yellow-800 font-sans font-semibold uppercase tracking-widest text-sm hover:bg-yellow-50 transition-colors">
                View All Hall of Fame Plaques
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-2 max-w-3xl">
              {stats.map((s) => (
                <div key={s.label} className="bg-white/80 backdrop-blur-sm border border-yellow-200 p-3 rounded-sm text-center">
                  <p className="font-serif text-2xl md:text-3xl text-yellow-700">{s.value}</p>
                  <p className="font-sans text-xs uppercase tracking-[0.15em] text-gray-900 font-semibold mt-0.5">{s.label}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* THE PLAQUE */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2}>
              <div className="rounded-sm overflow-hidden border-2 border-yellow-200 shadow-2xl">
                <img src={PLAQUE_IMG} alt="Jessy Huebner Hall of Fame bronze plaque" className="w-full h-auto" />
              </div>
            </FadeIn>
            <FadeIn>
              <span className="text-yellow-700 font-sans tracking-[0.3em] uppercase text-xs font-bold">The Plaque</span>
              <h2 className="font-serif text-3xl md:text-4xl mt-3 text-gray-900">Immortalized in Bronze. Forever.</h2>
              <p className="mt-5 text-gray-600 text-base leading-relaxed">
                Commissioned to commemorate Jessy Huebner's extraordinary rise in competitive golf, this Hall of Fame bronze plaque captures his exact likeness — sculpted from photographs — alongside the Wyndham Invitational Championship title, the Hall of Fame shield, and the golf ball emblem that represents his sport.
              </p>
              <p className="mt-3 text-gray-600 text-base leading-relaxed">
                Every detail — the trophy, the championship ribbon, the June 2026 dedication — cast permanently in museum-grade bronze. This is the standard for every athlete, coach, and champion who deserves to be remembered for generations.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Hand-sculpted from actual photographs — exact likeness",
                  "Hall of Fame shield and golf emblem in bas-relief",
                  "Wyndham Invitational Championship permanently inscribed",
                  "Museum-quality bronze rated 100+ years outdoors",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* BIO & PROFILE */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="text-yellow-700 font-sans tracking-[0.3em] uppercase text-xs font-bold">Athlete Profile</span>
              <h2 className="font-serif text-3xl md:text-4xl mt-3 text-gray-900">The Making of a Champion</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: MapPin, title: "Hometown", lines: ["Port St. Lucie, Florida"] },
              { icon: Award, title: "Graduation", lines: ["Class of 2027", "Imagine Learning Excellence Academy"] },
              { icon: Flag, title: "College Commitment", lines: ["University of Florida", "SEC — verbal intent"] },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="bg-white border border-gray-200 p-6 rounded-sm text-center hover:border-yellow-500 hover:shadow-md transition-all duration-300">
                  <item.icon className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                  <h3 className="font-serif text-lg text-gray-900">{item.title}</h3>
                  {item.lines.map((line, j) => (
                    <p key={j} className="text-gray-600 text-sm mt-1">{line}</p>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ACCOLADES */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="text-yellow-700 font-sans tracking-[0.3em] uppercase text-xs font-bold">Career Highlights</span>
              <h2 className="font-serif text-3xl md:text-4xl mt-3 text-gray-900">Accolades & Achievements</h2>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm">A record of excellence across junior, amateur, and invitational golf at the highest level.</p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {accolades.map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="flex items-start gap-3 bg-yellow-50 border border-yellow-200 p-4 rounded-sm">
                  <Trophy className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-800 text-sm font-semibold leading-snug">{item}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TOURNAMENT RESULTS TABLE */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="text-yellow-700 font-sans tracking-[0.3em] uppercase text-xs font-bold">Competitive Record</span>
              <h2 className="font-serif text-3xl md:text-4xl mt-3 text-gray-900">Tournament Results</h2>
              <p className="text-gray-600 mt-3 text-sm">Select finishes from AJGA, WAGR-recognized, and elite amateur events.</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="border border-gray-200 rounded-sm overflow-hidden bg-white">
              <div className="grid grid-cols-12 gap-2 px-4 py-3 bg-yellow-50 border-b border-yellow-200 font-sans text-xs uppercase tracking-wider text-gray-700 font-bold">
                <span className="col-span-2">Year</span>
                <span className="col-span-4">Event</span>
                <span className="col-span-2 text-center">Finish</span>
                <span className="col-span-4">Score / Notes</span>
              </div>
              {tournaments.map((t, i) => (
                <div key={i} className={`grid grid-cols-12 gap-2 px-4 py-3 border-b border-gray-100 last:border-0 text-sm ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                  <span className="col-span-2 font-sans text-gray-500">{t.year}</span>
                  <span className="col-span-4 font-serif text-gray-900 font-semibold text-xs leading-tight">{t.event}</span>
                  <span className="col-span-2 text-center font-sans font-bold text-yellow-700">{t.finish}</span>
                  <div className="col-span-4">
                    {t.score !== "—" && <span className="text-gray-600 text-xs block">{t.score}</span>}
                    <span className="text-gray-500 text-xs italic">{t.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* LEGACY SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <FadeIn>
            <span className="text-yellow-700 font-sans tracking-[0.3em] uppercase text-xs font-bold">Why Bronze</span>
            <h2 className="font-serif text-3xl md:text-4xl mt-3 text-gray-900">A Legacy Cast in Bronze</h2>
            <p className="mt-6 text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
              Jessy Huebner's journey — from junior tournaments to the Wyndham Invitational Championship, from Port St. Lucie to a University of Florida commitment — represents the dedication, sacrifice, and excellence that defines champions. When his career is immortalized in a museum-quality bronze plaque, that legacy lives on for generations. Not a photograph that fades. Not a trophy that tarnishes. Bronze.
            </p>
            <p className="mt-4 text-gray-600 text-base leading-relaxed max-w-2xl mx-auto">
              Every Hall of Fame plaque we create is custom-sculpted from your actual photographs. Artwork proof within the hour. No commitment required. This is how champions are remembered forever.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/request-quote" className="inline-flex items-center gap-2 px-8 py-4 font-sans font-bold uppercase tracking-widest text-sm text-black transition-all hover:scale-[1.02]" style={{ background: "linear-gradient(135deg, #B8860B 0%, #DAA520 30%, #FFD700 50%, #DAA520 70%, #B8860B 100%)" }}>
                Commission Your Hall of Fame Plaque <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <QuoteForm
        title="Honor Your Champion in Bronze — Artwork Within The Hour"
        subtitle="Whether it's golf, football, baseball, or any sport — submit your photos and we'll deliver a museum-quality artwork proof within the hour. No commitment required."
        source="pro"
      />
    </div>
  );
}