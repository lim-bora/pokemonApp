import React from "react";
import { useState, createContext } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import styled from "styled-components";
import MOCK_DATA from "../mock";

//컨텍스트 분리(변화O, 변화X)
export const PokemonStateContext = createContext(); //변화O
export const PokemonDispatchContext = createContext(); //변화X

const Dex = () => {
  const defaultLength = Array.from({ length: 6 });

  //나만의 포켓몬을 담을 state : 초기값 빈배열 6개
  const [myPokemon, setMyPokemon] = useState(defaultLength);

  //포켓몬 추가 함수
  const onAdd = (pokemon) => {
    const unDefinedIdx = myPokemon.indexOf(undefined); //언디파인드를 가지고있는 인덱스 중 첫번째위치
    setMyPokemon(
      myPokemon.map((item, index) => {
        return index === unDefinedIdx ? pokemon : item;
      })
    );
  };
  console.log(myPokemon);

  //포켓몬 삭제 함수
  const onRemove = (pokemon) => {
    const updatedList = myPokemon.filter(
      (item) => item !== undefined && item.id !== pokemon.id
    );
    //내가선택한포켓몬리스트들을 순회하면서 필터링
    //item !== undefined : 아이템이 언디파인드가 아닌거
    //item.id !== pokemon.id : 셀렉아이템1의 id와 내가 삭제클릭한 아이템의 id가 같지않은거
    //남겨서 새로운 리스트 출력
    setMyPokemon([
      ...updatedList, // 필터링된 리스트(언디파인드도 없는)
      ...Array(defaultLength.length - updatedList.length).fill(undefined),
    ]);
    //...updatedList : 필터링된리스트
    //defaultLength.length - updatedList.length : 기본길이에서 필터링된리스트길이를 뺀값
    //Array() : 빈배열을 만들어주는 함수
    //fill() : 배열을 채워주는 함수 (undefined로 채워줌)
  };

  return (
    <DexContainer>
      <PokemonStateContext.Provider value={myPokemon}>
        <PokemonDispatchContext.Provider
          value={{
            setMyPokemon,
            onRemove,
            onAdd,
          }}
        >
          <Dashboard />
          <PokemonList />
        </PokemonDispatchContext.Provider>
      </PokemonStateContext.Provider>
    </DexContainer>
  );
};

export default Dex;

const DexContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 1200px;
  margin: 0 auto;
`;
