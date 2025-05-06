import { cookies } from "next/headers";
import Link from "next/link";

export default async function Menu() {
  const hasToken = (await cookies()).get("token")?.value;

  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>

      <li>
        <Link href="/about">Sobre</Link>
      </li>

      <li>
        <Link href="/imc">IMC</Link>
      </li>

      <li>
        <Link href="/contact">Contato</Link>
      </li>

      <li>
        <Link href="/cursos">Cursos</Link>
      </li>

      <li>
        <Link href="/acoes">Ações</Link>
      </li>

      {hasToken ? (
        <li>
          <Link href="/perfil">Ver perfil</Link>
        </li>
      ) : (
        <li>
          <Link href="/login">Login</Link>
        </li>
      )}
    </ul>
  );
}
