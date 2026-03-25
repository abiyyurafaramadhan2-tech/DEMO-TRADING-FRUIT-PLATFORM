"use client";
import "./globals.css";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import LoginModal from "@/components/LoginModal";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>BloxValues — Blox Fruits Trading Platform</title>
        <meta name="description" content="The ultimate Blox Fruits value list, trading platform & calculator." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="grid-bg min-h-screen">
        {/* Ambient blobs */}
        <div className="fixed top-0 left-1/4 w-96 h-96 rounded-full opacity-[0.06] blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }} />
        <div className="fixed bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-[0.05] blur-3xl pointer-events-none" style={{ background: "radial-gradient(circle, #06b6d4, transparent)" }} />

        <Navbar onLoginClick={() => setShowLogin(true)} />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-white/5 mt-16 py-8 text-center">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="text-2xl">🍎</span>
              <span className="font-display font-bold text-lg text-white">BloxValues</span>
            </div>
            <p className="text-slate-500 text-sm mb-1">
              © 2025 BloxValues · Designed & Developed by{" "}
              <span className="text-purple-400 font-semibold">Abiyyu Rafa Ramadhan</span>
            </p>
            <p className="text-slate-600 text-xs">
              This is a fan-made 3rd party website not affiliated with Blox Fruits or Roblox Corporation.
            </p>
          </div>
        </footer>

        {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      </body>
    </html>
  );
}            </p>
            <p className="text-slate-600 text-xs">
              This is a fan-made 3rd party website not affiliated with Blox Fruits or Roblox Corporation.
            </p>
          </div>
        </footer>

        {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      </body>
    </html>
  );
}
