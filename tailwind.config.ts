import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        torkk: {
          navy: "#0A0E27",
          dark: "#0F172A",
          charcoal: "#1E293B",
          blue: "#2563EB",
          sky: "#38BDF8",
          electric: "#0284C7",
          pink: "#E11D48",
          lightPink: "#FDF2F8",
          surface: "#F8FAFC",
          card: "#FFFFFF",
          muted: "#64748B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      boxShadow: {
        'pill': '0 8px 30px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 20px 40px -15px rgba(10, 14, 39, 0.07)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'footer-gradient': 'linear-gradient(135deg, #0A0E27 0%, #1E1B4B 50%, #0F172A 100%)',
        'hero-gradient': 'linear-gradient(180deg, rgba(10, 14, 39, 0.75) 0%, rgba(10, 14, 39, 0.92) 100%)',
        'card-glow': 'radial-gradient(circle at top left, rgba(56, 189, 248, 0.1), transparent 70%)',
      }
    },
  },
  plugins: [],
};
export default config;
