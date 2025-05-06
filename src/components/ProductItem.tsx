"use client";

import { Produto } from "./serverFetch";
import Link from "next/link";

export function ProductItem({ ...produto }: Produto) {
  return (
    <li>
      {produto.nome}

      <Link href={`/produtos/${produto.id}`}>Ver Mais</Link>
    </li>
  );
}
