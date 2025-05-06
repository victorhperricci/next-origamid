"use client";

import { createProduct } from "@/actions/create-product";
import { Produto } from "../productList";
import { revalidatePathAction } from "@/actions/revalidatePath";
import { redirect } from "next/navigation";

export default function FormCreateProduct() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;

    const newProduct: Produto = {
      nome: form.nome.value,
      preco: Number(form.preco.value),
      descricao: form.descricao.value,
      estoque: Number(form.estoque.value),
      importado: form.importado.checked ? 1 : 0,
    };

    const response = await createProduct(newProduct);

    if (!response) {
      console.error("Error creating product");
      return;
    }

    await revalidatePathAction({ type: "revalidate-tag", key: "produtos" });
    redirect("/produtos");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nome" placeholder="Nome do Produto" required />
      <input type="number" name="preco" placeholder="R$ 0,00" required />
      <input
        type="text"
        name="descricao"
        placeholder="Descrição do produto"
        required
      />
      <input type="number" name="estoque" placeholder="Estoque" required />

      <label>
        <input type="checkbox" name="importado" />
        <span>Produto importado</span>
      </label>

      <button type="submit">Adicionar produto</button>
    </form>
  );
}
