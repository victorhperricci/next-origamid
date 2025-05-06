import { getCurso } from "@/api/cursos";
import Link from "next/link";
import { CursoDetalhe } from "../types/curso.type";

interface CursoPage {
  params: Promise<{ curso: string }>;
}

export default async function CursoPage({ params }: CursoPage) {
  const { curso } = await params;

  const detalhesCurso = (await getCurso(curso)) as CursoDetalhe;

  if (!detalhesCurso) {
    return (
      <div>
        <h1>{`Curso ${curso} não encontrado`}</h1>
        <p>Verifique o nome e tente novamente.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Detalhes do curso: {detalhesCurso.nome}</h1>
      <p>Descrição: {detalhesCurso.descricao}</p>
      <p>Total de aulas: {detalhesCurso.total_aulas}</p>
      <p>Total de horas: {detalhesCurso.total_horas}</p>

      <div>
        <p>Aulas disponíveis:</p>

        <ul>
          {detalhesCurso.aulas.map((aula) => (
            <li key={aula.slug}>
              <h4>{aula.nome}</h4>
              <p>{aula.descricao}</p>

              <Link href={`/cursos/${detalhesCurso.slug}/${aula.slug}`}>
                Ver aula
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
