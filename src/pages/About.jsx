import SEOHead from "@/components/shared/SEOHead";
import FadeIn from "@/components/shared/FadeIn";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <SEOHead
        title="About Champions in Bronze | America's Premier Bronze Recognition Foundry"
        description="Learn about Champions in Bronze — America's leading manufacturer of institutional bronze plaques, busts, and statues for stadiums, universities, and athletic organizations since 1974."
        canonical="https://www.championsinbronze.com/about"
      />

      <div className="bg-white min-h-screen">
        {/* Hero */}
        <section className="py-20 border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <FadeIn>
              <span className="text-amber-700 font-sans tracking-[0.3em] uppercase text-xs font-semibold">Est. 1974</span>
              <h1 className="font-serif text-5xl md:text-6xl mt-3 text-gray-900 leading-tight">
                About Champions in Bronze
              </h1>
              <p className="mt-6 text-gray-600 font-sans text-lg leading-relaxed">
                America's premier institutional bronze recognition manufacturer — crafting legacy for over 50 years.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Main content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-6 space-y-12">
            <FadeIn>
              <div>
                <h2 className="font-serif text-2xl text-gray-900 mb-4">Who We Are</h2>
                <p className="font-sans text-gray-700 text-base leading-relaxed">
                  Champions in Bronze is a division of Bronze Memorials Inc., a family-owned American foundry headquartered in Port St. Lucie, Florida. Founded in 1974, we have spent more than five decades perfecting the art and science of bronze recognition — from Hall of Fame portrait plaques and championship bas-relief displays to full-size athlete statues and donor recognition walls. Every piece we produce is manufactured entirely in the United States, with no outsourcing and no compromise on quality.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <h2 className="font-serif text-2xl text-gray-900 mb-4">What We Build</h2>
                <p className="font-sans text-gray-700 text-base leading-relaxed">
                  Our product line covers the full spectrum of institutional recognition. We produce photo image-cast bronze plaques — a proprietary process that permanently captures a real photograph in solid bronze — as well as three-dimensional bas-relief plaques sculpted from original reference photos, life-size and heroic-scale athlete statues, portrait busts, Hall of Fame display systems, donor recognition walls, dedication plaques, memorials, and custom dimensional bronze letters. If it can be imagined in bronze, we can build it.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div>
                <h2 className="font-serif text-2xl text-gray-900 mb-4">Who We Serve</h2>
                <p className="font-sans text-gray-700 text-base leading-relaxed">
                  We work primarily with professional sports franchises, NCAA Division I universities, high school athletic departments, Hall of Fame organizations, stadium and arena management groups, hospitals, municipalities, fire departments, military installations, and private philanthropic donors. Our clients choose us because they need recognition pieces that will endure for 100 years or more outdoors — pieces worthy of the athletes, donors, and institutions they honor.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <h2 className="font-serif text-2xl text-gray-900 mb-4">Our Process</h2>
                <p className="font-sans text-gray-700 text-base leading-relaxed">
                  Every project begins with a digital artwork proof delivered within the hour — no commitment required. From there, our in-house sculptors create clay models, cast them in silicon bronze at our American foundry, apply hand-applied patina finishes, and ship the finished piece directly to your facility. Our team answers the phone directly, responds to emails promptly, and has completed over 50,000 projects across all 50 states.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.25}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/request-concept-design"
                  className="inline-flex items-center justify-center px-8 py-3 bg-gray-900 text-white font-sans uppercase tracking-widest text-sm hover:bg-gray-700 transition-colors"
                >
                  Request a Free Design Proof
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-gray-900 text-gray-900 font-sans uppercase tracking-widest text-sm hover:bg-gray-50 transition-colors"
                >
                  View Our Portfolio
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </>
  );
}