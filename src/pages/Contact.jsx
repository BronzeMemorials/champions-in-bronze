import SEOHead from "@/components/shared/SEOHead";
import FadeIn from "@/components/shared/FadeIn";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact Champions in Bronze | Bronze Plaques, Statues & Busts"
        description="Contact the Champions in Bronze team for custom bronze plaques, statues, busts, and donor recognition. Call 772-309-0412 or email info@championsinbronze.com."
        canonical="https://www.championsinbronze.com/contact"
      />

      <div className="bg-white min-h-screen">
        {/* Hero */}
        <section className="py-20 border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <FadeIn>
              <span className="text-amber-700 font-sans tracking-[0.3em] uppercase text-xs font-semibold">We Answer The Phone</span>
              <h1 className="font-serif text-5xl md:text-6xl mt-3 text-gray-900 leading-tight">
                Contact Us
              </h1>
              <p className="mt-6 text-gray-600 font-sans text-lg leading-relaxed max-w-2xl">
                Ready to start your bronze recognition project? Reach out directly — we respond fast and deliver artwork proofs within the hour.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Contact details */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

              <FadeIn>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 text-amber-700" />
                    </div>
                    <div>
                      <p className="font-sans text-xs uppercase tracking-widest text-gray-500 mb-1">Phone</p>
                      <a href="tel:7723090412" className="font-serif text-2xl text-gray-900 hover:text-amber-700 transition-colors">
                        772-309-0412
                      </a>
                      <p className="text-gray-500 font-sans text-sm mt-1">Call for a direct answer — right now</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 text-amber-700" />
                    </div>
                    <div>
                      <p className="font-sans text-xs uppercase tracking-widest text-gray-500 mb-1">Email</p>
                      <a href="mailto:info@championsinbronze.com" className="font-serif text-xl text-gray-900 hover:text-amber-700 transition-colors break-all">
                        info@championsinbronze.com
                      </a>
                      <p className="text-gray-500 font-sans text-sm mt-1">We respond same business day</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-amber-700" />
                    </div>
                    <div>
                      <p className="font-sans text-xs uppercase tracking-widest text-gray-500 mb-1">Address</p>
                      <p className="font-sans text-gray-900 leading-relaxed">
                        1775 SW Gatlin Blvd Ste 203<br />
                        Port St. Lucie, FL 34953
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="w-4 h-4 text-amber-700" />
                    </div>
                    <div>
                      <p className="font-sans text-xs uppercase tracking-widest text-gray-500 mb-1">Hours</p>
                      <p className="font-sans text-gray-900">Monday – Friday: 9am – 5pm ET</p>
                      <p className="text-gray-500 font-sans text-sm mt-1">Artwork proofs delivered within the hour</p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div className="bg-gray-50 border border-gray-200 p-8">
                  <h2 className="font-serif text-2xl text-gray-900 mb-2">Start Your Project</h2>
                  <p className="text-gray-600 font-sans text-sm mb-6 leading-relaxed">
                    Fill out our quote request form and receive a free digital artwork proof within the hour — no commitment required.
                  </p>
                  <Link
                    to="/request-concept-design"
                    className="block w-full text-center px-8 py-3 bg-gray-900 text-white font-sans uppercase tracking-widest text-sm hover:bg-gray-700 transition-colors mb-3"
                  >
                    Request Free Design Proof
                  </Link>
                  <Link
                    to="/request-quote"
                    className="block w-full text-center px-8 py-3 border-2 border-gray-300 text-gray-700 font-sans uppercase tracking-widest text-sm hover:border-gray-900 transition-colors"
                  >
                    Full Quote Request Form
                  </Link>
                </div>
              </FadeIn>

            </div>
          </div>
        </section>
      </div>
    </>
  );
}