"use server";

import { Produto } from "@/components/productList";
import { revalidatePathAction } from "./revalidatePath";
import { redirect } from "next/navigation";

export type FormCreateProductInitialState = {
  errors: {
    [key: string]: string;
  };
};

function validateForm(
  objForm: { key: string; isValid: boolean }[]
): FormCreateProductInitialState | true {
  const errors: FormCreateProductInitialState = {
    errors: {},
  };

  objForm.forEach((item) => {
    if (!item.isValid) {
      errors.errors[item.key] = `${item.key} é inválido.`;
    }
  });

  if (Object.keys(errors.errors).length === 0) {
    return true;
  }

  return errors;
}

export async function createProduct(
  state: FormCreateProductInitialState,
  formData: FormData
  // newProduct: Produto
): Promise<FormCreateProductInitialState> {
  try {
    const newProduct: Produto = {
      nome: formData.get("nome") as string,
      preco: Number(formData.get("preco")),
      descricao: formData.get("descricao") as string,
      estoque: Number(formData.get("estoque")),
      importado: formData.get("importado") ? 1 : 0,
    };

    // Validar os dados do produto antes de enviar para a API
    const formIsValid = validateForm([
      {
        key: "nome",
        isValid: !!newProduct.nome,
      },
      {
        key: "preco",
        isValid: !isNaN(newProduct.preco) && newProduct.preco > 0,
      },
      { key: "descricao", isValid: !!newProduct.descricao },
      {
        key: "estoque",
        isValid: !isNaN(newProduct.estoque) && newProduct.estoque >= 0,
      },
      {
        key: "importado",
        isValid: typeof newProduct.importado === "number",
      },
    ]);

    if (formIsValid !== true) {
      return formIsValid;
    }

    const response = await fetch("http://api.origamid.online/produtos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    if (!response.ok) {
      throw new Error("Erro ao criar produto.");
    }
  } catch (error) {
    console.error("Error creating product:", error);

    if (error instanceof Error) {
      return {
        errors: {
          form: error.message,
        },
      };
    }

    return {
      errors: {
        form: "Erro ao criar produto. Tente novamente mais tarde.",
      },
    };
  }

  revalidatePathAction({ type: "revalidate-tag", key: "produtos" });
  redirect("/produtos");
}
