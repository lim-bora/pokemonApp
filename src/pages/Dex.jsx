import React from 'react'
import { useState } from 'react'
import Dashboard from '../components/Dashboard'
import PokemonList from '../components/PokemonList'
import styled from 'styled-components'
import MOCK_DATA from '../mock'

const Dex = () => {
    const [pokemons, setPokemons] = useState([]);

    //카드 추가 함수
    const onAdd = ({pokemonImg, name, num}) => {
        console.log('온에드호출');
        
        const addCard = {
            id : 0,
            pokemonImg,
            name,
            num,
        }
        setPokemons([...pokemons, addCard])
    }
    



    return (
        <DexContainer>
            <Dashboard pokemons={pokemons}/>
            <PokemonList pokemons={pokemons} onAdd={onAdd}/>
        </DexContainer>
    )
}

export default Dex


const DexContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`