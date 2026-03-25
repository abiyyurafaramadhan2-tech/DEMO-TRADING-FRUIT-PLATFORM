"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/trading",    label: "Trade Ads",  icon: "📋" },
  { href: "/values",     label: "Value List", icon: "📊" },
  { href: "/calculator", label: "Calculator", icon: "🧮" },
  { href: "/rate",       label: "Community",  icon: "👥" },
  { href: "/giveaways",  label: "Giveaways",  icon: "🎁" },
];

export default function Navbar({ onLoginClick }: { onLoginClick: () => void }) {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQ, setSearchQ] = useState("");

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-dark-900/95 backdrop-blur-xl border-b border-white/8 shadow-2xl"
            : "bg-dark-900/80 backdrop-blur-md border-b border-white/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center h-14 gap-3">
            {/* Logo */}
            <Link href="/trading" className="flex items-center gap-2.5 shrink-0 group">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center text-lg glow-purple transition-all duration-300 group-hover:scale-110" style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}>
                🍎
              </div>
              <div className="hidden sm:block">
                <div className="font-display font-bold text-white text-sm leading-none">BloxValues</div>
                <div className="text-[9px] text-purple-400 tracking-widest uppercase leading-none mt-0.5">Trading Platform</div>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-0.5 ml-4">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    path === l.href
                      ? "bg-purple-500/15 text-purple-300 border border-purple-500/20"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="text-xs">{l.icon}</span>
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="flex-1" />

            {/* Right side */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-all text-sm"
              >
                🔍
              </button>

              {/* Live badge */}
              <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/10">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
                <span className="text-emerald-400 text-[10px] font-bold tracking-wide">LIVE</span>
              </div>

              {/* Login */}
              <button
                onClick={onLoginClick}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-105"
                style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)", color: "#fff" }}
              >
                <span>🔑</span>
                <span className="hidden sm:inline">Login</span>
              </button>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-8 h-8 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-white/5 transition-all"
              >
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className={`block h-px bg-white transition-all duration-300 ${
                      mobileOpen
                        ? i === 0 ? "w-4 rotate-45 translate-y-[4px]"
                        : i === 1 ? "w-0 opacity-0"
                        : "w-4 -rotate-45 -translate-y-[4px]"
                        : "w-4"
                    }`}
                  />
                ))}
              </button>
            </div>
          </div>

          {/* Search bar */}
          {searchOpen && (
            <div className="pb-3 animate-slide-down">
              <input
                autoFocus
                value={searchQ}
                onChange={(e) => setSearchQ(e.target.value)}
                placeholder="Search fruits, gamepasses, limited items..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 transition-all"
              />
            </div>
          )}
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/5 bg-dark-900/98 animate-slide-down">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-6 py-3.5 text-sm font-medium border-b border-white/3 transition-all ${
                  path === l.href
                    ? "text-purple-300 bg-purple-500/10"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="text-base">{l.icon}</span>
                {l.label}
              </Link>
            ))}
            <div className="px-6 py-4">
              <button
                onClick={() => { setMobileOpen(false); onLoginClick(); }}
                className="w-full py-3 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}
              >
                🔑 Login with Roblox
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile bottom nav */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden border-t border-white/8 bg-dark-900/98 backdrop-blur-xl">
        <div className="flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`flex-1 flex flex-col items-center gap-0.5 py-2.5 text-[10px] font-medium transition-all ${
                path === l.href ? "text-purple-300" : "text-slate-500"
              }`}
            >
              <span className={`text-xl transition-transform ${path === l.href ? "scale-110" : ""}`}>{l.icon}</span>
              {l.label.split(" ")[0]}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
                }
