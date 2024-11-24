import Link from "next/link";
export function Footer() {
  return (
    <footer className="w-full h-20 mt-8 bg-black flex flex-col items-center justify-center">
      <Link href="/">
        <h1 className="text-2xl items-center text-purple-500 my-4 uppercase">GameZone</h1>
      </Link>

      <p className="text-white text-sm mb-4">
        Copyright © 2024 - Todos os direitos reservados
      </p>
    </footer>
  );
}
