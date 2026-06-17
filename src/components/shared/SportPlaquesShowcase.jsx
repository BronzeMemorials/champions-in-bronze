import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";

const plaques = [
  {
    sport: "Football",
    items: [
      { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/c292cafc6_6f0796dd-4467-411a-9fb6-397a9ce3d4e4.png", name: "Lucas Hayes", title: "Champion Quarterback", desc: "Career Passing Yards 16,752 · Completion Pct. 68.7% · Touchdown Passes 156 · Single Season Yards 4,532 · Hall of Fame inductee — immortalized in museum-quality bronze.", cta: "Commission a Football Hall of Fame Plaque", to: "/request-quote" },
      { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/5ca79c61f_a9c779af-dfe4-471d-9e19-0efd783ab67a.png", name: "Champions CB", title: "Football Hall of Fame Ring & Shield", desc: "Hall of Fame shield crest with diamond championship ring — the ultimate tribute for football legends. Stadium background, laurel wreaths, and engraved recognition.", cta: "Honor Your Football Champion", to: "/request-quote" },
    ],
    text: "Football is brotherhood, sacrifice, and legacy. Our Hall of Fame plaques capture every quarterback, every championship moment, and every retired number in permanent bronze — sculpted from your actual photographs.",
  },
  {
    sport: "Soccer",
    items: [
      { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/f2d79a180_65b4f7ba-ca23-4aa2-8a70-80b85f160616.png", name: "Alex Morgan", title: "Champion Forward", desc: "Career Games 241 · Goals 123 · Assists 67 · Olympic Gold Medalist · FIFA World Player of the Year · NWSL Championship · Hall of Fame inductee cast in bronze.", cta: "Immortalize a Soccer Legend", to: "/request-quote" },
    ],
    text: "The beautiful game deserves beautiful recognition. From World Cup champions to collegiate stars — every soccer legend preserved in museum-grade bronze from your exact photographs.",
  },
  {
    sport: "Baseball",
    items: [
      { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/f057819af_4657a695-e951-4ec2-bc39-af1810718d65.png", name: "Jim Savage", title: "Champion Pitcher", desc: "Career Wins 214 · ERA 2.72 · Strikeouts 2,342 · Cy Young Award · 6x All-Star · No-Hitters 2 · Hall of Fame recognition in permanent bronze.", cta: "Cast a Pitcher's Legacy in Bronze", to: "/request-quote" },
    ],
    text: "Baseball is the sport of legacy. Retired numbers, Hall of Fame walls, and bronze plaques that anchor the identity of every ballpark — built to outlast the stadium itself.",
  },
  {
    sport: "Basketball",
    items: [
      { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/906e23f81_a5ad1396-b21f-49e3-a4fa-ab65f5074505.png", name: "Matthew Raymond", title: "Memorial Arena Dedication", desc: "Dedicated to honor an extraordinary legacy of leadership, dedication, and inspiration. A champion on the court, a role model in life — forever a part of our community.", cta: "Dedicate a Basketball Memorial Plaque", to: "/request-quote" },
      { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/32cb80946_7d8b8242-32b6-4c3f-a90b-3e4b226ca44b.png", name: "Game Winner", title: "Signature Dunk Relief", desc: "HE RISKS. HE ELEVATES. HE FINISHES. HE WINS. One moment. Legendary forever. Capturing the apex of athleticism in high-grade bronze.", cta: "Commission Your Basketball Plaque", to: "/request-quote" },
    ],
    text: "From arena-entrance statues to Hall of Fame portrait plaques — basketball programs trust Champions in Bronze to capture the legends that define programs and inspire future generations.",
  },
  {
    sport: "Softball",
    items: [
      { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/25fc138af_32dce4ff-dfac-46f3-927a-589a232acabb.png", name: "Jessica Harrison", title: "Second Base · Wildcats #22", desc: "3x National Champion · 2x Olympic Gold Medalist · 2x World Champion · 4x All-American · 2024 Hall of Fame Inductee. Greatness is earned. Legends are remembered.", cta: "Start Your Softball Hall of Fame Plaque", to: "/request-quote" },
    ],
    text: "Softball champions deserve recognition as powerful as their legacy. Hall of Fame portrait plaques, championship tribute displays, and custom bronze recognition for the players who defined their programs.",
  },
  {
    sport: "Volleyball",
    items: [
      { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/52635f5fd_b2e4b7bc-f80b-4146-81a3-2a22e22879e6.png", name: "Panthers Volleyball", title: "Heart. Focus. Dominate.", desc: "Female volleyball player in mid-action — stadium background, dynamic relief composition. Custom bronze plaque capturing the intensity of championship volleyball.", cta: "Honor Your Volleyball Champion", to: "/request-quote" },
      { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/f24ef11dc_bc2cc954-8b06-41e4-b96d-72c039cc3608.png", name: "Men's Volleyball", title: "Teamwork · Discipline · Heart · Pride", desc: "Male volleyball player mid-serve — net and ball in relief. Custom nameplate area for personalization. Hall of Fame grade bas-relief.", cta: "Commission a Volleyball Plaque", to: "/request-quote" },
      { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/f86e2675a_267ea29e-7615-4d68-bff6-d2da52d12599.png", name: "Jacob Anderson", title: "Hall of Fame · Career Highlights", desc: "3x Olympic Gold Medalist · 2x World Champion · 4x World League Champion · 5x All-American · 2024 Hall of Fame Inductee. Greatness is earned. Legends are remembered.", cta: "Immortalize a Volleyball Legend", to: "/request-quote" },
    ],
    text: "From collegiate Hall of Fame walls to championship commemorations — volleyball programs trust Champions in Bronze to honor the athletes, coaches, and moments in permanent bronze.",
  },
  {
    sport: "Golf",
    items: [
      { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/a4fb0943f_e8c50451-6842-42de-9430-cb15069e3c81.png", name: "Jessy Hubner", title: "2026 Wyndham Invitational Champion", desc: "Hall of Fame golf plaque with winner's trophy, golf ball emblem, and June 2026 dedication. Bronze relief capturing the champion alongside his trophy on the course.", cta: "Honor a Golf Champion in Bronze", to: "/request-quote" },
    ],
    text: "Golf's greatest moments deserve permanent recognition. Championship plaques, Hall of Fame inductions, and course dedications cast in museum-quality bronze.",
  },
];

export default function SportPlaquesShowcase({ showHeading = true }) {
  return (
    <section className="py-10 bg-white border-t border-bronze/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {showHeading && (
          <FadeIn>
            <div className="text-center mb-8">
              <span className="text-yellow-600 font-sans tracking-[0.3em] uppercase text-sm font-semibold">Hall of Fame Collection</span>
              <h2 className="font-serif text-3xl md:text-4xl mt-2 text-gray-900">Custom Sport Hall of Fame Plaques</h2>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-base leading-relaxed">
                Every plaque custom-designed from your photographs. Hand-sculpted relief, career statistics, championship honors, and Hall of Fame recognition — cast permanently in museum-quality bronze.
              </p>
            </div>
          </FadeIn>
        )}

        {plaques.map((group, gi) => (
          <FadeIn key={group.sport} delay={gi * 0.1}>
            <div className="mb-10 last:mb-0">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-bronze/10 text-bronze font-sans text-xs uppercase tracking-[0.2em] px-3 py-1 font-semibold rounded-sm">{group.sport}</span>
              </div>
              <p className="text-gray-700 font-sans text-base leading-relaxed mb-5 max-w-3xl">{group.text}</p>

              <div className={`grid grid-cols-1 ${group.items.length === 2 ? "md:grid-cols-2" : group.items.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2"} gap-4 md:gap-6`}>
                {group.items.map((item, ii) => (
                  <div key={ii} className="group rounded-sm border border-gray-200 bg-white hover:border-yellow-500 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
                    <div className="overflow-hidden bg-gray-50 flex items-center justify-center">
                      <img src={item.url} alt={`${item.name} — ${item.title} Hall of Fame bronze plaque`} className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <p className="font-serif text-lg text-gray-900 font-semibold leading-tight">{item.name}</p>
                      <p className="text-yellow-700 font-sans text-sm font-bold uppercase tracking-wide mt-0.5">{item.title}</p>
                      <p className="text-gray-600 text-sm mt-2 leading-relaxed flex-1">{item.desc}</p>
                      <Link to={item.to} className="mt-3 inline-flex items-center gap-1.5 text-yellow-700 font-sans text-xs uppercase tracking-widest font-bold hover:text-yellow-600 transition-colors">
                        {item.cta} <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5">
                <Link to="/request-quote" className="inline-flex items-center gap-2 bg-bronze hover:bg-gold text-white px-7 py-3 font-sans text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                  Request Your {group.sport} Hall of Fame Plaque Quote <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}