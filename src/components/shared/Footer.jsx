import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20 pb-24 lg:pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-2xl text-gray-900">
              Champions<br /><span className="text-gray-900">in Bronze™</span>
            </h3>
            <p className="font-sans text-xs text-gray-500 tracking-[0.15em] uppercase mt-1">Powered By Bronze Memorials</p>
            <p className="text-gray-700 text-sm mt-4 leading-relaxed max-w-xs">
              America's premier institutional bronze recognition manufacturer. Hall of Fame plaques, photo image-cast plaques, donor recognition walls, championship systems, bronze busts, and full-size statues for stadiums, universities, and athletic organizations.
            </p>
            <div className="mt-6 space-y-3">
              <a href="tel:7723090412" className="flex items-center gap-3 text-gray-800 hover:text-amber-700 transition-colors text-sm">
                 <Phone className="w-4 h-4" /> 772-309-0412
               </a>
               <a href="mailto:info@championsinbronze.com" className="flex items-center gap-3 text-gray-800 hover:text-amber-700 transition-colors text-sm">
                 <Mail className="w-4 h-4" /> info@championsinbronze.com
               </a>
               <div className="flex items-center gap-3 text-gray-700 text-sm">
                 <MapPin className="w-4 h-4 flex-shrink-0" /> 1775 SW Gatlin Blvd Ste 203, Port St Lucie, FL 34953
               </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-gray-900 mb-5 font-bold">Recognition Products</h4>
            <nav className="space-y-2.5">
              {[
              { label: "Photo Image Cast Plaques", to: "/photo-image-casting-plaques" },
              { label: "3D Bas-Relief Plaques", to: "/3d-bas-relief-plaques" },
              { label: "Hall of Fame Plaques", to: "/hall-of-fame-plaques" },
              { label: "Championship Plaques", to: "/championship-bronze-plaques" },
              { label: "Donor Recognition Walls", to: "/donor-recognition" },
              { label: "Hall of Fame Displays", to: "/hall-of-fame-bronze-displays" },
              { label: "Bronze Busts", to: "/bronze-athlete-busts" },
              { label: "Full-Size Statues", to: "/custom-bronze-athlete-statues" }].
              map((l) =>
              <Link key={l.to} to={l.to} className="block text-gray-700 hover:text-amber-700 transition-colors text-sm">{l.label}</Link>
              )}
            </nav>
          </div>

          {/* Sports */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-gray-900 mb-5 font-bold">Sports</h4>
            <nav className="space-y-2.5">
              {[
              { label: "Football", to: "/football" },
              { label: "Basketball", to: "/basketball" },
              { label: "Baseball", to: "/baseball" },
              { label: "Hockey", to: "/hockey" },
              { label: "Soccer", to: "/soccer" },
              { label: "Lacrosse", to: "/lacrosse" },
              { label: "Golf", to: "/golf" },
              { label: "All Sports", to: "/all-sports" }].
              map((l) =>
              <Link key={l.to} to={l.to} className="block text-gray-700 hover:text-amber-700 transition-colors text-sm">{l.label}</Link>
              )}
            </nav>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.2em] uppercase text-gray-900 mb-5 font-bold">Company</h4>
            <nav className="space-y-2.5">
              {[
              { label: "About", to: "/about" },
              { label: "Contact", to: "/contact" },
              { label: "Collegiate", to: "/collegiate" },
              { label: "Portfolio", to: "/portfolio" },
              { label: "Our Process", to: "/process" },
              { label: "Materials & Finishes", to: "/materials" },
              { label: "Request a Quote", to: "/request-quote" }].
              map((l) =>
              <Link key={l.to} to={l.to} className="block text-gray-700 hover:text-amber-700 transition-colors text-sm">{l.label}</Link>
              )}
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-200">
          <p className="text-gray-500 text-[10px] font-sans leading-relaxed text-center">DISCLAIMER AND LEGAL NOTICE: All Content on this site is owned by Bronze Memorials Inc. and protected under US & International Copyright law. Reproduction and distribution of any content, text verbatim, reviews is strictly prohibited. Violations of this will result in legal action.</p>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs font-sans">
            © 2026 Bronze Memorials Inc. / Champions in Bronze™. All rights reserved. Made in USA.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/portfolio" className="text-gray-600 hover:text-amber-700 text-xs transition-colors">Portfolio</Link>
            <Link to="/materials" className="text-gray-600 hover:text-amber-700 text-xs transition-colors">Materials</Link>
            <Link to="/process" className="text-gray-600 hover:text-amber-700 text-xs transition-colors">Process</Link>
            <Link to="/request-quote" className="text-gray-600 hover:text-amber-700 text-xs transition-colors">Request Quote</Link>
          </div>
        </div>
      </div>
    </footer>);

}