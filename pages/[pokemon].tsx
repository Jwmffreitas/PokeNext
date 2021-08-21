import { getPokemonData, getPokemonLocation } from './api/pokemon'
import Head from 'next/head'
import Link from 'next/link'
import {Section, PokemonImage, PokemonName, PokemonType, Locations, LocationList} from '../styles/styles'

function pokemonPage({ pokemonData, pokemonLocation }) {
    console.log(pokemonData)
    console.log(pokemonLocation)

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
            <title>{pokemonData.name}</title>
        </Head>

        <Link href="/"><a>Back to Home</a></Link>

            <Section>
                <PokemonImage src={pokemonData.sprites.other.dream_world.front_default}/>
                <div>
                    <PokemonName>{pokemonData.name}</PokemonName>
                    <p>Types:</p>
                    <ul>
                        {pokemonData.types.map((types: object) => (
                            <PokemonType style={{backgroundColor: bgRelation[types.type.name]}}>{types.type.name}</PokemonType>
                        ))}
                    </ul>
                </div>
            </Section>
            <Section style={{flexDirection: 'column', textAlign: 'center', backgroundColor: '#702E00', borderRadius: '20px', boxShadow: 'gray 0px 0px 10px'}}>
                <Locations>Locations:</Locations>
                <LocationList>
                    {pokemonLocation.length != 0 ? pokemonLocation.map((location: object) => (
                                <li>{location.location_area.name}</li>
                    )) : "No locations"} 
                </LocationList>
            </Section>
        </>
    )
}

export async function getServerSideProps({params} : any) {
    // Fetch data from external API
    const res = await getPokemonData(params.pokemon)
    const pokemonData = res

    const pokemonLocation = await getPokemonLocation(pokemonData.id)
  
    // Pass data to the page via props
    return { props: { pokemonData, pokemonLocation } }
}

export default pokemonPage