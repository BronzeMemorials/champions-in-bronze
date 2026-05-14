import { Star, Quote } from "lucide-react";
import FadeIn from "../components/shared/FadeIn";
import SEOHead from "../components/shared/SEOHead";

const reviews = [
  { heading: "IT IS HARD TO FIND GREAT CUSTOMER SERVICE THESE DAYS AND YOUR COMPANY HAS IT.", quote: "Just wanted to let you know how happy we are with your company and what a great job the team has done for us. They have been on top of it and keeping us in the loop every step of the way. From start to finish things have been painless. Our order is on its way before the due date. Our customer is going to be very pleased. It is hard to find great customer service these days and your company has it. Great work to the whole team.", name: "Susan Martel", role: "", date: "September 22, 2025" },
  { heading: "BEAUTIFUL PLAQUES AND EXCELLENT CUSTOMER SERVICE", quote: "I am writing to express my sincere gratitude for the beautiful plaques you created. I was particularly impressed with the quality of the craftsmanship and attention to detail. The plaques exceeded my expectations, and I appreciate your commitment to excellence. Your customer service was also exceptional, with prompt and helpful responses to my inquiries. I will definitely recommend your services to others. I look forward to ordering from you again in the future.", name: "Chelsea", role: "", date: "March 22, 2025" },
  { heading: "Thank you Bronze Memorials for your amazing work!", quote: "I want to thank you for the beautiful work Bronze Memorials did for me. I lost my mom unexpectedly to Cancer and I wanted a way for everyone to remember what she has done for our Community. The plaque is absolutely perfect. The minute I opened it and saw her beautiful smile I couldn't stop crying. Your work is amazing and now I get to see that beautiful smile every morning as I walk through the front door, where she and I worked together for 30 years.", name: "Carol Barona", role: "", date: "2024" },
  { heading: "IT IS BREATHTAKING — EXCEPTIONAL CRAFTSMANSHIP", quote: "It is breathtaking! I'm crying and snotting all over the place. I can't wait for it to be unveiled. Thank you so much. This is such a perfect memorial! I am going to leave your contact information with our Chamber of Commerce and recommend you to our philanthropic donors who are always looking for exceptional craftsmanship.", name: "Renae Spurgeon", role: "", date: "May 24, 2024" },
  { heading: "IT IS BEAUTIFUL", quote: "Received the plaque. IT IS BEAUTIFUL. I know there will be many tears when it is seen by the church family and especially our pastor, the great-grandfather. Thank you so much for all your help.", name: "Peggy Stovall", role: "", date: "2024" },
  { heading: "EXCEPTIONALLY QUICK RESPONSES DURING THE PROOFING", quote: "We are very pleased with the finished plaque. I appreciate you working with us to get the most detailed version of our logo possible based on the media, and for the exceptionally quick responses during the proofing process. We were able to meet the deadline for this plaque to be presented to the company for our 35th anniversary next week. We will be sure to refer anyone interested in a plaque to Bronze Memorials, and would absolutely come back for future needs.", name: "Monique Monroe", role: "Purchasing Manager", date: "April 1, 2024" },
  { heading: "ARRIVED ON TIME AND EXACTLY AS PROMISED", quote: "HUGE news… the two plaques have arrived, on time and exactly as promised. They are spectacular. Just the right size, great color, very impressive. They will be very handsome at our airport for the next fifty years or more. I'll send some photos of the dedication ceremony. Tell the team WELL DONE!", name: "Mike Jones", role: "Moore County Airport Authority", date: "June 29, 2023" },
  { heading: "IN A WORLD WHERE THERE CAN BE SO MUCH DIFFICULTY, YOU MADE THIS TRANSACTION SO SMOOTH.", quote: "I would just like to thank you for being such a great help with having our house plaque made. I should have emailed you sooner, but it is gorgeous!! Perfect as a matter of fact! Besides all of that, in a world where there can be so much difficulty, you made this transaction so smooth. Thank you, Thank you!", name: "Anne Fox", role: "Administrative Assistant, Historical Society of Ocean Grove", date: "March 22, 2023" },
  { heading: "Bronze Memorials is a LIFESAVER!", quote: "Thanks for your help and your great service. The plaque arrived in Los Angeles about 30 minutes ago and should be delivered to me by early afternoon. Bronzememorials.net is a lifesaver! I am very appreciative and would recommend your company to anyone in a similar situation.", name: "Mark Gallatin", role: "", date: "March 31, 2023" },
  { heading: "VERY MUCH AHEAD OF SCHEDULE AND ABOVE OUR EXPECTATIONS", quote: "Wanted to thank you again for the quick turnaround on this. Very much ahead of schedule and above our expectations on quality. Thank you!", name: "Brian Yi", role: "Director of Investments", date: "May 17, 2022" },
  { heading: "SUCH A PROFESSIONAL AND EXQUISITE JOB", quote: "Just as you had promised, the bronze plaque looks spectacular — and both the Class and the School are very pleased with how it turned out! I know it wasn't the easiest design — but extremely meaningful to my classmates — so thanks very much for doing such a professional and exquisite job.", name: "Barry", role: "", date: "March 31, 2022" },
  { heading: "THANK YOU VERY MUCH FOR YOUR PATIENCE", quote: "The plaque is gorgeous and Dr. Witt is so very pleased!! Thank you very much for your patience throughout this endeavor. It was definitely worth it. You are the best!", name: "Laura Lee", role: "", date: "February 12, 2021" },
  { heading: "IT EXCEEDED OUR EXPECTATIONS!", quote: "The plaque has arrived and it is magnificent! It exceeded our expectations, and you can quote me! THANK YOU — we'll use you again and again.", name: "Andrea", role: "", date: "February 12, 2021" },
  { heading: "A GREAT COMPANY WITH WHOM TO DO BUSINESS!", quote: "Very responsive to customer needs when ordering, also good production time. A great company with whom to do business!", name: "Verified Customer", role: "", date: "April 15, 2019" },
  { heading: "Folks like you are so rare these days", quote: "Thank you so very much for your endless patience and kindness towards me. Folks like you are so rare these days — it just makes meeting you so enjoyable!!! My brother agrees — guess in this fast pace world you could call us 'Old School'.", name: "John", role: "", date: "July 4, 2020" },
  { heading: "I WAS REALLY EXPECTING A MUCH LONGER WAIT!", quote: "That's amazing! I was really expecting a much longer wait! I've told the story you shared about your involvement in your family business to several friends and family, and they all appreciated the story, and thought that this whole project would have meant that much more to my dad.", name: "Frank", role: "", date: "2021" },
  { heading: "WOW! We are very impressed by the quality of the work", quote: "We just received the Dedication Plaque for our new Adoration Chapel. WOW! We are very impressed by the quality of the work and very much appreciate the service you have given and the quick time you have taken to get it installed before the Great Day. Thank you from the whole parish!", name: "Father Fred Riccio", role: "Pastor, St. Mary", date: "November 6, 2019" },
  { heading: "QUALITY WORK AND GOING THE EXTRA MILE", quote: "I want to thank you for your quality work and going the extra mile to get the plaques here on time. They look great.", name: "Ted B.", role: "", date: "June 24, 2019" },
  { heading: "YOU ARE A MAN WHO KEEPS HIS WORD!", quote: "You are a man who keeps his word! We received the plaque against a pretty short deadline and are extremely pleased with the product. We are very happy with what you and your company have provided both in quality and timeliness.", name: "Major John Porambo", role: "United States Army", date: "2019" },
  { heading: "MOST ELEGANT AND SOPHISTICATED PLAQUES", quote: "We received the two plaques today. They are the most elegant and sophisticated plaques I have ever seen and the color selection is so classy. The finish is truly beautiful. Thank you from my heart for providing this replacement for us. It means so much to have a dignified memorial.", name: "Trish Evers", role: "", date: "May 2, 2019" },
  { heading: "WE CAN SEE WHY YOU HAVE BEEN IN BUSINESS FOR SO LONG", quote: "The plaque arrived and it is even more breathtaking than I thought it would be! I really appreciate the advice and guidance you gave me during the whole process. We can see why you have been in business for so long — you really care about the people you serve and strive for the best work you can provide. This says a lot about a company.", name: "Rhonda Dennis", role: "", date: "2019" },
  { heading: "Mistakes happen but your remedy is UNPRECEDENTED", quote: "I want to thank you for the unbelievable outstanding customer service you and your company provided to me. I understand mistakes happen but your remedy is unprecedented. I cannot thank you enough for the way my situation was handled. You have far exceeded all of my expectations. All I can say is you and your company are great!", name: "Mary Appling", role: "", date: "2018" },
  { heading: "YOUR INFINITE PATIENCE", quote: "Thank you for all your help and your infinite patience in creating our plaque. Your swift answers and knowledge made this an easy task. I will send you pictures when we get it up at the hospital. Thank you again.", name: "Julie Sterling", role: "", date: "April 8, 2019" },
  { heading: "YOURS IS A CUT ABOVE THE OTHERS", quote: "I received my order today and I want to tell you the quality of the plaque exceeded what I expected. I should also note that there are many plaques in our historic area, but yours is a cut above the others. Dealing with you over the phone from Michigan was just about as smooth as it gets and the speed of delivery was excellent.", name: "David Lightner", role: "Omena, Michigan", date: "July 24, 2019" },
  { heading: "The plaque for Jason left me speechless", quote: "The plaque for Jason left me speechless. As much as I tried to imagine what it might look like, my wildest dreams never even came close to comparing with the real thing. Thank you so much for your part in this memorial.", name: "Hervé Dauvergne", role: "", date: "2019" },
  { heading: "Such integrity in business", quote: "It is a pleasure doing business with you. Such integrity in business as you are showing is in short supply these days. If I can ever offer a recommendation for your business, please show me how.", name: "Fred Wideman", role: "", date: "July 23, 2019" },
  { heading: "...beautiful craftsmanship, superb design", quote: "I just received BEAUTIFUL plaque. It was all I'd hoped for and more! I am so glad I went with your company — beautiful craftsmanship, superb design. THANK YOU SO MUCH.", name: "James Stengel", role: "", date: "September 5, 2019" },
  { heading: "BIG THANKS FOR AN OUTSTANDING JOB", quote: "A big thanks to the staff for an outstanding job. The plaque, which will honor my great-great grandfather, will be placed at the entrance to the Brick Cemetery. It is truly beautiful and will be there for many years honoring his kindness to his community. I will highly recommend your company to anyone who needs a plaque made!", name: "Verified Customer", role: "", date: "December 12, 2019" },
  { heading: "RECEIVED, ON TIME AND EXACTLY AS PROMISED", quote: "We just received the plaque in perfect shape and it looked beautiful. It is mounted in the memorial garden site and looks amazing there. Thank you for your assistance in honoring her memory.", name: "Pete", role: "", date: "June 13, 2023" },
  { heading: "THANK YOU FOR A FANTASTIC PRODUCT", quote: "We would like to personally thank Bronze Memorials for a fantastic product that is proudly displayed on our podium of our recently constructed Training Center. Also like to personally thank you for your diligence, professionalism, and timeliness. Your service was unquestionable and excellent. A+ quality, service, follow-up.", name: "Pat Caulfield, P.E.", role: "Executive Director, Schuylkill County Municipal Authority", date: "2019" },
];

