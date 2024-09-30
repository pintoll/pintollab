import type { Metadata } from "next";

import "./styles/index.css";
import { merriweather, pretendard, roboto } from "../shared/font";
import { Header } from "../widget/header";
import { Contact } from "../widget/contact";

export const metadata: Metadata = {
  title: "Pintollab",
  description: "IT Labatory for pintoll",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} ${pretendard.variable} ${merriweather.variable}`}
      >
        <Header />
        {children}
        <Contact />
      </body>
    </html>
  );
}
