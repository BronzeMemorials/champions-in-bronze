import { useState } from "react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X, Send, Loader2, CheckCircle } from "lucide-react";

export default function PlaqueQuoteModal({ plaque, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", description: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!plaque) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const quoteData = {
      ...form,
      description: `Interested in: ${plaque.label}\n\nAdditional notes: ${form.description}`,
      source_domain: "pro",
    };
    await base44.entities.QuoteRequest.create(quoteData);
    try {
      await base44.functions.invoke("sendQuoteEmail", quoteData);
    } catch {}
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70" onClick={onClose}>
      <div
        className="bg-white w-full max-w-lg rounded shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-5 border-b border-gray-200" style={{background: "linear-gradient(135deg, #B8860B 0%, #DAA520 30%, #FFD700 50%, #DAA520 70%, #B8860B 100%)"}}>
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-black/70 font-semibold">Request Artwork Proof</p>
            <h3 className="font-serif text-lg text-black leading-tight mt-0.5">{plaque.label}</h3>
          </div>
          <button onClick={onClose} className="text-black/60 hover:text-black ml-4 flex-shrink-0 mt-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image preview */}
        <div className="bg-gray-900 flex items-center justify-center p-4" style={{minHeight: "160px"}}>
          <img src={plaque.url} alt={plaque.label} className="max-h-48 w-auto object-contain" />
        </div>

        {/* Body */}
        <div className="p-5">
          {submitted ? (
            <div className="text-center py-6">
              <CheckCircle className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
              <h4 className="font-serif text-xl text-gray-900">Request Received!</h4>
              <p className="text-gray-600 text-sm mt-2">We'll have your artwork proof ready within the hour. No commitment required.</p>
              <Button onClick={onClose} className="mt-4 bg-yellow-600 hover:bg-yellow-700 text-black font-semibold">Close</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <p className="text-gray-600 text-sm">Get a free artwork proof for a plaque like this — delivered within the hour.</p>
              <div>
                <label className="text-xs text-gray-700 uppercase tracking-wider font-semibold block mb-1">Full Name *</label>
                <Input required value={form.name} onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))} placeholder="John Mitchell" className="border-gray-300" />
              </div>
              <div>
                <label className="text-xs text-gray-700 uppercase tracking-wider font-semibold block mb-1">Email *</label>
                <Input required type="email" value={form.email} onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))} placeholder="john@organization.com" className="border-gray-300" />
              </div>
              <div>
                <label className="text-xs text-gray-700 uppercase tracking-wider font-semibold block mb-1">Phone</label>
                <Input value={form.phone} onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))} placeholder="(555) 123-4567" className="border-gray-300" />
              </div>
              <div>
                <label className="text-xs text-gray-700 uppercase tracking-wider font-semibold block mb-1">Additional Notes</label>
                <Textarea value={form.description} onChange={(e) => setForm(f => ({ ...f, description: e.target.value }))} placeholder="Sport, size, inductee name..." className="border-gray-300 min-h-[72px]" />
              </div>
              <Button type="submit" disabled={submitting} className="w-full text-black font-bold uppercase tracking-widest text-sm" style={{background: "linear-gradient(135deg, #B8860B 0%, #DAA520 50%, #B8860B 100%)"}}>
                {submitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Submitting…</> : <><Send className="w-4 h-4 mr-2" />Get Free Artwork Proof</>}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}