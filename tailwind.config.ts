import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      // colors: {
      //   primary: "rgb(var(--primary) / <alpha-value>)",
      //   background: "rgb(var(--background) / <alpha-value>)",
      // },
    },
  },
  plugins: [],
};

export default config;
