import { getCurso } from "@/api/cursos";
import Link from "next/link";
import { Aula, CursoDetalhe } from "../types/curso.type";

interface CursoPage {
  params: Promise<{ slug: string[] }>;
}

function isCursoDetalhe(curso: unknown): curso is CursoDetalhe {
  return !!(
    curso &&
    typeof curso === "object" &&
    "aulas" in curso &&
    curso.aulas
  );
}

function isAulaSelecionada(curso: unknown): curso is Aula {
  return !!(
    curso &&
    typeof curso === "object" &&
    "descricao" in curso &&
    "tempo" in curso
  );
}

export default async function CursoPage({ params }: CursoPage) {
  const { slug } = await params;

  const [nomeCurso, aulaCurso] = slug;
  const detalhesCurso = await getCurso(nomeCurso, aulaCurso);

  const cursoDetalhe = isCursoDetalhe(detalhesCurso);
  const aulaSelecionada = isAulaSelecionada(detalhesCurso);

  if (cursoDetalhe && !!detalhesCurso) {
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

  if (aulaSelecionada && !!detalhesCurso) {
    return (
      <div>
        <h1>Detalhes do aula: {detalhesCurso.nome}</h1>
        <p>Descrição: {detalhesCurso.descricao}</p>
        <p>Duração: {detalhesCurso.tempo}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>
        {aulaCurso
          ? `Aula ${aulaCurso} do curso ${nomeCurso} não encontrada`
          : `Curso ${nomeCurso} não encontrado`}
      </h1>
      <p>Verifique o nome e tente novamente.</p>
    </div>
  );
}
