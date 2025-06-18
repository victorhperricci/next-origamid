import Image from "next/image";
import styles from "./animais.module.scss";

type Animal = {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
};

export default async function AnimaisPage() {
  const response = await fetch("https://api.origamid.online/animais", {
    cache: "no-store", // Force this page to always fetch fresh data
  });
  const animais: Animal[] = await response.json();

  return (
    <main>
      <h1>Animais</h1>

      <ul className={styles.animais}>
        {animais.map((animal) => (
          <li key={animal.id}>
            <h2>{animal.nome}</h2>
            <p>{animal.descricao}</p>
            <Image
              src={animal.imagem}
              alt={animal.nome}
              width={2400}
              height={1600}
              sizes="(max-width: 600px) 100vw, 50vw"
              priority
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
