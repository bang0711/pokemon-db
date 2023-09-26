import PetList from "@/Components/PetList";
import { getAll, getPokemonFromWeb } from "@/libs/Functions";
import React from "react";

type Props = {};

async function HomePage({}: Props) {
  const data = await getAll();
  // const test = await getPokemonFromWeb();
  // console.log(test);
  return (
    <main className="bg-white">
      <PetList data={data} />
    </main>
  );
}

export default HomePage;
