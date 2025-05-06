import ListaProdutos from "@/components/productList";
import { Suspense } from "react";

export default async function ProdutosPage() {
  return (
    <main>
      <h1>Produtos</h1>

      <p>Essa aqui é a lista de produtos</p>

      <Suspense fallback={<p>Carregando...</p>}>
        <ListaProdutos />
      </Suspense>
    </main>
  );
}
