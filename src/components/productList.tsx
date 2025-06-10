import { ProductItem } from "./ProductItem";

export type Produto = {
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 0 | 1;
};

export type ProdutoResponse = Produto & {
  id: string;
};

export default async function ListaProdutos() {
  let produtos: ProdutoResponse[] = [];

  try {
    const response = await fetch("https://api.origamid.online/produtos", {
      next: {
        tags: ["produtos"],
      },
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar os produtos");
    }

    produtos = (await response.json()) as ProdutoResponse[];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
    return (
      <div>
        <p>Ocorreu um erro ao buscar os produtos, tente novamente</p>
        {/* <p>{(error as Error).message}</p> */}
      </div>
    );
  }

  return (
    <ul>
      {produtos.map((produto) => (
        <ProductItem key={produto.id} {...produto} />
      ))}
    </ul>
  );
}
