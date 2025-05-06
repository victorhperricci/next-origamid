import { Produto } from "@/components/serverFetch";

interface ProductProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductProps) {
  const { id } = await params;

  const response = await fetch(`https://api.origamid.online/produtos/${id}`);
  const data = (await response.json()) as Produto;

  return (
    <div>
      <h1>{data.nome}</h1>
      <p>{data.preco}</p>
      <span>{data.descricao}</span>
    </div>
  );
}
