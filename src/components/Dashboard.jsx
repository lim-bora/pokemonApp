import { useState, useEffect } from "react";
import styled from "styled-components";
import "../App.css";

const Dashboard = ({ myPokemon, onRemove, setMyPokemon }) => {
  //선택안됬을때 디폴트 이미지
  const notSelectedImg =
    "https://react-6-pokemon.vercel.app/assets/pokeball-13iwdk7Y.png";

  //선택한 포켓몬을 삭제하는 함수
  const pokemonRemove = (removePokemon) => {
    // removePokemon : 내가 삭제를 클릭한 포켓몬
    onRemove(removePokemon);
  };

  return (
    <DashboardContainer>
      <DashBoardTitle>나만의 포켓몬</DashBoardTitle>
      <ul className="dashBoard-Box">
        {myPokemon.map((item, index) => {
          if (item === undefined) {
            //기본일때
            return (
              <SelectedCard key={`not-selected-${index}`}>
                <img src={notSelectedImg} className="notSelectedImg" />
              </SelectedCard>
            );
          } else {
            //카드들어왔을때
            return (
              <SelectedCard key={item.id}>
                <img src={item.img_url} />
                <div>{item.korean_name}</div>
                <div>No. {item.id}</div>
                <button
                  onClick={() => {
                    pokemonRemove(item); //인자로 내가 선택한 포켓몬객체를 넘겨줘
                  }}
                >
                  삭제
                </button>
              </SelectedCard>
            );
          }
        })}
      </ul>
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  width: 90%;
  background-color: #f4f4f4;
  height: 300px;
  margin: 0 auto;
  border-radius: 8px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const DashBoardTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

const SelectedCard = styled.li`
  border: 2px dotted #878787;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
`;
