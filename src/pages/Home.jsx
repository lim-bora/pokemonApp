import { useState } from 'react'
import { Route, useNavigate, BrowserRouter, Routes } from 'react-router-dom';
import styled from "styled-components";

const Home = () => {
  const navigate = useNavigate();

  return (
    <StyledHomeDiv>
        <h1>포켓몬도감</h1>
        <StyledStartBtn onClick={()=>{
          navigate('/dex')
        }}>포켓몬 도감 시작하기</StyledStartBtn>
    </StyledHomeDiv>
  )
}

export default Home;


const StyledHomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 100vh;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    gap: 40px;
`
const StyledStartBtn = styled.button`
  background-color: red;
  border-radius : 8px;
  padding : 15px 20px;
  color:#fff;
  border: 0;
  cursor: pointer;
  font-size: 18px;

  &:hover{
    background-color: #c60e0e;
  }
`