import FadeIn from "./FadeIn";

export default function FAQSection({ faqs, title = "Frequently Asked Questions" }) {
  const safeFaqs = Array.isArray(faqs) ? faqs : [];
  if (!safeFaqs.length) return null;
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14">
            <span className="text-bronze font-sans tracking-[0.3em] uppercase text-xs font-semibold">Questions</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 text-parchment">{title}</h2>
          </div>
        </FadeIn>

        <div className="space-y-8">
          {safeFaqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.04}>
              <div className="border-b border-bronze/20 pb-8">
                <p className="font-sans text-sm font-bold uppercase tracking-wider text-parchment mb-3">
                  {faq.question}
                </p>
                <p className="font-sans text-sm italic text-parchment/65 leading-relaxed">
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