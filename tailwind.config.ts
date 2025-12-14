import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ✅ 1. Animation added correctly here
      animation: {
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },

      // ✅ 2. Your Colors
      colors: {
        gold: {
          400: "#E5C558",
          500: "#D4AF37", // PRIMARY BRAND GOLD
          600: "#B5902B",
          700: "#8A6D1F",
        },
        richBlack: "#050505",
        charcoal: "#1A1A1A",
      },

      // ✅ 3. Your Fonts
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;