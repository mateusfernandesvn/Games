import { Container } from "@/components/container";
import { FavoriteCard } from "./components/favorite";
import Image from "next/image";
import userImg from "../../../public/user.png";
import { FaShareAlt } from "react-icons/fa";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "Meu Perfil",
  description: "Perfil do usuário",
};


export default function Profile() {
  return (
    <main className="w-full min-h-screen">
      <Container>
        <section className="mt-8 mb-6 bg-neutral-800 rounded-xl p-6 flex flex-col items-center justify-between relative gap-3 sm:flex-row">
          <div className="w-full flex items-center gap-4 text-lg justify-center flex-col sm:flex-row  sm:justify-normal">
            <Image
              src={userImg}
              alt="perfil do usuário"
              className="rounded-full w-56 h-56 object-cover"
            />
            <div className="flex flex-col  justify-center gap-2">
              <h1 className="text-2xl font-bold">Mateus Fernandes</h1>
              <p className="text-sm text-gray-300">
                Gosto de jogos de ação e aventura...
              </p>
            </div>
          </div>

          <div className="sm:absolute top-6 right-6 gap-3 flex items-center justify-center mt-2">
            <button className="bg-purple-800 px-4 py-3 rounded-lg hover:bg-purple-900 transition-all duration-300">
              Configuração
            </button>

            <button className="bg-purple-800 px-4 py-3 rounded-lg hover:bg-purple-900 transition-all duration-300">
              <FaShareAlt size={24} />
            </button>
          </div>
        </section>

        <section className="flex flex-wrap gap-5 flex-col md:flex-row">
          <div className="flex-grow flex-wrap">
            <FavoriteCard />
          </div>
          <div className="flex-grow flex-wrap">
            <FavoriteCard />
          </div>
          <div className="flex-grow flex-wrap">
            <FavoriteCard />
          </div>
        </section>
      </Container>
    </main>
  );
}
