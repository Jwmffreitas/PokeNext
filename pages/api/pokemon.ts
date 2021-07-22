export default async function getData() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
  return res.json()
}