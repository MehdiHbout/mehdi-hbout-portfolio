import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0F172A",
        card: "#111827",
        primary: "#38BDF8",
        secondary: "#22C55E",
        "text-primary": "#F8FAFC",
        "text-secondary": "#CBD5E1",
        border: "#1E293B",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      fontSize: {
        "display-lg": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["2.25rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "heading-lg": ["1.5rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "heading-md": ["1.125rem", { lineHeight: "1.4" }],
      },
      spacing: {
        "section-spacing": "5rem",
        "section-gap": "1.5rem",
        "card-padding": "1.5rem",
      },
      maxWidth: {
        prose: "65ch",
        "prose-wide": "75ch",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 4px 24px -4px rgba(0, 0, 0, 0.45)",
        "card-hover":
          "0 1px 0 0 rgba(56,189,248,0.08) inset, 0 8px 32px -8px rgba(0, 0, 0, 0.5)",
        glow: "0 0 40px -8px rgba(56, 189, 248, 0.2)",
        "glow-sm": "0 0 24px -6px rgba(56, 189, 248, 0.12)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
