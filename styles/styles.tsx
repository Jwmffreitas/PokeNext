import styled from 'styled-components'

export const Search = styled.div`
margin-top: 4px;
display: flex;
align-items: center;
width: 100%;
justify-content: center;

input {
  border: solid 1px #CBCBCB;
  font-size: 20px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 5px 10px;
  min-width: 400px;
}

button {
  border: none;
  color: #414141;
  background-color: #CBCBCB;
  height: 35px;
  width: 40px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  cursor: pointer;
  font-size: 18px;
}
`

export const PokemonCard = styled.div`
max-width: 40rem;
padding: 0 1rem;
margin: 3rem auto 3rem;
display: flex;
justify-content: space-evenly;
align-items: center;
transition: 500ms;
cursor: pointer;
border: 0px solid red;
flex: 0.4;

&:hover {
  transform: scale(1.08)
}
`


export const PokemonImage = styled.img`
max-height: 150px;
max-width: 150px;
margin-right: 20px;
`

export const PokemonName = styled.h1`
text-transform: uppercase;
font-weight: bold;
font-size: 1.5rem;
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

export const PokemonSelected = styled.div`

display: flex;
flex-direction: column;
align-items: center;

img {
  max-height: 200px;
  max-width: 100%;
}

ul {
  padding: 0;
}
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