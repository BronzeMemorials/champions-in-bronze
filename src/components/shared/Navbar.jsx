import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Statues", to: "/bronze-player-statues" },
  { label: "Plaques", to: "/championship-bronze-plaques" },
  { label: "Donor Walls", to: "/stadium-donor-walls" },
  { label: "Letters", to: "/dimensional-metal-letters" },
  { label: "Collegiate", to: "/collegiate" },
  { label: "Shop", to: "/shop" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Process", to: "/process" },
  { label: "Materials", to: "/materials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-obsidian/80 backdrop-blur-xl border-b border-bronze/10">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <span className="font-serif text-xl text-parchment tracking-wide">
              Champions <span className="text-bronze">in Bronze</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-sans text-xs uppercase tracking-[0.15em] transition-colors duration-300 ${
                  location.pathname === link.to
                    ? "text-gold"
                    : "text-parchment/60 hover:text-parchment"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-4">
            <Link
              to="/request-quote"
              className="hidden md:inline-flex bg-bronze hover:bg-gold text-parchment px-6 py-2.5 font-sans text-xs uppercase tracking-[0.15em] font-semibold transition-all duration-300 rounded-sm"
            >
              Request Quote
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-parchment/60 hover:text-parchment"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-obsidian/95 backdrop-blur-xl border-b border-bronze/10 overflow-hidden"
          >
            <nav className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={`font-sans text-sm uppercase tracking-[0.15em] py-2 border-b border-bronze/10 transition-colors ${
                    location.pathname === link.to ? "text-gold" : "text-parchment/60"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/request-quote"
                onClick={() => setOpen(false)}
                className="bg-bronze text-parchment px-6 py-3 font-sans text-sm uppercase tracking-[0.15em] font-semibold text-center mt-4 rounded-sm"
              >
                Request Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}