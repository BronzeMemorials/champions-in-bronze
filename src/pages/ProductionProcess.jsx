import ProcessTimeline from "../components/shared/ProcessTimeline";
import QuoteForm from "../components/shared/QuoteForm";
import FadeIn from "../components/shared/FadeIn";
import SectionHeading from "../components/shared/SectionHeading";

const foundryImg = "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=1600&q=80";

const steps = [
  { title: "Clay Sculpting", desc: "Every commission begins as a clay model under the hands of a master sculptor. Working from photographs, 3D scans, and reference materials, the sculptor captures every detail — facial expression to muscle definition." },
  { title: "Silicon Mold Making", desc: "Once the clay sculpture is approved, we create a precise silicon rubber mold that captures every microscopic detail. This mold is the master template from which all wax copies will be pulled." },
  { title: "Wax Casting", desc: "Liquid wax is poured into the silicon mold creating a hollow wax replica. Artisans then refine the wax — repairing any imperfections and adding final details by hand." },
  { title: "Ceramic Shell", desc: "The wax replica is coated in multiple layers of ceramic slurry, building a hard shell. This ceramic shell will become the actual mold for the bronze pour." },
  { title: "The Bronze Pour", desc: "The ceramic shell is heated to 1,500°F, melting out the wax. Molten bronze at 2,100°F is then poured into the empty shell, filling every detail of the original sculpture." },
  { title: "Finishing & Patina", desc: "After cooling, the ceramic shell is broken away to reveal raw bronze. Master finishers weld sections, chase details, and apply chemical patinas to achieve the desired color and surface quality." },
];

export default function ProductionProcess() {
  return (
    <div className="bg-obsidian text-parchment pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={foundryImg} alt="Bronze foundry" className="w-full h-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/40 to-obsidian" />
        </div>
        <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">The Craft</span>
            <h1 className="font-serif text-5xl md:text-7xl mt-4 text-parchment">The Lost-Wax Process</h1>
            <p className="mt-6 text-parchment/60 text-xl leading-relaxed">
              The same technique used for 5,000 years — perfected with modern precision.
              Every piece we create follows this time-honored method.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Steps */}
      <section className="py-28">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-20">
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Ancient Craft, Modern Precision</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-3 text-parchment">How Bronze is Born</h2>
            </div>
          </FadeIn>
          <div className="space-y-16">
            {steps.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.05}>
                <div className="border-l-2 border-bronze/30 pl-8">
                  <span className="text-gold font-sans text-xs uppercase tracking-[0.3em]">Step {i + 1}</span>
                  <h3 className="font-serif text-2xl text-parchment mt-2">{step.title}</h3>
                  <p className="text-parchment/60 mt-3 leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline />
      <QuoteForm title="Ready to Begin?" subtitle="Start your commission and experience the process firsthand." source="pro" />
    </div>
  );
}