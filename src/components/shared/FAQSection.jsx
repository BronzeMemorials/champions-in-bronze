import FadeIn from "./FadeIn";

export default function FAQSection({ faqs, title = "Frequently Asked Questions" }) {
  const safeFaqs = Array.isArray(faqs) ? faqs : [];
  if (!safeFaqs.length) return null;
  return (
    <section className="py-3 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-2">
            <span className="text-bronze font-sans tracking-[0.3em] uppercase text-xs font-semibold">Questions</span>
            <h2 className="font-serif text-3xl md:text-4xl mt-1 text-parchment">{title}</h2>
          </div>
        </FadeIn>

        <div className="space-y-1">
          {safeFaqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <div className="border-b border-bronze/20 pb-2">
                <p className="font-sans text-sm font-bold uppercase tracking-wider text-parchment mb-1">
                  {faq.question}
                </p>
                <p className="font-sans text-sm italic text-black leading-snug">
                  {faq.answer}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}