import { GameProps } from "@/utils/types/games";
import { redirect } from "next/navigation";
import { Container } from "@/components/container";
import { Card } from "@/components/card";
import { Label } from "./components/label";
import Image from "next/image";
import { Metadata } from "next";

interface PropsParams {
  params: { id: string };
}

export async function generateMetadata({
  params,
}: PropsParams): Promise<Metadata> {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${params.id}`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch game data");
    }

    const gameData: GameProps = await res.json();

    return {
      title: gameData.title || "Games",
      description: `${gameData.description.slice(0, 100)}...`,
      openGraph: {
        images: [gameData.image_url],
        title: gameData.title,
      },
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
        },
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Games",
    };
  }
}

async function getData(id: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`,
      { next: { revalidate: 60 } }
    );
    return res.json();
  } catch (error) {
    throw new Error("Erro ao buscar dados");
  }
}

async function getGameSorted() {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { cache: "no-store" }
    );
    return res.json();
  } catch (error) {
    throw new Error("Erro ao buscar dados  ");
  }
}

export default async function Game(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;

  const data: GameProps = await getData(id);
  const gameSorted: GameProps = await getGameSorted();

  if (!data) {
    redirect("/");
  }

  return (
    <main className="w-full">
      <div className="bg-black h-80 sm:h-96 w-full relative">
        <Image
          className="object-cover w-full  h-80 sm:h-96 opacity-75"
          src={data.image_url}
          alt={data.title}
          priority={true}
          quality={100}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
        />
      </div>
      <Container>
        <h1 className="font-bold text-lg my-4">{data.title}</h1>
        <p>{data.description}</p>

        <h2 className="font-bold text-lg mt-7 mb-2 ">Plataforma:</h2>
        <div className="flex gap-2 flex-wrap ">
          {data.platforms.map((item) => (
            <Label name={item} key={item} />
          ))}
        </div>

        <h2 className="font-bold text-lg mt-7 mb-2 ">Categorias:</h2>
        <div className="flex gap-2 flex-wrap ">
          {data.categories.map((item) => (
            <Label name={item} key={item} />
          ))}
        </div>

        <p className="mt-7 mb-2">
          <strong>Data de Lançamento:</strong> {data.release}
        </p>

        <h2 className="font-bold text-lg mt-7 mb-2 ">Jogo recomendado:</h2>
        <div className="flex w-1/2 justify-center items-center">
          <div className="flex-grow justify-center items-center">
            <Card data={gameSorted} />
          </div>
        </div>
      </Container>
    </main>
  );
}
