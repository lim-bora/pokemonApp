import { useState } from 'react'
import styled from 'styled-components'
import '../App.css' 
import PokemonCard from './PokemonCard'

const Dashboard = ({pokemons}) => { 
    const notSelectedImg = 'https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png'

  return (
    <DashboardContainer>
        <DashBoardTitle>나만의 포켓몬</DashBoardTitle>
        <ul className='deshBoard-Box'>
            <li><img src={notSelectedImg} className='notSelectedImg'/></li>
        </ul>
        
    </DashboardContainer>
  )
}

export default Dashboard


const DashboardContainer = styled.div`
    width:90%;
    background-color: #f4f4f4;
    height:300px;
    margin: 0 auto;
    border-radius: 8px;
    padding: 30px 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

const DashBoardTitle = styled.h2`
    text-align: center;
    font-size: 24px;
    font-weight: 700;
`

