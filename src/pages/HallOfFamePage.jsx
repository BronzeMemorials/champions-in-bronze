import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Shield, Award, Star, Clock, CheckCircle } from "lucide-react";
import TrustBadges from "../components/shared/TrustBadges";
import FAQSection from "../components/shared/FAQSection";
import QuoteForm from "../components/shared/QuoteForm";
import FadeIn from "../components/shared/FadeIn";
import SEOHead from "../components/shared/SEOHead";
import TestimonialCarousel from "../components/shared/TestimonialCarousel";
import PlaqueQuoteModal from "../components/shared/PlaqueQuoteModal";

const HERO_IMG = "https://media.base44.com/images/public/69e6638934292a547ec97753/41c645d41_IMG_1398.jpg";

const SPORTS_PLAQUES = [
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/56441d28c_IMG_1443.jpg", label: "Football Hall of Fame", desc: "Football #18 jersey with running back & Hall of Fame crest — full 3D relief", cta: "Immortalize Your Football Legend" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/8c6702318_IMG_1442.jpg", label: "Baseball Hall of Fame", desc: "Jersey #34, batter stance, stadium background & Hall of Fame shield", cta: "Start Your Baseball Legacy" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/0c3e0c00e_IMG_1441.jpg", label: "Soccer Hall of Fame", desc: "Player relief with World Cup trophy & Hall of Fame crest", cta: "Honor Your Soccer Champion" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/aa70bdc43_8a2c7636-4bb2-4d4b-b20a-fa780c9d8d59.png", label: "Women's Soccer Hall of Fame", desc: "Women's soccer relief with trophy & Hall of Fame shield", cta: "Celebrate Her Legacy in Bronze" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/f65843cab_IMG_1437.jpg", label: "Women's Basketball Hall of Fame", desc: "Player dunking — #23 with Hall of Fame crest & laurels", cta: "Begin the Hall of Fame Journey" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/8578c8425_IMG_1436.jpg", label: "Golf Hall of Fame", desc: "Golfer silhouette on course with Hall of Fame shield & CB ring", cta: "Honor a Golf Legend Today" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/ecf761fd8_IMG_1445.jpg", label: "Baseball Jersey Plaque", desc: "Raymond #72 jersey with catcher, stadium & championship ring", cta: "Create Your Custom Jersey Plaque" }];


const BOXING_PLAQUES = [
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/69f294441_IMG_1444.jpg", label: "Boxing — The Fight", desc: "Two fighters exchanging blows in bronze relief — stadium crowd behind them", cta: "Commission a Combat Sports Plaque" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/cbbe5eceb_IMG_1438.jpg", label: "Boxing — The Knockout", desc: "Champion standing over fallen opponent — 'Get Up!' ring scene in bronze", cta: "Capture the Moment in Bronze" }];


const INSTITUTIONAL = [
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/775fca918_47E80D20-855E-4F7E-BBF8-D319E64030C0.png", label: "Folsom Field — Colorado Buffaloes", desc: "Aerial stadium bronze relief — architectural landmark plaque", cta: "Get Your Stadium Plaque Quote" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/e2544f1e5_5A4799E5-4305-4837-8127-4D64CDA9C083.png", label: "Volney C. Ashford Stadium", desc: "Coach portrait with stadium relief — College Football Hall of Famer", cta: "Honor Your Program's Legacy" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/21ba8abbb_1A74E1E5-FBBE-4985-B495-629E12ACE53F.png", label: "Cincinnati Cyclones", desc: "Dimensional team logo plaque — backlit bronze relief", cta: "Cast Your Team Logo in Bronze" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/5bf816b28_95F91176-9214-4C6E-9E07-C8A0C5729B70.png", label: "Wild Band of Razorbacks — Arkansas", desc: "Historical narrative plaque with team mascot — 1964 championship", cta: "Preserve Your Championship History" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/319f68c6c_8EDB86A3-0823-4A9F-B2C0-A3EC13DAD290.png", label: "University of Arkansas at Pine Bluff", desc: "Institutional bronze identification sign — architectural entrance plaque", cta: "Commission an Entrance Plaque" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/b1bd5d877_A36CAD0F-9174-4537-ACB3-920546444A1D.png", label: "Michigan State University College of Law", desc: "Detroit College of Law / MSU Law bronze seal · 1891", cta: "Cast Your Institution's Seal" }];


