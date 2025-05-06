import { Curso, CursoDetalhe, Aula } from "@/app/cursos/types/curso.type";

const baseURL = "https://api.origamid.online";

export async function getCursos() {
  return (await (await fetch(`${baseURL}/cursos`)).json()) as Promise<Curso[]>;
}

export async function getCurso(curso: string, aula?: string) {
  let url = `${baseURL}/cursos/${curso}`;
  if (aula) url += `/${aula}`;
  return (await (await fetch(url)).json()) as Promise<CursoDetalhe | Aula>;
}
