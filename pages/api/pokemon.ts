export async function getData() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
  return res.json()
}

export async function getPokemonData(id: number) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

  return res.json()
}

export async function getPokemonLocation(id: number) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`)
  return res.json()
}

export async function getGenerationData(id: number) {
  const res = await fetch(`https://pokeapi.co/api/v2/generation/${id}`)
  return res.json()
}