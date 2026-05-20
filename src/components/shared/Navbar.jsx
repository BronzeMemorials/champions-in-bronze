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
      <button className="flex items-center gap-1 font-sans text-base font-bold uppercase tracking-[0.08em] text-parchment hover:text-bronze transition-colors duration-200 whitespace-nowrap">
        {label} <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-2 w-60 bg-white border border-white shadow-2xl z-50"
          >
            {safeLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-5 py-3 font-sans text-base uppercase tracking-[0.08em] border-b border-white last:border-0 transition-colors duration-200 ${
                  location.pathname === link.to ? "text-gold bg-white" : "text-parchment/55 hover:text-gold hover:bg-white"
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
      <div className="bg-white backdrop-blur-xl border-b border-white shadow-sm">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between gap-4 h-14 sm:h-16 lg:h-20 px-4 sm:px-8 md:px-12 lg:px-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <img src="https://media.base44.com/images/public/69e6638934292a547ec97753/313d53a94_ChatGPTImageMay14202609_54_24AM.png" alt="Champions in Bronze" className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 object-contain flex-shrink-0" />
            <div className="flex flex-col leading-none">
              <span className="font-serif text-base sm:text-lg lg:text-2xl text-parchment tracking-wide whitespace-nowrap">
                Champions <span style={{color: '#C9A84C'}}>in Bronze</span>
              </span>
              <span className="hidden sm:block font-sans text-xs text-parchment/40 tracking-[0.12em] uppercase mt-0.5">Powered By Bronze Memorials</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-10 flex-1 justify-center">
            <DropdownMenu label="Showcase" links={productLinks} />
            {(Array.isArray(navLinks) ? navLinks : []).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-sans text-base uppercase tracking-[0.08em] whitespace-nowrap transition-colors duration-200 ${
                  location.pathname === link.to ? "text-gold" : "text-parchment font-bold hover:text-bronze"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            <Link
              to="/request-concept-design"
              className="hidden md:inline-block text-white px-4 py-2 font-sans text-sm uppercase tracking-[0.08em] font-semibold transition-all duration-300 whitespace-nowrap"
              style={{background: "#1e3a8a", boxShadow: "0 2px 8px rgba(30,58,138,0.3)"}}
            >
              Request Design
            </Link>
            <a href="tel:7723090412" className="hidden sm:inline-flex xl:hidden items-center gap-1.5 text-black font-sans text-xs font-bold uppercase tracking-wider whitespace-nowrap border border-gray-300 px-3 py-1.5">
              Call Us
            </a>
            <button onClick={() => setOpen(!open)} className="xl:hidden text-black p-1">
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
            <nav className="flex flex-col px-4 sm:px-8 py-4 space-y-0.5 max-h-[80vh] overflow-y-auto">
              <button
                onClick={() => setMobileSection(mobileSection === "products" ? null : "products")}
                className="flex items-center justify-between font-sans text-sm uppercase tracking-[0.12em] py-3 border-b border-gray-200 text-black font-bold"
              >
                Products <ChevronDown className={`w-4 h-4 transition-transform ${mobileSection === "products" ? "rotate-180" : ""}`} />
              </button>
              {mobileSection === "products" && (Array.isArray(productLinks) ? productLinks : []).map((link) => (
                <Link key={link.to} to={link.to} onClick={() => setOpen(false)}
                  className="pl-4 font-sans text-sm uppercase tracking-[0.08em] py-2.5 text-gray-600 border-b border-gray-100 hover:text-yellow-700">
                  {link.label}
                </Link>
              ))}

              {(Array.isArray(navLinks) ? navLinks : []).map((link) => (
                <Link key={link.to} to={link.to} onClick={() => setOpen(false)}
                  className="font-sans text-sm font-bold uppercase tracking-[0.12em] py-3 border-b border-gray-200 text-black hover:text-yellow-700">
                  {link.label}
                </Link>
              ))}

              <div className="pt-3 space-y-2">
                <Link to="/request-concept-design" onClick={() => setOpen(false)}
                  className="block text-white px-6 py-3 font-sans text-sm uppercase tracking-[0.12em] font-semibold text-center transition-colors"
                  style={{background: "#1e3a8a"}}>
                  Request Concept Design
                </Link>
                <a href="tel:7723090412" className="block text-center border-2 border-gray-300 py-3 font-sans text-sm uppercase tracking-[0.12em] font-bold text-black">
                  Call 772-309-0412
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}