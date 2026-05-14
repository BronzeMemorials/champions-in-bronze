import { useState, useRef } from "react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Send, CheckCircle, Loader2 } from "lucide-react";
import FadeIn from "./FadeIn";

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

  return (
    <section className="py-28 bg-gray-50" id="quote">
      <div className="max-w-2xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-yellow-600 font-sans tracking-[0.3em] uppercase text-xs font-semibold">Begin Your Recognition Project</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 text-gray-900">{title}</h2>
            {subtitle && <p className="mt-4 text-gray-500 text-lg">{subtitle}</p>}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-6 bg-white border border-bronze/40 shadow-2xl p-8 md:p-12" style={{boxShadow: "0 8px 40px rgba(90,40,10,0.22), 0 2px 8px rgba(90,40,10,0.12)"}}>
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
              <label className={labelClass}>Additional Notes <span className="normal-case text-parchment/30">(optional)</span></label>
              <Textarea value={form.description} onChange={(e) => handleChange("description", e.target.value)}
                className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-yellow-500 min-h-[100px]"
                placeholder="Any specific requirements, sport, size, or project details..." />
            </div>

            {/* File Upload */}
            <div>
              <label className={labelClass}>Reference Photos & Files <span className="normal-case text-parchment/30">(optional)</span></label>
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
      </div>
    </section>
  );
}