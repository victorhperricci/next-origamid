import { ProductItem } from "./ProductItem";

export type Produto = {
  nome: string;
  id: number;
  preco: number;
  descricao: string;
};

export default async function ServerFetch() {
  const response = await fetch("https://api.origamid.online/produtos");
  const data = (await response.json()) as Produto[];

  return (
    <ul>
      {data.map((produto) => (
        <ProductItem key={produto.id} {...produto} />
      ))}
    </ul>
  );
}
