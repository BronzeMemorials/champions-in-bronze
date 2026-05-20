import { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Copy, ExternalLink, Plus, Clock, CheckCircle, RefreshCw, Send, FileImage } from "lucide-react";

const STATUS_CONFIG = {
  draft:             { label: "Draft",              color: "bg-gray-100 text-gray-600",    icon: FileImage },
  sent:              { label: "Sent",               color: "bg-blue-100 text-blue-700",    icon: Send },
  approved:          { label: "Approved",           color: "bg-green-100 text-green-700",  icon: CheckCircle },
  changes_requested: { label: "Changes Requested",  color: "bg-amber-100 text-amber-700",  icon: RefreshCw },
  revised:           { label: "Revised",            color: "bg-purple-100 text-purple-700",icon: Clock },
};

export default function ArtworkApprovalDashboard() {
  const [copiedId, setCopiedId] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");

  const { data: proofs = [], isLoading, refetch } = useQuery({
    queryKey: ["artwork-proofs"],
    queryFn: () => base44.entities.ArtworkProof.list("-created_date", 100),
  });

  const filtered = filterStatus === "all" ? proofs : proofs.filter(p => p.status === filterStatus);

  const copyLink = (proof) => {
    const url = `${window.location.origin}/approval/${proof.token}`;
    navigator.clipboard.writeText(url);
    setCopiedId(proof.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const statCounts = {
    all: proofs.length,
    sent: proofs.filter(p => p.status === "sent").length,
    approved: proofs.filter(p => p.status === "approved").length,
    changes_requested: proofs.filter(p => p.status === "changes_requested").length,
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-3xl text-gray-900">Artwork Approval Dashboard</h1>
            <p className="text-gray-500 mt-1">Track all artwork proofs and customer responses.</p>
          </div>
          <Link to="/artwork-proof-admin">
            <Button className="gap-2"><Plus className="w-4 h-4" /> New Proof</Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { key: "all", label: "Total Proofs", color: "border-gray-200" },
            { key: "sent", label: "Awaiting Response", color: "border-blue-200" },
            { key: "approved", label: "Approved", color: "border-green-200" },
            { key: "changes_requested", label: "Changes Requested", color: "border-amber-200" },
          ].map(({ key, label, color }) => (
            <button
              key={key}
              onClick={() => setFilterStatus(key)}
              className={`bg-white border-2 rounded-lg p-4 text-left transition-all ${filterStatus === key ? color.replace("border", "border") + " ring-2 ring-offset-1 ring-blue-400" : color} hover:shadow-md`}
            >
              <p className="text-3xl font-bold text-gray-900">{statCounts[key] || 0}</p>
              <p className="text-sm text-gray-500 mt-1">{label}</p>
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white border border-gray-200 rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-semibold text-gray-800">
              {filterStatus === "all" ? "All Proofs" : STATUS_CONFIG[filterStatus]?.label}
              <span className="ml-2 text-sm font-normal text-gray-400">({filtered.length})</span>
            </h2>
            <Button variant="outline" size="sm" onClick={refetch}>Refresh</Button>
          </div>

          {isLoading ? (
            <div className="p-12 text-center text-gray-400">Loading proofs...</div>
          ) : filtered.length === 0 ? (
            <div className="p-12 text-center">
              <FileImage className="w-10 h-10 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">No proofs yet.</p>
              <Link to="/artwork-proof-admin">
                <Button className="mt-4 gap-2"><Plus className="w-4 h-4" /> Create First Proof</Button>
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-gray-50">
              {filtered.map((proof) => {
                const cfg = STATUS_CONFIG[proof.status] || STATUS_CONFIG.draft;
                const StatusIcon = cfg.icon;
                const approvalUrl = `${window.location.origin}/approval/${proof.token}`;
                return (
                  <div key={proof.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1 min-w-0">
                        {proof.proof_image_url && (
                          <img src={proof.proof_image_url} alt="proof thumbnail" className="w-14 h-14 object-cover rounded border border-gray-200 flex-shrink-0" />
                        )}
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <p className="font-semibold text-gray-900">{proof.customer_name}</p>
                            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${cfg.color}`}>
                              <StatusIcon className="w-3 h-3" /> {cfg.label}
                            </span>
                            {proof.ai_sport && <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{proof.ai_sport}</span>}
                          </div>
                          <p className="text-sm text-gray-500 mt-0.5">{proof.customer_email} {proof.organization && `· ${proof.organization}`}</p>
                          {proof.ai_headline && <p className="text-sm text-gray-700 mt-1 italic truncate">&ldquo;{proof.ai_headline}&rdquo;</p>}
                          {proof.change_notes && (
                            <div className="mt-2 bg-amber-50 border border-amber-200 rounded p-2 text-sm text-amber-800">
                              <strong>Changes:</strong> {proof.change_notes}
                            </div>
                          )}
                          <p className="text-xs text-gray-400 mt-1">
                            Created {new Date(proof.created_date).toLocaleDateString()}
                            {proof.sent_at && ` · Sent ${new Date(proof.sent_at).toLocaleDateString()}`}
                            {proof.responded_at && ` · Responded ${new Date(proof.responded_at).toLocaleDateString()}`}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <Button size="sm" variant="outline" onClick={() => copyLink(proof)} className="gap-1">
                          <Copy className="w-3.5 h-3.5" /> {copiedId === proof.id ? "Copied!" : "Copy Link"}
                        </Button>
                        <a href={approvalUrl} target="_blank" rel="noreferrer">
                          <Button size="sm" variant="outline" className="gap-1">
                            <ExternalLink className="w-3.5 h-3.5" /> View
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}