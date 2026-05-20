import { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, RefreshCw, Loader2, Award, Shield, Star, Clock } from "lucide-react";

function setSEO(proof) {
  const title = proof.seo_title || `${proof.customer_name} Artwork Proof — Champions in Bronze`;
  const desc = proof.seo_description || `Review your custom bronze artwork proof from Champions in Bronze. Approve or request changes online.`;
  const image = proof.proof_image_url || "";
  const url = window.location.href;

  document.title = title;

  const setMeta = (selector, attr, value) => {
    let el = document.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      const [attrName, attrVal] = attr.split("=");
      el.setAttribute(attrName, attrVal.replace(/"/g, ""));
      document.head.appendChild(el);
    }
    el.setAttribute("content", value);
  };

  setMeta('meta[name="description"]', 'name=description', desc);
  setMeta('meta[name="robots"]', 'name=robots', 'noindex, nofollow');
  setMeta('meta[property="og:title"]', 'property=og:title', title);
  setMeta('meta[property="og:description"]', 'property=og:description', proof.og_description || desc);
  setMeta('meta[property="og:image"]', 'property=og:image', image);
  setMeta('meta[property="og:url"]', 'property=og:url', url);
  setMeta('meta[property="og:type"]', 'property=og:type', 'website');
  setMeta('meta[name="twitter:card"]', 'name=twitter:card', 'summary_large_image');
  setMeta('meta[name="twitter:title"]', 'name=twitter:title', title);
  setMeta('meta[name="twitter:description"]', 'name=twitter:description', desc);
  setMeta('meta[name="twitter:image"]', 'name=twitter:image', image);

  // JSON-LD Product schema
  const schemaId = "artwork-proof-schema";
  let existing = document.getElementById(schemaId);
  if (existing) existing.remove();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": proof.schema_name || `${proof.customer_name} Custom Bronze ${proof.project_type || 'Piece'}`,
    "description": proof.schema_description || desc,
    "image": image,
    "brand": {
      "@type": "Brand",
      "name": "Champions in Bronze"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Champions in Bronze",
      "url": "https://championsinbronze.com",
      "telephone": "772-309-0412",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US"
      }
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "seller": { "@type": "Organization", "name": "Champions in Bronze" }
    }
  };
  const script = document.createElement("script");
  script.id = schemaId;
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}

