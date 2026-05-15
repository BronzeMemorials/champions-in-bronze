import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import FadeIn from "./FadeIn";

const realTestimonials = [
  {
    quote: "IT IS HARD TO FIND GREAT CUSTOMER SERVICE THESE DAYS AND YOUR COMPANY HAS IT. From start to finish things have been painless. Our order is on its way before the due date. Our customer is going to be very pleased.",
    name: "Susan Martel",
    title: "Customer",
  },
  {
    quote: "I want to thank you for the beautiful work Bronze Memorials did for me. The plaque is absolutely perfect. Now because of Bronze Memorials I get to see that beautiful smile every morning as I walk through the front door. Thank you Bronze Memorials for your amazing work!",
    name: "Carol Barona",
    title: "Customer",
  },
  {
    quote: "It is breathtaking! I can't wait for it to be unveiled. I am going to leave your contact information with our Chamber of Commerce and recommend you to our philanthropic donors who are always looking for exceptional craftsmanship.",
    name: "Renae Spurgeon",
    title: "Customer",
  },
  {
    quote: "Beautiful plaques and excellent customer service. I was particularly impressed with the quality of the craftsmanship and attention to detail. The plaques exceeded my expectations. Your customer service was also exceptional, with prompt and helpful responses.",
    name: "Chelsea",
    title: "Customer",
  },
  {
    quote: "The two plaques have arrived, on time and exactly as promised. They are spectacular. Just the right size, great color, very impressive. They will be very handsome at our airport for the next fifty years or more.",
    name: "Mike Jones",
    title: "Moore County Airport Authority",
  },
  {
    quote: "We are very pleased with the finished plaque. I appreciate you working with us to get the most detailed version of our logo possible, and for the exceptionally quick responses during the proofing process. We were able to meet the deadline for our 35th anniversary.",
    name: "Monique Monroe",
    title: "Purchasing Manager",
  },
  {
    quote: "Bronze Memorials has saved my job and saved our town from a major embarrassment. Jim, the President himself, assured us he could turn it around in time. This is a company that knows the meaning of rush order and knows how to take care of a customer!",
    name: "Town Administrator",
    title: "Municipal Customer",
  },
  {
    quote: "In a world where there can be so much difficulty, you made this transaction so smooth. It is gorgeous!! Perfect as a matter of fact! Thank you, Thank you!",
    name: "Anne Fox",
    title: "Administrative Assistant, Historical Society of Ocean Grove",
  },
  {
    quote: "Very much ahead of schedule and above our expectations on quality. Thank you!",
    name: "Brian Yi",
    title: "Director of Investments",
  },
  {
    quote: "The quality of the plaque is outstanding and is only surpassed by the service you provided during the ordering process. Thank you very much!",
    name: "John Gaudet",
    title: "J. Gaudet Associates, Inc.",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 justify-center mb-6">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-gold fill-current" />
      ))}
    </div>
  );
}

export default function TestimonialCarousel({ testimonials = realTestimonials }) {
  const safeTestimonials = Array.isArray(testimonials) && testimonials.length > 0 ? testimonials : realTestimonials;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % safeTestimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [safeTestimonials.length]);

  const prev = () => setCurrent((c) => (c - 1 + safeTestimonials.length) % safeTestimonials.length);
  const next = () => setCurrent((c) => (c + 1) % safeTestimonials.length);

  return (
    <section className="py-24 bg-stone-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bronze/5 to-transparent" />
      <div className="max-w-4xl mx-auto px-6 relative">
        <FadeIn>
          <div className="text-center">
            <Quote className="w-10 h-10 text-bronze/40 mx-auto mb-4" />
            <Stars />
            <div className="min-h-[200px] flex items-center justify-center">
              <div key={current}>
                <p className="font-serif text-xl md:text-2xl leading-relaxed text-gray-900 italic">
                  "{safeTestimonials[current].quote}"
                </p>
                <div className="mt-8">
                  <p className="font-sans text-bronze-dark text-sm tracking-[0.2em] uppercase font-semibold">
                     {safeTestimonials[current].name}
                   </p>
                   <p className="font-sans text-gray-600 text-sm mt-1">
                     {safeTestimonials[current].title}
                   </p>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-6 mt-10">
              <button onClick={prev} className="w-10 h-10 rounded-sm border border-bronze/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors text-gray-700">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex gap-2">
                {safeTestimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${i === current ? "bg-gold w-6" : "bg-gray-300 w-2"}`}
                  />
                ))}
              </div>
              <button onClick={next} className="w-10 h-10 rounded-sm border border-bronze/30 flex items-center justify-center hover:border-gold hover:text-gold transition-colors text-gray-700">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <p className="text-gray-500 font-sans text-xs uppercase tracking-widest mt-6">Over 1,600 Five-Star Reviews</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}