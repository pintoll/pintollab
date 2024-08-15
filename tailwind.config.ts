import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4a9324",
        secondary: "#63b5da",
        tertiary: "#c7f8ff",
        accent: "#4d7d94",
        plain: "#BBBBBB",
      },
    },
  },
  plugins: [],
};
export default config;
