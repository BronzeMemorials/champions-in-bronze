import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

export default function StickyQuoteButton({ href = "/request-quote" }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <Link
            to={href}
            className="flex items-center gap-3 bg-bronze hover:bg-gold text-parchment px-6 py-4 rounded-sm shadow-2xl shadow-bronze/30 transition-all duration-300 group"
          >
            <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="font-sans text-sm uppercase tracking-[0.15em] font-semibold hidden md:inline">
              Request Quote
            </span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}