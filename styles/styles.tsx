import styled from 'styled-components'

export const Section = styled.section`
max-width: 40rem;
padding: 0 1rem;
margin: 3rem auto 3rem;
display: flex;
justify-content: space-evenly;`

export const Title = styled.h1`
font-size: 3rem;
line-height: 1.4;
margin: 1rem 0;
font-family: "Rubik", sans-serif;
text-align: center;
`

export const List = styled.ol`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
list-style: none;
padding: 0;
`

export const ListItem = styled.li`
background-color: white;
padding: 5px;
border-radius: 10px;
margin: 10px;
width: 211px;
text-align: center;
transition: 300ms;
&:hover {
  box-shadow: gray 0px 3px 5px;
}
`

export const PokemonImage = styled.img`
height: 280px
`

export const PokemonName = styled.h1`
text-transform: uppercase;
font-weight: bold;
font-size: 1.8rem;
color: black;
`

export const PokemonType = styled.li`
border-radius: 5px;
color: white;
text-transform: uppercase;
padding: 3px;
margin: 5px;
text-align: center;
list-style: none;
`

export const Locations = styled.h2`
text-transform: uppercase;
font-weight: bold;
font-size: 1.8rem;
color: white;
`

export const LocationList = styled.ul`
list-style: none;
padding: 0px;
color: white;
`