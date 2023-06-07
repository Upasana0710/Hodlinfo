import React from 'react'
import styled from 'styled-components';

const MainContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
margin: 20px;
@media (max-width: 1100px) {
  margin: 10px;
}
`;
const Items = styled.div`
display: flex;
flex-direction: column;
align-items: center;
@media (max-width: 1100px) {
  width: 100px;
}
`;
const Value = styled.div`
color: ${({ theme }) => theme.primary};
font-size: 30px;
@media (max-width: 1100px) {
  font-size: 10px;
}
`;
const Topic = styled.div`
color: ${({ theme }) => theme.text_secondary};
font-size: 12px;
@media (max-width: 1100px) {
  text-align: center;
  font-size: 8px;
}
`;
const BestValue = styled.div`
color: ${({ theme }) => theme.text_secondary};
font-size: 30px;
font-weight: 240;
@media (max-width: 1100px) {
  font-size: 10px;
  font-weight: 500;
  text-align: center;
}
`;
const MiddleValue = styled.div`
color: ${({ theme }) => theme.text_primary};
font-size:68px;
@media (max-width: 1100px) {
  font-size: 20px;
  text-align: center;
}
`;
const MiddleInfo = () => {
  return (
    <MainContainer>
      <Items>
        <Value>0.21%</Value>
        <Topic>5 Mins</Topic>
      </Items>
      <Items>
        <Value>0.99%</Value>
        <Topic>1 Hour</Topic>
      </Items>
      <Items style={{gap:"10px"}}>
        <BestValue>Best Price to Trade</BestValue>
        <MiddleValue>₹ 25,93,789</MiddleValue>
        <Topic>Average BTC/INR net price including commission</Topic>
      </Items>
      <Items>
        <Value>4.86%</Value>
        <Topic>1 Day</Topic>
      </Items>
      <Items>
        <Value>10.78%</Value>
        <Topic>7 Days</Topic>
      </Items>
    </MainContainer>
  )
}

export default MiddleInfo