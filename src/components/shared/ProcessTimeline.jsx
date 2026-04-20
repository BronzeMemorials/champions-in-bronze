import { FileText, Pencil, Hammer, Truck, CheckCircle } from "lucide-react";
import FadeIn from "./FadeIn";

const steps = [
  { icon: FileText, title: "Consultation", desc: "Share your vision. We review references, specifications, and goals.", time: "Day 1" },
  { icon: Pencil, title: "Shop Drawings", desc: "Receive detailed CAD drawings and 3D renderings within 48 hours.", time: "48 Hours" },
  { icon: Hammer, title: "Sculpting & Casting", desc: "Master artisans hand-sculpt, mold, and cast using the lost-wax process.", time: "8–16 Weeks" },
  { icon: Truck, title: "Finishing & Patina", desc: "Custom patina application, quality inspection, and crating for shipment.", time: "2–4 Weeks" },
  { icon: CheckCircle, title: "Installation", desc: "Our team coordinates delivery and professional on-site installation.", time: "Scheduled" },
];

export default function ProcessTimeline() {
  return (
    <section className="py-28 bg-obsidian">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Our Process</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 text-parchment">From Vision to Bronze</h2>
            <p className="mt-4 text-parchment/60 text-lg max-w-xl mx-auto">Every commission follows our proven five-phase process, ensuring precision at every stage.</p>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-bronze/50 via-gold/30 to-bronze/10" />

          <div className="space-y-16 md:space-y-0">
            {steps.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.15}>
                <div className={`md:flex items-center gap-12 md:mb-20 ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16"}`}>
                    <span className="text-gold/50 font-sans text-xs tracking-[0.3em] uppercase">{step.time}</span>
                    <h3 className="font-serif text-2xl text-parchment mt-2">{step.title}</h3>
                    <p className="text-parchment/50 mt-3 leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="hidden md:flex w-14 h-14 rounded-full border-2 border-bronze/40 bg-obsidian items-center justify-center flex-shrink-0 relative z-10">
                    <step.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex-1" />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}