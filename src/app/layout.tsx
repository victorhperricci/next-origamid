import Menu from "@/components/menu";
import type { Metadata } from "next";
import "./globals.css";

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
      <body>
        <Menu />
        {children}
      </body>
    </html>
  );
}
