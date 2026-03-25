"use client";
import { useState } from "react";
import { TRADE_ADS, TradeAd } from "@/lib/data";

function TradeAdCard({ ad }: { ad: TradeAd }) {
  const [contacted, setContacted] = useState(false);

  return (
    <div className="rounded-2xl border border-white/7 bg-white/[0.03] hover:bg-white/[0.05] hover:border-purple-500/20 transition-all duration-200 p-4 group">
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <div className="relative shrink-0">
          <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl">
            {ad.avatar}
          </div>
          {ad.online && (
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-dark-900" />
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* User info */}
          <div className="flex items-center gap-1.5 flex-wrap mb-2">
            <span className="text-white font-semibold text-sm">{ad.user}</span>
            {ad.verified && (
              <span className="text-[10px] text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-1.5 py-0.5 rounded-full font-bold">✓ Verified</span>
            )}
            {ad.bumped && (
              <span className="text-[10px] text-amber-400 bg-amber-400/10 border border-amber-400/20 px-1.5 py-0.5 rounded-full font-bold">⚡ Bumped</span>
            )}
            <div className="ml-auto flex items-center gap-2">
              <span className="text-[10px] text-emerald-400 font-bold">{ad.rating}% 👍</span>
              <span className="text-[10px] text-slate-500">{ad.timeAgo} ago</span>
            </div>
          </div>

          {/* Trade items */}
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">Offering</span>
              {ad.offering.map((item, i) => (
                <span key={i} className="text-xs bg-violet-500/10 border border-violet-500/20 text-violet-300 px-2.5 py-1 rounded-lg font-medium">
                  {item}
                </span>
              ))}
            </div>
            <span className="text-slate-500 text-lg">→</span>
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold">For</span>
              {ad.requesting.map((item, i) => (
                <span key={i} className="text-xs bg-pink-500/10 border border-pink-500/20 text-pink-300 px-2.5 py-1 rounded-lg font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>

          {ad.notes && (
            <p className="text-xs text-slate-500 mt-2 italic">"{ad.notes}"</p>
          )}
        </div>

        {/* Contact button */}
        <button
          onClick={() => setContacted(true)}
          className={`shrink-0 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            contacted
              ? "bg-emerald-500/20 border border-emerald-500/30 text-emerald-300"
              : "bg-purple-500/15 border border-purple-500/25 text-purple-300 hover:bg-purple-500/25"
          }`}
        >
          {contacted ? "✓ Sent!" : "Contact"}
        </button>
      </div>
    </div>
  );
}

export default function TradingPage() {
  const [search, setSearch] = useState("");
  const [searchIn, setSearchIn] = useState("All");
  const [filterVerified, setFilterVerified] = useState(false);
  const [filterBumped, setFilterBumped] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [offerInput, setOfferInput] = useState("");
  const [requestInput, setRequestInput] = useState("");
  const [notes, setNotes] = useState("");
  const [posted, setPosted] = useState(false);

  const filtered = TRADE_ADS.filter((ad) => {
    const q = search.toLowerCase();
    if (filterVerified && !ad.verified) return false;
    if (filterBumped && !ad.bumped) return false;
    if (!q) return true;
    if (searchIn === "Offering") return ad.offering.some((i) => i.toLowerCase().includes(q));
    if (searchIn === "Requesting") return ad.requesting.some((i) => i.toLowerCase().includes(q));
    return [...ad.offering, ...ad.requesting].some((i) => i.toLowerCase().includes(q));
  });

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    setPosted(true);
    setTimeout(() => { setPosted(false); setShowCreate(false); setOfferInput(""); setRequestInput(""); setNotes(""); }, 2000);
  };

  return (
    <div className="pb-20 md:pb-0">
      {/* Hero */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-xs font-bold text-purple-400 tracking-widest uppercase">Live Trading</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-2 font-display">
          Trade <span className="text-gradient">Advertisements</span>
        </h1>
        <p className="text-slate-400 text-sm max-w-xl">Browse and find the perfect trade for your items. Connect with thousands of Blox Fruits traders.</p>
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-3 mb-6">
        <div className="flex gap-2 flex-wrap">
          {/* Search */}
          <div className="relative flex-1 min-w-48">
            <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔍</span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search items..."
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 transition-all"
            />
          </div>
          {/* Search in */}
          <select
            value={searchIn}
            onChange={(e) => setSearchIn(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-slate-300 transition-all"
          >
            <option value="All">Search in: All</option>
            <option value="Offering">Offering</option>
            <option value="Requesting">Requesting</option>
          </select>
        </div>

        <div className="flex gap-2 flex-wrap items-center">
          {/* Filter buttons */}
          <button
            onClick={() => setFilterVerified(!filterVerified)}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all ${
              filterVerified
                ? "bg-emerald-500/15 border-emerald-500/30 text-emerald-300"
                : "border-white/10 text-slate-400 hover:text-white hover:border-white/20"
            }`}
          >
            ✓ Verified Only
          </button>
          <button
            onClick={() => setFilterBumped(!filterBumped)}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold border transition-all ${
              filterBumped
                ? "bg-amber-500/15 border-amber-500/30 text-amber-300"
                : "border-white/10 text-slate-400 hover:text-white hover:border-white/20"
            }`}
          >
            ⚡ Bumped Only
          </button>

          <div className="flex-1" />

          <span className="text-xs text-slate-500">{filtered.length} ads found</span>

          <button
            onClick={() => setShowCreate(true)}
            className="flex items-center gap-1.5 px-5 py-2 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}
          >
            + Create Trade Ad
          </button>
        </div>
      </div>

      {/* Trade list */}
      <div className="flex flex-col gap-3">
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-slate-500">
            <div className="text-4xl mb-3">🔍</div>
            <div className="font-semibold">No trade ads found</div>
            <div className="text-sm mt-1">Try adjusting your search or filters</div>
          </div>
        ) : (
          filtered.map((ad) => <TradeAdCard key={ad.id} ad={ad} />)
        )}
      </div>

      {/* Create Modal */}
      {showCreate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
          style={{ background: "rgba(0,0,0,0.85)", backdropFilter: "blur(8px)" }}
          onClick={(e) => { if (e.target === e.currentTarget) setShowCreate(false); }}
        >
          <div className="w-full max-w-md rounded-2xl border border-white/10 animate-slide-down" style={{ background: "#0c0c1d" }}>
            <div className="flex items-center justify-between p-5 border-b border-white/5">
              <h3 className="text-white font-bold text-lg font-display">Create Trade Ad</h3>
              <button onClick={() => setShowCreate(false)} className="w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 text-sm transition-all">✕</button>
            </div>
            <form onSubmit={handlePost} className="p-5 flex flex-col gap-4">
              <div>
                <label className="text-xs text-slate-400 uppercase tracking-wider mb-1.5 block">🟣 Offering</label>
                <input
                  required
                  value={offerInput}
                  onChange={(e) => setOfferInput(e.target.value)}
                  placeholder="e.g. Dragon, Dough Fruit..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 transition-all"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 uppercase tracking-wider mb-1.5 block">🩷 Requesting</label>
                <input
                  required
                  value={requestInput}
                  onChange={(e) => setRequestInput(e.target.value)}
                  placeholder="e.g. Leopard, Fruit Notifier..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 transition-all"
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 uppercase tracking-wider mb-1.5 block">📝 Notes (optional)</label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Any additional notes..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 resize-none transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90"
                style={{ background: posted ? "#10b981" : "linear-gradient(135deg, #7c3aed, #4f46e5)" }}
              >
                {posted ? "✓ Posted Successfully!" : "Post Trade Ad"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
      }
