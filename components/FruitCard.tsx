"use client";
import { useState } from "react";
import { Fruit, fmt, RARITY_STYLES, DEMAND_STYLES, TYPE_STYLES } from "@/lib/data";

export default function FruitCard({ fruit }: { fruit: Fruit }) {
  const [isPerm, setIsPerm] = useState(false);
  const styles = RARITY_STYLES[fruit.rarity];
  const val = isPerm ? fruit.permValue : fruit.value;

  return (
    <div
      className={`relative rounded-2xl border ${styles.border} bg-white/[0.03] hover:bg-white/[0.05] transition-all duration-300 hover:scale-[1.03] hover:${styles.glow} cursor-pointer group overflow-hidden`}
    >
      {/* Rarity top bar */}
      <div className={`h-0.5 w-full ${
        fruit.rarity === "Legendary" ? "bg-gradient-to-r from-yellow-400 to-orange-400" :
        fruit.rarity === "Epic"      ? "bg-gradient-to-r from-purple-400 to-pink-500" :
        fruit.rarity === "Rare"      ? "bg-gradient-to-r from-blue-400 to-cyan-400" :
        "bg-gradient-to-r from-slate-500 to-slate-600"
      }`} />

      <div className="p-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-2xl border ${styles.border} bg-white/5`}>
              {fruit.img}
            </div>
            <div>
              <div className="text-white font-bold text-sm">{fruit.name}</div>
              <span className={`text-[10px] px-1.5 py-0.5 rounded font-medium ${TYPE_STYLES[fruit.type]}`}>
                {fruit.type}
              </span>
            </div>
          </div>
          {/* Trend */}
          <span className={`text-xs font-bold ${
            fruit.trend === "up" ? "text-emerald-400" :
            fruit.trend === "down" ? "text-red-400" : "text-slate-400"
          }`}>
            {fruit.trend === "up" ? "▲" : fruit.trend === "down" ? "▼" : "●"}
          </span>
        </div>

        {/* Value */}
        <div className="mb-3">
          <div className="text-[9px] text-slate-500 uppercase tracking-widest mb-0.5">Value</div>
          <div className={`text-xl font-black ${styles.text}`}>{fmt(val)}</div>
        </div>

        {/* Badges row */}
        <div className="flex items-center gap-1.5 flex-wrap mb-2">
          <span className={`text-[10px] px-2 py-0.5 rounded-full border font-semibold ${DEMAND_STYLES[fruit.demand]}`}>
            {fruit.demand}
          </span>
          <span className={`text-[10px] px-2 py-0.5 rounded-full border font-semibold ${styles.badge}`}>
            {fruit.rarity}
          </span>
        </div>

        {/* Footer row */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            {fruit.awakened && <span className="text-[9px] text-cyan-400">✦ Awakened</span>}
            <span className="text-[9px] text-slate-500">PvP: <span className="text-violet-300 font-bold">{fruit.pvp}</span></span>
          </div>
          {fruit.permValue && (
            <button
              onClick={(e) => { e.stopPropagation(); setIsPerm(!isPerm); }}
              className={`text-[10px] px-2 py-0.5 rounded-full border transition-all font-bold ${
                isPerm
                  ? "bg-amber-500/20 border-amber-500/40 text-amber-300"
                  : "border-white/10 text-slate-500 hover:border-white/20 hover:text-slate-300"
              }`}
            >
              {isPerm ? "PERM" : "REG"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
