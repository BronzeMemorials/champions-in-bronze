import { useEffect, useState } from "react";
import { base44 } from "@/api/base44Client";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";
import FadeIn from "../components/shared/FadeIn";

export default function ABTestDashboard() {
  const [variants, setVariants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    base44.entities.ABTestVariant.filter({ test_id: "quote_form_title" }).then((data) => {
      setVariants(Array.isArray(data) ? data : []);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const safeVariants = Array.isArray(variants) ? variants : [];
  const sorted = [...safeVariants].sort((a, b) => {
    const rA = (a.conversions + 1) / (a.impressions + 2);
    const rB = (b.conversions + 1) / (b.impressions + 2);
    return rB - rA;
  });

  const chartData = sorted.map((v) => ({
    name: v.phrase.length > 28 ? v.phrase.slice(0, 28) + "…" : v.phrase,
    fullPhrase: v.phrase,
    rate: parseFloat((((v.conversions || 0) / Math.max(v.impressions || 1, 1)) * 100).toFixed(2)),
    impressions: v.impressions || 0,
    conversions: v.conversions || 0,
    clicks: v.clicks || 0,
    active: v.is_active !== false,
  }));

  const toggleActive = async (v) => {
    await base44.entities.ABTestVariant.update(v.id, { is_active: !v.is_active });
    setVariants((prev) => (Array.isArray(prev) ? prev : []).map((x) => x.id === v.id ? { ...x, is_active: !x.is_active } : x));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <h1 className="font-serif text-4xl text-black mb-2">A/B Test Dashboard</h1>
          <p className="text-gray-600 text-sm mb-10 font-sans">Quote Form Title — Epsilon-Greedy Bandit · Top {chartData.filter(c => c.active).length} active variants</p>

          {loading ? (
            <p className="text-gray-500">Loading…</p>
          ) : (
            <>
              {/* Bar Chart */}
              <div className="bg-white border border-gray-200 p-6 mb-8 shadow-sm">
                <p className="font-sans text-xs uppercase tracking-widest text-gray-500 mb-4">Conversion Rate by Variant (%)</p>
                <ResponsiveContainer width="100%" height={260}>
                  <BarChart data={chartData} layout="vertical" margin={{ left: 10, right: 30 }}>
                    <XAxis type="number" tickFormatter={(v) => `${v}%`} tick={{ fontSize: 11 }} />
                    <YAxis type="category" dataKey="name" width={200} tick={{ fontSize: 11 }} />
                    <Tooltip formatter={(v, n, p) => [`${v}%`, "Conv. Rate"]} labelFormatter={(l, payload) => payload?.[0]?.payload?.fullPhrase || l} />
                    <Bar dataKey="rate" radius={[0, 3, 3, 0]}>
                      {chartData.map((entry, i) => (
                        <Cell key={i} fill={entry.active ? "#C9A84C" : "#d1d5db"} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Table */}
              <div className="bg-white border border-gray-200 shadow-sm overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left px-4 py-3 font-sans text-xs uppercase tracking-widest text-gray-500">Phrase</th>
                      <th className="text-right px-4 py-3 font-sans text-xs uppercase tracking-widest text-gray-500">Shown</th>
                      <th className="text-right px-4 py-3 font-sans text-xs uppercase tracking-widest text-gray-500">Clicks</th>
                      <th className="text-right px-4 py-3 font-sans text-xs uppercase tracking-widest text-gray-500">Submits</th>
                      <th className="text-right px-4 py-3 font-sans text-xs uppercase tracking-widest text-gray-500">Conv%</th>
                      <th className="text-center px-4 py-3 font-sans text-xs uppercase tracking-widest text-gray-500">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sorted.map((v, i) => {
                      const rate = ((v.conversions || 0) / Math.max(v.impressions || 1, 1) * 100).toFixed(1);
                      const active = v.is_active !== false;
                      return (
                        <tr key={v.id} className={`border-b border-gray-100 ${i === 0 ? "bg-yellow-50" : ""}`}>
                          <td className="px-4 py-3 font-serif text-black text-sm">{v.phrase}</td>
                          <td className="px-4 py-3 text-right text-gray-700">{v.impressions || 0}</td>
                          <td className="px-4 py-3 text-right text-gray-700">{v.clicks || 0}</td>
                          <td className="px-4 py-3 text-right text-gray-700">{v.conversions || 0}</td>
                          <td className="px-4 py-3 text-right font-semibold text-black">{rate}%</td>
                          <td className="px-4 py-3 text-center">
                            <button onClick={() => toggleActive(v)}
                              className={`text-xs px-3 py-1 font-sans uppercase tracking-wide border transition-colors ${active ? "border-green-400 text-green-700 hover:bg-green-50" : "border-gray-300 text-gray-400 hover:bg-gray-50"}`}>
                              {active ? "Active" : "Paused"}
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <p className="text-gray-400 text-xs mt-6 font-sans">
                Algorithm: Epsilon-greedy (ε=20%). Variants shown ≥30 times are auto-pruned when all active variants exceed target count of 5. You can manually pause/resume any variant above.
              </p>
            </>
          )}
        </FadeIn>
      </div>
    </div>
  );
}