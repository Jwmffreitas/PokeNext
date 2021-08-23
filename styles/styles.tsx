import styled from 'styled-components'

export const Search = styled.div`
margin-top: 80px;
display: flex;
align-items: center;
width: 100%;
justify-content: center;

@media (min-width: 1240px) {
  margin-top: 4px;
}

input {
  border: solid 1px #CBCBCB;
  font-size: 20px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  padding: 5px 10px;

  @media (min-width: 600px) {
    min-width: 400px;
  }
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
min-width: 300px;
padding: 0 1rem;
margin: 3rem auto 3rem;
display: flex;
justify-content: space-evenly;
align-items: center;
transition: 500ms;
cursor: pointer;
border: 0px solid red;
flex: 0.4;

@media (min-width: 600px) {
  margin: 3rem auto 3rem;
  &:hover {
    transform: scale(1.08)
  }
}

@media (min-width: 600px) and (max-width: 1240px) {
  margin: 3rem 1rem 3rem;
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

export const RightSide = styled.div`
background-color: #E2E2E2;
width: 40%;
display: none;

@media (min-width: 1240px) {
  display: block
}
`

export const LeftSide = styled.div`
flex-wrap: wrap;
padding: 0px;
align-items: flex-start;
justify-content: center;

@media (min-width: 1240px) {
  width: 60%;
  padding: 20px;
  max-width: 1000px;
}
`