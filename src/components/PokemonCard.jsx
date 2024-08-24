import { useState } from "react";
import {
  Route,
  useNavigate,
  BrowserRouter,
  Routes,
  useLocation,
} from "react-router-dom";
import styled from "styled-components";

const PokemonCard = ({ pokemon, onAdd, myPokemon }) => {
  const navigate = useNavigate(); //useNavigate : 라우터로 이동할때 사용하는 훅

  //추가_클릭이벤트
  const onSelectedCard = () => {
    //중복처리, 6이상 경고창
    const isDone = myPokemon.some(
      (item) => item !== undefined && item.id === pokemon.id
    );
    if (isDone === true) {
      return alert("중복입니다. 다른 포켓몬을 선택해주세요.");
    } else if (myPokemon.length >= 6 && !myPokemon.includes(undefined)) {
      return alert("포켓몬은 6마리까지만 추가할 수 있습니다.");
    } else {
      return onAdd(pokemon); //PokemonList로 pokemon을 넘겨줌
    }
  };

  return (
    <Card>
      <div
        className="pokemonImg"
        onClick={() => {
          navigate(
            `/detail?id=${pokemon.id}&name=${encodeURIComponent(
              pokemon.korean_name
            )}&img=${encodeURIComponent(pokemon.img_url)}
            &types=${encodeURIComponent(pokemon.types)}
            &description=${pokemon.description}`
          );
        }}
      >
        <img src={pokemon.img_url}></img>
      </div>
      <h4 className="pokemonName">{pokemon.korean_name}</h4>
      <span className="pokemonId">No.{pokemon.id}</span>
      <button className="addBtn" onClick={onSelectedCard}>
        추가
      </button>
    </Card>
  );
};

export default PokemonCard;

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  height: fit-content;
  cursor: pointer;
`;
