import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Shield, Award, Star, Clock, CheckCircle } from "lucide-react";
import TrustBadges from "../components/shared/TrustBadges";
import FAQSection from "../components/shared/FAQSection";
import QuoteForm from "../components/shared/QuoteForm";
import FadeIn from "../components/shared/FadeIn";
import SEOHead from "../components/shared/SEOHead";
import TestimonialCarousel from "../components/shared/TestimonialCarousel";
import PlaqueQuoteModal from "../components/shared/PlaqueQuoteModal";
import VideoModelGallery from "../components/shared/VideoModelGallery";
import { base44 } from "@/api/base44Client";

const HERO_IMG = "https://media.base44.com/images/public/69e6638934292a547ec97753/41c645d41_IMG_1398.jpg";

const SPORTS_PLAQUES = [
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/2488a7ab8_FOOTBALLCHAMPION18.png", label: "Football Hall of Fame", desc: "Football #18 jersey with running back & Hall of Fame crest — full 3D relief", cta: "Immortalize Your Football Legend" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/4c058dd72_BASEBALLCHAMPION34.png", label: "Baseball Hall of Fame", desc: "Jersey #34, batter stance, stadium background & Hall of Fame shield", cta: "Start Your Baseball Legacy" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/950fe8a59_SOCCERCHAMPION10.png", label: "Soccer Hall of Fame", desc: "Player relief with World Cup trophy & Hall of Fame crest", cta: "Honor Your Soccer Champion" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/0b8503384_FEMALESOCCERNUM10.png", label: "Women's Soccer Hall of Fame", desc: "Women's soccer relief with trophy & Hall of Fame shield", cta: "Celebrate Her Legacy in Bronze" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/692740c9e_BASKETBALLCHAMPION27.png", label: "Women's Basketball Hall of Fame", desc: "Player dunking — #23 with Hall of Fame crest & laurels", cta: "Begin the Hall of Fame Journey" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/64fa5882c_GOLFCHAMPION.png", label: "Golf Hall of Fame", desc: "Golfer silhouette on course with Hall of Fame shield & CB ring", cta: "Honor a Golf Legend Today" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/5a737d31d_BASEBALLCHAMPION72.png", label: "Baseball Jersey Plaque", desc: "Raymond #72 jersey with catcher, stadium & championship ring", cta: "Create Your Custom Jersey Plaque" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/3f591fbc5_cast-bronze-bas-relief-image-cast-football-circle.jpg", label: "Football Circle Hall of Fame Plaque", desc: "Photo ImageCast football circle plaque — exact likeness in dimensional bronze", cta: "Order a Football Circle Plaque" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/3a420fcb9_cast-bronze-bas-relief-image-cast-basketball-actuion.jpg", label: "Basketball Action Hall of Fame Plaque", desc: "Basketball action photo permanently cast in bronze — Hall of Fame format", cta: "Honor Your Basketball Legend" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/b24142f8b_cast-bronze-bas-relief-image-cast-plaque-baseball.jpg", label: "Baseball Hall of Fame Relief Plaque", desc: "Baseball Hall of Fame bas-relief with photo image cast portrait", cta: "Commission a Baseball Plaque" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/30599141b_cast-bronze-bas-relief-image-cast-soccer-circle.jpg", label: "Soccer Circle Hall of Fame Plaque", desc: "Soccer circle Hall of Fame plaque — photo cast likeness in bronze", cta: "Honor Your Soccer Champion" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/fc1fffc70_cast-bronze-bas-relief-image-cast-softball-catcher-off-frame.jpg", label: "Softball Catcher Hall of Fame Plaque", desc: "Softball catcher — off-frame photo image cast relief plaque in bronze", cta: "Start Your Softball Hall of Fame" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/38aa9fc20_cast-bronze-bas-relief-image-cast-softball-off-frame.jpg", label: "Softball Pitcher Hall of Fame Plaque", desc: "Softball pitcher — off-frame photo image cast relief plaque in bronze", cta: "Honor Your Softball Legend" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/cc48709e7_cast-bronze-bas-relief-image-cast-volleyball-action.jpg", label: "Volleyball Action Hall of Fame Plaque", desc: "Volleyball action photo image cast in bronze — Hall of Fame format", cta: "Commission a Volleyball Plaque" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/1fb685c10_cast-bronze-bas-relief-image-cast-volleyball-circle.jpg", label: "Volleyball Circle Recognition Plaque", desc: "Volleyball circle recognition plaque — photo cast in museum-quality bronze", cta: "Begin Your Volleyball Hall of Fame" }];



const INSTITUTIONAL = [
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/775fca918_47E80D20-855E-4F7E-BBF8-D319E64030C0.png", label: "Folsom Field — Colorado Buffaloes", desc: "Aerial stadium bronze relief — architectural landmark plaque", cta: "Get Your Stadium Plaque Quote" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/e2544f1e5_5A4799E5-4305-4837-8127-4D64CDA9C083.png", label: "Volney C. Ashford Stadium", desc: "Coach portrait with stadium relief — College Football Hall of Famer", cta: "Honor Your Program's Legacy" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/21ba8abbb_1A74E1E5-FBBE-4985-B495-629E12ACE53F.png", label: "Cincinnati Cyclones", desc: "Dimensional team logo plaque — backlit bronze relief", cta: "Cast Your Team Logo in Bronze" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/5bf816b28_95F91176-9214-4C6E-9E07-C8A0C5729B70.png", label: "Wild Band of Razorbacks — Arkansas", desc: "Historical narrative plaque with team mascot — 1964 championship", cta: "Preserve Your Championship History" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/319f68c6c_8EDB86A3-0823-4A9F-B2C0-A3EC13DAD290.png", label: "University of Arkansas at Pine Bluff", desc: "Institutional bronze identification sign — architectural entrance plaque", cta: "Commission an Entrance Plaque" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/b1bd5d877_A36CAD0F-9174-4537-ACB3-920546444A1D.png", label: "Michigan State University College of Law", desc: "Detroit College of Law / MSU Law bronze seal · 1891", cta: "Cast Your Institution's Seal" }];


