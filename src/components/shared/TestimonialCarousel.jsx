import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import FadeIn from "./FadeIn";

const defaultTestimonials = [
  {
    quote: "Champions in Bronze captured the intensity and spirit of our franchise player perfectly. The statue has become the most photographed landmark at our stadium.",
    name: "James Mitchell",
    title: "VP of Facilities, NFL Franchise",
  },
  {
    quote: "The donor recognition wall transformed our capital campaign. Alumni giving increased 40% once donors could see their legacy immortalized in bronze.",
    name: "Dr. Sarah Chen",
    title: "Athletic Director, Division I University",
  },
  {
    quote: "From concept to installation, the team delivered museum-quality work on an impossible timeline. Our Hall of Fame has never looked more prestigious.",
    name: "Robert Alvarez",
    title: "Facilities Director, Professional Stadium",
  },
  {
    quote: "The dimensional letters at our entrance set the tone for everything. Recruits and their families are stunned when they walk in. It's a game-changer.",
    name: "Coach David Williams",
    title: "Head Football Coach, Power 5 Conference",
  },
];

export default function TestimonialCarousel({ testimonials = defaultTestimonials }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  return (
    <section className="py-24 bg-obsidian relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bronze/5 to-transparent" />
      <div className="max-w-4xl mx-auto px-6 relative">
        <FadeIn>
          <div className="text-center">
            <Quote className="w-10 h-10 text-gold/30 mx-auto mb-8" />
            <div className="min-h-[200px] flex items-center justify-center">
              <div key={current}>
                <p className="font-serif text-2xl md:text-3xl leading-relaxed text-parchment/90 italic">
                  "{testimonials[current].quote}"
                </p>
                <div className="mt-10">
                  <p className="font-sans text-gold text-sm tracking-[0.2em] uppercase font-semibold">
                    {testimonials[current].name}
                  </p>
                  <p className="font-sans text-parchment/40 text-sm mt-1">
                    {testimonials[current].title}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-6 mt-12">
              <button onClick={prev} className="w-10 h-10 rounded-sm border border-bronze/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors text-parchment/40">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-gold w-6" : "bg-parchment/20"}`}
                  />
                ))}
              </div>
              <button onClick={next} className="w-10 h-10 rounded-sm border border-bronze/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors text-parchment/40">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}