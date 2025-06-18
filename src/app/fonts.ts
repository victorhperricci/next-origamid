import { Figtree } from "next/font/google";

const font_body = Figtree({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export { font_body };
