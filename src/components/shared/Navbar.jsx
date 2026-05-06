import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const productLinks = [
  { label: "3D Relief Plaques", to: "/3d-relief-plaques" },
  { label: "Busts & Statues", to: "/busts-and-statues" },
  { label: "Photo ImageCast Plaques", to: "/photo-imagecast-plaques" },
  { label: "Hall of Fame Displays", to: "/hall-of-fame" },
  { label: "Donor Recognition Walls", to: "/donor-recognition" },
  { label: "Dedication Plaques", to: "/dedication-plaques" },
  { label: "Bronze Memorials", to: "/bronze-memorials" },
  { label: "Alumni Memorials", to: "/alumni-memorials" },
];

const sportsLinks = [
  { label: "Football", to: "/football" },
  { label: "Basketball", to: "/basketball" },
  { label: "Baseball", to: "/baseball" },
  { label: "Hockey", to: "/hockey" },
  { label: "Soccer", to: "/soccer" },
  { label: "Lacrosse", to: "/lacrosse" },
  { label: "Golf", to: "/golf" },
  { label: "All Sports", to: "/all-sports" },
];

function DropdownMenu({ label, links }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        className="flex items-center gap-1 font-sans text-xs uppercase tracking-[0.08em] text-parchment/60 hover:text-parchment transition-colors duration-200 whitespace-nowrap"
      >
        {label} <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-2 w-56 bg-obsidian border border-bronze/20 shadow-xl shadow-parchment/5 z-50"
          >
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-4 py-2.5 font-sans text-xs uppercase tracking-[0.08em] border-b border-bronze/10 last:border-0 transition-colors duration-200 ${
                  location.pathname === link.to ? "text-gold bg-bronze/10" : "text-parchment/60 hover:text-gold hover:bg-bronze/5"
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-obsidian/95 backdrop-blur-xl border-b border-bronze/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <span className="font-serif text-xl text-parchment tracking-wide">
              Champions <span className="text-bronze">in Bronze</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6">
            <DropdownMenu label="Products" links={productLinks} />
            <DropdownMenu label="Sports" links={sportsLinks} />
            <Link
              to="/collegiate"
              className={`font-sans text-xs uppercase tracking-[0.08em] whitespace-nowrap transition-colors duration-200 ${
                location.pathname === "/collegiate" ? "text-gold" : "text-parchment/60 hover:text-parchment"
              }`}
            >
              Collegiate
            </Link>
            <Link
              to="/portfolio"
              className={`font-sans text-xs uppercase tracking-[0.08em] whitespace-nowrap transition-colors duration-200 ${
                location.pathname === "/portfolio" ? "text-gold" : "text-parchment/60 hover:text-parchment"
              }`}
            >
              Portfolio
            </Link>
            <Link
              to="/process"
              className={`font-sans text-xs uppercase tracking-[0.08em] whitespace-nowrap transition-colors duration-200 ${
                location.pathname === "/process" ? "text-gold" : "text-parchment/60 hover:text-parchment"
              }`}
            >
              Process
            </Link>
          </nav>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-4">
            <Link
              to="/request-quote"
              className="hidden lg:inline-flex bg-bronze hover:bg-gold text-parchment px-5 py-2.5 font-sans text-xs uppercase tracking-[0.08em] font-semibold transition-all duration-300 rounded-sm whitespace-nowrap"
            >
              Request Quote
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="xl:hidden text-parchment/60 hover:text-parchment"
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
            className="xl:hidden bg-obsidian backdrop-blur-xl border-b border-bronze/20 shadow-md overflow-hidden"
          >
            <nav className="flex flex-col p-6 space-y-2 max-h-[80vh] overflow-y-auto">
              {/* Products */}
              <button
                onClick={() => setMobileSection(mobileSection === "products" ? null : "products")}
                className="flex items-center justify-between font-sans text-sm uppercase tracking-[0.15em] py-2 border-b border-bronze/10 text-parchment/60"
              >
                Products <ChevronDown className={`w-4 h-4 transition-transform ${mobileSection === "products" ? "rotate-180" : ""}`} />
              </button>
              {mobileSection === "products" && productLinks.map((link) => (
                <Link key={link.to} to={link.to} onClick={() => setOpen(false)}
                  className="pl-4 font-sans text-xs uppercase tracking-[0.1em] py-1.5 text-parchment/50 hover:text-gold">
                  {link.label}
                </Link>
              ))}

              {/* Sports */}
              <button
                onClick={() => setMobileSection(mobileSection === "sports" ? null : "sports")}
                className="flex items-center justify-between font-sans text-sm uppercase tracking-[0.15em] py-2 border-b border-bronze/10 text-parchment/60"
              >
                Sports <ChevronDown className={`w-4 h-4 transition-transform ${mobileSection === "sports" ? "rotate-180" : ""}`} />
              </button>
              {mobileSection === "sports" && sportsLinks.map((link) => (
                <Link key={link.to} to={link.to} onClick={() => setOpen(false)}
                  className="pl-4 font-sans text-xs uppercase tracking-[0.1em] py-1.5 text-parchment/50 hover:text-gold">
                  {link.label}
                </Link>
              ))}

              {[
                { label: "Collegiate", to: "/collegiate" },
                { label: "Portfolio", to: "/portfolio" },
                { label: "Process", to: "/process" },
                { label: "Materials", to: "/materials" },
              ].map((link) => (
                <Link key={link.to} to={link.to} onClick={() => setOpen(false)}
                  className="font-sans text-sm uppercase tracking-[0.15em] py-2 border-b border-bronze/10 text-parchment/60">
                  {link.label}
                </Link>
              ))}

              <Link to="/request-quote" onClick={() => setOpen(false)}
                className="bg-bronze text-parchment px-6 py-3 font-sans text-sm uppercase tracking-[0.15em] font-semibold text-center mt-4 rounded-sm">
                Request Quote
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}