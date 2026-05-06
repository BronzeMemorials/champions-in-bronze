import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-obsidian border-t border-bronze/10">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl text-parchment">
              Champions<br /><span className="text-bronze">in Bronze</span>
            </h3>
            <p className="text-parchment/40 text-sm mt-4 leading-relaxed max-w-xs">
              America's premier manufacturer of custom bronze and aluminum recognition monuments. Busts, statues, 3D relief plaques, Photo ImageCast plaques, Hall of Fame displays, and donor walls.
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

          {/* Products */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-5 font-semibold">Products</h4>
            <nav className="space-y-2.5">
              {[
                { label: "3D Relief Plaques", to: "/3d-relief-plaques" },
                { label: "Busts & Statues", to: "/busts-and-statues" },
                { label: "Photo ImageCast", to: "/photo-imagecast-plaques" },
                { label: "Hall of Fame", to: "/hall-of-fame" },
                { label: "Donor Walls", to: "/donor-recognition" },
                { label: "Dedication Plaques", to: "/dedication-plaques" },
                { label: "Bronze Memorials", to: "/bronze-memorials" },
                { label: "Alumni Memorials", to: "/alumni-memorials" },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="block text-parchment/50 hover:text-parchment transition-colors text-sm">{l.label}</Link>
              ))}
            </nav>
          </div>

          {/* Sports */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-5 font-semibold">Sports</h4>
            <nav className="space-y-2.5">
              {[
                { label: "Football", to: "/football" },
                { label: "Basketball", to: "/basketball" },
                { label: "Baseball", to: "/baseball" },
                { label: "Hockey", to: "/hockey" },
                { label: "Soccer", to: "/soccer" },
                { label: "Lacrosse", to: "/lacrosse" },
                { label: "Golf", to: "/golf" },
                { label: "All Sports", to: "/all-sports" },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="block text-parchment/50 hover:text-parchment transition-colors text-sm">{l.label}</Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-5 font-semibold">Company</h4>
            <nav className="space-y-2.5">
              {[
                { label: "Collegiate", to: "/collegiate" },
                { label: "Portfolio", to: "/portfolio" },
                { label: "Our Process", to: "/process" },
                { label: "Materials & Finishes", to: "/materials" },
                { label: "Request a Quote", to: "/request-quote" },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="block text-parchment/50 hover:text-parchment transition-colors text-sm">{l.label}</Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-bronze/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-parchment/30 text-xs font-sans">
            © {new Date().getFullYear()} Champions in Bronze. All rights reserved. Made in USA.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/portfolio" className="text-parchment/30 hover:text-parchment/60 text-xs transition-colors">Portfolio</Link>
            <Link to="/materials" className="text-parchment/30 hover:text-parchment/60 text-xs transition-colors">Materials</Link>
            <Link to="/process" className="text-parchment/30 hover:text-parchment/60 text-xs transition-colors">Process</Link>
            <Link to="/request-quote" className="text-parchment/30 hover:text-parchment/60 text-xs transition-colors">Request Quote</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}