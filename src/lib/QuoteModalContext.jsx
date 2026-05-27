import { createContext, useContext, useState } from "react";
import QuoteModal from "../components/shared/QuoteModal";

const QuoteModalContext = createContext(null);

export function QuoteModalProvider({ children }) {
  const [open, setOpen] = useState(false);
  const [modalContext, setModalContext] = useState({});

  const openQuoteModal = (ctx = {}) => {
    setModalContext(ctx);
    setOpen(true);
  };

  return (
    <QuoteModalContext.Provider value={{ openQuoteModal }}>
      {children}
      <QuoteModal open={open} onClose={() => setOpen(false)} referenceImage={modalContext.referenceImage} sourcePage={modalContext.sourcePage} />
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  return useContext(QuoteModalContext);
}