const SEALS = [
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/2b48561be_D3F0E98F-7ED5-4B04-8DD9-F0D76C2DA8C7.png", label: "Pennsylvania State University Seal", desc: "Precision-cast university seal · 1855", cta: "Cast Your University Seal in Bronze" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/2fc825874_80D0FA19-643C-40C6-823A-126BF14722B3.png", label: "Dave Budin — Brooklyn College", desc: "Player portrait court dedication plaque — photo-image cast in bronze", cta: "Start Your Court Dedication" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/02178ed4c_D12B6A40-5DD3-4D3E-8FB6-E4E73664D056.png", label: "Northwest Mississippi Community College", desc: "Backlit bronze college seal · 1927", cta: "Commission Your College Seal" }];


const PHOTO_PLAQUES = [
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/6ac4828f3_IMG_1392.jpeg", label: "Nick Giaquinto — Sacred Heart University", desc: "Home plate portrait plaque — 29 years of service honored in bronze", cta: "Cast a Portrait Like This" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/983a3990d_IMG_1396.jpeg", label: "Dan Wilson — Seattle Mariners", desc: "Home plate Hall of Fame plaque with photo-cast portrait & career stats", cta: "Immortalize a Legend in Bronze" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/2fc825874_80D0FA19-643C-40C6-823A-126BF14722B3.png", label: "Dave Budin — Brooklyn College", desc: "Silver court dedication plaque with photo-image casting", cta: "Start Your Court Dedication" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/edcca70fb_420FA2B8-7869-4B3D-8DD1-141EAA6CED7F.png", label: "Peter 'Magic' Drakos", desc: "Home plate portrait plaque — baseball memorial in bronze", cta: "Honor a Baseball Legend Today" }];


