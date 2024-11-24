"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/navigation";

export function Input() {
  const [input, setInput] = useState("");
  const router = useRouter();

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (input ==="") return 
    
    router.push(`/game/search/${input}`);

  }

  return (
    <form onSubmit={handleSearch} className="w-full bg-slate-200 my-5 rounded-lg flex gap-2 items-center justify-between p-2">
      <input
        type="text"
        placeholder="Digite o nome do jogo"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        className="bg-slate-200 outline-none text-black w-11/12"
      />
      <button type="submit">
        <FiSearch size={24} color="purple" />
      </button>
    </form>
  );
}
