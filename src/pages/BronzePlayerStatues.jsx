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

const heroImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/d74e93030_generated_7f57395d.png";
const plaqueImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/5b198cd19_generated_1a12a43b.png";
const donorImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/ab5fbf767_generated_696960c2.png";
const lettersImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/5574c762c_generated_64635338.png";
const foundryImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/35f2fea4a_generated_46168e9a.png";

const portfolioItems = [
  { image: heroImg, title: "Quarterback Monument — NFL Stadium", description: "12-foot bronze quarterback in release pose, installed at stadium's main entrance plaza." },
  { image: foundryImg, title: "Foundry Pour — Lost-Wax Process", description: "Molten bronze being poured at 2,100°F into ceramic shell molds." },
  { image: plaqueImg, title: "Hall of Fame Relief Portrait", description: "High-relief portrait plaque with custom patina and lettering." },
  { image: donorImg, title: "Championship Legacy Wall", description: "Multi-panel donor recognition wall with integrated statue elements." },
  { image: lettersImg, title: "Stadium Entrance Letters", description: "24-inch dimensional bronze letters at professional stadium entrance." },
  { image: heroImg, title: "Running Back in Motion", description: "Dynamic action pose capturing the explosive power of a Pro Bowl running back." },
];

const faqs = [
  { question: "How long does a life-size bronze statue take to complete?", answer: "From initial consultation to final installation, a life-size statue typically takes 6–9 months. Rush projects can be accommodated for 4–5 month timelines with a priority surcharge. We provide detailed shop drawings within 48 hours of your initial brief." },
  { question: "What sizes are available?", answer: "We create statues from 1/4 life-size (approximately 18 inches) to over-life-size monuments up to 20 feet tall. The most popular commissions are life-size (6–7 feet) and 1.5x life-size (9–10 feet) for maximum visual impact." },
  { question: "How do you capture the likeness of a specific player?", answer: "We work from extensive photography, game film, body measurements, and in-person sitting sessions when possible. Our sculptors use a combination of traditional clay modeling and digital 3D scanning to ensure 99% likeness accuracy." },
  { question: "What is the installation process?", answer: "We handle everything — from structural engineering of the base and footings to final placement with a crane. Our installation team travels nationwide and coordinates with your facilities team for a seamless unveiling ceremony." },
  { question: "How durable are outdoor bronze statues?", answer: "Our statues are engineered for outdoor permanence. The bronze alloy we use (90% copper, 10% tin) develops a natural patina that actually protects the underlying metal. With minimal maintenance, our statues will last centuries — not decades." },
  { question: "What is the typical investment range?", answer: "Life-size bronze statues typically range from $75,000 to $250,000+ depending on complexity, size, base design, and installation requirements. We provide detailed, transparent proposals with no hidden costs." },
];

const relatedProducts = [
  { to: "/championship-bronze-plaques", image: plaqueImg, title: "Championship Plaques", desc: "Commemorative bronze plaques for titles and milestones." },
  { to: "/stadium-donor-walls", image: donorImg, title: "Stadium Donor Walls", desc: "Transform philanthropy into permanent bronze recognition." },
  { to: "/dimensional-metal-letters", image: lettersImg, title: "Dimensional Letters", desc: "Bold cast bronze signage for stadium entrances." },
];

