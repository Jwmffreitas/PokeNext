import React, { useState } from 'react';
import Head from 'next/head'
import { useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'


import { getData } from './api/pokemon'

export async function getStaticProps() {
  const pokemonData = await getData()
  return {
    props: {
      pokemonData
    }
  }
}


export default function Home(pokemonData) {

  const pokemonList = pokemonData.pokemonData.results

  const Section = styled.section`
    max-width: 900px;
    padding: 0 1rem;
    margin: 3rem auto 6rem;
  `

  const Title = styled.h1`
    font-size: 3rem;
    line-height: 1.4;
    margin: 1rem 0;
    font-family: "Rubik", sans-serif;
    text-align: center;
  `

  const List = styled.ol`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
  `

  const ListItem = styled.li`
    background-color: white;
    padding: 5px;
    box-shadow: gray 0px 0px 5px;
    border-radius: 10px;
    margin: 10px;
    width: 211px;
    text-align: center;
  `

  const PokemonImage = styled.img`
    width: 200px
  `

  const PokemonName = styled.p`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.4rem;
    color: black;
  `

  return (
    <>
      <Head>
        <title>PokeNext</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Section>
          <Title>1° GEN POKEDEX</Title>
          <List>
            {pokemonList.map((pokemon: any) => (
              <Link href={`./${pokemon.name}`}>
                  <a>
                    <ListItem>
                      <PokemonName>{`${((pokemon.url).slice(34)).replace('/', '')}. ${pokemon.name}`}</PokemonName>
                    </ListItem>
                  </a>
              </Link>
            ))}
          </List>
      </Section>
    </>
  )
}
