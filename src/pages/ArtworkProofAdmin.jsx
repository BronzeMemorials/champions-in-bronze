import { useState, useRef } from "react";
import { base44 } from "@/api/base44Client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Wand2, Send, Loader2, CheckCircle, Copy, ExternalLink, Pencil } from "lucide-react";
import { Link } from "react-router-dom";

function generateToken() {
  return Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10);
}

export default function ArtworkProofAdmin() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ customer_name: "", customer_email: "", organization: "", project_type: "" });
  const [imageUrl, setImageUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [aiContent, setAiContent] = useState(null);
  const [sending, setSending] = useState(false);
  const [sentProof, setSentProof] = useState(null);
  const [copied, setCopied] = useState(false);
  const fileRef = useRef(null);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const result = await base44.integrations.Core.UploadFile({ file });
    setImageUrl(result.file_url);
    setUploading(false);
    setStep(3);
  };

  const handleGenerate = async () => {
    setGenerating(true);
    const res = await base44.functions.invoke("generateArtworkPage", {
      proof_image_url: imageUrl,
      project_type: form.project_type,
      customer_name: form.customer_name,
      organization: form.organization
    });
    setAiContent(res.data);
    setGenerating(false);
    setStep(4);
  };

  const updateAI = (field, value) => setAiContent(prev => ({ ...prev, [field]: value }));

  const handleSend = async () => {
    setSending(true);
    const token = generateToken();

    const proof = await base44.entities.ArtworkProof.create({
      ...form,
      proof_image_url: imageUrl,
      token,
      status: "draft",
      ai_headline: aiContent.headline,
      ai_subheadline: aiContent.subheadline,
      ai_description: aiContent.description,
      ai_context: aiContent.context,
      ai_sport: aiContent.sport,
      ai_accent_color: aiContent.accent_color,
      seo_title: aiContent.seo_title,
      seo_description: aiContent.seo_description,
      og_description: aiContent.og_description,
      schema_name: aiContent.schema_name,
      schema_description: aiContent.schema_description,
      version: 1
    });

    await base44.functions.invoke("sendApprovalLink", {
      proof_id: proof.id,
      customer_email: form.customer_email,
      customer_name: form.customer_name,
      token,
      site_url: window.location.origin
    });

    setSentProof({ ...proof, token });
    setSending(false);
  };

  const approvalUrl = sentProof ? `${window.location.origin}/approval/${sentProof.token}` : "";

  const copyLink = () => {
    navigator.clipboard.writeText(approvalUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (sentProof) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-10 max-w-lg w-full text-center">
          <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
          <h2 className="font-serif text-2xl text-gray-900 mb-2">Approval Link Sent!</h2>
          <p className="text-gray-600 mb-6">Email sent to <strong>{form.customer_email}</strong>. Notifications go to <strong>art@championsinbronze.com</strong>.</p>
          <div className="bg-gray-50 border border-gray-200 rounded p-3 text-sm text-gray-700 break-all mb-4">{approvalUrl}</div>
          <div className="flex gap-3 justify-center mb-6">
            <Button onClick={copyLink} variant="outline" className="gap-2">
              <Copy className="w-4 h-4" /> {copied ? "Copied!" : "Copy Link"}
            </Button>
            <a href={approvalUrl} target="_blank" rel="noreferrer">
              <Button variant="outline" className="gap-2"><ExternalLink className="w-4 h-4" /> Preview Page</Button>
            </a>
          </div>
          <div className="flex gap-3 justify-center">
            <Link to="/artwork-approval-dashboard"><Button variant="outline">View Dashboard</Button></Link>
            <Button onClick={() => {
              setStep(1);
              setForm({ customer_name: "", customer_email: "", organization: "", project_type: "" });
              setImageUrl(null);
              setAiContent(null);
              setSentProof(null);
            }}>
              New Proof
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="font-serif text-3xl text-gray-900">Create Artwork Proof</h1>
            <p className="text-gray-500 mt-1">Upload a proof, generate a personalized approval page, edit if needed, then send.</p>
          </div>
          <Link to="/artwork-approval-dashboard">
            <Button variant="outline" size="sm">Dashboard</Button>
          </Link>
        </div>

        {/* Step indicators */}
        <div className="flex items-center gap-1 mb-8 flex-wrap">
          {["Customer Info", "Upload Proof", "AI Generate", "Review & Edit", "Send"].map((label, i) => (
            <div key={label} className="flex items-center gap-1">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step > i + 1 ? "bg-green-500 text-white" : step === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-500"}`}>
                {step > i + 1 ? "✓" : i + 1}
              </div>
              <span className={`text-xs ${step === i + 1 ? "text-blue-600 font-semibold" : "text-gray-400"} hidden sm:inline`}>{label}</span>
              {i < 4 && <div className="w-4 h-px bg-gray-300" />}
            </div>
          ))}
        </div>

        <div className="bg-white border border-gray-200 rounded-lg shadow p-8">

          {/* Step 1 — Customer Info */}
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="font-semibold text-lg text-gray-800 mb-4">Customer Details</h2>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Customer Name *</label>
                <Input value={form.customer_name} onChange={e => setForm(p => ({ ...p, customer_name: e.target.value }))} placeholder="John Mitchell" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Customer Email *</label>
                <Input type="email" value={form.customer_email} onChange={e => setForm(p => ({ ...p, customer_email: e.target.value }))} placeholder="john@school.edu" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Organization / Team</label>
                <Input value={form.organization} onChange={e => setForm(p => ({ ...p, organization: e.target.value }))} placeholder="State University Athletics" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Project Type</label>
                <Input value={form.project_type} onChange={e => setForm(p => ({ ...p, project_type: e.target.value }))} placeholder="Bronze Plaque, Bust, Donor Wall..." />
              </div>
              <Button onClick={() => setStep(2)} disabled={!form.customer_name || !form.customer_email} className="w-full mt-2">
                Next: Upload Proof →
              </Button>
            </div>
          )}

          {/* Step 2 — Upload */}
          {step === 2 && (
            <div>
              <h2 className="font-semibold text-lg text-gray-800 mb-4">Upload Artwork Proof</h2>
              <div
                onClick={() => fileRef.current?.click()}
                className="border-2 border-dashed border-gray-300 hover:border-blue-400 rounded-lg p-12 text-center cursor-pointer transition-colors"
              >
                {uploading ? (
                  <><Loader2 className="w-10 h-10 text-blue-500 mx-auto mb-3 animate-spin" /><p className="text-gray-600">Uploading...</p></>
                ) : (
                  <><Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" /><p className="text-gray-700 font-medium text-lg">Click to upload proof image</p><p className="text-gray-400 text-sm mt-1">JPG, PNG, PDF, WEBP</p></>
                )}
              </div>
              <input ref={fileRef} type="file" accept=".jpg,.jpeg,.png,.pdf,.webp" onChange={handleUpload} className="hidden" />
              <Button variant="outline" onClick={() => setStep(1)} className="mt-4">← Back</Button>
            </div>
          )}

          {/* Step 3 — AI Generate */}
          {step === 3 && (
            <div>
              <h2 className="font-semibold text-lg text-gray-800 mb-4">Generate AI Landing Page</h2>
              {imageUrl && <img src={imageUrl} alt="Uploaded proof" className="w-full max-h-64 object-contain rounded border border-gray-200 mb-6" />}
              <p className="text-gray-600 mb-6">AI will analyze the artwork and generate a personalized, SEO-optimized approval page with sport context, JSON-LD schema, and Open Graph tags — all ready to send.</p>
              <Button onClick={handleGenerate} disabled={generating} className="w-full gap-2">
                {generating ? <><Loader2 className="w-4 h-4 animate-spin" /> Analyzing Artwork & Generating SEO…</> : <><Wand2 className="w-4 h-4" /> Generate Page with AI</>}
              </Button>
              <Button variant="outline" onClick={() => setStep(2)} className="mt-3 w-full">← Back</Button>
            </div>
          )}

          {/* Step 4 — Review & Edit ALL AI Content */}
          {step === 4 && aiContent && (
            <div className="space-y-5">
              <div className="flex items-center gap-2 mb-2">
                <Pencil className="w-4 h-4 text-blue-500" />
                <h2 className="font-semibold text-lg text-gray-800">Review & Edit AI Content</h2>
              </div>
              <p className="text-sm text-gray-500 -mt-3">All fields are editable. The page will be generated exactly as shown below.</p>

              {imageUrl && <img src={imageUrl} alt="Proof preview" className="w-full max-h-48 object-contain rounded border border-gray-200" />}

              <div className="grid grid-cols-1 gap-4 pt-2">
                <div className="bg-blue-50 rounded-lg p-4 space-y-4">
                  <p className="text-xs font-bold text-blue-600 uppercase tracking-widest">Page Content</p>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Headline</label>
                    <Input value={aiContent.headline || ""} onChange={e => updateAI("headline", e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Subheadline</label>
                    <Input value={aiContent.subheadline || ""} onChange={e => updateAI("subheadline", e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">About This Piece</label>
                    <Textarea value={aiContent.context || ""} onChange={e => updateAI("context", e.target.value)} className="min-h-[80px]" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Craftsmanship Description</label>
                    <Textarea value={aiContent.description || ""} onChange={e => updateAI("description", e.target.value)} className="min-h-[80px]" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">Sport / Category</label>
                      <Input value={aiContent.sport || ""} onChange={e => updateAI("sport", e.target.value)} />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">Accent Color (hex)</label>
                      <div className="flex gap-2 items-center">
                        <Input value={aiContent.accent_color || ""} onChange={e => updateAI("accent_color", e.target.value)} className="flex-1" />
                        <div className="w-8 h-8 rounded border flex-shrink-0" style={{ background: aiContent.accent_color || "#B8860B" }} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-4 space-y-4">
                  <p className="text-xs font-bold text-green-700 uppercase tracking-widest">SEO & Schema</p>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">SEO Title <span className="text-gray-400 font-normal">(max 60 chars)</span></label>
                    <Input value={aiContent.seo_title || ""} onChange={e => updateAI("seo_title", e.target.value)} maxLength={60} />
                    <p className="text-xs text-gray-400 mt-1">{(aiContent.seo_title || "").length}/60</p>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Meta Description <span className="text-gray-400 font-normal">(max 155 chars)</span></label>
                    <Textarea value={aiContent.seo_description || ""} onChange={e => updateAI("seo_description", e.target.value)} maxLength={155} className="min-h-[60px]" />
                    <p className="text-xs text-gray-400 mt-1">{(aiContent.seo_description || "").length}/155</p>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Open Graph Description</label>
                    <Textarea value={aiContent.og_description || ""} onChange={e => updateAI("og_description", e.target.value)} className="min-h-[60px]" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Schema Name (person/team/occasion)</label>
                    <Input value={aiContent.schema_name || ""} onChange={e => updateAI("schema_name", e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Schema Description</label>
                    <Textarea value={aiContent.schema_description || ""} onChange={e => updateAI("schema_description", e.target.value)} className="min-h-[60px]" />
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Button variant="outline" onClick={() => setStep(3)} className="flex-1">← Regenerate</Button>
                <Button onClick={() => setStep(5)} className="flex-1">Looks Good → Preview Send</Button>
              </div>
            </div>
          )}

          {/* Step 5 — Send */}
          {step === 5 && aiContent && (
            <div className="space-y-5">
              <h2 className="font-semibold text-lg text-gray-800">Ready to Send</h2>
              {imageUrl && <img src={imageUrl} alt="Proof preview" className="w-full max-h-40 object-contain rounded border border-gray-200" />}
              <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm text-gray-700">
                <p><strong>To:</strong> {form.customer_name} ({form.customer_email})</p>
                {form.organization && <p><strong>Organization:</strong> {form.organization}</p>}
                <p><strong>Headline:</strong> {aiContent.headline}</p>
                <p><strong>Sport:</strong> {aiContent.sport}</p>
                <p><strong>SEO Title:</strong> {aiContent.seo_title}</p>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded p-3 text-sm text-blue-800">
                Customer will receive an email with a link to their approval page. When they respond, <strong>art@championsinbronze.com</strong> will be notified immediately.
              </div>
              <Button onClick={handleSend} disabled={sending} className="w-full gap-2 py-4 text-base">
                {sending ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</> : <><Send className="w-4 h-4" /> Send Approval Link to Customer</>}
              </Button>
              <Button variant="outline" onClick={() => setStep(4)} className="w-full">← Edit Content</Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}