import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FadeIn from "./FadeIn";

export default function FAQSection({ faqs, title = "Frequently Asked Questions" }) {
  return (
    <section className="py-28 bg-obsidian">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Questions</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 text-parchment">{title}</h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-bronze/15 bg-secondary/30 px-6 rounded-sm"
              >
                <AccordionTrigger className="font-serif text-lg text-parchment hover:text-gold transition-colors py-6 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-parchment/60 leading-relaxed pb-6 font-sans">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}