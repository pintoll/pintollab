import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4a9324",
        secondary: "#63b5da",
        tertiary: "#c7f8ff",
        accent: "#4d7d94",
      },
      fontFamily: {
        kr: ["var(--font-pretendard)"],
        merri: ["var(--font-merriweather)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
