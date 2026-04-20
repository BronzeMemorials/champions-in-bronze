import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FadeIn from "../components/shared/FadeIn";
import SocialProofBar from "../components/shared/SocialProofBar";
import TrustBadges from "../components/shared/TrustBadges";
import ProcessTimeline from "../components/shared/ProcessTimeline";
import TestimonialCarousel from "../components/shared/TestimonialCarousel";
import QuoteForm from "../components/shared/QuoteForm";
import SectionHeading from "../components/shared/SectionHeading";

const hallImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/502c0767b_generated_e375b9ec.png";
const donorImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/ab5fbf767_generated_696960c2.png";
const plaqueImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/5b198cd19_generated_1a12a43b.png";
const jerseyImg = "https://media.base44.com/images/public/69e6638934292a547ec97753/4262e1b6f_generated_6dae4386.png";

const collegiateServices = [
  {
    image: donorImg,
    title: "Athletic Donor Recognition Walls",
    desc: "Inspire alumni giving with permanent bronze recognition displays in your athletic facilities.",
    to: "/athletic-donor-walls",
  },
  {
    image: hallImg,
    title: "College Hall of Fame Plaques",
    desc: "Hand-sculpted portrait plaques that honor your institution's greatest athletes and coaches.",
    to: "/college-hall-of-fame-plaques",
  },
  {
    image: jerseyImg,
    title: "Retired Jersey Displays",
    desc: "Transform retired numbers into stunning bronze relief displays for arenas and corridors.",
    to: "/retired-jersey-displays",
  },
  {
    image: plaqueImg,
    title: "Capital Campaign Recognition",
    desc: "Naming-rights displays, building plaques, and campaign milestone markers in cast bronze.",
    to: "/capital-campaign-recognition",
  },
];

const collegiateTestimonials = [
  { quote: "The donor wall in our new football complex has been the single greatest fundraising tool we've ever had. Alumni see their names in bronze and they want to be part of it.", name: "Dr. Michael Torres", title: "Athletic Director, Division I University" },
  { quote: "Our Hall of Fame ceremony went from a nice dinner to a truly emotional event once inductees could see their portrait permanently cast in bronze. The quality is extraordinary.", name: "Patricia Lawson", title: "Associate AD, Power 5 Conference" },
  { quote: "Champions in Bronze understood the weight of our capital campaign. The recognition wall they designed has driven $12M in additional naming-rights commitments.", name: "Thomas Reeves", title: "VP of University Advancement" },
  { quote: "We commissioned retired jersey displays for our arena. The 3D bronze reliefs are absolutely stunning — they've become a destination stop on every campus tour.", name: "Jennifer Huang", title: "Facilities Director, Big East University" },
];

export default function CollegiateHome() {
  return (
    <div className="bg-obsidian text-parchment">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={hallImg} alt="College Hall of Fame" className="w-full h-full object-cover opacity-30 scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian/30 via-obsidian/60 to-obsidian" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/80 to-transparent" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 pt-32 pb-20">
          <FadeIn>
            <span className="text-gold font-sans tracking-[0.4em] uppercase text-xs font-semibold">
              Collegiate Athletic Recognition
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.92] mt-6 max-w-5xl">
              Honoring the<br />
              <span className="text-bronze-light italic">Student-Athlete Legacy.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-xl text-parchment/70 leading-relaxed font-sans font-light">
              Donor recognition walls, hall of fame displays, retired jersey plaques, and capital campaign 
              monuments — designed for NCAA institutions that honor athletic excellence permanently.
            </p>
            <div className="mt-12 flex flex-wrap gap-5">
              <Link to="/request-quote" className="bg-bronze hover:bg-gold text-parchment px-10 py-5 font-sans text-sm uppercase tracking-[0.2em] font-semibold transition-all duration-300">
                Request a Proposal
              </Link>
              <Link to="/portfolio" className="border border-parchment/20 hover:border-gold text-parchment px-10 py-5 font-sans text-sm uppercase tracking-[0.2em] transition-all duration-300">
                View College Portfolio
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <SocialProofBar
        logos={["NCAA", "SEC", "BIG TEN", "ACC", "PAC-12", "BIG 12"]}
        caption="Trusted by Athletic Departments and Booster Clubs at Major Institutions"
      />

      <TrustBadges />

      {/* Services */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="For Your Institution"
            title="Recognition Programs Built for Collegiate Athletics"
            subtitle="Every piece strengthens your brand, honors your history, and drives future giving."
            align="center"
          />
          <div className="grid md:grid-cols-2 gap-6">
            {collegiateServices.map((service, i) => (
              <FadeIn key={service.to} delay={i * 0.1}>
                <Link to={service.to} className="group relative aspect-[16/10] overflow-hidden block rounded-sm">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="font-serif text-2xl text-parchment group-hover:text-gold transition-colors">{service.title}</h3>
                    <p className="text-parchment/50 mt-2 text-sm">{service.desc}</p>
                    <div className="flex items-center gap-2 mt-4 text-gold text-sm font-sans uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Learn More</span> <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-28 border-t border-bronze/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { stat: "40%", label: "Increase in Donor Participation", desc: "Athletic departments report significant alumni giving increases after installing bronze recognition." },
              { stat: "200+", label: "Collegiate Installations", desc: "Halls of fame, donor walls, and recognition displays at universities across all 50 states." },
              { stat: "25+", label: "Years of Expansion", desc: "Our modular systems are designed to grow with your program for decades." },
            ].map((item, i) => (
              <FadeIn key={item.label} delay={i * 0.1}>
                <div className="text-center">
                  <span className="font-serif text-5xl md:text-6xl text-gold">{item.stat}</span>
                  <h3 className="font-sans text-sm uppercase tracking-[0.2em] text-parchment mt-4 font-semibold">{item.label}</h3>
                  <p className="text-parchment/50 mt-3 text-sm">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline />
      <TestimonialCarousel testimonials={collegiateTestimonials} />
      <QuoteForm title="Start Your College Commission" subtitle="Tell us about your athletic program. Receive designs and pricing within 48 hours." source="edu" />
    </div>
  );
}