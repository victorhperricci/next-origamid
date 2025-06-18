// export const dynamic = 'force-dynamic'; // Force this page to be dynamic
// export const revalidate = 0; // Revalidate this page every 0 seconds (not recommended for production)

import styles from "./cursos.module.scss";

export default async function CursosPage() {
  return (
    <main className={styles.cursos}>
      <h1>Front end e UI Design</h1>
    </main>
  );
}
