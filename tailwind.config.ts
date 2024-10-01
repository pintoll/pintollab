import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
  	extend: {
  		colors: {
  			primary: '#4a9324',
  			secondary: '#63b5da',
  			tertiary: '#c7f8ff',
  			accent: '#4d7d94'
  		},
  		fontFamily: {
  			kr: ["var(--font-pretendard)"],
  			merri: ["var(--font-merriweather)"],
  			roboto: ["var(--font-roboto)"]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-animate")],
};
export default config;
