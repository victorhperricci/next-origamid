"use server";

import { Produto } from "@/components/productList";

export async function createProduct(product: Produto): Promise<boolean> {
  try {
    console.log("====================================");
    console.log("Creating product:", product);

    const response = await fetch("http://api.origamid.online/produtos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    await response.json();

    return true;
  } catch (error) {
    console.error("Error creating product:", error);
    return false;
  }
}
