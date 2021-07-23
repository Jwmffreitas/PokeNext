import { getPokemonData, getPokemonLocation } from './api/pokemon'
import Head from 'next/head'
import styled from 'styled-components'

function pokemonPage({ pokemonData, pokemonLocation }) {
    console.log(pokemonData)
    console.log(pokemonLocation)

    const Section = styled.section`
    max-width: 40rem;
    padding: 0 1rem;
    margin: 3rem auto 3rem;
    display: flex;
    justify-content: space-evenly;
  `

    const PokemonImage = styled.img`
    height: 280px
    `

    const PokemonName = styled.h1`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.8rem;
    color: black;
    `

    const Locations = styled.h2`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.8rem;
    color: black;
    `

    const LocationList = styled.ul`
    list-style: none;
    padding: 0px;
    `

    return (
        <>
        <Head>
            <title>{pokemonData.name}</title>
        </Head>

        <Section>
            <PokemonImage src={pokemonData.sprites.other.dream_world.front_default}/>
            <div>
                <PokemonName>{pokemonData.name}</PokemonName>
                <p>Types:</p>
                <ul>
                    {pokemonData.types.map((types: object) => (
                        <li>{types.type.name}</li>
                    ))}
                </ul>
            </div>
        </Section>
        <Section style={{flexDirection: 'column', textAlign: 'center'}}>
            <Locations>Encounters</Locations>
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