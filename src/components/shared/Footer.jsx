import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-bronze/10">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl text-parchment">
              Champions<br />
              <span className="text-bronze">in Bronze</span>
            </h3>
            <p className="text-parchment/40 text-sm mt-4 leading-relaxed">
              America's premier manufacturer of custom cast bronze plaques, statues, and recognition displays.
            </p>
            <div className="mt-6 space-y-3">
              <a href="tel:+15551234567" className="flex items-center gap-3 text-parchment/50 hover:text-gold transition-colors text-sm">
                <Phone className="w-4 h-4" /> (555) 123-4567
              </a>
              <a href="mailto:studio@championsinbronze.com" className="flex items-center gap-3 text-parchment/50 hover:text-gold transition-colors text-sm">
                <Mail className="w-4 h-4" /> studio@championsinbronze.com
              </a>
              <div className="flex items-center gap-3 text-parchment/50 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" /> American Foundry, USA
              </div>
            </div>
          </div>

          {/* Pro */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-6 font-semibold">Professional</h4>
            <nav className="space-y-3">
              <Link to="/3d-relief-jersey-plaques" className="block text-parchment/50 hover:text-parchment transition-colors text-sm">3D Bas Relief Plaques</Link>
              <Link to="/bronze-player-statues" className="block text-parchment/50 hover:text-parchment transition-colors text-sm">Bronze & Aluminum Statues</Link>
              <Link to="/championship-bronze-plaques" className="block text-parchment/50 hover:text-parchment transition-colors text-sm">Championship Plaques</Link>
              <Link to="/hall-of-fame-plaques" className="block text-parchment/50 hover:text-parchment transition-colors text-sm">Hall of Fame Plaques</Link>
              <Link to="/stadium-donor-walls" className="block text-parchment/50 hover:text-parchment transition-colors text-sm">Stadium Donor Walls</Link>
            </nav>
          </div>

          {/* College */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-6 font-semibold">Collegiate</h4>
            <nav className="space-y-3">
              <Link to="/collegiate" className="block text-parchment/50 hover:text-parchment transition-colors text-sm">College Programs</Link>
              <Link to="/athletic-donor-walls" className="block text-parchment/50 hover:text-parchment transition-colors text-sm">Athletic Donor Walls</Link>
              <Link to="/college-hall-of-fame-plaques" className="block text-parchment/50 hover:text-parchment transition-colors text-sm">College Hall of Fame</Link>
              <Link to="/retired-jersey-displays" className="block text-parchment/50 hover:text-parchment transition-colors text-sm">Retired Jersey Displays</Link>
              <Link to="/capital-campaign-recognition" className="block text-parchment/50 hover:text-parchment transition-colors text-sm">Capital Campaigns</Link>
            </nav>
          </div>

          {/* More Products */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-6 font-semibold">More Products</h4>
            <nav className="space-y-3">
              <Link to="/custom-jersey-plaques" className="block text-parchment/50 hover:text-parchment transition-colors text-sm">Custom Jersey Plaques</Link>
              <Link to="/3d-relief-jersey-plaques" className="block text-parchment/50 hover:text-parchment transition-colors text-sm">3D Relief Plaques</Link>
              <Link to="/bronze-paperweights" className="block text-parchment/50 hover:text-parchment transition-colors text-sm">Bronze Paperweights</Link>
              <Link to="/hall-of-fame-plaques" className="block text-parchment/50 hover:text-parchment transition-colors text-sm">Hall of Fame Plaques</Link>
              <Link to="/request-quote" className="block text-parchment/50 hover:text-parchment transition-colors text-sm">Request a Quote</Link>
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-bronze/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-parchment/30 text-xs font-sans">
            © {new Date().getFullYear()} Champions in Bronze. All rights reserved. Built to last generations.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/portfolio" className="text-parchment/30 hover:text-parchment/60 text-xs transition-colors">Portfolio</Link>
            <Link to="/materials" className="text-parchment/30 hover:text-parchment/60 text-xs transition-colors">Materials</Link>
            <Link to="/process" className="text-parchment/30 hover:text-parchment/60 text-xs transition-colors">Process</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}