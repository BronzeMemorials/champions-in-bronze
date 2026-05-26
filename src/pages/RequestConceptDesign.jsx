import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuoteModal } from "@/lib/QuoteModalContext";

export default function RequestConceptDesign() {
  const { openQuoteModal } = useQuoteModal();
  const navigate = useNavigate();

  useEffect(() => {
    navigate(-1);
    setTimeout(() => openQuoteModal(), 50);
  }, []);

  return null;
}