const SEALS = [
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/2b48561be_D3F0E98F-7ED5-4B04-8DD9-F0D76C2DA8C7.png", label: "Pennsylvania State University Seal", desc: "Precision-cast university seal · 1855", cta: "Cast Your University Seal in Bronze" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/02178ed4c_D12B6A40-5DD3-4D3E-8FB6-E4E73664D056.png", label: "Northwest Mississippi Community College", desc: "Backlit bronze college seal · 1927", cta: "Commission Your College Seal" }];


const PHOTO_PLAQUES = [
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/bdefded46_ChatGPTImageMay26202602_42_22PM.png", label: "Brandon Raymond — Hall of Fame Boxer", desc: "WBC Super Welterweight Champion with career highlights and championship honors cast in bronze", cta: "Honor a Boxing Legend" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/65fa9625c_PORTRAITSOCCER.png", label: "Alex Morgan — Hall of Fame Forward", desc: "FIFA World Player of the Year with career stats and Olympic honors in bronze relief", cta: "Immortalize a Soccer Star" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/ea8025f43_PORTRAITBASKETBALL.png", label: "Alexander Cole — Hall of Fame Forward", desc: "NBA All-Star with championship and accolade details cast in bronze", cta: "Honor a Basketball Legend" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/b48455b3e_PORTRAITBASEBALL12.png", label: "Jim Savage — Hall of Fame Pitcher", desc: "Cy Young Award winner with career accomplishments and no-hitters immortalized in bronze", cta: "Cast a Pitcher's Legacy" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/738d1540f_PORTRAITFOOTBALL21.png", label: "Lucas Hayes — Hall of Fame Quarterback", desc: "Elite quarterback with career passing records and single-season highlights in bronze", cta: "Honor a Football Legend" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/6ac4828f3_IMG_1392.jpeg", label: "Nick Giaquinto — Sacred Heart University", desc: "Home plate portrait plaque — 29 years of service honored in bronze", cta: "Cast a Portrait Like This" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/983a3990d_IMG_1396.jpeg", label: "Dan Wilson — Seattle Mariners", desc: "Home plate Hall of Fame plaque with photo-cast portrait & career stats", cta: "Immortalize a Legend in Bronze" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/edcca70fb_420FA2B8-7869-4B3D-8DD1-141EAA6CED7F.png", label: "Peter 'Magic' Drakos", desc: "Home plate portrait plaque — baseball memorial in bronze", cta: "Honor a Baseball Legend Today" }];