export default function ArtworkApprovalPage() {
  const token = window.location.pathname.split("/approval/")[1];
  const [proof, setProof] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [action, setAction] = useState(null);
  const [changeNotes, setChangeNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedAction, setSubmittedAction] = useState(null);

  useEffect(() => {
    if (!token) { setNotFound(true); setLoading(false); return; }
    base44.entities.ArtworkProof.filter({ token })
      .then(results => {
        if (!results || results.length === 0) { setNotFound(true); }
        else { setProof(results[0]); setSEO(results[0]); }
        setLoading(false);
      })
      .catch(() => { setNotFound(true); setLoading(false); });
  }, [token]);

  const accentColor = proof?.ai_accent_color || "#B8860B";

  const handleSubmit = async (selectedAction) => {
    setSubmitting(true);
    await base44.functions.invoke("submitApprovalResponse", {
      token,
      action: selectedAction,
      change_notes: selectedAction === "changes" ? changeNotes : ""
    });
    setSubmitted(true);
    setSubmittedAction(selectedAction);
    setSubmitting(false);
  };

  if (loading) return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <Loader2 className="w-8 h-8 text-yellow-500 animate-spin" />
    </div>
  );

  if (notFound) return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center text-center px-6">
      <div>
        <p className="text-yellow-500 font-serif text-2xl mb-3">Proof Not Found</p>
        <p className="text-gray-400">This approval link may be invalid or expired. Please contact Champions in Bronze at 772-309-0412.</p>
      </div>
    </div>
  );

  if (proof.status === "approved" && !submitted) return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center text-center px-6">
      <div>
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <p className="text-white font-serif text-3xl mb-3">Already Approved</p>
        <p className="text-gray-400">You have already approved this artwork. Our team has been notified and production is underway.</p>
        <p className="text-yellow-600 mt-6 text-sm">Questions? Call <a href="tel:7723090412" className="underline">772-309-0412</a></p>
      </div>
    </div>
  );

  if (submitted) return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center text-center px-6">
      <div className="max-w-md">
        {submittedAction === "approve" ? (
          <>
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-white font-serif text-3xl mb-3">Artwork Approved!</h2>
            <p className="text-gray-400 leading-relaxed">Thank you, {proof.customer_name}. Your approval has been received and our art team at Champions in Bronze has been notified. Your piece will move into production.</p>
            <p className="text-yellow-500 font-serif text-lg mt-6">Champions in Bronze · Made in the USA</p>
            <p className="text-gray-600 text-sm mt-2">Questions? <a href="tel:7723090412" className="text-yellow-600 hover:underline">772-309-0412</a></p>
          </>
        ) : (
          <>
            <RefreshCw className="w-16 h-16 text-amber-500 mx-auto mb-4" />
            <h2 className="text-white font-serif text-3xl mb-3">Changes Submitted</h2>
            <p className="text-gray-400 leading-relaxed">Thank you, {proof.customer_name}. Our art team has received your requested changes and will send you a revised proof shortly.</p>
            <p className="text-yellow-500 font-serif text-lg mt-6">Champions in Bronze · Made in the USA</p>
            <p className="text-gray-600 text-sm mt-2">Questions? <a href="tel:7723090412" className="text-yellow-600 hover:underline">772-309-0412</a></p>
          </>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10 py-5 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <p className="font-serif text-xl tracking-widest" style={{ color: accentColor }}>CHAMPIONS IN BRONZE</p>
            <p className="text-gray-500 text-xs tracking-widest uppercase mt-0.5">Museum-Quality Bronze · Made in the USA · Since 1974</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500 uppercase tracking-wider">Artwork Proof</p>
            <p className="text-sm text-white font-semibold">{proof.customer_name}</p>
            {proof.organization && <p className="text-xs text-gray-500">{proof.organization}</p>}
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="relative py-16 px-6 text-center overflow-hidden" style={{ background: `linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)` }}>
        <div className="absolute inset-0 opacity-10" style={{ background: `radial-gradient(circle at 50% 50%, ${accentColor}, transparent 70%)` }} />
        <div className="relative max-w-3xl mx-auto">
          {proof.ai_sport && (
            <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] px-3 py-1 rounded-full mb-4" style={{ color: accentColor, border: `1px solid ${accentColor}40`, background: `${accentColor}10` }}>
              {proof.ai_sport}
            </span>
          )}
          <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-4">
            {proof.ai_headline || "Your Custom Bronze Artwork"}
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            {proof.ai_subheadline || "A piece crafted to last a lifetime"}
          </p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — artwork + copy */}
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Your Artwork Proof · Version {proof.version || 1}</p>
            <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl" style={{ boxShadow: `0 20px 60px ${accentColor}20` }}>
              <img
                src={proof.proof_image_url}
                alt={`${proof.customer_name} custom bronze ${proof.project_type || 'artwork'} proof — Champions in Bronze`}
                className="w-full object-contain bg-gray-900"
              />
            </div>

            {proof.ai_context && (
              <div className="mt-6 bg-white/5 border border-white/10 rounded-lg p-5">
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: accentColor }}>About This Piece</p>
                <p className="text-gray-300 leading-relaxed text-sm">{proof.ai_context}</p>
              </div>
            )}
            {proof.ai_description && (
              <div className="mt-4 bg-white/5 border border-white/10 rounded-lg p-5">
                <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: accentColor }}>Craftsmanship</p>
                <p className="text-gray-300 leading-relaxed text-sm">{proof.ai_description}</p>
              </div>
            )}

            {/* Specs */}
            <div className="mt-4 bg-white/5 border border-white/10 rounded-lg p-5 space-y-2 text-sm">
              <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: accentColor }}>Project Details</p>
              {proof.project_type && <div className="flex justify-between text-gray-400"><span>Type</span><span className="text-white">{proof.project_type}</span></div>}
              {proof.organization && <div className="flex justify-between text-gray-400"><span>Organization</span><span className="text-white">{proof.organization}</span></div>}
              {proof.ai_sport && <div className="flex justify-between text-gray-400"><span>Category</span><span className="text-white">{proof.ai_sport}</span></div>}
              <div className="flex justify-between text-gray-400"><span>Manufacturer</span><span className="text-white">Champions in Bronze · USA</span></div>
            </div>
          </div>

          {/* Right — approval */}
          <div className="sticky top-6">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Your Response</p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-white font-serif text-xl mb-1">Does this look right?</p>
              <p className="text-gray-400 text-sm mb-6">Review your artwork carefully. Approve to start production, or submit your changes below.</p>

              {!action && (
                <div className="space-y-3">
                  <button
                    onClick={() => setAction("approve")}
                    className="w-full py-4 rounded-lg font-bold text-black text-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
                    style={{ background: `linear-gradient(135deg, #B8860B 0%, #DAA520 50%, #B8860B 100%)` }}
                  >
                    ✓ Approve This Artwork
                  </button>
                  <button
                    onClick={() => setAction("changes")}
                    className="w-full py-4 rounded-lg font-semibold text-white text-lg border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all"
                  >
                    Request Changes
                  </button>
                </div>
              )}

              {action === "approve" && (
                <div className="space-y-4">
                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-green-400 text-sm">
                    <p className="font-bold">Confirming approval for:</p>
                    <p className="mt-1">{proof.customer_name} · {proof.organization || proof.project_type || "Custom Bronze"}</p>
                  </div>
                  <Button
                    onClick={() => handleSubmit("approve")}
                    disabled={submitting}
                    className="w-full py-4 text-black font-bold text-lg"
                    style={{ background: `linear-gradient(135deg, #B8860B 0%, #DAA520 50%, #B8860B 100%)` }}
                  >
                    {submitting ? <><Loader2 className="w-5 h-5 animate-spin mr-2" /> Submitting…</> : "✓ Confirm Approval"}
                  </Button>
                  <button onClick={() => setAction(null)} className="text-gray-500 text-sm w-full text-center hover:text-gray-300">← Go back</button>
                </div>
              )}

              {action === "changes" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Describe your requested changes</label>
                    <Textarea
                      value={changeNotes}
                      onChange={e => setChangeNotes(e.target.value)}
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 min-h-[120px]"
                      placeholder="e.g. Please change the name spelling from 'Jon' to 'John', adjust the year to 2024, move the logo to the right..."
                    />
                  </div>
                  <Button
                    onClick={() => handleSubmit("changes")}
                    disabled={submitting || !changeNotes.trim()}
                    className="w-full py-4 font-bold text-lg bg-amber-600 hover:bg-amber-500 text-white"
                  >
                    {submitting ? <><Loader2 className="w-5 h-5 animate-spin mr-2" /> Submitting…</> : "Submit Change Request"}
                  </Button>
                  <button onClick={() => setAction(null)} className="text-gray-500 text-sm w-full text-center hover:text-gray-300">← Go back</button>
                </div>
              )}
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3 mt-6">
              {[
                { icon: Award, text: "Museum-Quality Bronze" },
                { icon: Shield, text: "100+ Year Durability" },
                { icon: Star, text: "Made in the USA" },
                { icon: Clock, text: "Fast Turnaround" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="bg-white/5 border border-white/10 rounded-lg p-3 flex items-center gap-2">
                  <Icon className="w-4 h-4 flex-shrink-0" style={{ color: accentColor }} />
                  <p className="text-gray-400 text-xs">{text}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-600 text-xs mt-6">
              Questions? Call <a href="tel:7723090412" className="text-yellow-600 hover:text-yellow-500">772-309-0412</a> or email <a href="mailto:art@championsinbronze.com" className="text-yellow-600 hover:text-yellow-500">art@championsinbronze.com</a>
            </p>
          </div>
        </div>
      </div>

      <footer className="border-t border-white/10 py-8 px-6 text-center mt-12">
        <p className="text-gray-600 text-xs">© {new Date().getFullYear()} Champions in Bronze · Museum-Quality Bronze Since 1974 · Made in the USA · <a href="https://championsinbronze.com" className="hover:text-gray-400">championsinbronze.com</a></p>
      </footer>
    </div>
  );
}