const MEMORIAL_PLAQUES = [
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/98c46810f_IMG_1399.jpg", label: "Coach Gary 'Bubba' DiOrio", desc: "Football-shaped memorial plaque with photo cast — Coach #76", cta: "Honor a Coach's Legacy in Bronze" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/8fe706754_IMG_1401.jpeg", label: "T.J. Fleming — \"Forever a Saint\"", desc: "Narrative memorial plaque cast in bronze", cta: "Preserve Their Memory Forever" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/d5ef8feaa_IMG_1402.jpg", label: "Drew Passmore Field", desc: "Photo image cast field dedication — memorial naming plaque", cta: "Dedicate a Field or Facility" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/d032cf91d_IMG_1394.jpeg", label: "Kade Meyer Baseball Memorial", desc: "Home plate honor plaque for young athlete — cast in warm bronze", cta: "Create a Lasting Tribute in Bronze" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/39d2bb4cd_IMG_1395.jpg", label: "Ross Linstrom Field Memorial", desc: "Baseball home plate shaped memorial plaque — In Memory of His Passion and Dedication, 2013", cta: "Commission a Field Memorial Plaque" }];


const CHAMPIONSHIP_PLAQUES = [
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/587b2767d_IMG_1393.jpg", label: "Southside Baptist Church", desc: "Baseball-shaped recognition plaque — veterans baseball sponsorship", cta: "Design a Custom-Shaped Award Plaque" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/367d75e3c_IMG_1397.jpeg", label: "Dan Monaco Fall Classic — Soccer", desc: "Memorial soccer ball bronze plaque — PTSC community tribute", cta: "Create a Tournament Memorial Plaque" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/336251898_IMG_1400.jpg", label: "Bill Shover Field of Dreams", desc: "Diamond-shaped field dedication plaque — Salvation Army / baseball", cta: "Dedicate a Field in Bronze" }];


const faqs = [
{ question: "Can you build a complete Hall of Fame wall system?", answer: "Yes. We design and fabricate complete Hall of Fame installations from concept to installation — individual inductee plaques, connecting wall panels, name bars, sport-themed borders, and modular systems that expand year after year as new inductees are added. We have installed over 200 Hall of Fame systems nationwide." },
{ question: "How are inductee likenesses captured?", answer: "From photographs you provide. Every inductee portrait — whether 3D relief sculpture or Photo ImageCasting — is created from your actual submitted photographs. No generic likenesses. No artist interpretations. We capture the real person from their real photo." },
{ question: "What sports do you make Hall of Fame plaques for?", answer: "Every sport. Football, basketball, baseball, soccer, golf, boxing, wrestling, swimming, lacrosse, track & field, softball, volleyball, tennis, and more. We also make Hall of Fame plaques for coaches, administrators, donors, and program contributors." },
{ question: "What information is typically included on each plaque?", answer: "Standard Hall of Fame plaques include a portrait relief, inductee name, sport/position, years of service, career highlights, and induction year. Custom elements like team logos, championship rings, statistical records, and sport-themed relief backgrounds are also available." },
{ question: "Can new inductees be added over time?", answer: "Yes — and we design for it. Our modular Hall of Fame systems have defined space and connection points for future inductees. Simply call us when you have a new induction class and we'll match the existing style exactly." },
{ question: "What shapes are available for Hall of Fame plaques?", answer: "We offer traditional rectangular, home plate, shield, round/medallion, football-shaped, soccer ball, baseball-shaped, diamond, and fully custom architectural shapes. The plaque shape itself can be part of the storytelling." },
{ question: "How long does it take?", answer: "You receive an artwork proof within the hour of your request. Production typically runs 4–6 weeks from approval. Rush options are available for induction ceremonies with tight deadlines." },
{ question: "Can you renovate an existing Hall of Fame?", answer: "Yes. We specialize in both new installations and renovation of existing Hall of Fame environments — updating outdated wood or acrylic displays to museum-quality bronze standards that will last 100+ years." },
{ question: "Do you make university seals and institutional signage?", answer: "Yes. We cast exact university seals, institutional logos, and architectural identification signs in bronze. We have produced seals for Pennsylvania State University, MSU College of Law, University of Arkansas, Northwest Mississippi Community College, and many others." },
{ question: "How much does a Hall of Fame plaque cost?", answer: "Individual inductee plaques typically start around $1,200–$2,500. Full wall systems and complete Hall of Fame installations vary based on scope, number of inductees, and architectural complexity. We'll provide an exact quote within the hour — no commitment required." }];


const products = [
{ title: "Individual Inductee Plaque", desc: "3D relief portrait + name, years of service, stats, and achievement text. The foundation of every Hall of Fame." },
{ title: "Aluminum Hall of Fame Plaques", desc: "All the same custom relief craftsmanship — cast in aluminum for a lighter, more affordable option. Ideal for interior installations, growing programs, and budget-conscious builds." },
{ title: "Jersey & Action Relief Plaques", desc: "Sport-specific themed plaques featuring the inductee's jersey number, action poses, stadium backgrounds, championship rings, and Hall of Fame crests." },
{ title: "Home Plate Portrait Plaques", desc: "Classic home plate shape with hand-sculpted portrait relief, career stats, and induction details. A timeless format for baseball, softball, and multi-sport halls." },
{ title: "Photo ImageCast Career Retrospective", desc: "Multiple career photographs permanently cast into bronze alongside portrait relief and statistics — the ultimate career retrospective." },
{ title: "University & Institutional Seals", desc: "Exact reproduction of university seals, school crests, and institutional emblems cast in museum-quality bronze with backlit display options." },
{ title: "Full Wall Installation System", desc: "Complete Hall of Fame wall system with architectural framework, unified aesthetic, sport-themed borders, and modular expansion design for future inductees." }];


function GalleryGrid({ items, columns = 4, onPlaqueClick }) {
  const colClass = columns === 3 ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : columns === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
  return (
    <div className={`grid ${colClass} gap-4`}>
      {items.map((item, i) =>
      <FadeIn key={i} delay={i * 0.05}>
          <div
          className="group rounded border border-gray-200 bg-white hover:border-yellow-500 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
          onClick={() => onPlaqueClick && onPlaqueClick(item)}>
          
            <div
            className="flex items-center justify-center p-3 bg-gray-100"
            style={{ minHeight: "240px" }}>
            
              <img
              src={item.url}
              alt={item.label + " — Champions in Bronze Hall of Fame Plaque"}
              className="w-full h-auto object-contain group-hover:scale-[1.03] transition-transform duration-500"
              style={{ maxHeight: "260px" }}
              loading="lazy" />
            
            </div>
            <div className="p-4 bg-white flex flex-col flex-1">
              <p className="font-serif text-sm text-gray-900 font-semibold leading-tight">{item.label}</p>
              <p className="text-gray-500 text-xs mt-1 leading-relaxed flex-1">{item.desc}</p>
              <p className="mt-3 text-yellow-700 font-sans text-xs uppercase tracking-widest font-bold group-hover:text-yellow-600 transition-colors">
                → {item.cta || "Get a Quote"}
              </p>
            </div>
          </div>
        </FadeIn>
      )}
    </div>);

}

export default function HallOfFamePage() {
  const [selectedPlaque, setSelectedPlaque] = useState(null);

  return (
    <div className="bg-white text-gray-900">
      <PlaqueQuoteModal plaque={selectedPlaque} onClose={() => setSelectedPlaque(null)} />
      <SEOHead
        title="Hall of Fame Bronze Plaques & Recognition Systems | Champions in Bronze"
        description="Custom Hall of Fame bronze plaques — portrait reliefs, jersey plaques, home plate plaques, university seals, photo image cast panels, and complete wall installation systems. Artwork proof within the hour. Made in the USA since 1974. Call 772-309-0412."
        canonical="/hall-of-fame"
        ogImage={HERO_IMG} />
      

      {/* HERO */}
      <section className="relative min-h-[60vh] flex items-center bg-gray-50 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Hall of Fame bronze plaque — Champions in Bronze" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-8 items-center">
          <FadeIn>
            <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-4">Champions in Bronze · Since 1974</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900 mb-6">
              Hall of Fame Bronze Plaques & Recognition Walls
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
              Individual inductee portraits, jersey relief plaques, home plate memorials, university seals, and complete Hall of Fame wall systems. Every portrait created from your actual photographs. Artwork proof within the hour. Made in the USA.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Link to="/request-quote" className="inline-flex items-center gap-2 px-8 py-4 font-sans font-bold uppercase tracking-widest text-sm text-black transition-all hover:scale-[1.02]" style={{ background: "linear-gradient(135deg, #B8860B 0%, #DAA520 30%, #FFD700 50%, #DAA520 70%, #B8860B 100%)" }}>
                Start Your Hall of Fame <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:7723090412" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-yellow-600 text-yellow-800 font-sans font-semibold uppercase tracking-widest text-sm hover:bg-yellow-50 transition-colors">
                <Phone className="w-4 h-4" /> 772-309-0412
              </a>
            </div>
            <div className="flex flex-wrap gap-6">
              {[
              { icon: Clock, text: "Artwork Proof Within The Hour" },
              { icon: Shield, text: "Guaranteed to Last 100 Years Outdoors" },
              { icon: Award, text: "Made in the USA" },
              { icon: Star, text: "50,000+ Satisfied Customers" }].
              map(({ icon: Icon, text }) =>
              <div key={text} className="flex items-center gap-2 text-gray-600 text-xs">
                  <Icon className="w-3.5 h-3.5 text-yellow-600" />
                  <span className="font-semibold">{text}</span>
                </div>
              )}
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="hidden lg:block">
            <div className="grid grid-cols-2 gap-3">
              {[
              "https://media.base44.com/images/public/69e6638934292a547ec97753/56441d28c_IMG_1443.jpg",
              "https://media.base44.com/images/public/69e6638934292a547ec97753/8c6702318_IMG_1442.jpg",
              "https://media.base44.com/images/public/69e6638934292a547ec97753/f65843cab_IMG_1437.jpg",
              "https://media.base44.com/images/public/69e6638934292a547ec97753/aa70bdc43_8a2c7636-4bb2-4d4b-b20a-fa780c9d8d59.png"].
              map((url, i) =>
              <div key={i} className="aspect-[4/3] rounded overflow-hidden border border-gray-200 shadow">
                  <img src={url} alt="Hall of Fame bronze plaque" className="w-full h-full object-cover" loading="lazy" />
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      <TrustBadges />

      {/* PROOF CTA BANNER */}
      <div className="bg-yellow-50 border-y-2 border-yellow-300 py-6 px-6 text-center">
        <p className="font-serif text-xl md:text-2xl text-gray-900 mb-1">Get Your Free Artwork Proof — <span className="text-yellow-700">Within The Hour</span></p>
        <p className="text-gray-600 text-sm mb-4">No commitment required. See exactly what your Hall of Fame plaque will look like before you order.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/request-quote" className="inline-flex items-center gap-2 px-6 py-3 font-bold text-black text-sm uppercase tracking-widest" style={{ background: "linear-gradient(135deg, #B8860B 0%, #DAA520 50%, #B8860B 100%)" }}>
            Request Free Proof <ArrowRight className="w-4 h-4" />
          </Link>
          <a href="tel:7723090412" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-yellow-600 text-yellow-800 font-bold text-sm uppercase tracking-widest hover:bg-yellow-100 transition-colors">
            <Phone className="w-4 h-4" /> Call Now: 772-309-0412
          </a>
        </div>
      </div>

      {/* SPORTS HALL OF FAME PLAQUES */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-8">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Sport-Specific Hall of Fame Plaques</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">Every Sport. Every Inductee.</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
                Football, baseball, basketball, soccer, golf, boxing, and more — each plaque custom-designed around the sport, the athlete, and the moment being honored.
              </p>
            </div>
          </FadeIn>
          <GalleryGrid items={SPORTS_PLAQUES} columns={2} onPlaqueClick={setSelectedPlaque} />
          <div className="text-center mt-10">
            <Link to="/request-quote" className="inline-flex items-center gap-2 px-8 py-4 font-bold text-black uppercase tracking-widest text-sm" style={{ background: "linear-gradient(135deg, #B8860B 0%, #DAA520 50%, #B8860B 100%)" }}>
              Design Your Sports Hall of Fame Plaque <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* BOXING */}
      <section className="py-10 bg-gray-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-6">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Combat Sports</span>
              <h2 className="font-serif text-3xl md:text-4xl text-gray-900">Boxing & Combat Sports Hall of Fame</h2>
              <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm">High-drama bronze relief scenes that capture the raw power and glory of combat sports.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BOXING_PLAQUES.map((item, i) =>
            <FadeIn key={i} delay={i * 0.1}>
                <div
                className="group overflow-hidden rounded border border-gray-200 bg-white hover:border-yellow-500 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
                onClick={() => setSelectedPlaque(item)}>
                
                  <div className="flex items-center justify-center p-3 bg-gray-100" style={{ minHeight: "280px" }}>
                    <img src={item.url} alt={item.label + " — Champions in Bronze"} className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500" style={{ maxHeight: "300px" }} loading="lazy" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <p className="font-serif text-lg text-gray-900 font-semibold">{item.label}</p>
                    <p className="text-gray-500 text-sm mt-1 flex-1">{item.desc}</p>
                    <p className="mt-3 text-yellow-700 font-sans text-xs uppercase tracking-widest font-bold group-hover:text-yellow-600 transition-colors">→ {item.cta || "Get a Quote"}</p>
                  </div>
                </div>
              </FadeIn>
            )}
          </div>
        </div>
      </section>

      {/* PRODUCTS + PRICING */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-8">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Hall of Fame Products</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">Everything We Make</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Every piece custom-made in the USA. Artwork proof within the hour. No commitment to order.</p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) =>
            <FadeIn key={p.title} delay={i * 0.07}>
                <div className="border-2 border-gray-200 bg-white p-7 hover:border-yellow-500 hover:shadow-md transition-all duration-300 rounded">
                  <h3 className="font-serif text-lg text-gray-900 leading-tight mb-3">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{p.desc}</p>
                  <Link to="/request-quote" className="inline-flex items-center gap-1 text-yellow-700 font-sans text-xs uppercase tracking-widest font-bold hover:text-yellow-600 transition-colors">
                    Get a Quote <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </FadeIn>
            )}
          </div>
        </div>
      </section>

      {/* PORTRAIT PLAQUES */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-8">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Actual Completed Projects</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">Portrait & Photo-Image Cast Plaques</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Real photos permanently cast in bronze — athletes, coaches, and legends immortalized from your actual photographs.</p>
            </div>
          </FadeIn>
          <GalleryGrid items={PHOTO_PLAQUES} columns={2} onPlaqueClick={setSelectedPlaque} />
        </div>
      </section>

      {/* INSTITUTIONAL */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-8">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Universities · Stadiums · Athletic Programs</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">Institutional Bronze Plaques & Signage</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">From university seals to stadium dedications — we've served programs across the country with bronze that lasts generations.</p>
            </div>
          </FadeIn>
          <GalleryGrid items={INSTITUTIONAL} columns={3} onPlaqueClick={setSelectedPlaque} />
        </div>
      </section>

      {/* SEALS */}
      <section className="py-10 bg-gray-50 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-6">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">University Seals & Medallions</span>
              <h2 className="font-serif text-3xl md:text-4xl text-gray-900">Precision-Cast University Seals in Bronze</h2>
              <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm">Exact reproductions of university seals and institutional crests — perfect for entranceways, dedications, and Hall of Fame centerpieces.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SEALS.map((item, i) =>
            <FadeIn key={i} delay={i * 0.1}>
                <div
                className="group overflow-hidden rounded border border-gray-200 bg-white hover:border-yellow-500 hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
                onClick={() => setSelectedPlaque(item)}>
                
                  <div className="flex items-center justify-center p-3 bg-gray-100" style={{ minHeight: "240px" }}>
                    <img src={item.url} alt={item.label + " — bronze seal Champions in Bronze"} className="w-full h-auto object-contain group-hover:scale-[1.02] transition-transform duration-500" style={{ maxHeight: "260px" }} loading="lazy" />
                  </div>
                  <div className="p-4 flex flex-col flex-1">
                    <p className="font-serif text-sm text-gray-900 font-semibold">{item.label}</p>
                    <p className="text-gray-500 text-xs mt-1 flex-1">{item.desc}</p>
                    <p className="mt-3 text-yellow-700 font-sans text-xs uppercase tracking-widest font-bold group-hover:text-yellow-600 transition-colors">→ {item.cta || "Get a Quote"}</p>
                  </div>
                </div>
              </FadeIn>
            )}
          </div>
        </div>
      </section>

      {/* MEMORIALS */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-8">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Dedications · Memorials · Legacy Plaques</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">Memorial & Dedication Plaques</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Honor coaches, players, mentors, and community champions who shaped the game. Bronze lasts forever — so does their legacy.</p>
            </div>
          </FadeIn>
          <GalleryGrid items={MEMORIAL_PLAQUES} columns={2} onPlaqueClick={setSelectedPlaque} />
        </div>
      </section>

      {/* CHAMPIONSHIP */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-8">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Championship & Award Plaques</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">Unique Shapes. Unforgettable Awards.</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Football, baseball, soccer ball, home plate, shield, diamond — custom shapes that tell the story at a glance.</p>
            </div>
          </FadeIn>
          <GalleryGrid items={CHAMPIONSHIP_PLAQUES} columns={2} onPlaqueClick={setSelectedPlaque} />
        </div>
      </section>

      {/* WHY US */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-4">Why Champions in Bronze</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mb-6">The Nation's Premier Hall of Fame Bronze Specialists</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                For over 50 years, we've built Hall of Fames for NFL stadiums, NCAA athletic programs, high school gymnasiums, and everything in between. Our proprietary Photo ImageCasting process captures exact likenesses from your photographs — no generic faces, no guesswork.
              </p>
              <div className="space-y-4">
                {[
                "Artwork proof delivered within the hour — no commitment required",
                "Every inductee portrait created from your actual submitted photographs",
                "Museum-quality bronze built to last 100+ years outdoors",
                "Modular systems designed to expand annually with new inductees",
                "Over 50,000 satisfied customers nationwide",
                "100% Made in the USA — no tariffs, no delays",
                "Full installation coordination included"].
                map((text, i) =>
                <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
                  </div>
                )}
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                "https://media.base44.com/images/public/69e6638934292a547ec97753/56441d28c_IMG_1443.jpg",
                "https://media.base44.com/images/public/69e6638934292a547ec97753/0c3e0c00e_IMG_1441.jpg",
                "https://media.base44.com/images/public/69e6638934292a547ec97753/8578c8425_IMG_1436.jpg",
                "https://media.base44.com/images/public/69e6638934292a547ec97753/775fca918_47E80D20-855E-4F7E-BBF8-D319E64030C0.png"].
                map((url, i) =>
                <div key={i} className="aspect-square overflow-hidden rounded border border-gray-200 shadow">
                    <img src={url} alt="Hall of Fame bronze plaque Champions in Bronze" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-10 bg-yellow-50 border-y-2 border-yellow-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
            { stat: "50+", label: "Years in Business", desc: "In operation since 1974" },
            { stat: "50,000+", label: "Satisfied Customers", desc: "Pro, collegiate & secondary" },
            { stat: "~1 Hour", label: "Artwork Proof", desc: "Every project, guaranteed" },
            { stat: "100 Yrs", label: "Guaranteed Outdoors", desc: "Built to last a century outside" }].
            map((item, i) =>
            <FadeIn key={item.label} delay={i * 0.1}>
                <p className="font-serif text-4xl md:text-5xl text-yellow-700">{item.stat}</p>
                <p className="font-sans text-xs uppercase tracking-[0.2em] text-gray-900 mt-2 font-bold">{item.label}</p>
                <p className="text-gray-600 mt-1 text-xs">{item.desc}</p>
              </FadeIn>
            )}
          </div>
        </div>
      </section>

      <TestimonialCarousel />

      <QuoteForm title="Request Your Free Artwork Proof — Within The Hour" subtitle="Tell us about your Hall of Fame project. No commitment required. Museum-quality proof delivered fast." source="pro" />

      <FAQSection faqs={faqs} title="Hall of Fame Frequently Asked Questions" />

      <QuoteForm title="Ready to Build Your Hall of Fame?" subtitle="Over 50,000 satisfied customers. Every inductee portrait from your actual photographs. Artwork within the hour." source="pro" />
    </div>);

}