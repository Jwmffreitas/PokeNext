import { getGenerationData, getPokemonData, getPokemonLocation } from '../api/pokemon'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {PokemonCard, PokemonImage, PokemonName, PokemonType, Locations, LocationList} from '../../styles/styles'
import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'
import { generation } from '../util/generation'

function GenerationPage({ generationData }: any) {
    console.log(generationData)

    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState({loading: 'flex', content: 'none'})


    const getPokemons = async () => {
        let promises = [];
        for (let i = generation[generationData.id - 1].index; i < (generation[generationData.id - 1].index + generationData.pokemon_species.length); i++) {
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
        if(pokemons.length != 0) {
            setLoading({loading: 'none', content: 'flex'})
        }
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
            <title>{generationData.names[3].name}</title>
        </Head>

        <Navbar/>

        <div style={{width:'100%', display: loading.loading, alignItems: 'center', flexDirection: 'column', marginTop: '150px'}}>
            <Image src={'/pikachu-loading.gif'} width={200} height={200}/>
            <h3>Loading...</h3>
        </div>

        <section style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
            <div style={{display: loading.content, flexWrap: 'wrap', maxWidth: '1000px', width: '60%', padding: '20px'}}>
                {pokemons.map((pokemon) => (
                    <PokemonCard>
                            <PokemonImage src={pokemon.sprites.other.dream_world.front_default ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.other["official-artwork"].front_default}/>
                            <div>
                                <PokemonName>{pokemon.name}</PokemonName>
                                <p>Types:</p>
                                <ul>
                                    {pokemon.types.map((types: object) => (
                                        <PokemonType style={{backgroundColor: bgRelation[types.type.name]}}>{types.type.name}</PokemonType>
                                    ))}
                                </ul>
                            </div>
                    </PokemonCard>
                ))}
            </div>

            <div style={{backgroundColor: '#F5F5F5', width: '40%'}}>
            </div>
        </section>
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