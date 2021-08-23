import { getGenerationData, getPokemonData, getPokemonLocation } from '../api/pokemon'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {PokemonCard, RightSide, LeftSide, PokemonImage, PokemonName, PokemonType, PokemonSelected, Search, Locations, LocationList} from '../../styles/styles'
import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react'
import { generation } from '../util/generation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function GenerationPage({ generationData }: any) {
    console.log(generationData)

    const [pokemons, setPokemons] = useState([])
    const [loading, setLoading] = useState({loading: 'flex', content: 'none', selected: 'none'})
    const [selected, setSelected] = useState({})
    const [pokemonsFiltered, setPokemonsFiltereds] = useState([])
    const [search, setSearch] = useState("")


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

    let selectPokemon = (pokemon) => {
        setSelected(pokemon);
    }

    useEffect(() => {
        console.log(selected)
    }, [selected])

    useEffect(() => {
        initialize()
    }, [])

    useEffect(() => {
        if(pokemons.length != 0) {
            setLoading({loading: 'none', content: 'flex', selected: 'block'})
            setSelected(pokemons[0])
            setPokemonsFiltereds(pokemons)
        }
    }, [pokemons])

    useEffect(() => {
        filterPokemons()
    }, [search])

    let filterPokemons = () => {
        let listTemp = []
        pokemons.forEach((pokemon) => {
            if(search != "") {
                if(String(pokemon.id).indexOf(search) >= 0 || pokemon.name.indexOf(search) >= 0) listTemp.push(pokemon)
            }else {
                listTemp.push(pokemon)
            }
        })
        setPokemonsFiltereds(listTemp)
    }

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
            <LeftSide style={{display: loading.content}}>
                <Search>
                    <input type="text" name="" id="" placeholder="Search" value={search} onChange={(e) => {setSearch(e.target.value)}} />
                    <button><FontAwesomeIcon icon={faSearch} style={{height: '20px'}} /></button>
                </Search>
                {pokemonsFiltered.map((pokemon) => (
                    <PokemonCard onClick={() => selectPokemon(pokemon)}>
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
            </LeftSide>

            <RightSide>
                <div style={{padding: '50px', display: loading.selected}}>
                    <div style={{backgroundColor: 'white', borderRadius: '10px', padding: '50px', boxShadow: 'gray 0px 5px 10px'}}>
                        <PokemonSelected>
                                    <img src={selected?.sprites?.other?.dream_world?.front_default ? selected?.sprites?.other?.dream_world?.front_default : selected?.sprites?.other["official-artwork"]?.front_default}/>
                                    <div style={{width: '100%'}}>
                                        <PokemonName>{selected.name}</PokemonName>
                                        <ul>
                                            {selected?.types?.map((types: object) => (
                                                <PokemonType style={{backgroundColor: bgRelation[types.type.name]}}>{types.type.name}</PokemonType>
                                            ))}
                                        </ul>
                                    </div>
                        </PokemonSelected>
                        <div>
                            <h1>STATS</h1>
                            {selected?.stats?.map((stats) => (
                                <div>
                                    <h4 style={{margin: '0', fontWeight: '500'}}>{stats.stat.name}</h4>
                                    <div style={{backgroundColor: '#CBCBCB', width: '100%', height: '10px', borderRadius: '10px', margin: '5px 0px'}}>
                                        <div style={{backgroundColor: '#414141', width: `${stats.base_stat >= 100 ? 100 : stats.base_stat}%`, height: '100%', borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px', borderTopRightRadius: stats.base_stat >= 100 ? '10px' : '0px', borderBottomRightRadius: stats.base_stat >= 100 ? '10px' : '0px'}}></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </RightSide>
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