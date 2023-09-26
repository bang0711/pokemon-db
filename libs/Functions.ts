import * as cheerio from "cheerio";
export async function getAll() {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getPet(id: number) {
  const res = await fetch(`https://www.digi-api.com/api/v1/digimon/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch attributes");
  }

  return res.json();
}

export async function getPokemonFromWeb() {
  const res = await fetch("https://poke-db.netlify.app/");

  const text = await res.text();
  const $ = cheerio.load(text);
  const pokemonData: { name: string; image: string }[] = [];
  $("main > div > div > a").each((index, element) => {
    const name = $(element).find("p").text();
    const image = $(element).find("img").text();
    pokemonData.push({
      name: name,
      image: image,
    });
  });
  return pokemonData;
}
