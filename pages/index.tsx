import React, { useState } from 'react';
import Head from 'next/head'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image';
import { generation } from './util/generation';


import { getData } from './api/pokemon'
import Navbar from './components/Navbar';

//export async function getStaticProps() {
//  const pokemonData = await getData()
//  return {
//    props: {
//      pokemonData
//    }
//  }
//}

const Section = styled.section`
  display: flex;
  justify-content: space-evenly;
  margin-top: 100px;
  flex-wrap: wrap;
`

const GenerationCard = styled.div`
  border: #414141 solid 1px;
  padding: 20px;
  transition: 500ms;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover {
    box-shadow: gray 0px 5px 10px;
  }

  h2 {
    color: #414141;
  }
`


export default function Home() {

  //const pokemonList = pokemonData.pokemonData.results

  return (
    <>
      <Head>
        <title>PokeNext</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar/>

      <Section>

        {generation.map((generation) => (
        <Link href={`/generation/${generation.id}`}>
        <a>
          <GenerationCard>
            <Image
              priority
              src={generation.image}
              width={380}
              height={200}
              alt={generation.text}
              />
              <h2>{generation.text}</h2>
          </GenerationCard>
        </a>
      </Link>
        ))}
      </Section>
            {/*<List>
              {pokemonList.map((pokemon: any) => (
                <Link href={`./${pokemon.name}`}>
                    <a>
                      <ListItem>
                        <PokemonName>{`${((pokemon.url).slice(34)).replace('/', '')}. ${pokemon.name}`}</PokemonName>
                      </ListItem>
                    </a>
                </Link>
              ))}
              </List>*/}
    </>
  )
}
