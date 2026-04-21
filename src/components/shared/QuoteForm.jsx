import { useState, useRef } from "react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload, Send, CheckCircle, Loader2 } from "lucide-react";
import FadeIn from "./FadeIn";

const projectTypes = [
  { value: "bronze_statue", label: "Life-Size Bronze Statue" },
  { value: "championship_plaque", label: "Championship Plaque" },
  { value: "hall_of_fame", label: "Hall of Fame Display" },
  { value: "donor_wall", label: "Donor Recognition Wall" },
  { value: "dimensional_letters", label: "Dimensional Metal Letters" },
  { value: "jersey_display", label: "Retired Jersey Display" },
  { value: "capital_campaign", label: "Capital Campaign Recognition" },
  { value: "custom_jersey_plaque", label: "Custom Jersey Plaque" },
  { value: "relief_plaque", label: "3D Relief Plaque" },
  { value: "paperweight", label: "Bronze Paperweight" },
  { value: "other", label: "Other / Custom" },
];

const budgetRanges = [
  { value: "under_5k", label: "Under $5,000" },
  { value: "5k_15k", label: "$5,000 – $15,000" },
  { value: "15k_50k", label: "$15,000 – $50,000" },
  { value: "50k_100k", label: "$50,000 – $100,000" },
  { value: "100k_250k", label: "$100,000 – $250,000" },
  { value: "over_250k", label: "$250,000+" },
];

export default function QuoteForm({ title = "Request a Quote", subtitle, source = "pro" }) {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", organization: "", title: "",
    project_type: "", budget_range: "", timeline: "", description: "",
  });
  const [files, setFiles] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const fileRef = useRef(null);

  const handleChange = (field, value) => setForm((prev) => ({ ...prev, [field]: value }));

  const handleFiles = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...newFiles]);
  };

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

  if (submitted) {
    return (
      <section className="py-28 bg-gradient-to-b from-obsidian to-bronze/5" id="quote">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <FadeIn>
            <CheckCircle className="w-16 h-16 text-gold mx-auto mb-6" />
            <h2 className="font-serif text-4xl text-parchment">Thank You</h2>
            <p className="text-parchment/60 mt-4 text-lg">
              Your commission request has been received. Our team will review your project details and deliver shop drawings within 48 hours.
            </p>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section className="py-28 bg-gradient-to-b from-obsidian to-bronze/5" id="quote">
      <div className="max-w-3xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">
              Begin Your Commission
            </span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 text-parchment">{title}</h2>
            {subtitle && <p className="mt-4 text-parchment/60 text-lg">{subtitle}</p>}
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <form onSubmit={handleSubmit} className="space-y-6 bg-obsidian border border-bronze/20 p-8 md:p-12 rounded-sm shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs text-parchment/50 uppercase tracking-wider font-sans mb-2 block">Full Name *</label>
                <Input
                  required value={form.name} onChange={(e) => handleChange("name", e.target.value)}
                  className="bg-background border-bronze/30 text-parchment placeholder:text-parchment/30 focus:border-gold h-12"
                  placeholder="John Mitchell"
                />
              </div>
              <div>
                <label className="text-xs text-parchment/50 uppercase tracking-wider font-sans mb-2 block">Email *</label>
                <Input
                  required type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)}
                  className="bg-background border-bronze/30 text-parchment placeholder:text-parchment/30 focus:border-gold h-12"
                  placeholder="john@organization.com"
                />
              </div>
              <div>
                <label className="text-xs text-parchment/50 uppercase tracking-wider font-sans mb-2 block">Phone</label>
                <Input
                  value={form.phone} onChange={(e) => handleChange("phone", e.target.value)}
                  className="bg-background border-bronze/30 text-parchment placeholder:text-parchment/30 focus:border-gold h-12"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label className="text-xs text-parchment/50 uppercase tracking-wider font-sans mb-2 block">Organization</label>
                <Input
                  value={form.organization} onChange={(e) => handleChange("organization", e.target.value)}
                  className="bg-background border-bronze/30 text-parchment placeholder:text-parchment/30 focus:border-gold h-12"
                  placeholder="Team / University / Company"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs text-parchment/50 uppercase tracking-wider font-sans mb-2 block">Project Type *</label>
                <Select value={form.project_type} onValueChange={(v) => handleChange("project_type", v)}>
                  <SelectTrigger className="bg-background border-bronze/30 text-parchment h-12">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent className="bg-obsidian border-bronze/20">
                    {projectTypes.map((t) => (
                      <SelectItem key={t.value} value={t.value} className="text-parchment hover:text-gold">{t.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-xs text-parchment/50 uppercase tracking-wider font-sans mb-2 block">Budget Range</label>
                <Select value={form.budget_range} onValueChange={(v) => handleChange("budget_range", v)}>
                  <SelectTrigger className="bg-background border-bronze/30 text-parchment h-12">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent className="bg-obsidian border-bronze/20">
                    {budgetRanges.map((b) => (
                      <SelectItem key={b.value} value={b.value} className="text-parchment hover:text-gold">{b.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="text-xs text-parchment/50 uppercase tracking-wider font-sans mb-2 block">Timeline</label>
              <Input
                value={form.timeline} onChange={(e) => handleChange("timeline", e.target.value)}
                className="bg-obsidian border-bronze/20 text-parchment placeholder:text-parchment/25 focus:border-gold h-12"
                placeholder="e.g., Need installed by October 2026"
              />
            </div>

            <div>
              <label className="text-xs text-parchment/50 uppercase tracking-wider font-sans mb-2 block">Project Details</label>
              <Textarea
                value={form.description} onChange={(e) => handleChange("description", e.target.value)}
                className="bg-background border-bronze/30 text-parchment placeholder:text-parchment/30 focus:border-gold min-h-[140px]"
                placeholder="Describe your vision — dimensions, subject, installation location, number of pieces, any reference images..."
              />
            </div>

            <div>
              <label className="text-xs text-parchment/50 uppercase tracking-wider font-sans mb-2 block">Upload Files</label>
              <div
                onClick={() => fileRef.current?.click()}
                className="border-2 border-dashed border-bronze/30 hover:border-gold/60 transition-colors rounded-sm p-8 text-center cursor-pointer bg-background"
              >
                <Upload className="w-8 h-8 text-bronze/40 mx-auto mb-3" />
                <p className="text-parchment/40 text-sm">Click to upload logos, photos, or project briefs</p>
                <p className="text-parchment/25 text-xs mt-1">PDF, JPG, PNG up to 25MB each</p>
              </div>
              <input ref={fileRef} type="file" multiple accept=".pdf,.jpg,.jpeg,.png,.webp" onChange={handleFiles} className="hidden" />
              {files.length > 0 && (
                <div className="mt-4 space-y-2">
                  {files.map((file, i) => (
                    <div key={i} className="flex items-center justify-between bg-background border border-bronze/20 px-4 py-2 rounded-sm">
                      <span className="text-parchment/60 text-sm truncate">{file.name}</span>
                      <button type="button" onClick={() => removeFile(i)} className="text-parchment/30 hover:text-destructive text-xs ml-4">Remove</button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Button
              type="submit"
              disabled={submitting}
              className="w-full h-14 bg-bronze hover:bg-gold text-parchment font-sans uppercase tracking-[0.2em] text-sm font-semibold transition-all duration-300"
            >
              {submitting ? (
                <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting...</>
              ) : (
                <><Send className="w-4 h-4 mr-2" /> Get Shop Drawings in 48 Hours</>
              )}
            </Button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}