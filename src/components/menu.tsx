// import { cookies } from "next/headers";
"use client";
import Link from "next/link";
import {
  // useParams,
  // usePathname,
  // useRouter,
  useSearchParams,
} from "next/navigation";
import { Suspense, useEffect } from "react";

function Busca() {
  const searchParams = useSearchParams();
  const busca = searchParams.get("busca");
  return <div>Busca: {busca}</div>;
}

export default function Menu() {
  // const hasToken = (await cookies()).get("token")?.value;

  // const params = useParams();
  // const pathname = usePathname();
  // const router = useRouter();

  useEffect(() => {
    // router.push("/produtos");
  }, []);

  return (
    <ul className="menu">
      {/* <li>
        <Link href="/">Home</Link>
      </li> */}

      <Suspense fallback={<div>Carregando busca...</div>}>
        <Busca />
      </Suspense>

      <li>
        <Link href="/produtos">Produtos</Link>
      </li>

      <li>
        <Link href="/produtos/adicionar">Adicionar produto</Link>
      </li>

      {/* <li>
        <Link href="/imc">IMC</Link>
      </li> */}

      {/* <li>
        <Link href="/contact">Contato</Link>
      </li> */}

      <li>
        <Link href="/cursos">Cursos</Link>
      </li>

      {/* <li>
        <Link href="/acoes">Ações</Link>
      </li> */}

      <li>
        <Link href="/login">Login</Link>
      </li>
      {/* {hasToken ? (
        <li>
          <Link href="/perfil">Ver perfil</Link>
        </li>
      ) : (
        <li>
          <Link href="/login">Login</Link>
        </li>
      )} */}
    </ul>
  );
}