export default function BronzePlayerStatues() {
  return (
    <div className="bg-obsidian text-parchment">
      <ProductHero
        image={heroImg}
        label="Sculptural Excellence"
        title="Life-Size Bronze Player Statues"
        subtitle="We capture the kinetic energy of athletic greatness and cast it in bronze that will endure for centuries. Museum-quality statues for professional stadiums, universities, and halls of fame."
      />

      <SocialProofBar
        logos={["NFL", "MLB", "NBA", "NHL", "NCAA"]}
        caption="Commissioned by the Most Prestigious Names in Professional and Collegiate Athletics"
      />

      <TrustBadges />

      <QuoteForm title="Request Your Free Artwork Proof" subtitle="Tell us about your statue project — we'll deliver a digital proof within the hour." source="pro" />

      {/* What This Is */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <img src={heroImg} alt="Bronze statue detail" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-bronze/5 mix-blend-overlay" />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <SectionHeading
                label="The Art of Permanence"
                title="More Than a Statue. A Monument to Legacy."
              />
              <p className="text-parchment/60 text-lg leading-relaxed -mt-8">
                A bronze statue is the ultimate expression of institutional respect. It tells recruits, fans, 
                and future generations: <em className="text-gold">"This is where legends are honored."</em> Every commission 
                we undertake is a collaboration between our master sculptors and your vision — resulting in a 
                one-of-a-kind monument that captures personality, movement, and emotion.
              </p>
              <FeatureList features={[
                "Museum-Quality Lost-Wax Casting",
                "Custom Action Poses & Likenesses",
                "Weather-Resistant Bronze Alloy",
                "Structural Engineering & Installation",
                "Custom Granite or Bronze Base Options",
                "Lifetime Structural Guarantee",
              ]} />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Design Options */}
      <section className="py-28 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Customization"
            title="Design & Sculpting Options"
            subtitle="Every statue is custom. Choose from action poses, portrait busts, seated positions, or abstract athletic forms."
            align="center"
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Action Poses", desc: "Dynamic mid-play positions — throwing, catching, running, shooting. Maximum visual impact.", specs: "6–20 ft tall" },
              { title: "Portrait Monuments", desc: "Dignified standing or seated poses, ideal for Hall of Fame ceremonies and courtyard installations.", specs: "Life-size to 1.5×" },
              { title: "Relief Sculptures", desc: "High-relief wall-mounted panels depicting signature moments. Perfect for interior installations.", specs: "Custom dimensions" },
            ].map((opt, i) => (
              <FadeIn key={opt.title} delay={i * 0.1}>
                <div className="bg-secondary/30 border border-bronze/10 p-8 rounded-sm hover:border-bronze/30 transition-colors">
                  <h3 className="font-serif text-xl text-parchment">{opt.title}</h3>
                  <p className="text-parchment/50 mt-3 text-sm leading-relaxed">{opt.desc}</p>
                  <span className="text-gold text-xs font-sans uppercase tracking-widest mt-4 block">{opt.specs}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-28 bg-secondary/20 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <SectionHeading
                label="Materials & Specifications"
                title="Cast to Last Centuries"
              />
              <div className="space-y-6 -mt-8">
                {[
                  { label: "Alloy", value: "Silicon Bronze (90% Cu, 10% Sn)" },
                  { label: "Wall Thickness", value: "3/16\" to 1/4\" (industry leading)" },
                  { label: "Patina Options", value: "Traditional Brown, Verde Green, Black, Custom" },
                  { label: "Base Options", value: "Polished Granite, Bronze-Clad, Custom Architectural" },
                  { label: "Weight", value: "Life-size: 400–800 lbs (varies by pose)" },
                  { label: "Warranty", value: "Lifetime Structural Guarantee" },
                ].map((spec) => (
                  <div key={spec.label} className="flex justify-between items-center border-b border-bronze/10 pb-3">
                    <span className="text-parchment/50 text-sm font-sans uppercase tracking-wider">{spec.label}</span>
                    <span className="text-parchment text-sm font-sans">{spec.value}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative aspect-square overflow-hidden rounded-sm">
                <img src={foundryImg} alt="Bronze casting process" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <PortfolioGrid items={portfolioItems} title="Statue Portfolio" label="Our Work" />
      <RelatedProducts products={relatedProducts} />
      <ProcessTimeline />
      <TestimonialCarousel />
      <QuoteForm title="Get a Quote — Artwork Within The Hour" subtitle="No commitment required. Museum-quality artwork proof delivered fast." source="pro" />
      <FAQSection faqs={faqs} />
      <QuoteForm
        title="Commission Your Statue"
        subtitle="Share your vision. Our sculptors will deliver concept drawings and a detailed proposal within 48 hours."
        source="pro"
      />
    </div>
  );
}