import Link from "next/link";
import { getCursos } from "@/api/cursos";

// export const dynamic = 'force-dynamic'; // Force this page to be dynamic
// export const revalidate = 0; // Revalidate this page every 0 seconds (not recommended for production)

export default async function CursosPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cursos = await getCursos();

  return (
    <div className="flex">
      <nav style={{ marginRight: "4rem" }}>
        <h2>Cursos</h2>
        <ul>
          {cursos.map((curso) => (
            <li key={curso.slug}>
              <Link href={`/cursos/${curso.slug}`}>{curso.nome}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <div>{children}</div>
    </div>
  );
}
