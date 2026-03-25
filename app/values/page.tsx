"use client";
import { useState, useMemo } from "react";
import { FRUITS, GAMEPASSES, LIMITEDS, fmt, RARITY_STYLES, DEMAND_STYLES } from "@/lib/data";
import FruitCard from "@/components/FruitCard";

export default function ValuesPage() {
  const [tab, setTab] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("value-desc");
  const [mode, setMode] = useState("reg");
  const [demandFilter, setDemandFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [rarityFilter, setRarityFilter] = useState("All");

  const tabs = ["All", "Fruits", "Gamepasses", "Limiteds"];

  const items = useMemo(() => {
    let all: any[] = [];
    if (tab === "All" || tab === "Fruits") all = [...all, ...FRUITS.map(f => ({ ...f, cat: "Fruit" }))];
    if (tab === "All" || tab === "Gamepasses") all = [...all, ...GAMEPASSES.map(g => ({ ...g, cat: "Gamepass", rarity: "Epic" }))];
    if (tab === "All" || tab === "Limiteds") all = [...all, ...LIMITEDS.map(l => ({ ...l, cat: "Limited", rarity: "Legendary", type: undefined }))];
    return all;
  }, [tab]);

  const filtered = useMemo(() => {
    let r = items.filter(i => i.name.toLowerCase().includes(search.toLowerCase()));
    if (demandFilter !== "All") r = r.filter(i => i.demand === demandFilter);
    if (rarityFilter !== "All") r = r.filter(i => i.rarity === rarityFilter);
    if (typeFilter !== "All") r = r.filter(i => i.type === typeFilter);
    r.sort((a, b) => {
      const av = mode === "perm" ? (a.permValue || a.value) : a.value;
      const bv = mode === "perm" ? (b.permValue || b.value) : b.value;
      if (sort === "value-desc") return bv - av;
      if (sort === "value-asc") return av - bv;
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "demand") {
        const d: Record<string, number> = { "Very High": 4, "High": 3, "Medium": 2, "Low": 1 };
        return (d[b.demand] || 0) - (d[a.demand] || 0);
      }
      return 0;
    });
    return r;
  }, [items, search, sort, mode, demandFilter, typeFilter, rarityFilter]);

  return (
    <div className="pb-20 md:pb-0">
      {/* Hero */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-bold text-cyan-400 tracking-widest uppercase">Updated Daily</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-2 font-display">
          Blox Fruits <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Value List</span>
        </h1>
        <p className="text-slate-400 text-sm">Track current market prices for all fruits, gamepasses, and limited items.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[["🍎", "Fruits", FRUITS.length], ["🎫", "Gamepasses", GAMEPASSES.length], ["💎", "Limiteds", LIMITEDS.length]].map(([e, l, n]) => (
          <div key={String(l)} className="glass rounded-2xl p-3 text-center border border-white/5">
            <div className="text-2xl mb-1">{e}</div>
            <div className="text-white font-black text-lg leading-none">{n}</div>
            <div className="text-slate-500 text-xs mt-0.5">{l}</div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-3 mb-6">
        {/* Search */}
        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-sm">🔍</span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search items..."
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 transition-all"
          />
        </div>

        {/* Tabs */}
        <div className="flex gap-0.5 bg-white/[0.03] rounded-xl p-1 border border-white/5">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
                tab === t
                  ? "bg-cyan-500 text-black shadow-lg"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="flex gap-2 flex-wrap items-center">
          <select value={sort} onChange={(e) => setSort(e.target.value)} className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-slate-300 transition-all">
            <option value="value-desc">Value ↓ High</option>
            <option value="value-asc">Value ↑ Low</option>
            <option value="name">Name A–Z</option>
            <option value="demand">Demand</option>
          </select>
          <select value={demandFilter} onChange={(e) => setDemandFilter(e.target.value)} className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-slate-300 transition-all">
            <option value="All">All Demand</option>
            <option>Very High</option><option>High</option><option>Medium</option><option>Low</option>
          </select>
          {tab === "Fruits" && (
            <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-slate-300 transition-all">
              <option value="All">All Types</option>
              <option>Logia</option><option>Paramecia</option><option>Zoan</option>
            </select>
          )}
          {tab !== "Gamepasses" && tab !== "Limiteds" && (
            <select value={rarityFilter} onChange={(e) => setRarityFilter(e.target.value)} className="bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-xs text-slate-300 transition-all">
              <option value="All">All Rarities</option>
              <option>Legendary</option><option>Epic</option><option>Rare</option><option>Common</option>
            </select>
          )}
          <button
            onClick={() => setMode(mode === "reg" ? "perm" : "reg")}
            className={`ml-auto px-4 py-2 rounded-xl text-xs font-bold border transition-all ${
              mode === "perm"
                ? "bg-amber-500/15 border-amber-500/30 text-amber-300"
                : "border-white/10 text-slate-400 hover:text-white hover:border-white/20"
            }`}
          >
            {mode === "perm" ? "🔒 PERM" : "📦 REG"}
          </button>
        </div>

        <div className="text-xs text-slate-500">{filtered.length} items</div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
        {filtered.map((item) => (
          item.cat === "Fruit" ? (
            <FruitCard key={`fruit-${item.id}`} fruit={item as any} />
          ) : (
            <div key={`${item.cat}-${item.id}`} className={`relative rounded-2xl border ${RARITY_STYLES["Epic"].border} bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300 hover:scale-[1.03] overflow-hidden cursor-pointer group`}>
              <div className={`h-0.5 w-full ${item.cat === "Limited" ? "bg-gradient-to-r from-yellow-400 to-orange-400" : "bg-gradient-to-r from-purple-400 to-pink-500"}`} />
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl bg-white/5 border border-white/10">{item.img}</div>
                    <div>
                      <div className="text-white font-bold text-sm">{item.name}</div>
                      <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${item.cat === "Limited" ? "bg-amber-500/15 text-amber-300" : "bg-purple-500/15 text-purple-300"}`}>
                        {item.cat}
                      </span>
                    </div>
                  </div>
                  <span className={`text-xs font-bold ${item.trend === "up" ? "text-emerald-400" : item.trend === "down" ? "text-red-400" : "text-slate-400"}`}>
                    {item.trend === "up" ? "▲" : item.trend === "down" ? "▼" : "●"}
                  </span>
                </div>
                <div className="text-[9px] text-slate-500 uppercase tracking-widest mb-0.5">Value</div>
                <div className={`text-xl font-black ${item.cat === "Limited" ? "text-yellow-400" : "text-purple-400"}`}>{fmt(item.value)}</div>
                <div className="mt-2">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full border font-semibold ${DEMAND_STYLES[item.demand]}`}>{item.demand}</span>
                </div>
                {item.seasonal && <div className="mt-1 text-[9px] text-amber-400">🎃 Seasonal</div>}
                {item.desc && <div className="mt-1 text-[10px] text-slate-500">{item.desc}</div>}
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
              }
