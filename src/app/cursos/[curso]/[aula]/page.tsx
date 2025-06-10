import { getCurso, getCursos } from "@/api/cursos";
import { Aula } from "../../types/curso.type";

interface AulaPage {
  params: Promise<{ curso: string; aula: string }>;
}

export default async function AulaPage({ params }: AulaPage) {
  const { curso, aula } = await params;

  const detalhesAula = (await getCurso(curso, aula)) as Aula;

  if (!detalhesAula) {
    return (
      <div>
        <h1>{`Aula ${aula} não encontrado`}</h1>
        <p>Verifique o nome e tente novamente.</p>
      </div>
    );
  }

  return (
    <div>
      <p>
        {curso} / {aula}{" "}
      </p>
      <h1>Detalhes do aula: {detalhesAula.nome}</h1>
      <p>Descrição: {detalhesAula.descricao}</p>
      <p>Duração: {detalhesAula.tempo}</p>
    </div>
  );
}

export async function generateStaticParams() {
  const cursos = await getCursos(); // Ensure cursos are fetched before generating params
  const aulas = await Promise.all(cursos.map((curso) => getCurso(curso.slug)));

  return aulas
    .reduce((acc: Aula[], curso) => {
      if (curso && "aulas" in curso) {
        curso.aulas.forEach((aula) => {
          acc.push({ ...aula, curso_id: curso.id } as Aula);
        });
      }
      return acc;
    }, [])
    .map((aula) => ({
      curso: cursos.find((c) => c.id === aula.curso_id)?.slug || "",
      aula: aula.slug,
    }));
}
