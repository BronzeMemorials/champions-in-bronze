import ProductHero from "../components/shared/ProductHero";
import TrustBadges from "../components/shared/TrustBadges";
import SectionHeading from "../components/shared/SectionHeading";
import FeatureList from "../components/shared/FeatureList";
import FAQSection from "../components/shared/FAQSection";
import RelatedProducts from "../components/shared/RelatedProducts";
import TestimonialCarousel from "../components/shared/TestimonialCarousel";
import QuoteForm from "../components/shared/QuoteForm";
import FadeIn from "../components/shared/FadeIn";

const plaqueImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/5b198cd19_generated_1a12a43b.png";
const heroImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/d74e93030_generated_7f57395d.png";
const donorImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/ab5fbf767_generated_696960c2.png";
const lettersImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/5574c762c_generated_64635338.png";

const faqs = [
  { question: "What plaque sizes are available?", answer: "We manufacture plaques from 5×7 inches for individual awards to 4×8 feet for championship displays. The most popular sizes are 12×18, 18×24, and 24×36 inches." },
  { question: "Can you include team logos and photography?", answer: "Yes. We use advanced photo-etching and high-relief casting to reproduce logos, portraits, and team photos with exceptional detail. We work from vector files, high-resolution photographs, and even historical images." },
  { question: "What finishes are available?", answer: "Standard finishes include Traditional Bronze, Antique Bronze, Verde Green, Dark Oxide, and Polished. We also offer two-tone and multi-tone patina treatments for added visual depth." },
  { question: "What is the typical turnaround?", answer: "Standard plaques ship in 4–6 weeks. Rush production (2–3 weeks) is available. We provide proofs and shop drawings within 48 hours." },
];

const relatedProducts = [
  { to: "/hall-of-fame-bronze-plaques", image: plaqueImg, title: "Hall of Fame Plaques", desc: "Individual portrait plaques for hall of fame displays." },
  { to: "/bronze-player-statues", image: heroImg, title: "Bronze Statues", desc: "Life-size monuments to athletic greatness." },
  { to: "/stadium-donor-walls", image: donorImg, title: "Donor Walls", desc: "Architectural recognition systems." },
];

export default function ChampionshipBronzePlaques() {
  return (
    <div className="bg-obsidian text-parchment">
      <ProductHero
        image={plaqueImg}
        label="Commemorative Excellence"
        title="Championship Bronze Plaques"
        subtitle="Commemorate titles, records, and milestones with museum-quality cast bronze plaques. Every championship deserves to be permanently honored."
      />

      <TrustBadges />

      <QuoteForm title="Request Your Free Artwork Proof" subtitle="Tell us about your championship plaque — we'll deliver a digital proof within the hour." source="pro" />

      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <img src={plaqueImg} alt="Championship bronze plaque" className="w-full h-full object-cover" />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <SectionHeading label="The Standard" title="Permanence for Every Championship" />
              <p className="text-parchment/60 text-lg leading-relaxed -mt-8">
                From conference titles to national championships, our plaques transform fleeting moments of glory 
                into permanent bronze records. Each plaque is cast using the lost-wax method, hand-finished 
                by master patina artists, and built to withstand decades of display.
              </p>
              <FeatureList features={[
                "Lost-Wax Cast Bronze",
                "Photo-Etched Portraits & Logos",
                "Custom Sizes (5×7 to 4×8 ft)",
                "Multiple Patina Options",
                "Indoor & Outdoor Rated",
                "Custom Mounting Hardware",
              ]} />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-28 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading label="Applications" title="Championship Plaque Types" align="center" />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Title Commemoratives", desc: "Season championships, conference titles, tournament victories. Includes scores, rosters, and team photography." },
              { title: "Record Boards", desc: "All-time records, single-season marks, career leaders. Designed for ongoing updates as records are broken." },
              { title: "Milestone Markers", desc: "Facility dedications, groundbreakings, anniversary celebrations. Architectural-grade for permanent display." },
            ].map((type, i) => (
              <FadeIn key={type.title} delay={i * 0.1}>
                <div className="bg-secondary/30 border border-bronze/10 p-8 rounded-sm h-full hover:border-bronze/30 transition-colors">
                  <h3 className="font-serif text-xl text-parchment">{type.title}</h3>
                  <p className="text-parchment/50 mt-3 text-sm leading-relaxed">{type.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <RelatedProducts products={relatedProducts} />
      <TestimonialCarousel />
      <QuoteForm title="Get a Quote — Artwork Within The Hour" subtitle="No commitment required. Museum-quality artwork proof delivered fast." source="pro" />
      <FAQSection faqs={faqs} />
      <QuoteForm title="Commission Your Plaque" subtitle="Share your championship details. Proofs delivered in 48 hours." source="pro" />
    </div>
  );
}