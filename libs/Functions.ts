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
