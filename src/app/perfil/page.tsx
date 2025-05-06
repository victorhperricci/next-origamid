import { cookies } from "next/headers";
import Link from "next/link";

export default async function PerfilPage() {
  const cookie = await cookies();

  const response = await fetch("https://api.origamid.online/conta/perfil", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookie.get("token")?.value}`,
    },
  });

  const json = (await response.json()) as {
    usuario: string;
    autorizado: boolean;
  };

  return (
    <div>
      <h1>Perfil</h1>
      {json.autorizado ? (
        <p>Usuário: {json.usuario}</p>
      ) : (
        <Link href="/login">Faça login para acessar o perfil</Link>
      )}
    </div>
  );
}
