export async function getData() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
  return res.json()
}

export async function getPokemonData(name) {
  const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  let res = await req

  //if(!data || data == undefined || data == null) return {notFound: true}
  // Combine the data with the id

  return res.json()
}

export async function getPokemonLocation(id: number) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`)
  return res.json()
}