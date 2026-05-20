import { useState, useEffect } from "react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, RefreshCw, Loader2, Award, Shield, Star, Clock } from "lucide-react";

export default function ArtworkApprovalPage() {
  const token = window.location.pathname.split("/approval/")[1];
  const [proof, setProof] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [action, setAction] = useState(null); // 'approve' | 'changes'
  const [changeNotes, setChangeNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedAction, setSubmittedAction] = useState(null);

  useEffect(() => {
    if (!token) { setNotFound(true); setLoading(false); return; }
    base44.entities.ArtworkProof.filter({ token })
      .then(results => {
        if (!results || results.length === 0) setNotFound(true);
        else setProof(results[0]);
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
        <p className="text-gray-400">This approval link may be invalid or expired. Please contact Champions in Bronze.</p>
      </div>
    </div>
  );

  // Already responded
  if (proof.status === "approved" && !submitted) return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center text-center px-6">
      <div>
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <p className="text-white font-serif text-3xl mb-3">Already Approved</p>
        <p className="text-gray-400">You have already approved this artwork. Our team has been notified and will begin production.</p>
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
            <p className="text-gray-400 leading-relaxed">Thank you, {proof.customer_name}. Your approval has been received. Our team has been notified and your piece will move into production.</p>
            <p className="text-yellow-500 font-serif text-lg mt-6">Champions in Bronze · Made in the USA</p>
          </>
        ) : (
          <>
            <RefreshCw className="w-16 h-16 text-amber-500 mx-auto mb-4" />
            <h2 className="text-white font-serif text-3xl mb-3">Changes Submitted</h2>
            <p className="text-gray-400 leading-relaxed">Thank you, {proof.customer_name}. Our design team has received your requested changes and will send you a revised proof shortly.</p>
            <p className="text-yellow-500 font-serif text-lg mt-6">Champions in Bronze · Made in the USA</p>
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
            <p className="text-gray-500 text-xs tracking-widest uppercase mt-0.5">Museum-Quality Bronze · Made in the USA</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500 uppercase tracking-wider">Artwork Proof</p>
            <p className="text-sm text-white font-semibold">{proof.customer_name}</p>
          </div>
        </div>
      </header>

      {/* AI-generated hero banner */}
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
          {/* Left — artwork */}
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Your Artwork Proof</p>
            <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-2xl" style={{ boxShadow: `0 20px 60px ${accentColor}20` }}>
              <img src={proof.proof_image_url} alt="Your artwork proof" className="w-full object-contain bg-gray-900" />
              <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white border border-white/10">
                Version {proof.version || 1}
              </div>
            </div>
            {/* Context */}
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
          </div>

          {/* Right — approval action */}
          <div className="sticky top-6">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Your Response</p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-white font-serif text-xl mb-1">Does this look right?</p>
              <p className="text-gray-400 text-sm mb-6">Review the artwork above carefully. When you're ready, approve it or request any changes below.</p>

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
                  <Button onClick={() => handleSubmit("approve")} disabled={submitting} className="w-full py-4 text-black font-bold text-lg" style={{ background: `linear-gradient(135deg, #B8860B 0%, #DAA520 50%, #B8860B 100%)` }}>
                    {submitting ? <><Loader2 className="w-5 h-5 animate-spin mr-2" /> Submitting…</> : "✓ Confirm Approval"}
                  </Button>
                  <button onClick={() => setAction(null)} className="text-gray-500 text-sm w-full text-center hover:text-gray-300">← Go back</button>
                </div>
              )}

              {action === "changes" && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">Describe the changes you need</label>
                    <Textarea
                      value={changeNotes}
                      onChange={e => setChangeNotes(e.target.value)}
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 min-h-[120px]"
                      placeholder="e.g. Please change the name spelling from 'Jon' to 'John', adjust the year to 2024..."
                    />
                  </div>
                  <Button onClick={() => handleSubmit("changes")} disabled={submitting || !changeNotes.trim()} className="w-full py-4 font-bold text-lg bg-amber-600 hover:bg-amber-500 text-white">
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
                { icon: Clock, text: "Fast Production" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="bg-white/5 border border-white/10 rounded-lg p-3 flex items-center gap-2">
                  <Icon className="w-4 h-4 flex-shrink-0" style={{ color: accentColor }} />
                  <p className="text-gray-400 text-xs">{text}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-600 text-xs mt-6">Questions? Call <a href="tel:7723090412" className="text-yellow-600 hover:text-yellow-500">772-309-0412</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}