import { useState, useRef, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Send, CheckCircle, Loader2, Phone, Shield, Award, Clock, Star, Users, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import FadeIn from "./FadeIn";
import { Link } from "react-router-dom";
import { useABTest } from "@/hooks/useABTest";

const testimonials = [
  { quote: "IT IS HARD TO FIND GREAT CUSTOMER SERVICE THESE DAYS AND YOUR COMPANY HAS IT. From start to finish things have been painless. Our order is on its way before the due date.", name: "Susan Martel" },
  { quote: "The plaque is absolutely perfect. Now because of Bronze Memorials I get to see that beautiful smile every morning as I walk through the front door. Thank you for your amazing work!", name: "Carol Barona" },
  { quote: "It is breathtaking! I can't wait for it to be unveiled. I am going to recommend you to our philanthropic donors who are always looking for exceptional craftsmanship.", name: "Renae Spurgeon" },
  { quote: "Beautiful plaques and excellent customer service. The plaques exceeded my expectations. Your customer service was exceptional, with prompt and helpful responses.", name: "Chelsea" },
  { quote: "The two plaques have arrived, on time and exactly as promised. They are spectacular. They will be very handsome at our airport for the next fifty years or more.", name: "Mike Jones", role: "Moore County Airport Authority" },
  { quote: "We are very pleased with the finished plaque. Exceptionally quick responses during the proofing process. We met our 35th anniversary deadline. Would absolutely come back.", name: "Monique Monroe", role: "Purchasing Manager" },
  { quote: "In a world where there can be so much difficulty, you made this transaction so smooth. It is gorgeous!! Perfect as a matter of fact! Thank you, Thank you!", name: "Anne Fox" },
  { quote: "Very much ahead of schedule and above our expectations on quality. Thank you!", name: "Brian Yi", role: "Director of Investments" },
  { quote: "Bronze Memorials has saved my job and saved our town from a major embarrassment. Jim, the President himself, assured us he could turn it around in time. This is a company that knows the meaning of rush order!", name: "Jim", role: "Town Administrator" },
  { quote: "Bronzememorials.net is a lifesaver! I am very appreciative and would recommend your company to anyone in a similar situation. The plaque arrived quickly and looks outstanding.", name: "Jim", role: "" },
];

function ReviewCarousel() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const t = testimonials[current];
  return (
    <div className="bg-white border-2 border-white p-6">
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 text-yellow-500 fill-current" />)}
      </div>
      <Quote className="w-6 h-6 text-yellow-500/40 mb-2" />
      <p className="text-black font-serif text-base leading-relaxed min-h-[80px]">"{t.quote}"</p>
      <div className="mt-4">
        <p className="text-yellow-700 font-sans text-base uppercase tracking-widest font-semibold">{t.name}</p>
        {t.role && <p className="text-gray-600 font-sans text-base mt-0.5">{t.role}</p>}
      </div>
      <div className="flex items-center gap-3 mt-4">
        <button onClick={prev} className="w-7 h-7 border border-white flex items-center justify-center hover:border-yellow-500 hover:text-yellow-600 text-black transition-colors">
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>
        <div className="flex gap-1.5 flex-1">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-yellow-500 w-5" : "bg-black w-1.5"}`} />
          ))}
        </div>
        <button onClick={next} className="w-7 h-7 border border-white flex items-center justify-center hover:border-yellow-500 hover:text-yellow-600 text-black transition-colors">
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
      <div className="mt-4 pt-4 border-t border-white flex items-center justify-between">
        <p className="text-black font-sans text-base uppercase tracking-widest">1,600+ Five-Star Reviews</p>
        <Link to="/reviews" className="text-yellow-700 hover:text-yellow-600 font-sans text-base uppercase tracking-widest font-semibold transition-colors">
          Read All →
        </Link>
      </div>
    </div>
  );
}

