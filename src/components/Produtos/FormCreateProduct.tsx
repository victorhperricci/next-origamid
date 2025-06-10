"use client";

import { createProduct } from "@/actions/create-product";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Produto } from "../productList";
// import { revalidatePathAction } from "@/actions/revalidatePath";
// import { redirect } from "next/navigation";

const schema = yup.object().shape({
  nome: yup.string().required("Nome é obrigatório"),
  preco: yup
    .number()
    .typeError("Preço deve ser um número")
    .positive("Preço deve ser positivo")
    .required("Preço é obrigatório"),
  descricao: yup.string().required("Descrição é obrigatória"),
  estoque: yup
    .number()
    .typeError("Estoque deve ser um número")
    .positive("Estoque deve ser positivo")
    .integer("Estoque deve ser um número inteiro")
    .required("Estoque é obrigatório"),
  importado: yup
    .mixed<0 | 1>()
    .oneOf([0, 1])
    .transform((value) => (value ? 1 : 0))
    .required("Importado é obrigatório"),
});

function Button() {
  const status = useFormStatus();

  return (
    <button type="submit" disabled={status.pending}>
      {status.pending ? "Criando..." : "Adicionar produto"}
    </button>
  );
}

export default function FormCreateProduct() {
  // async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  //   event.preventDefault();

  //   const form = event.currentTarget;

  //   const newProduct: Produto = {
  //     nome: form.nome.value,
  //     preco: Number(form.preco.value),
  //     descricao: form.descricao.value,
  //     estoque: Number(form.estoque.value),
  //     importado: form.importado.checked ? 1 : 0,
  //   };

  //   const response = await createProduct(newProduct);

  //   if (!response) {
  //     console.error("Error creating product");
  //     return;
  //   }

  //   await revalidatePathAction({ type: "revalidate-tag", key: "produtos" });
  //   redirect("/produtos");
  // }

  // ======================================

  const [, formAction] = useActionState(createProduct, {
    errors: {},
  });

  const { register } = useForm<Produto>({
    resolver: yupResolver(schema),
  });

  // async function onSubmit(data: Produto) {
  //   // await createProduct(data);
  //   // await revalidatePathAction({ type: "revalidate-tag", key: "produtos" });
  //   // redirect("/produtos");
  // }

  return (
    <form
      action={formAction}
      // onSubmit={handleSubmit(onSubmit)}
    >
      <input type="text" placeholder="Nome do Produto" {...register("nome")} />
      <input type="number" placeholder="R$ 0,00" {...register("preco")} />
      <input
        type="text"
        placeholder="Descrição do produto"
        {...register("descricao")}
      />
      <input type="number" placeholder="Estoque" {...register("estoque")} />

      <label>
        <input type="checkbox" {...register("importado")} />
        <span>Produto importado</span>
      </label>

      {/* <button type="submit">Adicionar produto</button> */}
      <Button />
    </form>
  );
}
