import Link from "next/link";

export default function Menu() {
  return (
    <ul className="menu">
      <li>
        <Link href="/" >Home</Link>
      </li>

      <li>
        <Link href="/about" >Sobre</Link>
      </li>

      <li>
        <Link href="/imc">IMC</Link>
      </li>

      <li>
        <Link href="/contact">Contato</Link>
      </li>
    </ul>
  );
}
