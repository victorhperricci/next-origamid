import CalculeImc from "@/components/calculeImc";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IMC",
  description: "Essa é a página para calcular o IMC",
};

export default function Imc() {
  return (
    <main>
      <h1>IMC</h1>

      <CalculeImc />
    </main>
  );
}
