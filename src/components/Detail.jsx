import React from "react";
import styled from "styled-components";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";

const Detail = () => {
  const [searchParamsId, setSearchParamsId] = useSearchParams(); // URL 파라미터를 가져오는 훅
  const navigate = useNavigate();

  const selectId = searchParamsId.get("id");
  const selectedName = searchParamsId.get("name");
  const selectDescription = searchParamsId.get("description");
  const selectImg = searchParamsId.get("img");
  const selectTypes = searchParamsId.get("types")?.split(",");

  const location = useLocation(); //현재 위치 객체
  console.log("selectedName", selectedName);
  console.log("location", location);
  console.log("searchParamsId", searchParamsId);
  console.log("selectDescription", selectDescription);
  console.log("selectImg", selectImg);
  console.log("selectTypes", selectTypes);

  return (
    <DetailContainer>
      {/* {selectId} */}
      <PokemonImg src={selectImg} alt={selectedName}></PokemonImg>
      <PokemonName>{selectedName}</PokemonName>
      <h4>타입 : {selectTypes.join(",")}</h4>
      <p>{selectDescription}</p>
      <BackButton
        onClick={() => {
          navigate("/dex");
        }}
      >
        뒤로가기
      </BackButton>
    </DetailContainer>
  );
};

export default Detail;

const DetailContainer = styled.div`
  background-color: #f5f3ca;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const BackButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 17px;
  cursor: pointer;
`;

const PokemonName = styled.h2`
  color: red;
  font-size: 24px;
  font-weight: 600;
`;

const PokemonImg = styled.img`
  width: 200px;
  height: 200px;
`;
