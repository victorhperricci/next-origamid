import Menu from "@/components/menu";
import type { Metadata } from "next";
import "./globals.css";
import { font_body } from "./fonts";

export const metadata: Metadata = {
  title: "Dogs",
  description: "Dogs are the best",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${font_body.className} ${font_body.variable}`}>
        <Menu />
        {children}
      </body>
    </html>
  );
}
