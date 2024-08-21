import { useState } from 'react'
import { Route, useNavigate, BrowserRouter, Routes } from 'react-router-dom';
import styled from 'styled-components'

const PokemonCard = ({ id ,name, num ,img, onAdd }) => {
    const navigate = useNavigate();

    const onSelectedCard = () => {
        onAdd({
            id,
            img,
            name,
            num,
        });
    }

  return (
    <Card> {/*  onClick={()=>{navigate('/detail')}} */}
        <div className='pokemonImg'>
            <img src={img}></img>
        </div>
        <h4 className='pokemonName'>{name}</h4>
        <span className='pokemonId'>No.{id}</span>
        <button className="addBtn" onClick={onSelectedCard}>추가</button>
    </Card>
  )
}

export default PokemonCard;


const Card = styled.div`
    background-color:#fff;
    border-radius: 8px;
    padding:20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    height: fit-content;
    cursor: pointer;
`