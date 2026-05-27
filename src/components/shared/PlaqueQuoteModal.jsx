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

  const isBase44 = window.location.hostname.includes('base44') || window.location.hostname.includes('localhost');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const quoteData = {
        ...form,
        description: `Interested in: ${plaque.label}\n\nAdditional notes: ${form.description}`,
        source_domain: "pro",
      };
      const currentPage = window.location.pathname;

      if (isBase44) {
        const fullData = { ...quoteData, reference_image: plaque.url, source_page: currentPage };
        await base44.entities.QuoteRequest.create(fullData);
        try { await base44.functions.invoke("sendQuoteEmail", fullData); } catch {}
      } else {
        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('email', form.email);
        formData.append('phone', form.phone);
        formData.append('description', quoteData.description);
        formData.append('source_page', currentPage);
        formData.append('reference_image', plaque.url);
        const res = await fetch('/quote-submit.php', { method: 'POST', body: formData });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Submission failed');
      }
      setSubmitted(true);
    } catch (err) {
      alert('Something went wrong. Please call us at 772-309-0412 or try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/70" onClick={onClose}>
      <div
        className="bg-white w-full sm:max-w-lg sm:rounded shadow-2xl flex flex-col max-h-[92vh] sm:max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-4 py-3 flex-shrink-0"
          style={{ background: "linear-gradient(135deg, #B8860B 0%, #DAA520 30%, #FFD700 50%, #DAA520 70%, #B8860B 100%)" }}
        >
          <div className="min-w-0 flex-1 mr-3">
            <p className="font-sans text-xs uppercase tracking-widest text-black/70 font-semibold">Request Artwork Proof</p>
            <h3 className="font-serif text-base text-black leading-tight mt-0.5 truncate">{plaque.label}</h3>
          </div>
          <button onClick={onClose} className="text-black/60 hover:text-black flex-shrink-0">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1">
          {/* Image preview — compact on mobile */}
          <div className="bg-gray-900 flex items-center justify-center px-4 py-3" style={{ minHeight: "100px" }}>
            <img src={plaque.url} alt={plaque.label} className="max-h-28 sm:max-h-44 w-auto object-contain" />
          </div>

          {/* Form */}
          <div className="p-4 sm:p-5">
            {submitted ? (
              <div className="text-center py-6">
                <CheckCircle className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
                <h4 className="font-serif text-xl text-gray-900">Request Received!</h4>
                <p className="text-gray-600 text-sm mt-2">We'll have your artwork proof ready within the hour. No commitment required.</p>
                <Button onClick={onClose} className="mt-4 bg-yellow-600 hover:bg-yellow-700 text-black font-semibold">Close</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <p className="text-gray-600 text-sm">Free artwork proof delivered within the hour — no commitment required.</p>
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
                  <Textarea value={form.description} onChange={(e) => setForm(f => ({ ...f, description: e.target.value }))} placeholder="Sport, size, inductee name..." className="border-gray-300 min-h-[60px]" />
                </div>
                <Button type="submit" disabled={submitting} className="w-full text-black font-bold uppercase tracking-widest text-sm" style={{ background: "linear-gradient(135deg, #B8860B 0%, #DAA520 50%, #B8860B 100%)" }}>
                  {submitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Submitting…</> : <><Send className="w-4 h-4 mr-2" />Get Free Artwork Proof</>}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}