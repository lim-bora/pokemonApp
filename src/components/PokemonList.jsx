import { useState } from "react";
import PokemonCard from "../components/PokemonCard";
import styled from "styled-components";
import MOCK_DATA from "../mock";

const PokemonList = ({ onAdd, myPokemon }) => {
  //목업데이터 관리해줄 state : 초기값(목업데이터)
  const [pokemon, setPokemon] = useState(MOCK_DATA);

  return (
    <ListContainer>
      {pokemon.map((item) => (
        <PokemonCard
          key={item.id}
          pokemon={item} //item 하나하나를 pokemon이라는 이름으로 넘겨줌 (= 키값)
          onAdd={onAdd}
          myPokemon={myPokemon}
        />
      ))}
    </ListContainer>
  );
};

export default PokemonList;

const ListContainer = styled.div`
  width: 90%;
  background-color: #e4e4e4;
  margin: 0 auto;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  padding: 20px;
`;
