"use client";

import { Produto } from "./productList";

export function ProductItem({ ...produto }: Produto) {
  return (
    <li>
      {produto.nome}: <span>R$ {produto.preco}</span>
    </li>
  );
}
