import { Container } from "@/components/container";
import { GameProps } from "@/utils/types/games";
import Link from "next/link";
import Image from "next/image";
async function getGames() {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`
    );
    return res.json();
  } catch (error) {
    throw new Error("Falha ao buscar os jogos");
  }
}

export default async function Home() {
  const games: GameProps = await getGames();
  console.log(games);

  return (
    <main className="w-full flex">
      <Container>
        <h1 className="text-center font-bold text-xl mt-8 ">
          Onde Cada Jogo Conta uma História!
        </h1>

        <Link href={`/game/${games.id}`}>
          <section className="w-full bg-black rounded-lg">
            <Image
              src={games.image_url}
              alt={games.title}
              priority={true}
              quality={100}
              width={100}
              height={100}
            />
          </section>
        </Link>
      </Container>
    </main>
  );
}
