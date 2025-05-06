"use client";

import { revalidatePathAction } from "@/actions/revalidatePath";

export function ButtonRevalidate() {
  async function handleClick() {
    revalidatePathAction({ type: "revalidate-tag", key: "acoes" });
  }

  return (
    <>
      <button onClick={handleClick}>Atualizar</button>
    </>
  );
}
