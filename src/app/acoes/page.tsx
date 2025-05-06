import { ButtonRevalidate } from "@/components/revalidateButton";

interface Acao {
  simbolo: string;
  atualizada: string;
}

// export const revalidate = 10; // seconds

export default async function AcoesPage() {
  const response = await fetch("https://api.origamid.online/acoes/lua", {
    next: {
      tags: ["acoes"],
    },
    cache: "force-cache",
  });
  const acao = (await response.json()) as Acao;

  return (
    <main>
      <h1>Ações</h1>
      <p>simbolo: {acao.simbolo}</p>
      <p>atualizada em: {acao.atualizada}</p>
      <ButtonRevalidate />
    </main>
  );
}