export default function QuoteForm({ title = "Request Concept Design", subtitle, source = "pro" }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", description: "" });
  const [files, setFiles] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [clickTracked, setClickTracked] = useState(false);
  const fileRef = useRef(null);
  const { variant: abVariant, trackConversion, trackClick } = useABTest();

  const handleChange = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));
  const handleFiles = (e) => setFiles((prev) => [...prev, ...Array.from(e.target.files)]);
  const removeFile = (idx) => setFiles((prev) => prev.filter((_, i) => i !== idx));

  const handleFormClick = () => {
    if (!clickTracked) {
      setClickTracked(true);
      trackClick();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    let file_urls = [];
    for (const file of files) {
      const result = await base44.integrations.Core.UploadFile({ file });
      file_urls.push(result.file_url);
    }
    await base44.entities.QuoteRequest.create({ ...form, file_urls, source_domain: source });
    await trackConversion();
    setSubmitting(false);
    setSubmitted(true);
  };

  const labelClass = "text-base text-black uppercase tracking-wider font-sans mb-2 block font-semibold";

  if (submitted) {
    return (
      <section className="py-28 bg-white" id="quote">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <FadeIn>
            <CheckCircle className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
            <h2 className="font-serif text-4xl text-black">Recognition Project Received</h2>
            <p className="text-black mt-4 text-lg leading-relaxed">
              Our team will review your project details and deliver an artwork proof within the hour. Institutional grade. Delivered on time.
            </p>
          </FadeIn>
        </div>
      </section>
    );
  }

  const whyUs = [
    { icon: Shield, title: "Exact Photo Likeness", desc: "Proprietary Photo ImageCasting process — your real photos cast permanently in bronze." },
    { icon: Clock, title: "Artwork Proof Within The Hour", desc: "Digital proof of your custom design delivered within the hour — no commitment required." },
    { icon: Award, title: "Museum-Quality Craftsmanship", desc: "Institutional-grade bronze manufactured to last 100+ years outdoors." },
    { icon: Users, title: "Over 50,000 Satisfied Customers", desc: "Don't believe us? Read our reviews!" },
    { icon: Star, title: "Bronze Plaques & Busts Made in the USA", desc: "100% Made in America. No tariffs. Been in business for over 50 years." },
  ];

  return (
    <section className="py-10 md:py-14 bg-white" id="quote">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="text-center mb-8">
            <span className="text-yellow-600 font-sans tracking-[0.3em] uppercase text-base font-semibold">Begin Your Recognition Project</span>
            <h2 className="font-serif text-3xl md:text-4xl mt-2 text-black">{title}</h2>
            {subtitle && <p className="mt-2 text-black text-base">{subtitle}</p>}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 lg:items-stretch">
          {/* LEFT — Form */}
          <FadeIn delay={0.2} className="h-full flex flex-col">
            {/* A/B Test Title Block */}
            {abVariant && (
              <div className="mb-3 bg-bronze/10 border border-bronze/30 px-6 py-3 text-center">
                <p className="font-serif text-xl md:text-2xl text-black leading-tight">{abVariant}</p>
              </div>
            )}
            <form onSubmit={handleSubmit} onClick={handleFormClick} className="flex flex-col flex-1 space-y-3 bg-white border-2 border-bronze/40 shadow-2xl p-4 sm:p-6 md:p-8" style={{boxShadow: "0 8px 40px rgba(90,40,10,0.22), 0 2px 8px rgba(90,40,10,0.12)"}}>
              <div>
                <label className={labelClass}>Full Name *</label>
                <Input required value={form.name} onChange={(e) => handleChange("name", e.target.value)}
                  className="bg-white border-white text-black placeholder:text-black focus:border-yellow-500 h-10"
                  placeholder="John Mitchell" />
              </div>
              <div>
                <label className={labelClass}>Email *</label>
                <Input required type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)}
                  className="bg-white border-white text-black placeholder:text-black focus:border-yellow-500 h-10"
                  placeholder="john@organization.com" />
              </div>
              <div>
                <label className={labelClass}>Phone</label>
                <Input value={form.phone} onChange={(e) => handleChange("phone", e.target.value)}
                  className="bg-white border-white text-black placeholder:text-black focus:border-yellow-500 h-10"
                  placeholder="(555) 123-4567" />
              </div>
              <div>
                <label className={labelClass}>Additional Notes <span className="normal-case text-black font-normal">(optional)</span></label>
                <Textarea value={form.description} onChange={(e) => handleChange("description", e.target.value)}
                  className="bg-white border-white text-black placeholder:text-black focus:border-yellow-500 min-h-[72px]"
                  placeholder="Any specific requirements, sport, size, or project details..." />
              </div>

              <div>
                <label className={labelClass}>Reference Photos & Files <span className="normal-case text-black font-normal">(optional)</span></label>
                <div onClick={() => fileRef.current?.click()}
                  className="border-2 border-dashed border-white hover:border-yellow-400 transition-colors p-4 text-center cursor-pointer bg-white">
                  <Upload className="w-6 h-6 text-black mx-auto mb-2" />
                  <p className="text-black text-sm font-medium">Upload photos, reference images, or project briefs</p>
                  <p className="text-black text-base mt-0.5">PDF, JPG, PNG up to 25MB each</p>
                </div>
                <input ref={fileRef} type="file" multiple accept=".pdf,.jpg,.jpeg,.png,.webp" onChange={handleFiles} className="hidden" />
                {files.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {(Array.isArray(files) ? files : []).map((file, i) => (
                      <div key={i} className="flex items-center justify-between bg-white border border-white px-4 py-2">
                         <span className="text-black text-sm truncate">{file.name}</span>
                         <button type="button" onClick={() => removeFile(i)} className="text-black hover:text-red-500 text-base ml-4">Remove</button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Button type="submit" disabled={submitting}
                className="w-full min-h-11 h-auto py-3 px-4 text-black font-sans uppercase tracking-[0.15em] text-base sm:text-sm font-semibold transition-all duration-300" style={{background: "linear-gradient(135deg, #B8860B 0%, #DAA520 30%, #FFD700 50%, #DAA520 70%, #B8860B 100%)"}}>
                {submitting
                  ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting Request…</>
                  : <><Send className="w-4 h-4 mr-2 flex-shrink-0" /> <span className="whitespace-normal text-center leading-tight text-wrap break-words">Request Quote — Artwork Within The Hour</span></>
                }
              </Button>
              <p className="text-center text-black text-base font-sans font-medium">
                Museum-quality artwork proof delivered within the hour. No commitment required.
              </p>
            </form>
          </FadeIn>

          {/* RIGHT — Trust panel */}
          <FadeIn delay={0.35} className="h-full flex flex-col">
            <div className="flex flex-col gap-4 h-full">
              {/* Phone CTA */}
              <a href="tel:7723090412" className="flex items-center gap-4 bg-white hover:bg-gray-50 transition-colors px-5 py-4 border-2 border-gray-200 group">
                <img src="https://media.base44.com/images/public/69e6638934292a547ec97753/07d72101a_ChatGPTImageMay14202609_54_24AM.png" alt="Champions in Bronze ring" className="w-10 h-10 object-contain flex-shrink-0" />
                <div>
                  <p className="text-black font-sans text-base uppercase tracking-widest font-semibold">We Answer The Phone</p>
                  <p className="text-black font-serif text-xl mt-0.5">772-309-0412</p>
                  <p className="text-black font-sans text-base mt-0.5">Call for a direct answer — right now</p>
                </div>
              </a>

              {/* Rotating Testimonial */}
              <ReviewCarousel />

              {/* Why us bullets */}
              <div className="bg-white border-2 border-white shadow-sm p-5 space-y-3 flex-1 flex flex-col justify-start">
                <p className="font-serif text-base text-black border-b border-yellow-200 pb-3">Why Organizations Choose Us</p>
                {(Array.isArray(whyUs) ? whyUs : []).map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-sm bg-yellow-50 border border-yellow-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-3.5 h-3.5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-sans text-base font-bold text-black">{item.title}</p>
                      <p className="text-black text-base mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>


            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}