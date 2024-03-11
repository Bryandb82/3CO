import { Hepta_Slab } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      accent: {
        1: "hsl(var(--color-accent1) / <alpha-value>)",
        2: "hsl(var(--color-accent2) / <alpha-value>)",
      },
      bg: "hsl(var(--color-bg) / <alpha-value>)",
      content: "hsl(var(--color-content) / <alpha-value>)",
      groupbg: "hsl(var(--color-groupbg) / <alpha-value>)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
  //darkMode: "class",
};
export default config;
