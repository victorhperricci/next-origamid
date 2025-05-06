import { getCurso } from "@/api/cursos";
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
