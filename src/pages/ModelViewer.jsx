import { useState } from "react";
import { base44 } from "@/api/base44Client";
import GLBViewer from "../components/shared/GLBViewer";
import FadeIn from "../components/shared/FadeIn";
import { CheckCircle, Loader2, Save } from "lucide-react";

export default function ModelViewer() {
  const [uploadedUrl, setUploadedUrl] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [savePage, setSavePage] = useState("busts_and_statues");
  const [saveLabel, setSaveLabel] = useState("");

  const handleModelLoaded = (url, name) => {
    setUploadedUrl(url);
    setFileName(name);
    setSaved(false);
  };

  const handleSave = async () => {
    if (!uploadedUrl || !fileName) return;
    setSaving(true);

    // Upload file to permanent storage
    const response = await fetch(uploadedUrl);
    const blob = await response.blob();
    const file = new File([blob], fileName, { type: "model/gltf-binary" });
    const { file_url } = await base44.integrations.Core.UploadFile({ file });

    // Save new model record
    await base44.entities.Product3DModel.create({
      name: saveLabel || fileName.replace(".glb", ""),
      file_url,
      page: savePage,
      label: saveLabel || "Interactive 3D Preview",
      is_active: true,
    });

    setSaving(false);
    setSaved(true);
  };

  return (
    <div className="bg-obsidian text-parchment min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-10">
            <span className="text-gold font-sans tracking-[0.3em] uppercase text-xs font-semibold">Admin · 3D Model Manager</span>
            <h1 className="font-serif text-4xl md:text-5xl mt-3 text-parchment">GLB Model Viewer</h1>
            <p className="mt-4 text-parchment/50 text-sm max-w-xl mx-auto">
              Upload a .glb file to preview it, then save it to a product page so customers can see it.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <GLBViewer height={600} onModelLoaded={handleModelLoaded} />
        </FadeIn>

        {uploadedUrl && (
          <FadeIn delay={0.05}>
            <div className="mt-6 border border-bronze/20 bg-secondary/20 rounded-sm p-6 space-y-4">
              <h3 className="font-serif text-lg text-parchment">Save to Product Page</h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-parchment/50 uppercase tracking-wider font-sans mb-2 block">Display Label</label>
                  <input
                    type="text"
                    value={saveLabel}
                    onChange={(e) => setSaveLabel(e.target.value)}
                    placeholder={fileName?.replace(".glb", "") || "e.g. Bronze Athlete Bust"}
                    className="w-full bg-obsidian border border-bronze/30 text-parchment placeholder:text-parchment/30 focus:border-gold h-10 px-3 text-sm rounded-sm outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs text-parchment/50 uppercase tracking-wider font-sans mb-2 block">Product Page</label>
                  <select
                    value={savePage}
                    onChange={(e) => setSavePage(e.target.value)}
                    className="w-full bg-obsidian border border-bronze/30 text-parchment h-10 px-3 text-sm rounded-sm outline-none"
                  >
                    <option value="busts_and_statues">Busts & Statues</option>
                    <option value="relief_plaques">3D Relief Plaques</option>
                    <option value="photo_imagecast">Photo ImageCasting</option>
                    <option value="hall_of_fame">Hall of Fame</option>
                    <option value="donor_recognition">Donor Recognition</option>
                  </select>
                </div>
              </div>

              <button
                onClick={handleSave}
                disabled={saving || saved}
                className="flex items-center gap-2 bg-bronze hover:bg-gold text-parchment px-6 py-3 font-sans text-sm uppercase tracking-[0.15em] font-semibold transition-all duration-300 rounded-sm disabled:opacity-60"
              >
                {saving ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Uploading & Saving…</>
                ) : saved ? (
                  <><CheckCircle className="w-4 h-4" /> Saved! Now live on the page.</>
                ) : (
                  <><Save className="w-4 h-4" /> Save to Page</>
                )}
              </button>

              {saved && (
                <p className="text-parchment/50 text-xs">
                  The model is now live. Customers will see it in the interactive 3D viewer on the selected product page.
                </p>
              )}
            </div>
          </FadeIn>
        )}

        <FadeIn delay={0.25}>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[
              { label: "Drag", desc: "Left or right to rotate" },
              { label: "±180°", desc: "Horizontal rotation limit" },
              { label: "GLB Only", desc: "Standard 3D format" },
            ].map((item) => (
              <div key={item.label} className="border border-bronze/15 bg-secondary/20 p-4 rounded-sm">
                <p className="font-serif text-xl text-gold">{item.label}</p>
                <p className="text-parchment/40 text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}