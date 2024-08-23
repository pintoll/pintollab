import { Merriweather_Sans } from "next/font/google";
import localFont from "next/font/local";

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
