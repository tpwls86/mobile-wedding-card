import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#e50914",
        "background-dark": "#000000",
        "surface": "#141414",
        "netflix-red": "#e50914"
      },
      fontFamily: {
        "display": ["var(--font-spline-sans)", "sans-serif"]
      }
    },
  },
  plugins: [],
};
export default config;
