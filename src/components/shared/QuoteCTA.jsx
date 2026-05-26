import { useQuoteModal } from "@/lib/QuoteModalContext";

/**
 * Drop-in replacement for <Link to="/request-quote"> CTA buttons.
 * Opens the quote modal instead of navigating.
 *
 * Usage:
 *   <QuoteCTA className="..." style={...}>Get a Quote</QuoteCTA>
 */
export default function QuoteCTA({ children, className = "", style = {}, ...props }) {
  const { openQuoteModal } = useQuoteModal();
  return (
    <button
      type="button"
      onClick={openQuoteModal}
      className={className}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
}