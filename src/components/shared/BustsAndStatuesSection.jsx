import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";

const bustTypes = [
  { label: "Standard Hall of Fame Bust", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/496d05ff8_99F60C02-07FA-4E6B-A2F7-A1DF3368DE0E.png" },
  { label: "Athlete Portrait Bust", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/1daa60284_ECEF0D5E-181D-4F24-8FD8-994D7F9B3730.png" },
  { label: "Coach Bust", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/4d41d4287_0804D2D5-A521-470D-9D6D-8E45E69BA991.png" },
  { label: "Championship Bust", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/82c049fdc_1EFEDCFE-9322-40E1-88FB-5223406FB921.png" },
  { label: "Stadium Donor Bust", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/580dca88d_BA78C4BD-B3AA-4B99-9EE6-70D7AC769604.png" },
  { label: "Historic Athlete Bust", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/4b1801f52_A48B1FB3-444D-4741-AE40-D4E863E0F068.png" },
];

const statues = [
  { position: "Quarterback", sport: "Football", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/2ef20594e_92544757-7bd9-4667-b3d0-ce1097be4314.png" },
  { position: "Running Back", sport: "Football", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/4ca137199_football01.png" },
  { position: "Forward", sport: "Basketball", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/544558f12_basketball33.png" },
  { position: "Pitcher", sport: "Baseball", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/ae8cf7957_ChatGPTImageMay28202608_44_52AM.png" },
  { position: "Forward Kick", sport: "Soccer", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/be21ffeac_soccerkick.png" },
  { position: "Goalie", sport: "Hockey", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/145c4c55d_hockey30.png" },
  { position: "Lineman", sport: "Football", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/016aef07b_football78.png" },
  { position: "Batter", sport: "Baseball", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/c558a13c0_batterbatter.png" },
];

export default function BustsAndStatuesSection() {
  return (
    <>
      {/* BUSTS */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Preserve Legacy For Generations</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">Bronze Busts</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base">Immortalize athletes, coaches, and legends in museum-quality bronze — each bust created from your exact photographs. No in-person sessions required.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {bustTypes.map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.08}>
                <div className="group relative overflow-hidden rounded-sm bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-yellow-500 transition-all duration-300">
                  <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                    <img src={item.img} alt={item.label} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-4 text-center border-t border-gray-200">
                    <p className="font-serif text-base text-gray-900">{item.label}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div className="text-center mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/bronze-athlete-busts" className="inline-flex items-center gap-2 px-8 py-4 font-sans font-bold uppercase tracking-widest text-sm text-black transition-all" style={{ background: "linear-gradient(135deg, #B8860B 0%, #DAA520 50%, #B8860B 100%)" }}>
                View All Bronze Busts <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/request-quote" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-yellow-600 text-yellow-800 font-sans font-semibold uppercase tracking-widest text-sm hover:bg-yellow-50 transition-colors">
                Request Bust Quote
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* STATUES */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Honor Sacrifice. Celebrate Champions.</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">Bronze Statues — Exact Likeness from Your Photograph</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base">Life-size and heroic-scale bronze statues for stadium entrances, arena lobbies, and campus landmarks — sculpted from your actual photographs.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {statues.map((item, i) => (
              <FadeIn key={item.position + item.sport} delay={i * 0.06}>
                <div className="group relative overflow-hidden rounded-sm bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-yellow-500 transition-all duration-300">
                  <div className="aspect-[3/4] overflow-hidden bg-white">
                    <img src={item.img} alt={`Bronze ${item.sport} ${item.position} statue`} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-4 text-center border-t border-gray-100">
                    <p className="font-serif text-base text-gray-900">{item.position}</p>
                    <p className="text-gray-400 font-sans text-xs uppercase tracking-widest mt-1">{item.sport}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div className="text-center mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/custom-bronze-athlete-statues" className="inline-flex items-center gap-2 px-8 py-4 font-sans font-bold uppercase tracking-widest text-sm text-black transition-all" style={{ background: "linear-gradient(135deg, #B8860B 0%, #DAA520 50%, #B8860B 100%)" }}>
                View All Bronze Statues <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/request-quote" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-yellow-600 text-yellow-800 font-sans font-semibold uppercase tracking-widest text-sm hover:bg-yellow-50 transition-colors">
                Request Statue Quote
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}