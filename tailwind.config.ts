import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        /* Core backgrounds */
        ink: "#030712",
        panel: "#0b0f19",

        /* Premium color accents — Sapphire/Indigo Midnight Scale */
        mint: "#4f46e5",        // Premium rich Indigo
        aqua: "#0284c7",        // Sky/Sapphire blue
        ember: "#64748b",       // Slate gray
        pulse: "#475569"        // Dark slate
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        hero: ["var(--font-hero)", "Georgia", "serif"],
        cursive: ["var(--font-cursive)", "cursive"]
      },
      boxShadow: {
        glow: "0 0 60px rgba(255,255,255,0.10)",
        mint: "0 0 42px rgba(255,255,255,0.08)"
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseGlow: "pulseGlow 3.8s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.75" }
        }
      }
    }
  },
  plugins: []
};

export default config;
