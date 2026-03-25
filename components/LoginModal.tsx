"use client";
import { useState } from "react";

export default function LoginModal({ onClose }: { onClose: () => void }) {
  const [tab, setTab] = useState<"login" | "register">("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); onClose(); }, 1500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
      style={{ background: "rgba(0,0,0,0.8)", backdropFilter: "blur(8px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="w-full max-w-sm rounded-2xl border border-white/10 animate-slide-down overflow-hidden" style={{ background: "#0c0c1d" }}>
        {/* Header */}
        <div className="relative p-6 text-center border-b border-white/5" style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(79,70,229,0.1))" }}>
          <button onClick={onClose} className="absolute right-4 top-4 w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all text-sm">✕</button>
          <div className="text-3xl mb-2">🍎</div>
          <h2 className="text-white font-bold text-xl font-display">BloxValues</h2>
          <p className="text-slate-400 text-xs mt-1">Sign in to access all features</p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-white/5">
          {(["login", "register"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-3 text-sm font-semibold transition-all capitalize ${tab === t ? "text-purple-300 border-b-2 border-purple-500" : "text-slate-500 hover:text-slate-300"}`}
            >
              {t === "login" ? "Login" : "Register"}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
          {/* Roblox OAuth button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90 hover:scale-[1.02] border border-white/10"
            style={{ background: "rgba(255,255,255,0.06)", color: "#fff" }}
          >
            <span className="text-lg">🎮</span>
            Continue with Roblox
          </button>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-slate-500 text-xs">or</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="flex flex-col gap-3">
            <div>
              <label className="text-xs text-slate-400 uppercase tracking-wider mb-1.5 block">Username</label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Your username..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 transition-all"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 uppercase tracking-wider mb-1.5 block">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 transition-all"
              />
            </div>
          </div>

          {tab === "login" && (
            <div className="flex justify-end">
              <button type="button" className="text-xs text-purple-400 hover:text-purple-300 transition-colors">Forgot password?</button>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90 hover:scale-[1.02] disabled:opacity-60 disabled:scale-100"
            style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}
          >
            {loading ? "Loading..." : tab === "login" ? "Login" : "Create Account"}
          </button>

          <p className="text-center text-xs text-slate-500">
            {tab === "login" ? "Don't have an account? " : "Already have an account? "}
            <button type="button" onClick={() => setTab(tab === "login" ? "register" : "login")} className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
              {tab === "login" ? "Register" : "Login"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}              className={`flex-1 py-3 text-sm font-semibold transition-all capitalize ${tab === t ? "text-purple-300 border-b-2 border-purple-500" : "text-slate-500 hover:text-slate-300"}`}
            >
              {t === "login" ? "Login" : "Register"}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4">
          {/* Roblox OAuth button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2.5 py-3 rounded-xl font-semibold text-sm transition-all hover:opacity-90 hover:scale-[1.02] border border-white/10"
            style={{ background: "rgba(255,255,255,0.06)", color: "#fff" }}
          >
            <span className="text-lg">🎮</span>
            Continue with Roblox
          </button>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-slate-500 text-xs">or</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="flex flex-col gap-3">
            <div>
              <label className="text-xs text-slate-400 uppercase tracking-wider mb-1.5 block">Username</label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Your username..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 transition-all"
              />
            </div>
            <div>
              <label className="text-xs text-slate-400 uppercase tracking-wider mb-1.5 block">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 transition-all"
              />
            </div>
          </div>

          {tab === "login" && (
            <div className="flex justify-end">
              <button type="button" className="text-xs text-purple-400 hover:text-purple-300 transition-colors">Forgot password?</button>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-xl font-bold text-sm text-white transition-all hover:opacity-90 hover:scale-[1.02] disabled:opacity-60 disabled:scale-100"
            style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}
          >
            {loading ? "Loading..." : tab === "login" ? "Login" : "Create Account"}
          </button>

          <p className="text-center text-xs text-slate-500">
            {tab === "login" ? "Don't have an account? " : "Already have an account? "}
            <button type="button" onClick={() => setTab(tab === "login" ? "register" : "login")} className="text-purple-400 hover:text-purple-300 transition-colors font-medium">
              {tab === "login" ? "Register" : "Login"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
