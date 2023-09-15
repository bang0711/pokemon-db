"use client";
import Loading from "@/app/loading";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
type Props = {
  data: any;
};
function PetList({ data }: Props) {
  const [name, setName] = useState<string>("");
  function format(index: any) {
    let id = "";
    if (index < 10) {
      id = "00" + index;
    } else if (index >= 10 && index < 100) {
      id = "0" + index;
    } else if (index >= 100) {
      id = index;
    }
    return id;
  }
  function convertName(name: string) {
    const newName = name.toLowerCase();
    return newName;
  }
  return (
    <div className="flex flex-col gap-2 p-2">
      <input
        type="text"
        name=""
        id=""
        value={name}
        placeholder="Enter name of pokemon"
        onChange={(e) => setName(e.target.value)}
        className="w-[80%] mx-auto p-2 rounded-lg border border-gray-200 outline-none focus-within:shadow-md transition-all duration-200"
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, minmax(0, 1fr));",
          gap: "0.5rem",
        }}
      >
        {data.results
          .filter((result: any) => result.name.includes(name))
          .map((result: any) => (
            <div
              key={result.url.split("/")[result.url.split("/").length - 2]}
              className="p-2 rounded-md shadow-md flex flex-col items-center justify-center capitalize"
            >
              <Image
                alt={result.name}
                className="w-44 h-52"
                src={
                  result.name.includes("galar")
                    ? `https://img.pokemondb.net/artwork/avif/${result.name
                        .toLowerCase()
                        .replace("galar", "galarian")}.avif`
                    : result.name.includes("alola")
                    ? `https://img.pokemondb.net/artwork/avif/${result.name
                        .toLowerCase()
                        .replace("alola", "alolan")}.avif`
                    : result.name.includes("koraidon")
                    ? `https://img.pokemondb.net/sprites/scarlet-violet/normal/koraidon.png`
                    : result.name.includes("miraidon")
                    ? `https://img.pokemondb.net/sprites/scarlet-violet/normal/miraidon.png`
                    : result.name.includes("totem")
                    ? `https://img.pokemondb.net/artwork/avif/${convertName(
                        result.name.replace("-totem", "")
                      )}.avif`
                    : result.name.includes("starter")
                    ? `https://img.pokemondb.net/artwork/avif/${convertName(
                        result.name.replace("-starter", "")
                      )}.avif`
                    : `https://img.pokemondb.net/sprites/home/normal/2x/avif/${result.name.toLowerCase()}.avif`
                }
                width={150}
                height={200}
                onError={(e) =>
                  (e.currentTarget.srcset = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                    result.url.split("/")[result.url.split("/").length - 2]
                  }.png`)
                }
              />
              {result.name}
            </div>
          ))}
      </div>
    </div>
  );
}

export default PetList;
