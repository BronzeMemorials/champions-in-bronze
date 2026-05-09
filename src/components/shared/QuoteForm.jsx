import { useState, useRef } from "react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Send, CheckCircle, Loader2 } from "lucide-react";
import FadeIn from "./FadeIn";

export default function QuoteForm({ title = "Request Concept Design", subtitle, source = "pro" }) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", organization: "",
    who_for: "", project_type: "", display_location: "",
    preferred_size: "", budget_range: "", timeline: "", description: "",
  });
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
      description: `WHO: ${form.who_for} | LOCATION: ${form.display_location} | SIZE: ${form.preferred_size}\n\n${form.description}`,
    });
    setSubmitting(false);
    setSubmitted(true);
  };

  const selectClass = "bg-white border-bronze/30 text-parchment h-12";
  const labelClass = "text-xs text-parchment/50 uppercase tracking-wider font-sans mb-2 block";

  if (submitted) {
    return (
      <section className="py-28 bg-secondary/30" id="quote">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <FadeIn>
            <CheckCircle className="w-16 h-16 text-bronze mx-auto mb-6" />
            <h2 className="font-serif text-4xl text-parchment">Legacy Commission Received</h2>
            <p className="text-parchment/60 mt-4 text-lg leading-relaxed">
              Our team will review your project details and deliver a concept design proof within 48 hours. Built for champions. Delivered on time.
            </p>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section className="py-28 bg-secondary/30" id="quote">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-bronze font-sans tracking-[0.3em] uppercase text-xs font-semibold">Begin Your Legacy Commission</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 text-parchment">{title}</h2>
            {subtitle && <p className="mt-4 text-parchment/60 text-lg">{subtitle}</p>}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-6 bg-white border border-bronze/20 shadow-sm p-8 md:p-12">
            {/* Contact */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelClass}>Full Name *</label>
                <Input required value={form.name} onChange={(e) => handleChange("name", e.target.value)}
                  className="bg-white border-bronze/30 text-parchment placeholder:text-parchment/30 focus:border-bronze h-12"
                  placeholder="John Mitchell" />
              </div>
              <div>
                <label className={labelClass}>Email *</label>
                <Input required type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)}
                  className="bg-white border-bronze/30 text-parchment placeholder:text-parchment/30 focus:border-bronze h-12"
                  placeholder="john@organization.com" />
              </div>
              <div>
                <label className={labelClass}>Phone</label>
                <Input value={form.phone} onChange={(e) => handleChange("phone", e.target.value)}
                  className="bg-white border-bronze/30 text-parchment placeholder:text-parchment/30 focus:border-bronze h-12"
                  placeholder="(555) 123-4567" />
              </div>
              <div>
                <label className={labelClass}>Organization</label>
                <Input value={form.organization} onChange={(e) => handleChange("organization", e.target.value)}
                  className="bg-white border-bronze/30 text-parchment placeholder:text-parchment/30 focus:border-bronze h-12"
                  placeholder="Team / University / Stadium" />
              </div>
            </div>

            {/* Qualification */}
            <div className="border-t border-bronze/10 pt-6">
              <p className="text-bronze font-sans text-xs uppercase tracking-[0.2em] mb-6">Project Details</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>This commission is for *</label>
                  <Select value={form.who_for} onValueChange={(v) => handleChange("who_for", v)}>
                    <SelectTrigger className={selectClass}><SelectValue placeholder="Select recipient" /></SelectTrigger>
                    <SelectContent className="bg-secondary/20 border-bronze/20">
                      {["Professional Athlete", "Sports Team", "College / University", "Stadium / Arena", "Hall of Fame", "Donor Program", "Athlete Agent", "Family"].map((v) => (
                        <SelectItem key={v} value={v} className="text-parchment hover:text-gold">{v}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className={labelClass}>Product Type *</label>
                  <Select value={form.project_type} onValueChange={(v) => handleChange("project_type", v)}>
                    <SelectTrigger className={selectClass}><SelectValue placeholder="Select product" /></SelectTrigger>
                    <SelectContent className="bg-secondary/20 border-bronze/20">
                      {["Bronze Statue", "Portrait Bust", "3D Bas-Relief Plaque", "Photo Image Cast Plaque", "Donor Recognition Wall", "Hall of Fame Display"].map((v) => (
                        <SelectItem key={v} value={v} className="text-parchment hover:text-gold">{v}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className={labelClass}>Display Location</label>
                  <Select value={form.display_location} onValueChange={(v) => handleChange("display_location", v)}>
                    <SelectTrigger className={selectClass}><SelectValue placeholder="Where will it be displayed?" /></SelectTrigger>
                    <SelectContent className="bg-secondary/20 border-bronze/20">
                      {["Stadium / Arena", "Hall of Fame", "Athletic Facility", "Training Facility", "Office / Private", "University Campus", "Home"].map((v) => (
                        <SelectItem key={v} value={v} className="text-parchment hover:text-gold">{v}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className={labelClass}>Preferred Size</label>
                  <Select value={form.preferred_size} onValueChange={(v) => handleChange("preferred_size", v)}>
                    <SelectTrigger className={selectClass}><SelectValue placeholder="Select size" /></SelectTrigger>
                    <SelectContent className="bg-secondary/20 border-bronze/20">
                      {['6"', '12"', '18"', '24"', '36"', '48"', '60"', '72" (Life-Size)', "Larger / Custom"].map((v) => (
                        <SelectItem key={v} value={v} className="text-parchment hover:text-gold">{v}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className={labelClass}>Investment Range</label>
                  <Select value={form.budget_range} onValueChange={(v) => handleChange("budget_range", v)}>
                    <SelectTrigger className={selectClass}><SelectValue placeholder="Select budget" /></SelectTrigger>
                    <SelectContent className="bg-secondary/20 border-bronze/20">
                      {["Under $2,500", "$2,500–$7,500", "$7,500–$25,000", "$25,000–$75,000", "$75,000+"].map((v) => (
                        <SelectItem key={v} value={v} className="text-parchment hover:text-gold">{v}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className={labelClass}>Timeline</label>
                  <Input value={form.timeline} onChange={(e) => handleChange("timeline", e.target.value)}
                    className="bg-white border-bronze/30 text-parchment placeholder:text-parchment/30 focus:border-bronze h-12"
                    placeholder="e.g., Needed by opening day 2026" />
                </div>
              </div>
            </div>

            <div>
              <label className={labelClass}>Project Vision</label>
              <Textarea value={form.description} onChange={(e) => handleChange("description", e.target.value)}
                className="bg-white border-bronze/30 text-parchment placeholder:text-parchment/30 focus:border-bronze min-h-[140px]"
                placeholder="Describe your vision — the athlete, sport, pose, installation location, number of pieces, and any inspiration..." />
            </div>

            {/* File Upload */}
            <div>
              <label className={labelClass}>Reference Photos & Files</label>
              <div onClick={() => fileRef.current?.click()}
                className="border-2 border-dashed border-bronze/25 hover:border-bronze/60 transition-colors p-8 text-center cursor-pointer bg-secondary/20">
                <Upload className="w-8 h-8 text-bronze/40 mx-auto mb-3" />
                <p className="text-parchment/40 text-sm">Upload athlete photos, logos, or inspiration images</p>
                <p className="text-parchment/20 text-xs mt-1">PDF, JPG, PNG up to 25MB each</p>
              </div>
              <input ref={fileRef} type="file" multiple accept=".pdf,.jpg,.jpeg,.png,.webp" onChange={handleFiles} className="hidden" />
              {files.length > 0 && (
                <div className="mt-4 space-y-2">
                  {files.map((file, i) => (
                    <div key={i} className="flex items-center justify-between bg-obsidian border border-bronze/20 px-4 py-2">
                      <span className="text-parchment/60 text-sm truncate">{file.name}</span>
                      <button type="button" onClick={() => removeFile(i)} className="text-parchment/30 hover:text-destructive text-xs ml-4">Remove</button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Button type="submit" disabled={submitting}
              className="w-full h-14 bg-bronze hover:bg-gold text-white font-sans uppercase tracking-[0.2em] text-sm font-semibold transition-all duration-300">
              {submitting
                ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting Commission Request…</>
                : <><Send className="w-4 h-4 mr-2" /> Request Concept Design — 48hr Proof</>
              }
            </Button>
            <p className="text-center text-parchment/25 text-xs font-sans">
              Museum-quality proof delivered within 48 hours. No commitment required.
            </p>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}