import { getGenerationData, getPokemonData, getPokemonLocation } from '../api/pokemon'
import Head from 'next/head'
import Link from 'next/link'
import {Section, PokemonImage, PokemonName, PokemonType, Locations, LocationList} from '../../styles/styles'
import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'

function GenerationPage({ generationData }: any) {
    console.log(generationData)

    const [pokemons, setPokemons] = useState([])


    const getPokemons = async () => {
        let promises = [];
        for (let i = 1; i <= generationData.pokemon_species.length; i++) {
            let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            let result = await res.json()
            promises.push(result)
        }
        setPokemons(promises)
    }

    let initialize = () => {
        getPokemons()
    }

    useEffect(() => {
        initialize()
    }, [])

    useEffect(() => {
        console.log(pokemons)
    }, [pokemons])

    const bgRelation = {
        grass: 'forestgreen',
        fire: 'red',
        water: 'dodgerblue',
        bug: 'yellowgreen',
        flying: 'cornflowerblue',
        poison: 'purple',
        normal: 'gray',
        electric: 'yellow',
        ground:  'burlywood',
        fairy: 'pink',
        fighting: 'darkred',
        psychic: 'violet',
        rock: 'brown',
        steel: 'slategray',
        ice: 'lightskyblue',
        ghost: 'mediumorchid',
        dragon: 'blue',
        dark: 'darkslategray',
    }

    return (
        <>
        <Head>
            <title>{generationData.name}</title>
        </Head>

        <Navbar/>

        <Link href="/"><a>Back to Home</a></Link>

            <Section>
            </Section>
            {pokemons.map((pokemon) => (
                <p>{pokemon.name}</p>
            ))}
        </>
    )
}

export async function getServerSideProps({params} : any) {
    // Fetch data from external API
    const res = await getGenerationData(params.generation)
    const generationData = res
  
    // Pass data to the page via props
    return { props: { generationData } }
}

export default GenerationPage