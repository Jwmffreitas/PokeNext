import Head from 'next/head'
import { getPokemonData } from './api/pokemon'

function pokemonPage({ pokemonData }) {
    return (
        <h1>{pokemonData.name}</h1>
    )
}

export async function getServerSideProps({ params }) {
    // Fetch data from external API
    const res = await getPokemonData("bulbasaur")
    const pokemonData = res
    console.log(pokemonData)
  
    // Pass data to the page via props
    return { props: { pokemonData } }
}

export default pokemonPage