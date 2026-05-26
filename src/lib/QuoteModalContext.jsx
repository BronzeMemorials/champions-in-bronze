import { createContext, useContext, useState } from "react";
import QuoteModal from "../components/shared/QuoteModal";

const QuoteModalContext = createContext(null);

export function QuoteModalProvider({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <QuoteModalContext.Provider value={{ openQuoteModal: () => setOpen(true) }}>
      {children}
      <QuoteModal open={open} onClose={() => setOpen(false)} />
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  return useContext(QuoteModalContext);
}