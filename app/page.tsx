import PetList from "@/Components/PetList";
import { getAll } from "@/libs/Functions";
import React from "react";

type Props = {};

async function HomePage({}: Props) {
  const data = await getAll();
  return (
    <div className="bg-white">
      <PetList data={data} />
    </div>
  );
}

export default HomePage;
