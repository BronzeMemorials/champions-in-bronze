import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const productLinks = [
  { label: "Photo Image Cast Plaques", to: "/photo-image-casting-plaques" },
  { label: "3D Bas-Relief Plaques", to: "/3d-bas-relief-plaques" },
  { label: "Hall of Fame Plaques", to: "/hall-of-fame-plaques" },
  { label: "Championship Plaques", to: "/championship-bronze-plaques" },
  { label: "Donor Recognition Walls", to: "/donor-recognition" },
  { label: "Hall of Fame Displays", to: "/hall-of-fame-bronze-displays" },
  { label: "Bronze Athlete Busts", to: "/bronze-athlete-busts" },
  { label: "Full-Size Bronze Statues", to: "/custom-bronze-athlete-statues" },
];

const infoLinks = [
  { label: "College Athletics", to: "/college-athletic-recognition" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Materials & Finishes", to: "/materials-finishes" },
];

function DropdownMenu({ label, links }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const safeLinks = Array.isArray(links) ? links : [];

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="flex items-center gap-1 font-sans text-xs font-bold uppercase tracking-[0.08em] text-parchment hover:text-bronze transition-colors duration-200 whitespace-nowrap">
        {label} <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-2 w-60 bg-white border border-gray-200 shadow-2xl z-50"
          >
            {safeLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-5 py-3 font-sans text-xs uppercase tracking-[0.08em] border-b border-bronze/10 last:border-0 transition-colors duration-200 ${
                  location.pathname === link.to ? "text-gold bg-bronze/10" : "text-parchment/55 hover:text-gold hover:bg-bronze/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);
  const location = useLocation();

  const navLinks = [
    { label: "Plaques", to: "/3d-bas-relief-plaques" },
    { label: "Donor Walls", to: "/donor-recognition" },
    { label: "Hall of Fame", to: "/hall-of-fame-bronze-displays" },
    { label: "Busts", to: "/bronze-athlete-busts" },
    { label: "Statues", to: "/custom-bronze-athlete-statues" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-white backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img src="https://media.base44.com/images/public/69e6638934292a547ec97753/313d53a94_ChatGPTImageMay14202609_54_24AM.png" alt="Champions in Bronze" className="w-12 h-12 object-contain flex-shrink-0 self-center" />
            <div className="flex flex-col leading-none">
              <span className="font-serif text-xl text-parchment tracking-wide">
                Champions <span className="text-bronze">in Bronze</span>
              </span>
              <span className="font-sans text-[10px] text-parchment/40 tracking-[0.15em] uppercase mt-0.5">Powered By Bronze Memorials</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-7">
            <DropdownMenu label="Showcase" links={productLinks} />
            {(Array.isArray(navLinks) ? navLinks : []).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-sans text-xs uppercase tracking-[0.08em] whitespace-nowrap transition-colors duration-200 ${
                  location.pathname === link.to ? "text-gold" : "text-parchment font-bold hover:text-bronze"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <Link
              to="/request-concept-design"
              className="hidden lg:inline-flex text-parchment px-5 py-2.5 font-sans text-xs uppercase tracking-[0.1em] font-semibold transition-all duration-300 whitespace-nowrap"
              style={{background: "linear-gradient(135deg, #B8860B 0%, #DAA520 30%, #FFD700 50%, #DAA520 70%, #B8860B 100%)", boxShadow: "0 2px 8px rgba(184,134,11,0.5)"}}
            >
              Request Design
            </Link>
            <button onClick={() => setOpen(!open)} className="xl:hidden text-parchment/60 hover:text-parchment">
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
            className="xl:hidden bg-white border-b border-bronze/20 overflow-hidden"
          >
            <nav className="flex flex-col p-6 space-y-1 max-h-[80vh] overflow-y-auto">
              <button
                onClick={() => setMobileSection(mobileSection === "products" ? null : "products")}
                className="flex items-center justify-between font-sans text-sm uppercase tracking-[0.15em] py-3 border-b border-bronze/10 text-parchment/60"
              >
                Products <ChevronDown className={`w-4 h-4 transition-transform ${mobileSection === "products" ? "rotate-180" : ""}`} />
              </button>
              {mobileSection === "products" && (Array.isArray(productLinks) ? productLinks : []).map((link) => (
                <Link key={link.to} to={link.to} onClick={() => setOpen(false)}
                  className="pl-4 font-sans text-xs uppercase tracking-[0.1em] py-2 text-parchment/45 hover:text-gold">
                  {link.label}
                </Link>
              ))}

              {(Array.isArray(navLinks) ? navLinks : []).map((link) => (
                <Link key={link.to} to={link.to} onClick={() => setOpen(false)}
                  className="font-sans text-sm uppercase tracking-[0.15em] py-3 border-b border-bronze/10 text-parchment/60 hover:text-gold">
                  {link.label}
                </Link>
              ))}

              <Link to="/request-concept-design" onClick={() => setOpen(false)}
                className="bg-bronze hover:bg-gold text-parchment px-6 py-4 font-sans text-sm uppercase tracking-[0.15em] font-semibold text-center mt-4 transition-colors">
                Request Concept Design
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}