import Link from "next/link";

export default async function NotFound() {
  return (
    <div>
      <h1>Página não encontrada</h1>
      <p>Desculpe, a página que você está procurando não existe.</p>
      <Link href="/">Voltar</Link>
    </div>
  );
}
