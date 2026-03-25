"use client";
import { useState } from "react";

const TOP_TRADERS = [
  { rank:1, user:"TrustMe2024",  avatar:"👑", rating:98, positive:1247, negative:25,  badge:"Elite",   trades:1272 },
  { rank:2, user:"FairTrader",   avatar:"⭐", rating:95, positive:893,  negative:47,  badge:"Pro",     trades:940  },
  { rank:3, user:"BloxKing",     avatar:"🎯", rating:92, positive:654,  negative:57,  badge:"Pro",     trades:711  },
  { rank:4, user:"LuckyFruit",   avatar:"🍀", rating:88, positive:432,  negative:59,  badge:"Trusted", trades:491  },
  { rank:5, user:"SafeSwap",     avatar:"🛡️", rating:85, positive:321,  negative:57,  badge:"Trusted", trades:378  },
  { rank:6, user:"DragonTrader", avatar:"🐉", rating:82, positive:287,  negative:63,  badge:"Trusted", trades:350  },
  { rank:7, user:"NightFarmer",  avatar:"🌙", rating:79, positive:198,  negative:52,  badge:"Member",  trades:250  },
];

const BADGE_STYLE: Record<string, string> = {
  Elite:   "text-amber-300 bg-amber-500/15 border-amber-500/30",
  Pro:     "text-purple-300 bg-purple-500/15 border-purple-500/30",
  Trusted: "text-emerald-300 bg-emerald-500/15 border-emerald-500/30",
  Member:  "text-slate-300 bg-slate-500/15 border-slate-500/30",
};

export default function RatePage() {
  const [username, setUsername] = useState("");
  const [vote, setVote] = useState<"up" | "down" | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [searchUser, setSearchUser] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vote || !username.trim()) return;
    setSubmitted(true);
    setTimeout(() => { setSubmitted(false); setUsername(""); setVote(null); }, 2500);
  };

  const filtered = TOP_TRADERS.filter(t => t.user.toLowerCase().includes(searchUser.toLowerCase()));

  return (
    <div className="pb-20 md:pb-0">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">Community</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white mb-2 font-display">
          Trader <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Ratings</span>
        </h1>
        <p className="text-slate-400 text-sm">Rate your trade partners and find trusted traders in the community.</p>
      </div>

      {/* Rate a trader */}
      <div className="glass rounded-2xl border border-white/7 p-5 mb-8">
        <h3 className="text-white font-bold text-base mb-4">⭐ Rate a Trader</h3>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Roblox username..."
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 transition-all"
            required
          />
          <div className="flex gap-2">
            {([["up", "👍", "emerald"], ["down", "👎", "red"]] as const).map(([v, emoji, c]) => (
              <button
                key={v}
                type="button"
                onClick={() => setVote(v)}
                className={`w-12 h-12 rounded-xl border text-xl transition-all hover:scale-110 ${
                  vote === v
                    ? c === "emerald" ? "bg-emerald-500/20 border-emerald-500/40" : "bg-red-500/20 border-red-500/40"
                    : "border-white/10 bg-white/5 hover:border-white/20"
                }`}
              >
                {emoji}
              </button>
            ))}
          </div>
          <button
            type="submit"
            disabled={!vote || !username.trim() || submitted}
            className="px-6 py-3 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed"
            style={{ background: submitted ? "#10b981" : "linear-gradient(135deg, #f59e0b, #ef4444)" }}
          >
            {submitted ? "✓ Rated!" : "Submit Rating"}
          </button>
        </form>
        {submitted && (
          <div className="mt-3 text-emerald-400 text-sm text-center animate-fade-in">
            Rating submitted successfully! Thank you.
          </div>
        )}
      </div>

      {/* Leaderboard */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        <h3 className="text-white font-bold text-lg">🏆 Top Trusted Traders</h3>
        <input
          value={searchUser}
          onChange={(e) => setSearchUser(e.target.value)}
          placeholder="Search trader..."
          className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder-slate-500 transition-all w-48"
        />
      </div>

      <div className="flex flex-col gap-3">
        {filtered.map((t) => (
          <div key={t.rank} className={`glass rounded-2xl border border-white/7 p-4 flex items-center gap-4 hover:border-white/12 transition-all ${t.rank <= 3 ? "border-amber-500/15" : ""}`}>
            {/* Rank */}
            <div className={`w-10 text-center font-black text-2xl ${t.rank === 1 ? "text-amber-400" : t.rank === 2 ? "text-slate-300" : t.rank === 3 ? "text-amber-700" : "text-slate-600"}`}>
              {t.rank <= 3 ? ["🥇","🥈","🥉"][t.rank-1] : `#${t.rank}`}
            </div>

            {/* Avatar */}
            <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl shrink-0 ${t.rank === 1 ? "border-amber-500/30 shadow-glow-gold" : ""}`}>
              {t.avatar}
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-white font-bold text-sm">{t.user}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full border font-bold ${BADGE_STYLE[t.badge]}`}>{t.badge}</span>
              </div>
              <div className="text-slate-500 text-xs mt-0.5">{t.trades} total trades</div>

              {/* Rating bar */}
              <div className="flex items-center gap-2 mt-1.5">
                <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" style={{ width: `${t.rating}%` }} />
                </div>
                <span className="text-[10px] text-slate-400">{t.positive}👍 / {t.negative}👎</span>
              </div>
            </div>

            {/* Score */}
            <div className="text-right shrink-0">
              <div className={`font-black text-2xl ${t.rating >= 95 ? "text-emerald-400" : t.rating >= 85 ? "text-blue-400" : "text-yellow-400"}`}>
                {t.rating}%
              </div>
              <div className="text-slate-500 text-[10px]">positive</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
