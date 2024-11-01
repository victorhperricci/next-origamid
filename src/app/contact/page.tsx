'use client'
import dynamic from "next/dynamic";

const Width = dynamic(() => import("@/components/width"), { ssr: false });

export default function Contact() {
  return (
    <main>
      <h1>Contact</h1>

      <Width />
    </main>
  );
}
