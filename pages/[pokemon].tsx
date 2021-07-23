import { getPokemonData } from './api/pokemon'
import Head from 'next/head'

function pokemonPage({ pokemonData }) {
    return (
        <>
        <Head>
            <title>{pokemonData.name}</title>
        </Head>

        <h1>{pokemonData.name}</h1>
        </>
    )
}

export async function getServerSideProps({params} : any) {
    // Fetch data from external API
    const res = await getPokemonData(params.pokemon)
    const pokemonData = res
  
    // Pass data to the page via props
    return { props: { pokemonData } }
}

export default pokemonPage