interface Acao {
  simbolo: string;
  atualizada: string;
}

// export const revalidate = 10; // seconds
interface PageParams {
  params: Promise<{
    acao: string;
  }>;
}

export default async function AcaoPage({ params }: PageParams) {
  const { acao } = await params;

  const response = await fetch(`https://api.origamid.online/acoes/${acao}`, {
    next: {
      tags: ["acoes", acao],
      revalidate: 5, // seconds
    },
  });
  const acaoResponse = (await response.json()) as Acao;

  return (
    <main>
      <h1>Ações</h1>
      <p>simbolo: {acaoResponse.simbolo}</p>
      <p>atualizada em: {acaoResponse.atualizada}</p>
    </main>
  );
}
