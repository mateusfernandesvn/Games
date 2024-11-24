import { Container } from "@/components/container";
import { Card } from "@/components/card";
import { Input } from "@/components/input";
import { GameProps } from "@/utils/types/games";

async function getData(title: string) {

  try {
    const decodeTitle = decodeURI(title)

    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game&title=${decodeTitle}`
    );
    return res.json();
  } catch (error) {
    return null;
  }
}

export default async function Search({
  params: { title },
}: {
  params: { title: string };
}) {
  const games: GameProps[] = await getData(title);

  return (
    <main className="w-full">
      <Container>
        <Input />
        <h1 className="font-bold text-lg mt-8 mb-5">
          Veja o que encontramos na nossa base
        </h1>
        {!games && (
          <p className="text-red-500 text-xl font-semibold">
            Esse jogo não foi encontrado...
          </p>
        )}

        <section className="grid gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {games && games.map((item) => <Card key={item.id} data={item} />)}
        </section>
      </Container>
    </main>
  );
}
