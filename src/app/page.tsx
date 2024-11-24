import { GameProps } from "@/utils/types/games";
import { Input } from "@/components/input";
import { Container } from "@/components/container";
import Link from "next/link";
import Image from "next/image";
import { BsArrowRightSquare } from "react-icons/bs";
import { Card } from "@/components/card";

async function getGames() {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { next: { revalidate: 320 } }
    );
    return res.json();
  } catch (error) {
    throw new Error("Falha ao buscar os jogos");
  }
}

async function getGamesData() {
  try {
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=games`, {
      next: { revalidate: 320 },
    });
    return res.json();
  } catch (error) {
    throw new Error("Falha ao buscar os jogos");
  }
}

export default async function Home() {
  const games: GameProps = await getGames();
  const data: GameProps[] = await getGamesData();

  return (
    <main className="w-full ">
      <Container>
        <h1 className="text-center font-bold text-xl mt-8 mb-5 uppercase -tracking-tighter">
          Onde Cada Jogo Conta uma História!
        </h1>

        <Link href={`/game/${games.id}`}>
          <section className="w-full bg-black rounded-lg">
            <div className="w-full max-h-96 h-96 relative rounded-lg">
              <div className="absolute z-20 bottom-0 p-3 flex justify-center items-center gap-2">
                <p className="font-bold text-xl text-white">{games.title}</p>
                <BsArrowRightSquare size={24} />
              </div>

              <Image
                src={games.image_url}
                alt={games.title}
                priority={true}
                quality={100}
                fill={true}
                className="max-h-96 object-cover rounded-lg opacity-60 hover:opacity-85 transition-all duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
              />
            </div>
          </section>
        </Link>
        <Input />
        <h2 className="text-lg font-bold my-5 mb-5">Jogos para conhecer</h2>

        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </section>
      </Container>
    </main>
  );
}
