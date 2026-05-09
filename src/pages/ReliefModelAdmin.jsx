import { useState, useRef } from "react";
import { base44 } from "@/api/base44Client";
import STLViewer from "../components/shared/STLViewer";
import FadeIn from "../components/shared/FadeIn";
import { CheckCircle, Loader2, Save, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";

const SPORTS = ["Football", "Basketball", "Baseball", "Hockey", "Soccer", "Golf", "Lacrosse", "Track & Field", "Wrestling", "Tennis", "Volleyball", "Swimming", "Multi-Sport"];

export default function ReliefModelAdmin() {
  const [uploadedUrl, setUploadedUrl] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [label, setLabel] = useState("");
  const [sport, setSport] = useState("");
  const [depth, setDepth] = useState("");
  const [sizeRange, setSizeRange] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const fileRef = useRef(null);

  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setUploadedUrl(url);
    setFileName(file.name);
    setSaved(false);
    e.target.value = "";
  };

  const handleSave = async () => {
    if (!uploadedUrl || !fileName) return;
    setSaving(true);
    const response = await fetch(uploadedUrl);
    const blob = await response.blob();
    const file = new File([blob], fileName, { type: "model/stl" });
    const { file_url } = await base44.integrations.Core.UploadFile({ file });
    await base44.entities.ReliefPlaque3DModel.create({
      name: label || fileName.replace(".stl", ""),
      label: label || fileName.replace(".stl", ""),
      file_url,
      sport: sport || undefined,
      depth: depth || undefined,
      size_range: sizeRange || undefined,
      price_range: priceRange || undefined,
      is_active: true,
    });
    setSaving(false);
    setSaved(true);
  };

  return (
    <div className="bg-obsidian text-parchment min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-10">
            <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Admin · 3D Relief Model Manager</span>
            <h1 className="font-serif text-4xl mt-3 text-parchment">STL Relief Plaque Uploader</h1>
            <p className="mt-4 text-parchment/50 text-sm max-w-xl mx-auto">
              Upload an .stl file to preview it in 3D, then save it to the Relief Plaque gallery for customer viewing.
            </p>
          </div>
        </FadeIn>

        {/* Upload Drop Zone */}
        {!uploadedUrl && (
          <FadeIn delay={0.1}>
            <div
              onClick={() => fileRef.current?.click()}
              className="border-2 border-dashed border-bronze/30 hover:border-gold/60 transition-colors p-16 text-center cursor-pointer bg-secondary/20 rounded-sm"
            >
              <Upload className="w-12 h-12 text-bronze/40 mx-auto mb-4" />
              <p className="text-parchment/50 font-sans text-sm">Drop a .stl file here, or click to browse</p>
              <p className="text-parchment/25 text-xs mt-1">STL format · Binary or ASCII</p>
            </div>
          </FadeIn>
        )}

        {/* 3D Preview */}
        {uploadedUrl && (
          <FadeIn delay={0.05}>
            <STLViewer url={uploadedUrl} height={520} label={label || fileName} />
          </FadeIn>
        )}

        {/* Save Panel */}
        {uploadedUrl && (
          <FadeIn delay={0.1}>
            <div className="mt-6 border border-bronze/20 bg-secondary/20 rounded-sm p-6 space-y-4">
              <h3 className="font-serif text-lg text-parchment">Save to Relief Plaque Gallery</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-parchment/50 uppercase tracking-wider font-sans mb-2 block">Display Label</label>
                  <Input value={label} onChange={(e) => setLabel(e.target.value)}
                    placeholder={fileName?.replace(".stl", "") || "e.g. Quarterback Relief Plaque"}
                    className="bg-obsidian border-bronze/30 text-parchment placeholder:text-parchment/25 focus:border-gold h-10" />
                </div>
                <div>
                  <label className="text-xs text-parchment/50 uppercase tracking-wider font-sans mb-2 block">Sport</label>
                  <select value={sport} onChange={(e) => setSport(e.target.value)}
                    className="w-full bg-obsidian border border-bronze/30 text-parchment h-10 px-3 text-sm rounded-sm outline-none focus:border-gold">
                    <option value="">Select sport (optional)</option>
                    {SPORTS.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-xs text-parchment/50 uppercase tracking-wider font-sans mb-2 block">Relief Depth</label>
                  <Input value={depth} onChange={(e) => setDepth(e.target.value)}
                    placeholder='e.g. 3/4"'
                    className="bg-obsidian border-bronze/30 text-parchment placeholder:text-parchment/25 focus:border-gold h-10" />
                </div>
                <div>
                  <label className="text-xs text-parchment/50 uppercase tracking-wider font-sans mb-2 block">Size Range</label>
                  <Input value={sizeRange} onChange={(e) => setSizeRange(e.target.value)}
                    placeholder='e.g. 12×18" to 24×30"'
                    className="bg-obsidian border-bronze/30 text-parchment placeholder:text-parchment/25 focus:border-gold h-10" />
                </div>
                <div>
                  <label className="text-xs text-parchment/50 uppercase tracking-wider font-sans mb-2 block">Starting Price</label>
                  <Input value={priceRange} onChange={(e) => setPriceRange(e.target.value)}
                    placeholder="e.g. From $1,200"
                    className="bg-obsidian border-bronze/30 text-parchment placeholder:text-parchment/25 focus:border-gold h-10" />
                </div>
              </div>

              <div className="flex gap-3">
                <button onClick={handleSave} disabled={saving || saved}
                  className="flex items-center gap-2 bg-bronze hover:bg-gold text-obsidian px-6 py-3 font-sans text-sm uppercase tracking-[0.15em] font-semibold transition-all duration-300 rounded-sm disabled:opacity-60">
                  {saving ? <><Loader2 className="w-4 h-4 animate-spin" /> Uploading…</>
                    : saved ? <><CheckCircle className="w-4 h-4" /> Saved to Gallery</>
                    : <><Save className="w-4 h-4" /> Save to Relief Gallery</>}
                </button>
                <button onClick={() => { setUploadedUrl(null); setFileName(null); setSaved(false); }}
                  className="border border-bronze/30 hover:border-gold text-parchment/60 hover:text-parchment px-6 py-3 font-sans text-sm uppercase tracking-[0.15em] transition-all duration-300 rounded-sm">
                  Upload Another
                </button>
              </div>

              {saved && (
                <p className="text-parchment/50 text-xs">
                  The model is now live in the 3D Relief Plaque gallery. Customers can rotate and view it in full 3D detail.
                </p>
              )}
            </div>
          </FadeIn>
        )}

        <input ref={fileRef} type="file" accept=".stl" className="hidden" onChange={handleFile} />
      </div>
    </div>
  );
}