const MEMORIAL_PLAQUES = [
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/98c46810f_IMG_1399.jpg", label: "Coach Gary 'Bubba' DiOrio", desc: "Football-shaped memorial plaque with photo cast — Coach #76", cta: "Honor a Coach's Legacy in Bronze" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/d032cf91d_IMG_1394.jpeg", label: "Kade Meyer Baseball Memorial", desc: "Home plate honor plaque for young athlete — cast in warm bronze", cta: "Create a Lasting Tribute in Bronze" }];


const CHAMPIONSHIP_PLAQUES = [
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/587b2767d_IMG_1393.jpg", label: "Southside Baptist Church", desc: "Baseball-shaped recognition plaque — veterans baseball sponsorship", cta: "Design a Custom-Shaped Award Plaque" },
{ url: "https://media.base44.com/images/public/69e6638934292a547ec97753/367d75e3c_IMG_1397.jpeg", label: "Dan Monaco Fall Classic — Soccer", desc: "Memorial soccer ball bronze plaque — PTSC community tribute", cta: "Create a Tournament Memorial Plaque" }];


const faqs = [
{ question: "How are inductee likenesses captured?", answer: "Every portrait created from your actual photos—no generic faces, no artist interpretations." },
{ question: "Can you build a complete recognition wall?", answer: "Yes. We design modular Hall of Fame walls with individual plaques, connecting panels, sport-themed borders, and space for future inductees. Over 200 installations nationwide." },
{ question: "What sports do you make plaques for?", answer: "Every sport — football, basketball, baseball, soccer, golf, boxing, wrestling, swimming, lacrosse, track & field, and more. Also coaches, administrators, and donors." },
{ question: "How long does production take?", answer: "Artwork proof within the hour. Production typically 4–6 weeks from approval. Rush options available for tight deadlines." },
{ question: "What shapes are available?", answer: "Rectangular, home plate, shield, medallion, football-shaped, soccer ball, baseball-shaped, diamond, and custom architectural shapes." }];


const bustTypes = [
{ label: "Standard Hall of Fame Bust", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/496d05ff8_99F60C02-07FA-4E6B-A2F7-A1DF3368DE0E.png", alt: "Standard Hall of Fame bronze bust — sculpted from athlete photograph" },
{ label: "Athlete Portrait Bust", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/1daa60284_ECEF0D5E-181D-4F24-8FD8-994D7F9B3730.png", alt: "Custom athlete portrait bronze bust — exact likeness from photographs" },
{ label: "Coach Bust", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/4d41d4287_0804D2D5-A521-470D-9D6D-8E45E69BA991.png", alt: "Coach portrait bronze bust — sculpted from photographs for Hall of Fame" },
{ label: "Championship Bust", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/82c049fdc_1EFEDCFE-9322-40E1-88FB-5223406FB921.png", alt: "Championship bronze bust — bronze, museum quality" },
{ label: "Stadium Donor Bust", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/580dca88d_BA78C4BD-B3AA-4B99-9EE6-70D7AC769604.png", alt: "Stadium donor recognition bronze bust" },
{ label: "Historic Athlete Bust", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/4b1801f52_A48B1FB3-444D-4741-AE40-D4E863E0F068.png", alt: "Historic athlete bronze bust — created from archival photographs" }];

const soccerPositions = [
{ position: "Forward Kick Pose", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/cfc15c6d8_SOCCERKICK_LIGHT.png" },
{ position: "Goal Celebration Pose", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/e8f0b25a2_SOCCERCELEBRATION_LIGHT.png" }];

const hockeyPositions = [
{ position: "Goalie", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/e44a376cd_CD24F754-D4D6-4C4F-9913-36FBB0C2F5D7.png" },
{ position: "Forward", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/18d3f95a4_86AED4DB-6DE3-443F-B6D5-9A1ECB6B5D65.png" },
{ position: "Defenseman", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/4b9032e0d_B9A32438-CA2C-4E28-8952-22DB0925B681.png" }];

const baseballPositions = [
{ position: "Pitcher", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/ae8cf7957_ChatGPTImageMay28202608_44_52AM.png" },
{ position: "Batter", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/e991eeb20_D6CEFC45-7442-4F85-B951-76E2404E7719.png" },
{ position: "Catcher", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/9354cdeae_6A6BF141-0B16-4BAA-B2A6-B4AB5070E20B.png" }];

const basketballPositions = [
{ position: "Guard", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/385d62dba_ChatGPTImageMay28202608_46_07AM.png" },
{ position: "Forward", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/147740e3b_4CA5A3D0-6148-4652-9EB3-BCF3DAE9DEC7.png" },
{ position: "Center Dunk Pose", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/020f34d62_5E076DD7-856B-4C90-A8C7-3BD2336FD64F.png" }];

const footballPositions = [
{ position: "Quarterback", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/2ef20594e_92544757-7bd9-4667-b3d0-ce1097be4314.png" },
{ position: "Passing Stance", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/d4cc26079_ChatGPTImageMay28202608_47_38AM.png" },
{ position: "Lineman", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/a1b9f2e1c_LINEMAN_LIGHT.png" },
{ position: "Running Back", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/f3d7c4a9e_RUNNINGBACK_LIGHT.png" }];

function SportGrid({ positions, sport, cols = "lg:grid-cols-3" }) {
   return (
     <div className={`grid grid-cols-2 ${cols} gap-4 md:gap-6`}>
       {positions.map((item, i) =>
       <FadeIn key={item.position} delay={i * 0.08}>
           <div className="group relative overflow-hidden rounded-sm bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-yellow-500 transition-all duration-300">
             <div className="overflow-hidden">
               <img src={item.img} alt={`Bronze ${sport} ${item.position} statue — life-size athletic sculpture`}
             className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
             </div>
            <div className="p-4 text-center border-t border-gray-100">
              <p className="font-serif text-base text-gray-900">{item.position}</p>
              <p className="text-gray-400 font-sans text-xs uppercase tracking-widest mt-1">{sport}</p>
            </div>
          </div>
        </FadeIn>
      )}
    </div>);
}

const products = [
{ title: "Individual Inductee Plaque", desc: "3D relief portrait + name, years of service, stats, and achievement text. The foundation of every Hall of Fame." },
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
           className="group rounded border border-gray-200 bg-white hover:border-yellow-500 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col overflow-hidden"
           onClick={() => onPlaqueClick && onPlaqueClick(item)}>

             <div
             className="overflow-hidden w-full">

               <img
               src={item.url}
               alt={item.label + " — Champions in Bronze Hall of Fame Plaque"}
               className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
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
  const [glbModels, setGlbModels] = useState([]);

  useEffect(() => {
    base44.entities.Product3DModel.filter({ page: "hall_of_fame", is_active: true })
      .then((results) => setGlbModels(Array.isArray(results) ? results : []))
      .catch(() => setGlbModels([]));
  }, []);

  return (
    <div className="bg-white text-gray-900">
      {/* PHONE BAR */}
      <div className="bg-[#1e3a5f] text-white text-center py-2 px-4">
        <a href="tel:7723090412" className="font-sans font-black text-base md:text-lg tracking-widest text-white hover:text-yellow-300 transition-colors">
          📞 <span className="font-black text-xl md:text-2xl">772-309-0412</span> — Call Now for a Direct Answer
        </a>
      </div>
      <PlaqueQuoteModal plaque={selectedPlaque} onClose={() => setSelectedPlaque(null)} />
      <SEOHead
        title="Hall of Fame Bronze Plaques & Recognition Systems | Champions in Bronze"
        description="Custom Hall of Fame bronze plaques — portrait reliefs, jersey plaques, home plate plaques, university seals, photo image cast panels, and complete wall installation systems. Artwork proof within the hour. Made in the USA since 1974. Call 772-309-0412."
        canonical="/hall-of-fame"
        ogImage={HERO_IMG} />
      

      {/* HERO */}
      <section className="relative bg-gray-50 overflow-hidden">
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
            <div className="flex flex-wrap gap-4">
              <Link to="/request-quote" className="inline-flex items-center gap-2 px-8 py-4 font-sans font-bold uppercase tracking-widest text-sm text-black transition-all hover:scale-[1.02]" style={{ background: "linear-gradient(135deg, #B8860B 0%, #DAA520 30%, #FFD700 50%, #DAA520 70%, #B8860B 100%)" }}>
                Start Your Hall of Fame <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:7723090412" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-yellow-600 text-yellow-800 font-sans font-black uppercase tracking-widest text-xl hover:bg-yellow-50 transition-colors">
                <Phone className="w-5 h-5" /> 772-309-0412
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} className="hidden lg:block">
            <div className="grid grid-cols-2 gap-3">
              {[
              { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/02dd920ee_FOOTBALL18.png", label: "Football Plaques", link: "/football" },
              { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/6a09b4726_BASEBALL34.png", label: "Baseball Plaques", link: "/baseball" },
              { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/47ca72da5_BASKETBALL27.png", label: "Basketball Plaques", link: "/basketball" },
              { url: "https://media.base44.com/images/public/69e6638934292a547ec97753/2524c7a13_SOCCER10.png", label: "Soccer Plaques", link: "/soccer" },
              ].map((item, i) =>
              <Link key={i} to={item.link} className="group rounded border border-gray-200 shadow bg-white hover:border-yellow-500 hover:shadow-md transition-all duration-300 flex flex-col overflow-hidden">
                  <img src={item.url} alt={item.label} className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300" loading="lazy" />
                  <p className="text-center text-yellow-700 font-sans text-xs font-bold uppercase tracking-widest py-2 group-hover:text-yellow-600">→ {item.label}</p>
                </Link>
              )}
            </div>
          </FadeIn>
        </div>
        {/* Trust badges — full width below both columns */}
        <div className="relative max-w-7xl mx-auto px-6 pb-8">
          <FadeIn delay={0.3}>
            <div className="flex flex-nowrap items-center gap-6 overflow-x-auto">
              {[
              { icon: Clock, text: "Artwork Proof Within The Hour" },
              { icon: Shield, text: "Guaranteed to Last 100 Years Outdoors" },
              { icon: Award, text: "Made in the USA" },
              { icon: Star, text: "50,000+ Satisfied Customers" }].
              map(({ icon: Icon, text }, i, arr) =>
              <div key={text} className="flex items-center gap-2 text-gray-600 text-xs whitespace-nowrap flex-shrink-0">
                  <Icon className="w-3.5 h-3.5 text-yellow-600 flex-shrink-0" />
                  <span className="font-semibold">{text}</span>
                  {i < arr.length - 1 && <span className="text-gray-300 ml-4">|</span>}
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      <TrustBadges />

      {/* SPORTS HALL OF FAME PLAQUES */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-4">
              <span className="font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-1" style={{ color: "#1e3a5f" }}>Sport-Specific Hall of Fame Plaques</span>
              <p className="font-sans text-sm font-semibold text-gray-700 mb-3">Football · Men's &amp; Women's Basketball · Baseball · Softball · Soccer · Volleyball</p>
              <p className="font-sans text-sm font-semibold text-gray-700 mb-4">Donor Walls · Hall of Fame · Retired Jerseys · Athletic Recognition</p>
              <h2 className="font-serif text-4xl md:text-5xl" style={{ color: "#1e3a5f" }}>Your Sport. Your Image.</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base leading-relaxed">
                Football, baseball, basketball, soccer, golf, boxing, and more — each plaque custom designed around your sport, your image, and the moment being immortalized and honored forever.
              </p>
            </div>
          </FadeIn>
          <GalleryGrid items={SPORTS_PLAQUES} columns={2} onPlaqueClick={setSelectedPlaque} />
          <div className="text-center mt-5">
            <Link to="/request-quote" className="inline-flex items-center gap-2 px-8 py-4 font-bold text-black uppercase tracking-widest text-sm" style={{ background: "linear-gradient(135deg, #B8860B 0%, #DAA520 50%, #B8860B 100%)" }}>
              Design Your Sports Hall of Fame Plaque <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PORTRAIT PLAQUES */}
       <section className="py-6 bg-gray-50 border-y border-gray-200">
         <div className="max-w-7xl mx-auto px-6">
           <FadeIn>
             <div className="text-center mb-4">
               <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-2">Actual Completed Projects</span>
               <h2 className="font-serif text-4xl md:text-5xl text-gray-900">Portrait 3D Bas Relief Plaques</h2>
               <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Real photos permanently cast in bronze — athletes, coaches, and legends immortalized from your actual photographs.</p>
             </div>
           </FadeIn>
           <GalleryGrid items={PHOTO_PLAQUES} columns={2} onPlaqueClick={setSelectedPlaque} />
         </div>
       </section>

       {/* 360° VIDEO GALLERY */}
       <VideoModelGallery models={glbModels} />

      {/* PRODUCTS + PRICING — text break after photo galleries */}
      <section className="py-6 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-4">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-2">Hall of Fame Products</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">Everything We Make</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Every piece custom-made in the USA. Artwork proof within the hour. No commitment to order.</p>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) =>
            <FadeIn key={p.title} delay={i * 0.07}>
                <div className="border-2 border-gray-200 bg-white p-5 hover:border-yellow-500 hover:shadow-md transition-all duration-300 rounded">
                  <h3 className="font-serif text-lg text-gray-900 leading-tight mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{p.desc}</p>
                  <Link to="/request-quote" className="inline-flex items-center gap-1 text-yellow-700 font-sans text-xs uppercase tracking-widest font-bold hover:text-yellow-600 transition-colors">
                    Get a Quote <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </FadeIn>
            )}
          </div>
        </div>
      </section>

       {/* INSTITUTIONAL */}
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-4">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-2">Universities · Stadiums · Athletic Programs</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">Institutional Bronze Plaques & Signage</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">From university seals to stadium dedications — we've served programs across the country with bronze that lasts generations.</p>
            </div>
          </FadeIn>
          <GalleryGrid items={INSTITUTIONAL} columns={3} onPlaqueClick={setSelectedPlaque} />
        </div>
      </section>

      {/* SEALS */}
      <section className="py-5 bg-gray-50 border-y border-gray-200">
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

                  <div className="flex items-center justify-center bg-white w-full" style={{ minHeight: "280px" }}>
                    <img src={item.url} alt={item.label + " — bronze seal Champions in Bronze"} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" loading="lazy" />
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
      <section className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-4">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-2">Dedications · Memorials · Legacy Plaques</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">Memorial & Dedication Plaques</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Honor coaches, players, mentors, and community champions who shaped the game. Bronze lasts forever — so does their legacy.</p>
            </div>
          </FadeIn>
          <GalleryGrid items={MEMORIAL_PLAQUES} columns={2} onPlaqueClick={setSelectedPlaque} />
        </div>
      </section>

      {/* CHAMPIONSHIP */}
      <section className="py-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-4">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-2">Championship & Award Plaques</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">Unique Shapes. Unforgettable Awards.</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Football, baseball, soccer ball, home plate, shield, diamond — custom shapes that tell the story at a glance.</p>
            </div>
          </FadeIn>
          <GalleryGrid items={CHAMPIONSHIP_PLAQUES} columns={2} onPlaqueClick={setSelectedPlaque} />
        </div>
      </section>

      {/* WHY US */}
      <section className="py-6 bg-white">
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
                "https://media.base44.com/images/public/69e6638934292a547ec97753/2488a7ab8_FOOTBALLCHAMPION18.png",
                "https://media.base44.com/images/public/69e6638934292a547ec97753/950fe8a59_SOCCERCHAMPION10.png",
                "https://media.base44.com/images/public/69e6638934292a547ec97753/64fa5882c_GOLFCHAMPION.png",
                "https://media.base44.com/images/public/69e6638934292a547ec97753/775fca918_47E80D20-855E-4F7E-BBF8-D319E64030C0.png"].
                map((url, i) =>
                <div key={i} className="rounded border border-gray-200 shadow overflow-hidden bg-white">
                    <img src={url} alt="Hall of Fame bronze plaque Champions in Bronze" className="w-full h-auto object-cover" loading="lazy" />
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-5 bg-yellow-50 border-y-2 border-yellow-300">
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

      {/* BUSTS */}
      <section className="py-6 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-4">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-2">Preserve Legacy For Generations</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">Hall of Fame Bronze Busts</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base">Immortalize Hall of Fame inductees in museum-quality bronze — each bust created from your exact photographs using advanced sculptural technology. No in-person sessions required.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {bustTypes.map((item, i) =>
            <FadeIn key={item.label} delay={i * 0.08}>
                <div className="group relative overflow-hidden rounded-sm bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-yellow-500 transition-all duration-300">
                  <div className="overflow-hidden">
                    <img src={item.img} alt={item.alt || item.label} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-4 text-center border-t border-gray-200">
                    <p className="font-serif text-base text-gray-900">{item.label}</p>
                  </div>
                </div>
              </FadeIn>
            )}
          </div>
          <FadeIn delay={0.3}>
            <div className="text-center mt-5 flex flex-wrap justify-center gap-4">
              <Link to="/bronze-athlete-busts" className="inline-flex items-center gap-2 px-8 py-4 font-sans font-bold uppercase tracking-widest text-sm text-black transition-all" style={{ background: "linear-gradient(135deg, #B8860B 0%, #DAA520 50%, #B8860B 100%)" }}>
                View All Bronze Busts <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/request-quote" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-yellow-600 text-yellow-800 font-sans font-semibold uppercase tracking-widest text-sm hover:bg-yellow-50 transition-colors">
                Request Bust Quote
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* STATUES */}
      <section className="py-6 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-4">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-2">Honor Sacrifice. Celebrate Champions.</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">Bronze Statues — Exact Likeness from Your Photograph</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base">Life-size and heroic-scale bronze statues for stadium entrances, arena lobbies, and campus landmarks — sculpted from your actual photographs.</p>
            </div>
          </FadeIn>

          <div className="mb-5">
            <FadeIn><p className="font-serif text-2xl text-yellow-700 mb-3">Football</p></FadeIn>
            <SportGrid positions={footballPositions} sport="Football" cols="lg:grid-cols-4" />
          </div>
          <div className="mb-5">
            <FadeIn><p className="font-serif text-2xl text-yellow-700 mb-3">Soccer</p></FadeIn>
            <SportGrid positions={soccerPositions} sport="Soccer" cols="lg:grid-cols-2" />
          </div>
          <div className="mb-5">
            <FadeIn><p className="font-serif text-2xl text-yellow-700 mb-3">Hockey</p></FadeIn>
            <SportGrid positions={hockeyPositions} sport="Hockey" />
          </div>
          <div className="mb-5">
            <FadeIn><p className="font-serif text-2xl text-yellow-700 mb-3">Baseball</p></FadeIn>
            <SportGrid positions={baseballPositions} sport="Baseball" />
          </div>
          <div className="mb-5">
            <FadeIn><p className="font-serif text-2xl text-yellow-700 mb-3">Basketball</p></FadeIn>
            <SportGrid positions={basketballPositions} sport="Basketball" />
          </div>

          <FadeIn delay={0.3}>
            <div className="text-center mt-4 flex flex-wrap justify-center gap-4">
              <Link to="/custom-bronze-athlete-statues" className="inline-flex items-center gap-2 px-8 py-4 font-sans font-bold uppercase tracking-widest text-sm text-black transition-all" style={{ background: "linear-gradient(135deg, #B8860B 0%, #DAA520 50%, #B8860B 100%)" }}>
                View All Bronze Statues <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/all-sports" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-yellow-600 text-yellow-800 font-sans font-semibold uppercase tracking-widest text-sm hover:bg-yellow-50 transition-colors">
                Browse All Sports <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <QuoteForm title="Ready to Build Your Hall of Fame?" subtitle="Over 50,000 satisfied customers. Every inductee portrait from your actual photographs. Artwork within the hour." source="pro" />
    </div>);

}