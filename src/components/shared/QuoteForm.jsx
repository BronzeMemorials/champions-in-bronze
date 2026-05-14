import { useState, useRef } from "react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Send, CheckCircle, Loader2, Phone, Shield, Award, Clock, Star, Users } from "lucide-react";
import FadeIn from "./FadeIn";
import { Link } from "react-router-dom";

export default function QuoteForm({ title = "Request Concept Design", subtitle, source = "pro" }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", description: "" });
  const [files, setFiles] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef(null);

  const handleChange = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));
  const handleFiles = (e) => setFiles((prev) => [...prev, ...Array.from(e.target.files)]);
  const removeFile = (idx) => setFiles((prev) => prev.filter((_, i) => i !== idx));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    let file_urls = [];
    for (const file of files) {
      const result = await base44.integrations.Core.UploadFile({ file });
      file_urls.push(result.file_url);
    }
    await base44.entities.QuoteRequest.create({
      ...form,
      file_urls,
      source_domain: source,
    });
    setSubmitting(false);
    setSubmitted(true);
  };

  const labelClass = "text-xs text-gray-500 uppercase tracking-wider font-sans mb-2 block";

  if (submitted) {
    return (
      <section className="py-28 bg-gray-50" id="quote">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <FadeIn>
            <CheckCircle className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
            <h2 className="font-serif text-4xl text-gray-900">Recognition Project Received</h2>
            <p className="text-gray-500 mt-4 text-lg leading-relaxed">
              Our team will review your project details and deliver an artwork proof within the hour. Institutional grade. Delivered on time.
            </p>
          </FadeIn>
        </div>
      </section>
    );
  }

  const whyUs = [
    { icon: Clock, title: "Artwork Proof Within The Hour", desc: "Digital proof of your custom design delivered within the hour — no commitment required." },
    { icon: Award, title: "Museum-Quality Craftsmanship", desc: "Institutional-grade bronze manufactured to last 100+ years outdoors." },
    { icon: Shield, title: "Exact Photo Likeness", desc: "Proprietary Photo ImageCasting process — your real photos cast permanently in bronze." },
    { icon: Users, title: "500+ Institutional Installations", desc: "Trusted by universities, stadiums, and Hall of Fame programs nationwide." },
    { icon: Star, title: "Made in the USA", desc: "American foundry. Every piece sculpted and cast on U.S. soil." },
  ];

  return (
    <section className="py-28 bg-gray-50" id="quote">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-yellow-600 font-sans tracking-[0.3em] uppercase text-xs font-semibold">Begin Your Recognition Project</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 text-gray-900">{title}</h2>
            {subtitle && <p className="mt-4 text-gray-500 text-lg">{subtitle}</p>}
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* LEFT — Form */}
          <FadeIn delay={0.2} className="h-full">
            <form onSubmit={handleSubmit} className="h-full space-y-6 bg-white border-2 border-navy-800 shadow-2xl p-8 md:p-10" style={{borderColor: "#1e3a5f", boxShadow: "0 8px 40px rgba(90,40,10,0.22), 0 2px 8px rgba(90,40,10,0.12)"}}>
              <div>
                <label className={labelClass}>Full Name *</label>
                <Input required value={form.name} onChange={(e) => handleChange("name", e.target.value)}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-yellow-500 h-12"
                  placeholder="John Mitchell" />
              </div>
              <div>
                <label className={labelClass}>Email *</label>
                <Input required type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-yellow-500 h-12"
                  placeholder="john@organization.com" />
              </div>
              <div>
                <label className={labelClass}>Phone</label>
                <Input value={form.phone} onChange={(e) => handleChange("phone", e.target.value)}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-yellow-500 h-12"
                  placeholder="(555) 123-4567" />
              </div>
              <div>
                <label className={labelClass}>Additional Notes <span className="normal-case text-gray-400">(optional)</span></label>
                <Textarea value={form.description} onChange={(e) => handleChange("description", e.target.value)}
                  className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-yellow-500 min-h-[100px]"
                  placeholder="Any specific requirements, sport, size, or project details..." />
              </div>

              <div>
                <label className={labelClass}>Reference Photos & Files <span className="normal-case text-gray-400">(optional)</span></label>
                <div onClick={() => fileRef.current?.click()}
                  className="border-2 border-dashed border-gray-300 hover:border-yellow-400 transition-colors p-8 text-center cursor-pointer bg-gray-50">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-400 text-sm">Upload photos, reference images, or project briefs</p>
                  <p className="text-gray-300 text-xs mt-1">PDF, JPG, PNG up to 25MB each</p>
                </div>
                <input ref={fileRef} type="file" multiple accept=".pdf,.jpg,.jpeg,.png,.webp" onChange={handleFiles} className="hidden" />
                {files.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {files.map((file, i) => (
                      <div key={i} className="flex items-center justify-between bg-gray-100 border border-gray-200 px-4 py-2">
                        <span className="text-gray-600 text-sm truncate">{file.name}</span>
                        <button type="button" onClick={() => removeFile(i)} className="text-gray-400 hover:text-red-500 text-xs ml-4">Remove</button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Button type="submit" disabled={submitting}
                className="w-full h-14 text-gray-900 font-sans uppercase tracking-[0.2em] text-sm font-semibold transition-all duration-300" style={{background: "linear-gradient(135deg, #B8860B 0%, #DAA520 30%, #FFD700 50%, #DAA520 70%, #B8860B 100%)"}}>
                {submitting
                  ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting Request…</>
                  : <><Send className="w-4 h-4 mr-2" /> Request Quote — Artwork Within The Hour</>
                }
              </Button>
              <p className="text-center text-gray-400 text-xs font-sans">
                Museum-quality artwork proof delivered within the hour. No commitment required.
              </p>
            </form>
          </FadeIn>

          {/* RIGHT — Trust panel */}
          <FadeIn delay={0.35} className="h-full">
            <div className="flex flex-col gap-6 h-full">
              {/* Product photo */}
              <div className="relative overflow-hidden rounded-sm shadow-lg">
                <img
                  src="https://media.base44.com/images/public/69e6638934292a547ec97753/f9ff2eea2_1FD764A1-3FE3-43F7-B620-ECD28F936C38.png"
                  alt="Hall of Fame Bronze Plaque"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="font-serif text-white text-xl leading-tight">Museum-Quality Bronze.<br />Delivered on Time.</p>
                  <p className="text-white/70 font-sans text-xs uppercase tracking-widest mt-1">Hall of Fame — Donor — Championship</p>
                </div>
              </div>

              {/* Phone CTA */}
              <a href="tel:7724184353" className="flex items-center gap-4 bg-gray-900 hover:bg-gray-800 transition-colors px-6 py-5 border border-gray-700 group">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{background: "linear-gradient(135deg, #B8860B 0%, #FFD700 50%, #B8860B 100%)"}}>
                  <Phone className="w-5 h-5 text-gray-900" />
                </div>
                <div>
                  <p className="text-white/60 font-sans text-xs uppercase tracking-widest">We Answer The Phone</p>
                  <p className="text-white font-serif text-2xl mt-0.5">772-418-4353</p>
                  <p className="text-white/50 font-sans text-xs mt-0.5">Call for a direct answer — right now</p>
                </div>
              </a>

              {/* Why us bullets */}
              <div className="bg-white border-2 border-gray-200 shadow-sm p-7 space-y-5 flex-1">
                <p className="font-serif text-lg text-gray-900 border-b border-bronze/15 pb-4">Why Organizations Choose Us</p>
                {whyUs.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-sm bg-yellow-50 border border-yellow-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-yellow-600" />
                    </div>
                    <div>
                      <p className="font-sans text-sm font-semibold text-gray-900">{item.title}</p>
                      <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Secondary CTA */}
              <Link to="/reviews" className="inline-flex items-center justify-center gap-2 border-2 border-bronze/40 hover:border-bronze text-gray-700 hover:text-gray-900 px-6 py-4 font-sans text-xs uppercase tracking-[0.15em] transition-all duration-300 text-center">
                Read Our 1,600+ Five-Star Reviews →
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}