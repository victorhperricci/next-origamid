import Link from "next/link";
import { getCursos } from "@/api/cursos";

// export const dynamic = 'force-dynamic'; // Force this page to be dynamic
// export const revalidate = 0; // Revalidate this page every 0 seconds (not recommended for production)

export default async function CursosPage() {
  const cursos = await getCursos();

  return (
    <div>
      <h1>Cursos</h1>
      <ul>
        {cursos.map((curso) => (
          <li key={curso.slug}>
            <Link href={`/cursos/${curso.slug}`}>{curso.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
