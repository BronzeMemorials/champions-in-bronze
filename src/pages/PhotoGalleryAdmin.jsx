import { useState, useMemo } from "react";
import { Download, Search, X, Edit2, Check, Image } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/shared/FadeIn";

// ─── All product photos centralized here ──────────────────────────────────────
const ALL_PHOTOS = [
  // ── Busts & Statues ──────────────────────────────────────────────────────────
  { id: "bs-hero",      category: "Busts & Statues", name: "Hero — Bronze Bust Main",               url: "https://media.base44.com/images/public/69e6638934292a547ec97753/fde18b17d_82360375-ACAD-438B-BC4F-F588D804FAFC.png" },
  { id: "bs-img2",      category: "Busts & Statues", name: "Bronze Bust — Side View",               url: "https://media.base44.com/images/public/69e6638934292a547ec97753/f91a2af55_0BB7CEA4-F96D-4C51-BADB-946A7C8080BB.png" },
  { id: "bs-img3",      category: "Busts & Statues", name: "Bronze Bust — Detail",                  url: "https://media.base44.com/images/public/69e6638934292a547ec97753/a9a624b83_57AF450C-DA6C-4768-9FD6-6B877E40CB2E.png" },
  { id: "bs-ff1",       category: "Busts & Statues", name: "Firefighter 72-inch Statue",            url: "https://media.base44.com/images/public/69e6638934292a547ec97753/8bf520da9_figherfighter-72-inches.png" },
  { id: "bs-ff2",       category: "Busts & Statues", name: "Firefighter — Kneeling, Dark Patina",   url: "https://media.base44.com/images/public/69e6638934292a547ec97753/a736e67f3_table-top-firefighter-dark.jpg" },
  { id: "bs-ff3",       category: "Busts & Statues", name: "Firefighter — Kneeling, Gold Patina",   url: "https://media.base44.com/images/public/69e6638934292a547ec97753/fee1a9240_table-top-firefighter-light-r.jpg" },
  { id: "bs-ff4",       category: "Busts & Statues", name: "Firefighter — Kneeling Life-size",      url: "https://media.base44.com/images/public/69e6638934292a547ec97753/ce2eda476_firefighter-72-inches.jpg" },
  { id: "bs-helmet1",   category: "Busts & Statues", name: "Firefighter Helmet Bronze Sculpture",   url: "https://media.base44.com/images/public/69e6638934292a547ec97753/7c64e41ff_firefighter-helmet.jpg" },
  { id: "bs-helmet2",   category: "Busts & Statues", name: "Firefighter Helmet — Cropped View",     url: "https://media.base44.com/images/public/69e6638934292a547ec97753/0bb44a23f_firefighter-helmet-cr.jpg" },
  { id: "bs-helmet3",   category: "Busts & Statues", name: "Firefighter Helmet — Angle 2",          url: "https://media.base44.com/images/public/69e6638934292a547ec97753/491e4c058_firefighter-helmet-cr-2.jpg" },
  { id: "bs-m4",        category: "Busts & Statues", name: "M4 Battle Cross Memorial Statue",       url: "https://media.base44.com/images/public/69e6638934292a547ec97753/ff47f84a6_m4-rifle-cr.jpg" },
  { id: "bs-sol1",      category: "Busts & Statues", name: "Kneeling Soldier — Vietnam Era",        url: "https://media.base44.com/images/public/69e6638934292a547ec97753/c0b8156f5_soldier-kneeling-800-crr.jpg" },
  { id: "bs-sol2",      category: "Busts & Statues", name: "Vietnam Soldier Statue",                url: "https://media.base44.com/images/public/69e6638934292a547ec97753/bfca59864_vietnam-soldier.jpg" },
  { id: "bs-sol3",      category: "Busts & Statues", name: "Soldier Saluting — Front & Back",       url: "https://media.base44.com/images/public/69e6638934292a547ec97753/f860ddcd4_bronze-front-back-statue.jpg" },
  { id: "bs-dog1",      category: "Busts & Statues", name: "Service Dog Bronze Sculpture",          url: "https://media.base44.com/images/public/69e6638934292a547ec97753/d6b4c5020_service-dog.jpg" },
  { id: "bs-dog2",      category: "Busts & Statues", name: "Service Dog — Angle 2",                 url: "https://media.base44.com/images/public/69e6638934292a547ec97753/5f116da28_service-dogs.jpg" },
  { id: "bs-eagle1",    category: "Busts & Statues", name: "Bronze Eagle — In Foundry",             url: "https://media.base44.com/images/public/69e6638934292a547ec97753/57ec33cb4_IMG_34042.jpg" },
  { id: "bs-eagle2",    category: "Busts & Statues", name: "Gorham Eagle — Front View",             url: "https://media.base44.com/images/public/69e6638934292a547ec97753/9574a705a_Gorham-Eagle-Front-View.jpg" },
  { id: "bs-eagle3",    category: "Busts & Statues", name: "American Eagle Tabletop",               url: "https://media.base44.com/images/public/69e6638934292a547ec97753/172481efe_AmericanEagle-cr.jpg" },
  { id: "bs-carl1",     category: "Busts & Statues", name: "Dr. Carl Everett — Reference Photo",    url: "https://media.base44.com/images/public/69e6638934292a547ec97753/8f204e96a_Dr_Carl_Everett-pic.jpg" },
  { id: "bs-carl2",     category: "Busts & Statues", name: "Dr. Carl Everett — Clay Mold",          url: "https://media.base44.com/images/public/69e6638934292a547ec97753/cdaeeb4e4_Dr_Carl_Everett-clay-mold.jpg" },
  { id: "bs-rey1",      category: "Busts & Statues", name: "Reynolds Couple — Reference Photo",     url: "https://media.base44.com/images/public/69e6638934292a547ec97753/cf9e2126a_REYNOLDS-pic-ts.jpg" },
  { id: "bs-rey2",      category: "Busts & Statues", name: "Reynolds Couple — Clay Mold",           url: "https://media.base44.com/images/public/69e6638934292a547ec97753/c5d05c31e_reynolds-clay-ts.jpg" },
  { id: "bs-meade1",    category: "Busts & Statues", name: "Meade Woman — Clay Bust Mold",          url: "https://media.base44.com/images/public/69e6638934292a547ec97753/e556bcdc6_meade-woman.jpg" },
  { id: "bs-meade2",    category: "Busts & Statues", name: "Meade Clay Mold — In Studio",           url: "https://media.base44.com/images/public/69e6638934292a547ec97753/c2734dc11_IMG_9572-meade-clay-mold.jpg" },
  { id: "bs-3dp",       category: "Busts & Statues", name: "3D Printed Statue Model",               url: "https://media.base44.com/images/public/69e6638934292a547ec97753/f81a6917b_3d-print-statue-man.jpg" },

  // ── 3D Relief Plaques ────────────────────────────────────────────────────────
  { id: "rp-hero",      category: "3D Relief Plaques", name: "Relief Plaques — Hero",               url: "https://media.base44.com/images/public/69e6638934292a547ec97753/90136d985_3987887D-191A-419C-B621-221DF36585E5.png" },
  { id: "rp-img2",      category: "3D Relief Plaques", name: "Relief Plaque — View 2",              url: "https://media.base44.com/images/public/69e6638934292a547ec97753/f54e9ac4d_ED04FD70-945D-4463-AC78-050B841D9D0C.png" },
  { id: "rp-img3",      category: "3D Relief Plaques", name: "Relief Plaque — View 3",              url: "https://media.base44.com/images/public/69e6638934292a547ec97753/807fb8285_1EF9640F-BCCF-47C1-8ADB-FF7ACD382588.png" },
  { id: "rp-schw1",     category: "3D Relief Plaques", name: "Gen. Schwarzkopf — Reference Photo",  url: "https://media.base44.com/images/public/69e6638934292a547ec97753/0a4d2f8f0_SCHWARZKOPF-photo.jpg" },
  { id: "rp-schw2",     category: "3D Relief Plaques", name: "Gen. Schwarzkopf — Clay Mold",        url: "https://media.base44.com/images/public/69e6638934292a547ec97753/108110e75_SCHWARZKOPF-clay-mold.jpg" },
  { id: "rp-schw3",     category: "3D Relief Plaques", name: "Gen. Schwarzkopf — Finished Bronze",  url: "https://media.base44.com/images/public/69e6638934292a547ec97753/767475c4f_schwarzkopf-ph-plaque.jpg" },
  { id: "rp-mhoff1",    category: "3D Relief Plaques", name: "Manfred Hoffmann — Reference Photo",  url: "https://media.base44.com/images/public/69e6638934292a547ec97753/dff654d8a_Manfred_HoffmannHighRes-colorphoto.jpg" },
  { id: "rp-mhoff2",    category: "3D Relief Plaques", name: "Manfred Hoffmann — Clay Mold",        url: "https://media.base44.com/images/public/69e6638934292a547ec97753/125fa40c8_manfred-artis-clay-mold.jpg" },
  { id: "rp-carol",     category: "3D Relief Plaques", name: "Carol Hutchins — Michigan Softball",  url: "https://media.base44.com/images/public/69e6638934292a547ec97753/dc6a79710_2026-CAROL-HUTCHINS-bas-relief.jpg" },
  { id: "rp-baseball",  category: "3D Relief Plaques", name: "Baseball Player — Clay Mold",         url: "https://media.base44.com/images/public/69e6638934292a547ec97753/03a853216_clay-baseball-man.jpg" },
  { id: "rp-andrews",   category: "3D Relief Plaques", name: "Jessie Andrews Historical Marker",    url: "https://media.base44.com/images/public/69e6638934292a547ec97753/9549ea0b4_2025-bas-relief-cast-bronze-plaque-Andrews.jpg" },
  { id: "rp-gaines",    category: "3D Relief Plaques", name: "John Gaines Historical Marker",       url: "https://media.base44.com/images/public/69e6638934292a547ec97753/540027290_2025-bas-relief-cast-bronze-plaque-Gaines.jpg" },
  { id: "rp-tanig",     category: "3D Relief Plaques", name: "Isamu Taniguchi Historical Marker",   url: "https://media.base44.com/images/public/69e6638934292a547ec97753/d7e79f62a_2025-bas-relief-cast-bronze-plaque-taniguchi.jpg" },
  { id: "rp-drpepper",  category: "3D Relief Plaques", name: "Dr Pepper Museum Co-Founders Plaque", url: "https://media.base44.com/images/public/69e6638934292a547ec97753/d3e7b0f81_drpepper-440.jpg" },
  { id: "rp-vietnam",   category: "3D Relief Plaques", name: "Vietnam Veterans Memorial Plaque",    url: "https://media.base44.com/images/public/69e6638934292a547ec97753/b10d7478c_Vietnam-Veterans-Modeled-Feature-36-x-24-ts.jpg" },
  { id: "rp-wwi",       category: "3D Relief Plaques", name: "WWI Veterans Memorial Plaque",        url: "https://media.base44.com/images/public/69e6638934292a547ec97753/c16278797_WWI-Veterans-Modeled-Feature-36-x-24-ts.jpg" },
  { id: "rp-wwii",      category: "3D Relief Plaques", name: "WWII Veterans Memorial Plaque",       url: "https://media.base44.com/images/public/69e6638934292a547ec97753/fa624bcd9_WWII-Veterans-Modeled-Feature-36-x-24-ts.jpg" },
  { id: "rp-fire-svc",  category: "3D Relief Plaques", name: "Firefighter Service Relief Plaque",   url: "https://media.base44.com/images/public/69e6638934292a547ec97753/4d72ca993_firefighter-service-plaque.jpg" },
  { id: "rp-police",    category: "3D Relief Plaques", name: "Police Service Relief Plaque",        url: "https://media.base44.com/images/public/69e6638934292a547ec97753/506d7cbcb_relief-police.jpg" },
  { id: "rp-hunter",    category: "3D Relief Plaques", name: "Hunter Brooks Watson Memorial",       url: "https://media.base44.com/images/public/69e6638934292a547ec97753/1a0471236_hunter-brooks-2.jpg" },
  { id: "rp-birk",      category: "3D Relief Plaques", name: "Berkshire Hills Bancorp Portrait",    url: "https://media.base44.com/images/public/69e6638934292a547ec97753/bb8ee0525_500-birk.jpg" },
  { id: "rp-plummer",   category: "3D Relief Plaques", name: "Harold Plummer Recognition Plaque",   url: "https://media.base44.com/images/public/69e6638934292a547ec97753/3c32eaa2a_500-plummer.jpg" },
  { id: "rp-reynolds1", category: "3D Relief Plaques", name: "Reynolds — Reference Photo",          url: "https://media.base44.com/images/public/69e6638934292a547ec97753/cf9e2126a_REYNOLDS-pic-ts.jpg" },
  { id: "rp-reynolds2", category: "3D Relief Plaques", name: "Reynolds — Clay Mold",                url: "https://media.base44.com/images/public/69e6638934292a547ec97753/c5d05c31e_reynolds-clay-ts.jpg" },
];

