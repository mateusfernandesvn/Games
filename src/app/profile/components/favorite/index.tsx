"use client";
import { useState } from "react";
import { FiEdit, FiX } from "react-icons/fi";

export function FavoriteCard() {
  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [gameName, setGameName] = useState("");

  function handleButton() {
    setShowInput(!showInput);

    if (input !== "") {
      setGameName(input);
    }

    setInput("");
  }

  return (
    <div className="w-full bg-neutral-800 p-4 h-44 text-white rounded-lg flex justify-between flex-col">
      {showInput ? (
        <div className="flex items-center justify-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            className="w-full rounded-md h-8 text-black px-2"
          />

          <button onClick={handleButton}>
            <FiX size={24} />
          </button>
        </div>
      ) : (
        <button
          className="self-start hover:scale-110 duration-200 transition-all"
          onClick={handleButton}
        >
          <FiEdit size={24} />
        </button>
      )}
      {gameName &&(
        <div>
          <span>Jogos Favoritos</span>
          <p className="text-bold">{gameName}</p>
        </div>
      )}
      
      {!gameName &&(
        <p className="text-white font-bold">Adicionar jogo</p>
      )}
    </div>
  );
}
