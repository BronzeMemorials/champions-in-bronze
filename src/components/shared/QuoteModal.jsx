import { useEffect } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import QuoteForm from "./QuoteForm";

export default function QuoteModal({ open, onClose, referenceImage, sourcePage }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto bg-black/70 backdrop-blur-sm p-4 pt-8"
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-6xl bg-white shadow-2xl rounded-sm mb-8"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-9 h-9 bg-gray-100 hover:bg-gray-200 flex items-center justify-center rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
            <QuoteForm title="Request Your Free Artwork Proof" subtitle="Tell us about your project — we'll deliver a digital proof within the hour." source="pro" referenceImage={referenceImage} sourcePage={sourcePage} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}