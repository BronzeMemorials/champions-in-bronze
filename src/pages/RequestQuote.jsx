import QuoteForm from "../components/shared/QuoteForm";
import TrustBadges from "../components/shared/TrustBadges";
import TestimonialCarousel from "../components/shared/TestimonialCarousel";
import FadeIn from "../components/shared/FadeIn";

export default function RequestQuote() {
  return (
    <div className="bg-obsidian text-parchment pt-20">
      {/* Hero */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">
              Begin Your Commission
            </span>
            <h1 className="font-serif text-5xl md:text-7xl mt-4 text-parchment">
              Let's Build<br />Something Eternal.
            </h1>
            <p className="mt-6 text-parchment/60 text-xl leading-relaxed max-w-2xl mx-auto">
              Share your vision below. Our team of sculptors and engineers will deliver detailed shop drawings 
              and a comprehensive proposal within 48 hours.
            </p>
          </FadeIn>
        </div>
      </section>

      <TrustBadges />

      <QuoteForm
        title="Your Project Details"
        subtitle="The more detail you provide, the more accurate our initial proposal will be. Upload logos, photos, and project briefs."
        source="pro"
      />

      <TestimonialCarousel />
    </div>
  );
}