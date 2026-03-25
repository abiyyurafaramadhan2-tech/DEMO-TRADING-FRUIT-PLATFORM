"use client";
import { useState } from "react";

const GIVEAWAYS = [
  { id:1, prize:"Dragon Fruit",       host:"BloxAdmin",    ends:"2h 30m", entries:2847, emoji:"🐉", rarity:"Legendary", joined:false },
  { id:2, prize:"Fruit Notifier",     host:"TopDonator",   ends:"5h 12m", entries:1523, emoji:"🔔", rarity:"Gamepass",  joined:false },
  { id:3, prize:"1,000,000 Beli",     host:"RichPlayer",   ends:"12h",    entries:4201, emoji:"💰", rarity:"Beli",      joined:false },
  { id:4, prize:"Cursed Dual Katana", host:"Moderator",    ends:"1d 4h",  entries:987,  emoji:"⚔️", rarity:"Limited",   joined:false },
  { id:5, prize:"Kitsune Fruit",      host:"KitsuneKing",  ends:"3h",     entries:3412, emoji:"🦊", rarity:"Legendary", joined:false },
  { id:6, prize:"Godhuman",           host:"FightMaster",  ends:"6h 45m", entries:678,  emoji:"🙏", rarity:"Limited",   joined:false },
];

const RARITY_BADGE: Record<string, string> = {
  Legendary: "text-amber-300 bg-amber-500/15 border-amber-500/30",
  Limited:   "text-purple-300 bg-purple-500/15 border-purple-500/30",
  Gamepass:  "text-blue-300 bg-blue-500/15 border-blue-500/30",
  Beli:      "text-emerald-300 bg-emerald-500/15 border-emerald-500/30",
};

export default function GiveawaysPage() {
  const [giveaways, setGiveaways] = useState(GIVEAWAYS);

  const joinGiveaway = (id: number) => {
    setGiveaways((prev) =>
      prev.map((g) =>
        g.id === id ? { ...g, joined: true, entries: g.joined ? g.entries : g.entries + 1 } : g
      )
    );
  };

  return (
    <div className="pb-20 md:pb-0">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
          <span className="text-xs font-bold text-pink-400 tracking-widest uppercase">Live Giveaways</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-2 font-display">
          Give<span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400">aways</span>
        </h1>
        <p className="text-slate-400 text-sm">Active giveaways from the BloxValues community. Join now!</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-8">
        {[
          ["🎁", "Active", giveaways.length],
          ["👥", "Entries", giveaways.reduce((s,g) => s + g.entries, 0).toLocaleString()],
          ["✅", "Joined", giveaways.filter(g => g.joined).length],
        ].map(([e, l, n]) => (
          <div key={String(l)} className="glass rounded-2xl border border-white/5 p-3 text-center">
            <div className="text-xl mb-1">{e}</div>
            <div className="text-white font-black text-lg">{n}</div>
            <div className="text-slate-500 text-xs">{l}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {giveaways.map((g) => (
          <div
            key={g.id}
            className={`glass rounded-2xl border transition-all duration-300 overflow-hidden ${
              g.joined ? "border-emerald-500/25" : "border-white/7 hover:border-pink-500/20"
            }`}
          >
            {/* Top gradient */}
            <div className={`h-1 w-full ${
              g.rarity === "Legendary" ? "bg-gradient-to-r from-amber-400 to-orange-400" :
              g.rarity === "Limited"   ? "bg-gradient-to-r from-purple-400 to-pink-500" :
              g.rarity === "Gamepass"  ? "bg-gradient-to-r from-blue-400 to-cyan-400" :
              "bg-gradient-to-r from-emerald-400 to-teal-400"
            }`} />

            <div className="p-5">
              {/* Header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl shrink-0">
                  {g.emoji}
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold text-base">{g.prize}</div>
                  <div className="text-slate-400 text-xs">by <span className="text-purple-300">{g.host}</span></div>
                  <span className={`inline-block mt-1 text-[10px] px-2 py-0.5 rounded-full border font-bold ${RARITY_BADGE[g.rarity]}`}>
                    {g.rarity}
                  </span>
                </div>
              </div>

              {/* Stats row */}
              <div className="flex items-center justify-between text-xs mb-4">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <span>👥</span>
                  <span><span className="text-white font-bold">{g.entries.toLocaleString()}</span> entries</span>
                </div>
                <div className="flex items-center gap-1.5 text-slate-400">
                  <span>⏱️</span>
                  <span>Ends in <span className="text-amber-400 font-bold">{g.ends}</span></span>
                </div>
              </div>

              {/* Entries bar */}
              <div className="w-full h-1.5 rounded-full bg-white/5 mb-4 overflow-hidden">
                <div
                  className={`h-full rounded-full ${g.joined ? "bg-gradient-to-r from-emerald-500 to-teal-400" : "bg-gradient-to-r from-pink-500 to-red-500"}`}
                  style={{ width: `${Math.min((g.entries / 5000) * 100, 100)}%` }}
                />
              </div>

              {/* Join button */}
              <button
                onClick={() => joinGiveaway(g.id)}
                disabled={g.joined}
                className={`w-full py-3 rounded-xl font-bold text-sm transition-all hover:opacity-90 hover:scale-[1.02] disabled:scale-100 disabled:cursor-default ${
                  g.joined
                    ? "bg-emerald-500/15 border border-emerald-500/30 text-emerald-300"
                    : "text-white border-0 hover:shadow-glow-cyan"
                }`}
                style={g.joined ? {} : { background: "linear-gradient(135deg, #ec4899, #ef4444)" }}
              >
                {g.joined ? "✓ Joined!" : "🎁 Enter Giveaway"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
