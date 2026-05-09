import { lazy, Suspense } from "react";
import FadeIn from "../components/shared/FadeIn";
import SEOHead from "../components/shared/SEOHead";

const QuoteForm = lazy(() => import("../components/shared/QuoteForm"));

export default function RequestConceptDesign() {
  return (
    <div className="bg-obsidian text-parchment min-h-screen">
      <SEOHead
        title="Request a Concept Design — Custom Bronze Sculptures | Champions in Bronze"
        description="Request your custom bronze sculpture concept design. Digital sculpt proof delivered within 48 hours. Statues, busts, Hall of Fame displays, and donor walls."
        canonical="/request-concept-design"
      />

      <section className="pt-36 pb-10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <span className="text-gold font-sans tracking-[0.4em] uppercase text-xs font-semibold">Begin Your Legacy</span>
            <h1 className="font-serif text-5xl md:text-7xl mt-4 leading-tight text-parchment">
              Request Your<br />Concept Design.
            </h1>
            <p className="mt-6 text-parchment/60 text-xl leading-relaxed">
              Share your vision and receive a digital sculpt proof within 48 hours. Museum quality. No commitment required.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              {["48-Hour Digital Proof", "No Commitment Required", "Museum Quality", "American Made"].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full" />
                  <span className="font-sans text-sm text-parchment/55 uppercase tracking-wider">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <Suspense fallback={<div className="h-40" />}>
        <QuoteForm
          title="Commission Your Legacy Sculpture"
          subtitle="Every detail matters. The more you share, the better your proof."
          source="pro"
        />
      </Suspense>
    </div>
  );
}