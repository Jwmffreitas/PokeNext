export async function getData() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
  return res.json()
}

export async function getPokemonData(name) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  const data = await res

  if(!data || data == undefined || data == null) return {notFound: true}
  // Combine the data with the id

  return data.json()
}