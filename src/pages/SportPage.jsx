import { Link } from "react-router-dom";
import { ArrowRight, Camera } from "lucide-react";
import ProductHero from "../components/shared/ProductHero";
import TrustBadges from "../components/shared/TrustBadges";
import QuoteForm from "../components/shared/QuoteForm";
import FAQSection from "../components/shared/FAQSection";
import FadeIn from "../components/shared/FadeIn";

const bustTypes = [
  { label: "Standard Hall of Fame Bust", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/496d05ff8_99F60C02-07FA-4E6B-A2F7-A1DF3368DE0E.png" },
  { label: "Athlete Portrait Bust", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/1daa60284_ECEF0D5E-181D-4F24-8FD8-994D7F9B3730.png" },
  { label: "Coach Bust", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/4d41d4287_0804D2D5-A521-470D-9D6D-8E45E69BA991.png" },
  { label: "Championship Bust", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/82c049fdc_1EFEDCFE-9322-40E1-88FB-5223406FB921.png" },
  { label: "Stadium Donor Bust", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/580dca88d_BA78C4BD-B3AA-4B99-9EE6-70D7AC769604.png" },
  { label: "Historic Athlete Bust", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/4b1801f52_A48B1FB3-444D-4741-AE40-D4E863E0F068.png" },
];

const statuesBySport = {
  Football: [
    { position: "Quarterback", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/2ef20594e_92544757-7bd9-4667-b3d0-ce1097be4314.png" },
    { position: "Passing Stance", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/d4cc26079_ChatGPTImageMay28202608_47_38AM.png" },
    { position: "Lineman", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/9d6be36e2_E381DDD7-91BC-4FD3-A999-05CCFF675570.png" },
    { position: "Running Back", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/1bff77f0c_650A3449-F5F7-4EC2-8D17-D57C866CB4B5.png" },
  ],
  Soccer: [
    { position: "Forward Kick Pose", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/f6b5763e1_0BB4AFDE-FA5D-4A01-8CB5-D9453AA9951F.png" },
    { position: "Goal Celebration Pose", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/aceb82ef5_8C52F27A-8EA2-4D4F-AF16-D02E1C58BFD8.png" },
  ],
  Hockey: [
    { position: "Goalie", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/e44a376cd_CD24F754-D4D6-4C4F-9913-36FBB0C2F5D7.png" },
    { position: "Forward", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/18d3f95a4_86AED4DB-6DE3-443F-B6D5-9A1ECB6B5D65.png" },
    { position: "Defenseman", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/4b9032e0d_B9A32438-CA2C-4E28-8952-22DB0925B681.png" },
  ],
  Baseball: [
    { position: "Pitcher", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/ae8cf7957_ChatGPTImageMay28202608_44_52AM.png" },
    { position: "Batter", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/e991eeb20_D6CEFC45-7442-4F85-B951-76E2404E7719.png" },
    { position: "Catcher", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/9354cdeae_6A6BF141-0B16-4BAA-B2A6-B4AB5070E20B.png" },
  ],
  Basketball: [
    { position: "Guard", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/385d62dba_ChatGPTImageMay28202608_46_07AM.png" },
    { position: "Forward", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/147740e3b_4CA5A3D0-6148-4652-9EB3-BCF3DAE9DEC7.png" },
    { position: "Center Dunk Pose", img: "https://media.base44.com/images/public/69e6638934292a547ec97753/020f34d62_5E076DD7-856B-4C90-A8C7-3BD2336FD64F.png" },
  ],
};

const imgs = [
  "https://media.base44.com/images/public/69e6638934292a547ec97753/4262e1b6f_generated_6dae4386.png",
  "https://media.base44.com/images/public/69e6638934292a547ec97753/5b198cd19_generated_1a12a43b.png",
  "https://media.base44.com/images/public/69e6638934292a547ec97753/ab5fbf767_generated_696960c2.png",
  "https://media.base44.com/images/public/69e6638934292a547ec97753/502c0767b_generated_e375b9ec.png",
  "https://media.base44.com/images/public/69e6638934292a547ec97753/d74e93030_generated_7f57395d.png",
  "https://media.base44.com/images/public/69e6638934292a547ec97753/8f84177a0_generated_c8d564f9.png",
];

const sharedFaqs = [
  { question: "Is the athlete's exact likeness captured?", answer: "Yes. We sculpt every relief and bust from the photographs you submit — not a generic athlete figure. Your player's actual face, build, and expression are captured feature by feature. No in-person sessions needed." },
  { question: "What products are available for this sport?", answer: "3D bas relief action plaques, portrait busts, championship plaques, Hall of Fame inductee displays, Photo ImageCasting multi-photo collages, donor recognition plaques, and retired jersey/number displays." },
  { question: "How fast is turnaround?", answer: "Artwork proof within 48 hours. Standard plaques ship in 15–30 days. Busts and statues take 16–24 weeks depending on size." },
  { question: "What materials do you recommend for outdoor installation?", answer: "Silicon bronze is the traditional standard — warm amber patina, museum quality, rated 200+ years outdoors. Aluminum is lighter and lower cost, ideal for indoor applications." },
];

/**
 * Reusable sport page — pass sport name, hero image, and custom products
 */
export default function SportPage({ sport, league, heroImg, heroSubtitle, products }) {
  const img = heroImg || imgs[0];

  const defaultProducts = [
    { img: imgs[0], title: `${sport} 3D Bas Relief Plaque`, desc: "Sculpted from your actual player photographs. Single portrait or action scene.", to: "/3d-relief-plaques" },
    { img: imgs[1], title: `${sport} Portrait Bust`, desc: "Life-size or heroic-scale bronze or aluminum bust from photos.", to: "/busts-and-statues" },
    { img: imgs[2], title: `${sport} Hall of Fame Display`, desc: "Complete inductee plaque system — individual or full wall installation.", to: "/hall-of-fame" },
    { img: imgs[3], title: `${sport} Photo ImageCasting Plaque`, desc: "Career-spanning photo collage permanently cast in bronze.", to: "/photo-imagecast-plaques" },
    { img: imgs[4], title: `${sport} Championship Plaque`, desc: "Season championship commemorative in bronze or aluminum.", to: "/3d-relief-plaques" },
    { img: imgs[5], title: `${sport} Donor Recognition Wall`, desc: "Fundraising recognition wall for your athletic program.", to: "/donor-recognition" },
  ];

  const displayProducts = products || defaultProducts;

  return (
    <div className="bg-obsidian text-parchment">
      <ProductHero
        image={img}
        label={`${league ? league + " · " : ""}${sport} Recognition`}
        title={`${sport} Bronze Plaques, Busts & Statues`}
        subtitle={heroSubtitle || `Custom 3D bas relief plaques, portrait busts, Hall of Fame displays, and Photo ImageCasting career retrospectives for ${sport}. Every piece sculpted from your actual photographs — exact likeness guaranteed.`}
        cta1="Get Instant Price"
        cta1Link="/request-quote"
        cta2="View All Products"
        cta2Link="/3d-relief-plaques"
      />

      <TrustBadges />

      <QuoteForm title="Request Your Free Artwork Proof" subtitle={`Tell us about your ${sport} project — we'll deliver a digital proof within the hour.`} source="pro" />

      {/* Photo Accuracy Callout */}
      <section className="py-16 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-bronze/10 border border-bronze/30 rounded-sm p-7 md:p-10 flex flex-col md:flex-row items-center gap-6">
            <Camera className="w-10 h-10 text-gold flex-shrink-0" />
            <div>
              <h3 className="font-serif text-xl md:text-2xl text-parchment">Your Athlete's Exact Photographic Likeness. Not an Interpretation.</h3>
              <p className="mt-2 text-parchment/60 text-sm leading-relaxed">
                Every {sport} plaque and bust we create is sculpted from your submitted photographs. We capture real faces, real expressions, real moments — not generic sports figures. Upload your photos and we'll deliver a proof within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="mb-12">
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">{sport} Products</span>
              <h2 className="font-serif text-4xl md:text-5xl mt-3 text-parchment">Bronze Recognition for {sport}</h2>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayProducts.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <Link to={item.to} className="group relative aspect-[4/3] overflow-hidden rounded-sm block">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
                  <div className="absolute bottom-0 p-6">
                    <h3 className="font-serif text-lg text-parchment group-hover:text-gold transition-colors">{item.title}</h3>
                    <p className="text-parchment/50 text-sm mt-1">{item.desc}</p>
                    <div className="flex items-center gap-2 mt-3 text-gold text-xs font-sans uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>Learn More</span> <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Related sports */}
      <section className="py-16 border-t border-bronze/10 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-8">
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Browse by Sport</span>
              <h2 className="font-serif text-3xl mt-3 text-parchment">We Cover Every Sport</h2>
            </div>
          </FadeIn>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { label: "Football", to: "/football" },
              { label: "Basketball", to: "/basketball" },
              { label: "Baseball", to: "/baseball" },
              { label: "Hockey", to: "/hockey" },
              { label: "Soccer", to: "/soccer" },
              { label: "Lacrosse", to: "/lacrosse" },
              { label: "Volleyball", to: "/volleyball" },
              { label: "Swimming", to: "/swimming" },
              { label: "Golf", to: "/golf" },
              { label: "Track & Field", to: "/track-field" },
              { label: "Wrestling", to: "/wrestling" },
              { label: "Tennis", to: "/tennis" },
              { label: "All Sports", to: "/all-sports" },
            ].map((s) => (
              <Link key={s.to} to={s.to}
                className={`font-sans text-xs uppercase tracking-[0.1em] px-4 py-2 border transition-colors duration-200 rounded-sm ${s.label === sport ? "bg-bronze border-bronze text-parchment" : "border-bronze/30 text-parchment/50 hover:border-gold hover:text-parchment"}`}>
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <QuoteForm title="Get a Quote — Artwork Within The Hour" subtitle="No commitment required. Museum-quality artwork proof delivered fast." source="pro" />

      {/* BUSTS */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Preserve Legacy For Generations</span>
              <h2 className="font-serif text-4xl md:text-5xl text-gray-900">{sport} Bronze Busts</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base">Immortalize athletes, coaches, and legends in museum-quality bronze — each bust created from your exact photographs. No in-person sessions required.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {bustTypes.map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.08}>
                <div className="group relative overflow-hidden rounded-sm bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-yellow-500 transition-all duration-300">
                  <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                    <img src={item.img} alt={item.label} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-4 text-center border-t border-gray-200">
                    <p className="font-serif text-base text-gray-900">{item.label}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div className="text-center mt-10 flex flex-wrap justify-center gap-4">
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
      {statuesBySport[sport] && (
        <section className="py-16 bg-white border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-10">
                <span className="text-yellow-700 font-sans tracking-[0.35em] uppercase text-xs font-bold block mb-3">Honor Sacrifice. Celebrate Champions.</span>
                <h2 className="font-serif text-4xl md:text-5xl text-gray-900">{sport} Bronze Statues — Exact Likeness from Your Photograph</h2>
                <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-base">Life-size and heroic-scale bronze statues for stadium entrances, arena lobbies, and campus landmarks — sculpted from your actual photographs.</p>
              </div>
            </FadeIn>
            <div className={`grid grid-cols-2 ${statuesBySport[sport].length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-4 md:gap-6`}>
              {statuesBySport[sport].map((item, i) => (
                <FadeIn key={item.position} delay={i * 0.08}>
                  <div className="group relative overflow-hidden rounded-sm bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-yellow-500 transition-all duration-300">
                    <div className="aspect-[3/4] overflow-hidden bg-white">
                      <img src={item.img} alt={`Bronze ${sport} ${item.position} statue`} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                    </div>
                    <div className="p-4 text-center border-t border-gray-100">
                      <p className="font-serif text-base text-gray-900">{item.position}</p>
                      <p className="text-gray-400 font-sans text-xs uppercase tracking-widest mt-1">{sport}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.3}>
              <div className="text-center mt-10 flex flex-wrap justify-center gap-4">
                <Link to="/custom-bronze-athlete-statues" className="inline-flex items-center gap-2 px-8 py-4 font-sans font-bold uppercase tracking-widest text-sm text-black transition-all" style={{ background: "linear-gradient(135deg, #B8860B 0%, #DAA520 50%, #B8860B 100%)" }}>
                  View All Bronze Statues <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/request-quote" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-yellow-600 text-yellow-800 font-sans font-semibold uppercase tracking-widest text-sm hover:bg-yellow-50 transition-colors">
                  Request Statue Quote
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      <FAQSection faqs={sharedFaqs} title={`${sport} Plaque & Statue FAQ`} />
      <QuoteForm title={`Start Your ${sport} Commission`} subtitle={`Upload your photos and project details. ${sport} artwork proof within 48 hours.`} source="pro" />
    </div>
  );
}