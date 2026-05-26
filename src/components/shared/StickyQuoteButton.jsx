import { useQuoteModal } from "@/lib/QuoteModalContext";

export default function StickyQuoteButton() {
  const { openQuoteModal } = useQuoteModal();
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
      <button
        onClick={openQuoteModal}
        className="flex items-center justify-center w-full bg-bronze hover:bg-gold text-parchment py-4 font-sans text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300"
      >
        Request Concept Design
      </button>
    </div>
  );
}