function StarRow() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <div className="bg-white">
      <SEOHead
        title="Customer Reviews — Bronze Memorials | 1,600+ Five-Star Reviews"
        description="Read real, unsolicited customer reviews for Bronze Memorials. Over 1,600 five-star reviews from universities, stadiums, municipalities, and individuals nationwide."
        canonical="/reviews"
      />

      {/* Hero */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <FadeIn>
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
              ))}
            </div>
            <h1 className="font-serif text-5xl md:text-6xl text-white">Our Customers Say It Best</h1>
            <p className="mt-4 text-white/60 text-lg font-sans">Over 1,600 unsolicited five-star reviews. Real people. Real projects. Real results.</p>
            <div className="flex flex-wrap justify-center gap-8 mt-10">
              {["1,600+ Reviews", "5-Star Average", "50 Years in Business", "Made in the USA"].map((stat) => (
                <div key={stat} className="text-center">
                  <p className="text-yellow-400 font-serif text-lg">{stat}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <FadeIn key={i} delay={i * 0.03}>
                <div className="bg-white border border-gray-200 p-6 flex flex-col h-full shadow-sm hover:shadow-md hover:border-yellow-400 transition-all duration-300">
                  <StarRow />
                  <p className="font-serif text-sm text-gray-900 font-semibold mt-3 mb-3 leading-snug">"{review.heading}"</p>
                  <p className="text-gray-600 text-sm leading-relaxed flex-1">"{review.quote}"</p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="font-sans text-xs font-semibold text-gray-900 uppercase tracking-wide">{review.name}</p>
                    {review.role && <p className="text-gray-400 text-xs mt-0.5">{review.role}</p>}
                    {review.date && <p className="text-gray-300 text-xs mt-0.5">{review.date}</p>}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-gray-900 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <FadeIn>
            <Quote className="w-10 h-10 text-yellow-500/40 mx-auto mb-6" />
            <h2 className="font-serif text-4xl text-white">Ready to Experience It Yourself?</h2>
            <p className="text-white/60 mt-4 text-lg">Call us directly — we answer the phone.</p>
            <a href="tel:7724184353" className="inline-flex items-center gap-3 mt-8 text-gray-900 px-10 py-5 font-sans text-sm uppercase tracking-[0.2em] font-semibold"
              style={{background: "linear-gradient(135deg, #B8860B 0%, #DAA520 30%, #FFD700 50%, #DAA520 70%, #B8860B 100%)"}}>
              Call 772-418-4353
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}