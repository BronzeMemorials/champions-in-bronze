import PortfolioGrid from "../components/shared/PortfolioGrid";
import QuoteForm from "../components/shared/QuoteForm";
import FadeIn from "../components/shared/FadeIn";
import SEOHead from "../components/shared/SEOHead";

const heroImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/d74e93030_generated_7f57395d.png";
const donorImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/ab5fbf767_generated_696960c2.png";
const lettersImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/5574c762c_generated_64635338.png";
const plaqueImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/5b198cd19_generated_1a12a43b.png";
const jerseyImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/4262e1b6f_generated_6dae4386.png";
const foundryImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/35f2fea4a_generated_46168e9a.png";
const paperweightImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/8f84177a0_generated_c8d564f9.png";
const hallImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/502c0767b_generated_e375b9ec.png";

const items = [
  { image: heroImg, title: "Quarterback Monument", description: "12-foot bronze quarterback at NFL stadium entrance." },
  { image: donorImg, title: "Stadium Donor Wall", description: "60-foot tiered donor recognition wall in professional arena." },
  { image: lettersImg, title: "Dimensional Letters", description: "36-inch cast bronze letters for stadium facade." },
  { image: plaqueImg, title: "Championship Plaque", description: "Custom championship commemorative plaque with team photography." },
  { image: jerseyImg, title: "3D Relief Jersey", description: "Three-dimensional jersey relief for retired number display." },
  { image: hallImg, title: "College Hall of Fame", description: "Multi-sport hall of fame display at Division I university." },
  { image: foundryImg, title: "Foundry Process", description: "Lost-wax casting process at our American foundry." },
  { image: paperweightImg, title: "Executive Collection", description: "Custom bronze paperweight for corporate gift program." },
  { image: heroImg, title: "Running Back Statue", description: "Life-size action pose at professional training facility." },
];

export default function Portfolio() {
  return (
    <div className="bg-obsidian text-parchment pt-20">
      <SEOHead
        title="Bronze Recognition Portfolio — Hall of Fame Plaques, Statues & Donor Walls | Champions in Bronze"
        description="View our portfolio of completed bronze commissions — NFL stadium statues, university Hall of Fame walls, donor recognition systems, championship plaques, and memorial sculptures. American-made. Museum quality."
        canonical="/portfolio"
        ogImage="https://media.base44.com/images/public/69e6638934292a547ec97753/d74e93030_generated_7f57395d.png"
      />
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Our Work</span>
            <h1 className="font-serif text-5xl md:text-7xl mt-4 text-parchment">The Gallery</h1>
            <p className="mt-6 text-parchment/60 text-xl leading-relaxed max-w-2xl mx-auto">
              A selection of commissions for professional teams, universities, and collectors across the nation.
            </p>
          </FadeIn>
        </div>
      </section>

      <PortfolioGrid items={items} title="" label="" />
      <QuoteForm title="Start Your Commission" subtitle="Inspired? Let's create something extraordinary." source="pro" />
    </div>
  );
}