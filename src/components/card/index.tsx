import Link from "next/link";
import Image from "next/image";
import { BiRightArrowCircle } from "react-icons/bi";
import { GameProps } from "@/utils/types/games";

interface CardProps {
  data: GameProps;
}

export function Card({ data }: CardProps) {
  return (
    <Link href={`/game/${data.id}`}>
      <section className="w-full bg-neutral-950 rounded-lg p-4 mb-5">
        <div className="relative -wfull h-56 ">
          <Image
          className="rounded-lg object-cover hover:scale-105 transition-all duration-300"
            src={data.image_url}
            alt={data.title}
            fill={true}
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 44vw"
          />
        </div>
        <div className="flex justify-between items-center mt-2">
            <p className="text-sm font-bold text-white text-ellipsis truncate whitespace-nowrap overflow-hidden">{data.title}</p>
            <BiRightArrowCircle size={24} color="fff" />
        </div>
      </section>
    </Link>
  );
}
