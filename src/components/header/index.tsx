import logoImg from "../../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { LiaGamepadSolid } from "react-icons/lia";

export function Header() {
  return (
    <header className="w-full h-28 bg-black text-white px-2 uppercase">
      <div className="max-w-screen-xl mx-auto flex justify-center items-center h-28 sm:justify-between">
        <nav className="flex justify-center  items-center font-semibold gap-5">
          
          <Link href="/">
            <h1 className="text-2xl items-center text-purple-500">GameZone</h1>
          </Link>

          <Link href="/">Games</Link>
          <Link href="/profile">Perfil</Link>
        </nav>

        <div className="hidden sm:flex justify-center items-center">
          <Link href="/profile">
            <LiaGamepadSolid size={36} color="#a855f7" />
          </Link>
        </div>
      </div>
    </header>
  );
}
