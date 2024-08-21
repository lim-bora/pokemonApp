import React from 'react'
import styled from 'styled-components'
import { useSearchParams, useNavigate } from 'react-router-dom'

const Detail = () => {
  const [searchParamsId, setSearchParamsId] = useSearchParams();// URL 파라미터를 가져오는 훅
  const navigate = useNavigate();
  const selectedId = searchParamsId.get('id')
  return (
    <DetailContainer>
      {selectedId}
      <div>img</div>
      <h2>이름</h2>
      <h4>타입</h4>
      <p>설명</p>
      <BackButton onClick={()=>{
        navigate('/dex')
      }}>뒤로가기</BackButton>
    </DetailContainer>
  )
}

export default Detail


const DetailContainer = styled.div`
    background-color: #f5f3ca;
    width:100%;
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap:30px;
`

const BackButton = styled.button`
  background-color:#000;
  color:#fff;
  padding: 10px 20px;
  border-radius: 8px;
  font-size:17px;
`