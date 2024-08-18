import type { Metadata } from "next";

import "./styles/index.css";
import { pretendard } from "../shared/font";
import { Header } from "../widget/header";

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
      <body className={`${pretendard.className} ${pretendard.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
