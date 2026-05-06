import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FadeIn from "../components/shared/FadeIn";
import QuoteForm from "../components/shared/QuoteForm";
import TrustBadges from "../components/shared/TrustBadges";

const img1 = "https://media.base44.com/images/public/69e6638934292a547ec97753/4262e1b6f_generated_6dae4386.png";
const img2 = "https://media.base44.com/images/public/69e6638934292a547ec97753/5b198cd19_generated_1a12a43b.png";
const img3 = "https://media.base44.com/images/public/69e6638934292a547ec97753/ab5fbf767_generated_696960c2.png";
const img4 = "https://media.base44.com/images/public/69e6638934292a547ec97753/502c0767b_generated_e375b9ec.png";
const img5 = "https://media.base44.com/images/public/69e6638934292a547ec97753/d74e93030_generated_7f57395d.png";
const img6 = "https://media.base44.com/images/public/69e6638934292a547ec97753/8f84177a0_generated_c8d564f9.png";

const sports = [
  { label: "Football", to: "/football", img: img1, desc: "NFL, NCAA, & high school football — statues, plaques, HOF displays" },
  { label: "Basketball", to: "/basketball", img: img2, desc: "NBA, WNBA, NCAA — retirement plaques, arena busts, HOF walls" },
  { label: "Baseball", to: "/baseball", img: img3, desc: "MLB & NCAA — home plate reliefs, portrait plaques, stadium installs" },
  { label: "Hockey", to: "/hockey", img: img4, desc: "NHL & NCAA — championship plaques, arena busts, jersey displays" },
  { label: "Soccer", to: "/soccer", img: img5, desc: "MLS, US Soccer, NCAA — action reliefs, coach tributes" },
  { label: "Lacrosse", to: "/lacrosse", img: img6, desc: "NCAA, club & professional lacrosse recognition" },
  { label: "Volleyball", to: "/volleyball", img: img1, desc: "NCAA & club volleyball — Hall of Fame and donor recognition" },
  { label: "Swimming", to: "/swimming", img: img2, desc: "NCAA aquatics — championship plaques, record boards in bronze" },
  { label: "Golf", to: "/golf", img: img3, desc: "PGA, LPGA & collegiate golf — tournament champion recognition" },
  { label: "Track & Field", to: "/track-field", img: img4, desc: "NCAA track & field — record plaques, Hall of Fame displays" },
  { label: "Wrestling", to: "/wrestling", img: img5, desc: "NCAA wrestling — championship and Hall of Fame recognition" },
  { label: "Tennis", to: "/tennis", img: img6, desc: "ATP, WTA, NCAA tennis — portrait plaques and achievement displays" },
];

export default function AllSports() {
  return (
    <div className="bg-obsidian text-parchment pt-20">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-4">
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Every Sport · Every Level</span>
              <h1 className="font-serif text-5xl md:text-7xl mt-4 text-parchment leading-tight">
                Bronze Recognition<br /><span className="text-bronze-light italic">For Every Sport.</span>
              </h1>
              <p className="mt-6 text-parchment/60 text-lg max-w-2xl mx-auto leading-relaxed">
                Champions in Bronze creates custom 3D relief plaques, portrait busts, statues, Hall of Fame displays, and Photo ImageCast plaques for every sport at every level. Every piece sculpted from your actual photographs.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <TrustBadges />

      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sports.map((sport, i) => (
              <FadeIn key={sport.to} delay={i * 0.06}>
                <Link to={sport.to} className="group relative aspect-[4/3] overflow-hidden rounded-sm block">
                  <img src={sport.img} alt={sport.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <h3 className="font-serif text-2xl text-parchment group-hover:text-gold transition-colors">{sport.label}</h3>
                    <p className="text-parchment/50 text-sm mt-1">{sport.desc}</p>
                    <div className="flex items-center gap-2 mt-3 text-gold text-xs font-sans uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>View {sport.label} Products</span> <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <QuoteForm title="Start Any Sport Commission" subtitle="Upload photos and your project details. Artwork proof within 48 hours for any sport." source="pro" />
    </div>
  );
}