import { Merriweather_Sans, Roboto } from "next/font/google";
import localFont from "next/font/local";

export const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

// For Korean
export const pretendard = localFont({
  src: "../../../public/font/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const merriweather = Merriweather_Sans({
  weight: ["400", "300", "700", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});
