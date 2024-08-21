import { useState } from 'react'
import PokemonCard from '../components/PokemonCard'
import styled from 'styled-components'
import MOCK_DATA from '../mock'

const PokemonList = ({pokemons, onAdd}) => {
  return (
    <ListContainer>
        {
            MOCK_DATA.map((pokemon)=>{
                return <PokemonCard
                    key={pokemon.id}
                    id={pokemon.id}
                    name={pokemon.korean_name}
                    img={pokemon.img_url}
                    onAdd={onAdd}
                />
            })
        }
    </ListContainer>
  )
}

export default PokemonList


const ListContainer = styled.div`
    width:90%;
    background-color: #e4e4e4;
    margin: 0 auto;
    border-radius: 8px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap:20px;
    padding: 20px;
`