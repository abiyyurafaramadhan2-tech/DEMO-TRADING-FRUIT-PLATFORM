"use client";
import { useState } from "react";
import { FRUITS, GAMEPASSES, LIMITEDS, fmt } from "@/lib/data";

const ALL = [...FRUITS, ...GAMEPASSES, ...LIMITEDS];

function ItemPicker({ side, items, setItems, mode }: { side: string; items: string[]; setItems: any; mode: string }) {
  const [input, setInput] = useState("");
  const [sugg, setSugg] = useState<any[]>([]);

  const getVal = (name: string) => {
    const item = ALL.find(i => i.name === name);
    if (!item) return 0;
    return mode === "perm" ? ((item as any).permValue || item.value) : item.value;
  };

  const total = items.reduce((s, n) => s + getVal(n), 0);
  const color = side === "left" ? "purple" : "pink";

  const search = (q: string) => {
    setInput(q);
    setSugg(q.length >= 2 ? ALL.filter(i => i.name.toLowerCase().includes(q.toLowerCase())).slice(0, 5) : []);
  };

  const add = (name: string) => {
    setItems((p: string[]) => [...p, name]);
    setInput(""); setSugg([]);
  };

  const borderColor = color === "purple" ? "border-purple-500/30" : "border-pink-500/30";
  const textColor   = color === "purple" ? "text-purple-400" : "text-pink-400";
  const badgeColor  = color === "purple" ? "bg-purple-500/10 border-purple-500/20 text-purple-300" : "bg-pink-500/10 border-pink-500/20 text-pink-300";

  return (
    <div className={`rounded-2xl border ${borderColor} bg-white/[0.03] p-5 flex flex-col gap-3`}>
      <div className="flex items-center justify-between">
        <span className="text-white font-bold font-display">{side === "left" ? "Your Offer" : "Their Offer"}</span>
        <span className={`text-xl font-black ${textColor}`}>{fmt(total)}</span>
      </div>

      <div className="relative">
        <input
          value={input}
          onChange={(e) => search(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter" && sugg.length > 0) { add(sugg[0].name); } }}
          placeholder="Type to search & add..."
          className={`w-full bg-white/5 border ${side === "left" ? "border-purple-500/20" : "border-pink-500/20"} rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 transition-all`}
        />
        {sugg.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-1 rounded-xl border border-white/10 overflow-hidden z-10" style={{ background: "#0c0c1d" }}>
            {sugg.map((s) => (
              <button key={s.id} onClick={() => add(s.name)}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-slate-300 hover:bg-white/5 transition-colors text-left">
                <span className="text-lg">{(s as any).img}</span>
                <span className="flex-1 font-medium">{s.name}</span>
                <span className="text-slate-500 text-xs">{fmt(mode === "perm" ? ((s as any).permValue || s.value) : s.value)}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 min-h-16">
        {items.length === 0
          ? <div className="text-center text-slate-600 text-sm py-4">Search and add items above ↑</div>
          : items.map((name, idx) => {
              const item = ALL.find(i => i.name === name);
              return (
                <div key={idx} className={`flex items-center gap-2 rounded-xl px-3 py-2 border ${badgeColor}`}>
                  <span className="text-base">{(item as any)?.img || "🍎"}</span>
                  <span className="text-sm text-white flex-1 font-medium">{name}</span>
                  <span className="text-xs text-slate-400">{fmt(getVal(name))}</span>
                  <button onClick={() => setItems((p: string[]) => p.filter((_, i) => i !== idx))} className="text-slate-600 hover:text-red-400 transition-colors text-xs ml-1">✕</button>
                </div>
              );
            })
        }
      </div>
    </div>
  );
}

export default function CalculatorPage() {
  const [left, setLeft] = useState<string[]>([]);
  const [right, setRight] = useState<string[]>([]);
  const [mode, setMode] = useState("reg");

  const getVal = (name: string) => {
    const item = ALL.find(i => i.name === name);
    if (!item) return 0;
    return mode === "perm" ? ((item as any).permValue || item.value) : item.value;
  };

  const leftTotal  = left.reduce((s, n) => s + getVal(n), 0);
  const rightTotal = right.reduce((s, n) => s + getVal(n), 0);
  const diff       = leftTotal - rightTotal;
  const maxVal     = Math.max(leftTotal, rightTotal);
  const fairPct    = maxVal > 0 ? Math.round((1 - Math.abs(diff) / maxVal) * 100) : 100;
  const isFair     = fairPct >= 90;
  const hasItems   = left.length > 0 || right.length > 0;

  return (
    <div className="pb-20 md:pb-0">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-bold text-emerald-400 tracking-widest uppercase">Instant Calculation</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-2 font-display">
          Trade <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Calculator</span>
        </h1>
        <p className="text-slate-400 text-sm">Add items to both sides to check if a trade is fair.</p>
      </div>

      {/* Mode toggle */}
      <div className="flex justify-center mb-6">
        <div className="flex gap-1 bg-white/[0.03] rounded-xl p-1 border border-white/5">
          {[["reg", "📦 Regular"], ["perm", "🔒 Permanent"]].map(([m, label]) => (
            <button key={m} onClick={() => setMode(m)}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${mode === m ? "bg-emerald-500 text-black shadow-lg" : "text-slate-400 hover:text-white"}`}>
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Pickers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <ItemPicker side="left" items={left} setItems={setLeft} mode={mode} />
        <ItemPicker side="right" items={right} setItems={setRight} mode={mode} />
      </div>

      {/* Result */}
      {hasItems && (
        <div className={`rounded-2xl border p-6 text-center transition-all ${
          isFair ? "border-emerald-500/30 bg-emerald-500/5" :
          diff > 0 ? "border-blue-500/30 bg-blue-500/5" : "border-red-500/30 bg-red-500/5"
        }`}>
          <div className="text-5xl mb-3">{isFair ? "✅" : diff > 0 ? "📤" : "📥"}</div>
          <div className={`text-2xl font-black mb-1 ${isFair ? "text-emerald-400" : diff > 0 ? "text-blue-400" : "text-red-400"}`}>
            {isFair ? "Fair Trade!" : diff > 0 ? "You're offering more" : "They're offering more"}
          </div>
          <div className="text-slate-400 text-sm mb-4">
            Fairness score: <span className={`font-bold text-lg ${isFair ? "text-emerald-400" : "text-yellow-400"}`}>{fairPct}%</span>
          </div>
          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="text-center">
              <div className="text-purple-400 font-black text-xl">{fmt(leftTotal)}</div>
              <div className="text-slate-500 text-xs">Your offer</div>
            </div>
            <div className="text-slate-600 text-2xl">vs</div>
            <div className="text-center">
              <div className="text-pink-400 font-black text-xl">{fmt(rightTotal)}</div>
              <div className="text-slate-500 text-xs">Their offer</div>
            </div>
          </div>
          {!isFair && (
            <div className="mt-3 text-sm text-slate-400">
              Difference: <span className="font-bold text-white">{fmt(Math.abs(diff))}</span>
            </div>
          )}
        </div>
      )}

      {!hasItems && (
        <div className="text-center py-16 text-slate-500">
          <div className="text-5xl mb-4 animate-float">🧮</div>
          <div className="font-semibold text-white">Add items to get started</div>
          <div className="text-sm mt-1">Search and add items to both sides to check trade fairness</div>
        </div>
      )}
    </div>
  );
}
