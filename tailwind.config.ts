import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          900: "#060610",
          800: "#0c0c1d",
          700: "#111127",
          600: "#1a1a35",
          500: "#252545",
        },
        brand: {
          purple: "#7c3aed",
          blue:   "#2563eb",
          cyan:   "#06b6d4",
          gold:   "#f59e0b",
          green:  "#10b981",
          red:    "#ef4444",
        }
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "system-ui", "sans-serif"],
        display: ["var(--font-rajdhani)", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4,0,0.6,1) infinite",
        "float": "float 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
        "slide-in": "slideIn 0.3s ease-out",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%":     { transform: "translateY(-6px)" },
        },
        glow: {
          "0%,100%": { opacity: "0.6" },
          "50%":     { opacity: "1" },
        },
        slideIn: {
          from: { opacity: "0", transform: "translateY(-10px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "glow-purple": "0 0 20px rgba(124,58,237,0.4)",
        "glow-cyan":   "0 0 20px rgba(6,182,212,0.4)",
        "glow-gold":   "0 0 20px rgba(245,158,11,0.4)",
      }
    },
  },
  plugins: [],
};
export default config;
