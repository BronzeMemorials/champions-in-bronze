import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FadeIn from "./FadeIn";

const busts = [
  {
    url: "https://media.base44.com/images/public/69e6638934292a547ec97753/6aee4024f_697f7298-f70a-4057-8874-41506d330553.png",
    referenceUrl: "https://media.base44.com/images/public/69e6638934292a547ec97753/8a41fed55_eb45bafb-a066-47bc-bfd0-6b7a92c9b0e1.png",
    name: "Custom Portrait Bust",
    title: "Exact Likeness from Photographs",
    desc: "From your photograph to museum-quality bronze. Every feature sculpted with precision — suit jacket, necktie, glasses, and the expression that defines the person. No in-person sessions required. Artwork proof within the hour.",
    cta: "Commission a Portrait Bust",
    to: "/request-quote",
  },
  {
    url: "https://media.base44.com/images/public/69e6638934292a547ec97753/64403d092_48dc7031-c562-49f4-bcc5-0ac81d82e44a.png",
    name: "Daniel K. Inouye",
    title: "Hall of Fame Bronze Bust",
    desc: "Distinguished portrait bust mounted on an arched Hall of Fame backing plate. Seven stars of recognition beneath the name. The warm amber glow of museum-quality bronze — a legacy that will inspire for generations.",
    cta: "Honor a Legend in Bronze",
    to: "/request-quote",
  },
];

const process = [
  { step: "01", title: "Submit Photographs", desc: "Upload your high-resolution reference photos. Multiple angles preferred for sculptural accuracy." },
  { step: "02", title: "Digital Sculpting", desc: "Master artisans sculpt exact likeness using your photographs as the master reference." },
  { step: "03", title: "Review Artwork Proof", desc: "Digital proof delivered within the hour. You approve every detail before casting begins." },
  { step: "04", title: "Cast in Bronze", desc: "Lost-wax casting captures every sculptural detail in museum-grade architectural bronze." },
];

export default function BustPlaquesShowcase({ showHeading = true }) {
  return (
    <section className="py-10 bg-white border-t border-bronze/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {showHeading && (
          <FadeIn>
            <div className="text-center mb-8">
              <span className="text-yellow-600 font-sans tracking-[0.3em] uppercase text-sm font-semibold">Portrait Bust Collection</span>
              <h2 className="font-serif text-3xl md:text-4xl mt-2 text-gray-900">Custom Bronze Portrait Busts</h2>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-base leading-relaxed">
                Every bust sculpted from your exact photographs. Hall of Fame inductions, donor recognition, institutional dedications, and legacy memorials — cast permanently in museum-quality bronze.
              </p>
            </div>
          </FadeIn>
        )}

        {/* Bust Gallery */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {busts.map((bust, i) => (
            <FadeIn key={bust.name} delay={i * 0.1}>
              <div className="group rounded-sm border border-gray-200 bg-white hover:border-yellow-500 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col">
                <div className="overflow-hidden bg-gray-50 flex items-center justify-center p-4">
                  <img src={bust.url} alt={`${bust.name} — bronze portrait bust`} className="w-full h-auto max-h-96 object-contain group-hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
                </div>
                {bust.referenceUrl && (
                  <div className="px-4 pt-2 flex items-center gap-3">
                    <img src={bust.referenceUrl} alt="Reference photograph" className="w-20 h-20 object-cover rounded-sm border border-gray-200" />
                    <span className="text-gray-500 text-xs italic">← Sculpted from this photograph</span>
                  </div>
                )}
                <div className="p-4 flex flex-col flex-1">
                  <p className="font-serif text-lg text-gray-900 font-semibold leading-tight">{bust.name}</p>
                  <p className="text-yellow-700 font-sans text-sm font-bold uppercase tracking-wide mt-0.5">{bust.title}</p>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed flex-1">{bust.desc}</p>
                  <Link to={bust.to} className="mt-3 inline-flex items-center gap-1.5 text-yellow-700 font-sans text-xs uppercase tracking-widest font-bold hover:text-yellow-600 transition-colors">
                    {bust.cta} <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bust Process */}
        <FadeIn delay={0.2}>
          <div className="mb-4">
            <h3 className="font-serif text-2xl text-gray-900">How Portrait Busts Are Created</h3>
            <p className="text-gray-600 text-sm mt-1">From your photograph to finished bronze — no in-person sessions required.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {process.map((s, i) => (
              <div key={s.step} className="border border-bronze/20 bg-white p-4 rounded-sm">
                <p className="font-serif text-3xl text-bronze/30">{s.step}</p>
                <h4 className="font-serif text-base text-gray-900 mt-1">{s.title}</h4>
                <p className="text-gray-600 text-sm mt-1 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-6 text-center flex flex-wrap justify-center gap-4">
            <Link to="/bronze-athlete-busts" className="inline-flex items-center gap-2 bg-bronze hover:bg-gold text-white px-7 py-3 font-sans text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300">
              View All Bronze Busts <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link to="/request-quote" className="inline-flex items-center gap-2 border-2 border-yellow-600 text-yellow-800 px-7 py-3 font-sans text-sm uppercase tracking-[0.2em] font-semibold hover:bg-yellow-50 transition-colors">
              Request Bust Quote
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}