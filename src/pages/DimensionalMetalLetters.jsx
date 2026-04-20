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

const lettersImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/5574c762c_generated_64635338.png";
const heroImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/d74e93030_generated_7f57395d.png";
const donorImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/ab5fbf767_generated_696960c2.png";
const plaqueImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/5b198cd19_generated_1a12a43b.png";

const portfolioItems = [
  { image: lettersImg, title: "Stadium Entrance Signage", description: "36-inch cast bronze letters for professional stadium main entrance." },
  { image: donorImg, title: "Arena Donor Level Letters", description: "Dimensional naming-rights typography integrated with donor wall system." },
  { image: lettersImg, title: "University Athletic Center", description: "Precision-cast letters for collegiate athletic facility entrance." },
  { image: plaqueImg, title: "Hall of Fame Header", description: "Custom serif typeface cast in bronze for hall of fame display header." },
  { image: lettersImg, title: "Practice Facility Branding", description: "Team name and logo rendered in cast bronze at training facility." },
  { image: heroImg, title: "Memorial Walk Typography", description: "Integrated lettering system along a commemorative walkway." },
];

const faqs = [
  { question: "What sizes are available for dimensional letters?", answer: "We cast letters from 2 inches to 48 inches tall. The most popular sizes for stadium entrances are 18–36 inches. We can match any font — from classic serif to modern sans-serif — or create completely custom typefaces." },
  { question: "What materials are used?", answer: "Our standard is silicon bronze (the same museum-quality alloy used for statues). We also offer aluminum bronze, stainless steel, and brass. All outdoor installations include weather-resistant patina and UV-stable finishes." },
  { question: "How are letters mounted?", answer: "We use concealed stud-mount systems that create a floating effect off the wall surface. Mounting studs are engineered for the specific substrate (concrete, stone, brick, or metal). Standoff distances are customizable from flush to 4 inches." },
  { question: "Can you include logos and custom shapes?", answer: "Absolutely. We cast any shape — team logos, mascots, emblems, numerals, and decorative elements. Logos are reverse-engineered from vector files for perfect reproduction." },
  { question: "What is the typical turnaround time?", answer: "Standard dimensional letter projects take 4–8 weeks from approved shop drawings. Rush orders (2–3 weeks) are available. We deliver shop drawings within 48 hours of receiving your specifications." },
];

const relatedProducts = [
  { to: "/stadium-donor-walls", image: donorImg, title: "Stadium Donor Walls", desc: "Architectural recognition systems." },
  { to: "/bronze-player-statues", image: heroImg, title: "Bronze Statues", desc: "Life-size monuments to athletic greatness." },
  { to: "/championship-bronze-plaques", image: plaqueImg, title: "Championship Plaques", desc: "Custom commemorative bronze plaques." },
];

export default function DimensionalMetalLetters() {
  return (
    <div className="bg-obsidian text-parchment">
      <ProductHero
        image={lettersImg}
        label="Architectural Signage"
        title="Dimensional Metal Letters"
        subtitle="Bold, precision-cast bronze and metal lettering that commands attention at every entrance. From stadium facades to hall of fame headers — signage that defines prestige."
      />

      <SocialProofBar
        logos={["NFL", "NCAA", "NBA", "MLB", "MLS"]}
        caption="Precision Signage Installed at Premier Athletic Facilities Nationwide"
      />

      <TrustBadges />

      {/* Benefits */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <img src={lettersImg} alt="Dimensional bronze letters" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <SectionHeading
                label="First Impressions"
                title="Typography That Commands Respect"
              />
              <p className="text-parchment/60 text-lg leading-relaxed -mt-8">
                Your entrance sets the tone for everything that follows. Dimensional bronze letters don't just 
                identify a building — they declare its significance. Cast using the same techniques as our 
                museum-quality statues, every letter carries the weight and warmth of genuine bronze.
              </p>
              <FeatureList features={[
                "2\" to 48\" Letter Heights",
                "Custom Fonts & Typefaces",
                "Logos, Numerals & Emblems",
                "Concealed Stud-Mount Systems",
                "Indoor & Outdoor Rated",
                "Multiple Patina Finishes",
              ]} />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Options Grid */}
      <section className="py-28 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading label="Options" title="Materials & Finishes" align="center" />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Cast Bronze", desc: "Our signature material. Rich warmth, natural patina development, and unmatched prestige. Available in traditional brown, verde green, and custom patinas.", price: "Premium" },
              { title: "Aluminum Bronze", desc: "Lighter weight with the same visual impact. Ideal for large-format letters on lightweight substrates. Excellent corrosion resistance.", price: "Standard" },
              { title: "Stainless Steel", desc: "Modern, sleek finish for contemporary athletic facilities. Mirror polish, brushed, or blackened finishes available.", price: "Contemporary" },
            ].map((opt, i) => (
              <FadeIn key={opt.title} delay={i * 0.1}>
                <div className="bg-secondary/30 border border-bronze/10 p-8 rounded-sm hover:border-bronze/30 transition-colors h-full">
                  <span className="text-gold text-xs font-sans uppercase tracking-widest">{opt.price}</span>
                  <h3 className="font-serif text-xl text-parchment mt-2">{opt.title}</h3>
                  <p className="text-parchment/50 mt-3 text-sm leading-relaxed">{opt.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <PortfolioGrid items={portfolioItems} title="Lettering Portfolio" label="Installations" />
      <RelatedProducts products={relatedProducts} />
      <ProcessTimeline />
      <TestimonialCarousel />
      <FAQSection faqs={faqs} />
      <QuoteForm
        title="Get Your Letter Quote"
        subtitle="Send us your text, font preferences, and installation location. Shop drawings delivered in 48 hours."
        source="pro"
      />
    </div>
  );
}