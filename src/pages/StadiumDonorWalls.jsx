import ProductHero from "../components/shared/ProductHero";
import SocialProofBar from "../components/shared/SocialProofBar";
import TrustBadges from "../components/shared/TrustBadges";
import SectionHeading from "../components/shared/SectionHeading";
import FeatureList from "../components/shared/FeatureList";
import PortfolioGrid from "../components/shared/PortfolioGrid";
import ProcessTimeline from "../components/shared/ProcessTimeline";
import FAQSection from "../components/shared/FAQSection";
import RelatedProducts from "../components/shared/RelatedProducts";
import TestimonialCarousel from "../components/shared/TestimonialCarousel";
import QuoteForm from "../components/shared/QuoteForm";
import FadeIn from "../components/shared/FadeIn";

const donorImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/ab5fbf767_generated_696960c2.png";
const heroImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/d74e93030_generated_7f57395d.png";
const lettersImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/5574c762c_generated_64635338.png";
const plaqueImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/5b198cd19_generated_1a12a43b.png";

const portfolioItems = [
  { image: donorImg, title: "NFL Stadium Main Concourse", description: "60-foot donor recognition wall featuring 400+ individual bronze plaques with tiered giving levels." },
  { image: plaqueImg, title: "Individual Donor Plaque Detail", description: "Close-up of hand-engraved individual donor plaque with custom patina." },
  { image: lettersImg, title: "Founding Donors Display", description: "Dimensional bronze letters and portrait medallions for founding-level contributors." },
  { image: donorImg, title: "Arena Interior Recognition", description: "Curved donor wall installation following the architecture of a professional arena." },
  { image: heroImg, title: "Stadium Entrance Donor Monument", description: "Outdoor donor monument with integrated bronze statue and recognition panels." },
  { image: plaqueImg, title: "Suite-Level Donor Gallery", description: "Premium donor display with illuminated bronze plaques for suite-level contributors." },
];

const faqs = [
  { question: "Can donor walls be expanded as new donors contribute?", answer: "Absolutely. We design every wall system with future expansion in mind. Modular panel systems allow seamless additions without removing or rearranging existing donor plaques. Many of our installations have been expanded 3–4 times over decades." },
  { question: "What donor tier options are available?", answer: "We create custom tier systems — from Founding, Championship, and Legacy levels to custom naming. Each tier features distinct plaque sizes, finishes, and positioning. Typical installations include 3–6 giving tiers." },
  { question: "How do you handle curved or unusual wall surfaces?", answer: "Our engineering team creates precise 3D models of your installation space. We can conform panels to curves, angles, columns, and architectural features. We've installed on concourse curves, stairwell walls, and multi-story atriums." },
  { question: "What is the investment for a stadium donor wall?", answer: "Stadium-scale donor walls typically range from $50,000 to $500,000+ depending on scale, number of plaques, architectural integration, and material choices. We provide phased proposals to align with capital campaign timelines." },
  { question: "Do you provide maintenance services?", answer: "Yes. We offer annual maintenance packages that include cleaning, patina touch-ups, and expansion services. Bronze requires minimal maintenance — typically just annual polishing to maintain the intended finish." },
];

const relatedProducts = [
  { to: "/bronze-player-statues", image: heroImg, title: "Bronze Player Statues", desc: "Life-size monuments for stadiums and plazas." },
  { to: "/dimensional-metal-letters", image: lettersImg, title: "Dimensional Letters", desc: "Bold cast signage for entrances and facades." },
  { to: "/hall-of-fame-bronze-plaques", image: plaqueImg, title: "Hall of Fame Plaques", desc: "Individual portrait plaques for hall of fame displays." },
];

export default function StadiumDonorWalls() {
  return (
    <div className="bg-obsidian text-parchment">
      <ProductHero
        image={donorImg}
        label="Architectural Recognition"
        title="Stadium Donor Recognition Walls"
        subtitle="Transform philanthropic visions into permanent bronze landmarks. Modular, expandable systems designed for professional stadiums, arenas, and athletic complexes."
      />

      <SocialProofBar
        logos={["NFL", "MLB", "NBA", "NHL", "MLS"]}
        caption="Installed in America's Most Iconic Professional Sports Venues"
      />

      <TrustBadges />

      <QuoteForm title="Request Your Free Artwork Proof" subtitle="Tell us about your donor wall project — we'll deliver a digital proof within the hour." source="pro" />

      {/* Benefits Section */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn delay={0.1}>
              <SectionHeading
                label="Donor Impact"
                title="Recognition That Inspires Future Giving"
              />
              <p className="text-parchment/60 text-lg leading-relaxed -mt-8">
                A bronze donor wall is the most powerful tool in your development arsenal. When potential
                donors see their peers' names permanently cast in bronze — in the very stadium they love —
                it creates an emotional imperative to contribute. Our walls have been proven to
                <em className="text-gold"> increase capital campaign participation by 30–40%.</em>
              </p>
              <FeatureList features={[
                "Modular & Expandable Design",
                "Custom Tier Systems (3–6 Levels)",
                "Architectural Integration",
                "Illumination & Accent Lighting",
                "Annual Maintenance Programs",
                "25+ Year Expansion Capability",
              ]} />
            </FadeIn>
            <FadeIn>
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                <img src={donorImg} alt="Stadium donor wall" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-bronze/5 mix-blend-overlay" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-28 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading label="Applications" title="Where Donor Walls Make the Greatest Impact" align="center" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Main Concourse", desc: "High-traffic areas where every visitor sees donor recognition." },
              { title: "VIP & Suite Level", desc: "Premium displays for major-gift and naming-rights donors." },
              { title: "Stadium Entrance", desc: "Outdoor-rated monuments at main gates and plazas." },
              { title: "Hall of Fame Wing", desc: "Integrated donor and honoree displays in dedicated spaces." },
            ].map((app, i) => (
              <FadeIn key={app.title} delay={i * 0.1}>
                <div className="bg-secondary/30 border border-bronze/10 p-8 rounded-sm h-full hover:border-bronze/30 transition-colors">
                  <h3 className="font-serif text-lg text-parchment">{app.title}</h3>
                  <p className="text-parchment/50 mt-3 text-sm leading-relaxed">{app.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <PortfolioGrid items={portfolioItems} title="Donor Wall Installations" label="Portfolio" />
      <RelatedProducts products={relatedProducts} />
      <ProcessTimeline />
      <TestimonialCarousel />
      <QuoteForm title="Get a Quote — Artwork Within The Hour" subtitle="No commitment required. Museum-quality artwork proof delivered fast." source="pro" />
      <FAQSection faqs={faqs} />
      <QuoteForm
        title="Design Your Donor Wall"
        subtitle="Share your venue details and campaign goals. Receive layout concepts and a detailed proposal within 48 hours."
        source="pro"
      />
    </div>
  );
}