const CATEGORIES = ["All", ...Array.from(new Set(ALL_PHOTOS.map((p) => p.category)))];

// ─── Download helper ───────────────────────────────────────────────────────────
async function downloadImage(url, filename) {
  const res = await fetch(url, { mode: "cors" });
  const blob = await res.blob();
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = filename.replace(/[^a-z0-9_\-. ]/gi, "_") + "." + (url.split(".").pop().split("?")[0] || "jpg");
  a.click();
  URL.revokeObjectURL(a.href);
}

// ─── Photo Card ────────────────────────────────────────────────────────────────
function PhotoCard({ photo, names, onRename, selected, onToggleSelect, downloading }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState("");
  const displayName = names[photo.id] ?? photo.name;

  const startEdit = () => { setDraft(displayName); setEditing(true); };
  const commitEdit = () => { if (draft.trim()) onRename(photo.id, draft.trim()); setEditing(false); };

  return (
    <div className={`group relative border-2 transition-all duration-150 bg-white ${selected ? "border-amber-500 shadow-md" : "border-gray-200 hover:border-gray-400"}`}>
      {/* Select checkbox */}
      <button
        onClick={() => onToggleSelect(photo.id)}
        className={`absolute top-2 left-2 z-10 w-5 h-5 border-2 flex items-center justify-center transition-colors ${selected ? "bg-amber-500 border-amber-500" : "bg-white border-gray-300 group-hover:border-amber-400"}`}
      >
        {selected && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
      </button>

      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden bg-gray-50">
        <img
          src={photo.url}
          alt={displayName}
          loading="lazy"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Name + actions */}
      <div className="p-3 border-t border-gray-100">
        {editing ? (
          <div className="flex items-center gap-1">
            <input
              autoFocus
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter") commitEdit(); if (e.key === "Escape") setEditing(false); }}
              className="flex-1 text-xs border border-amber-400 px-2 py-1 rounded outline-none font-sans"
            />
            <button onClick={commitEdit} className="text-green-600 hover:text-green-800 p-0.5"><Check className="w-4 h-4" /></button>
            <button onClick={() => setEditing(false)} className="text-gray-400 hover:text-gray-600 p-0.5"><X className="w-4 h-4" /></button>
          </div>
        ) : (
          <div className="flex items-start justify-between gap-2">
            <span className="text-xs text-gray-800 font-sans leading-snug flex-1 break-words">{displayName}</span>
            <button onClick={startEdit} className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-gray-700 flex-shrink-0">
              <Edit2 className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
        <div className="flex items-center justify-between mt-2">
          <span className="text-[10px] text-gray-400 font-sans uppercase tracking-wider">{photo.category}</span>
          <button
            disabled={downloading}
            onClick={() => downloadImage(photo.url, displayName)}
            className="flex items-center gap-1 text-[10px] text-gray-500 hover:text-amber-700 font-sans uppercase tracking-wider transition-colors disabled:opacity-40"
          >
            <Download className="w-3 h-3" /> Download
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────
export default function PhotoGalleryAdmin() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [names, setNames] = useState({});          // overridden display names keyed by id
  const [selected, setSelected] = useState(new Set());
  const [downloading, setDownloading] = useState(false);

  const filtered = useMemo(() => {
    const cat = category === "All" ? ALL_PHOTOS : ALL_PHOTOS.filter((p) => p.category === category);
    if (!search.trim()) return cat;
    const q = search.toLowerCase();
    return cat.filter((p) => (names[p.id] ?? p.name).toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  }, [category, search, names]);

  const handleRename = (id, newName) => setNames((prev) => ({ ...prev, [id]: newName }));

  const toggleSelect = (id) => setSelected((prev) => {
    const next = new Set(prev);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });

  const selectAll = () => setSelected(new Set(filtered.map((p) => p.id)));
  const clearSelection = () => setSelected(new Set());

  const downloadSelected = async () => {
    const toDownload = filtered.filter((p) => selected.has(p.id));
    if (!toDownload.length) return;
    setDownloading(true);
    for (const photo of toDownload) {
      await downloadImage(photo.url, names[photo.id] ?? photo.name);
      await new Promise((r) => setTimeout(r, 300)); // small delay between downloads
    }
    setDownloading(false);
  };

  const downloadAll = async () => {
    setDownloading(true);
    for (const photo of filtered) {
      await downloadImage(photo.url, names[photo.id] ?? photo.name);
      await new Promise((r) => setTimeout(r, 300));
    }
    setDownloading(false);
  };

  const selectedCount = selected.size;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex items-center gap-3 flex-1">
              <Image className="w-5 h-5 text-amber-700 flex-shrink-0" />
              <div>
                <h1 className="font-serif text-xl text-gray-900 leading-tight">Photo Gallery Admin</h1>
                <p className="text-xs text-gray-500 font-sans">{ALL_PHOTOS.length} photos across {CATEGORIES.length - 1} categories</p>
              </div>
            </div>
            {/* Search */}
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search photos…"
                className="pl-9 text-sm"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2 mt-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => { setCategory(cat); clearSelection(); }}
                className={`text-xs font-sans px-3 py-1.5 border transition-colors ${category === cat ? "bg-gray-900 text-white border-gray-900" : "bg-white text-gray-600 border-gray-300 hover:border-gray-500"}`}
              >
                {cat} {cat !== "All" && `(${ALL_PHOTOS.filter((p) => p.category === cat).length})`}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Action bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center gap-3">
        <span className="text-sm text-gray-500 font-sans">{filtered.length} photos shown</span>
        <div className="flex items-center gap-2 ml-auto flex-wrap">
          {selectedCount > 0 ? (
            <>
              <span className="text-sm font-sans text-amber-700">{selectedCount} selected</span>
              <Button variant="outline" size="sm" onClick={clearSelection} className="text-xs">Clear</Button>
              <Button
                size="sm"
                disabled={downloading}
                onClick={downloadSelected}
                className="text-xs gap-1.5 bg-amber-600 hover:bg-amber-700 text-white border-0"
              >
                <Download className="w-3.5 h-3.5" />
                {downloading ? "Downloading…" : `Download ${selectedCount}`}
              </Button>
            </>
          ) : (
            <Button variant="outline" size="sm" onClick={selectAll} className="text-xs">Select All</Button>
          )}
          <Button
            variant="outline"
            size="sm"
            disabled={downloading}
            onClick={downloadAll}
            className="text-xs gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            {downloading ? "Downloading…" : `Download All (${filtered.length})`}
          </Button>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-gray-400 font-sans">No photos match your search.</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filtered.map((photo) => (
              <FadeIn key={photo.id}>
                <PhotoCard
                  photo={photo}
                  names={names}
                  onRename={handleRename}
                  selected={selected.has(photo.id)}
                  onToggleSelect={toggleSelect}
                  downloading={downloading}
                />
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}