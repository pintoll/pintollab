import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#ff77b8",
        tertiary: "#d077e5",
      },
    },
  },
  plugins: [],
};
export default config;
