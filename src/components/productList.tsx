import { ProductItem } from "./ProductItem";

export type Produto = {
  id?: string;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 0 | 1;
};

export default async function ListaProdutos() {
  const response = await fetch("https://api.origamid.online/produtos", {
    next: {
      tags: ["produtos"],
    },
  });
  const data = (await response.json()) as Produto[];

  return (
    <ul>
      {data.map((produto) => (
        <ProductItem key={produto.id} {...produto} />
      ))}
    </ul>
  );
}
