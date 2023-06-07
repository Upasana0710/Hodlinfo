import React from 'react'
import styled from 'styled-components';


const CardContainer = styled.div`
background-color: ${({ theme }) => theme.bgLight};
font-size: 28px;
font-weight: 600;
height: 60px;
border-radius: 12px;
display: flex;
flex: wrap;
flex-direction: row;
align-items: center;
padding: 0px 20px;
justify-content: space-evenly;
width: 90%;
`;
const Data = styled.div`
color: ${({ theme }) => theme.text_primary};
font-size: 20px;
font-weight: 500;
width: 200px;
white-space: nowrap;
@media (max-width: 1100px) {
    font-size: 14px;
    width: 150px;
  }
`;
const ColorToggle = styled.div`
font-size: 20px;
font-weight: 500;
@media (max-width: 1100px) {
    font-size: 14px;
  }
`;
const Card = ({ card }) => {
    const style = {
        // Adding media query..
        '@media (max-width: 1100px)': {
          width: '100px'
        },
    }
    let savings = parseFloat(card.sell - card.buy).toFixed(2);
    let diff = parseFloat(((card.sell - card.buy) / card.last) * 100).toFixed(2);
    return (
        <CardContainer>
            <Data style={{width:"100px"}}>
                {card.id}
            </Data>
            <Data>
                {card.name}
            </Data>
            <Data>
                ₹ {card.last}
            </Data>
            <Data style={{width:"360px"}}>
                ₹ {card.buy}/ ₹ {card.sell}
            </Data>
            <Data style={{ color: "#4d9fa0" }}>
                {diff > 0 ?
                    <ColorToggle style={{ color: "#4d9fa0" }}>{diff} %</ColorToggle>
                    :
                    <ColorToggle style={{ color: "#d15455" }}>{diff} %</ColorToggle>}
            </Data>
            <Data>
                {savings > 0 ?
                    <ColorToggle style={{ color: "#4d9fa0" }}>▲ ₹ {savings}</ColorToggle>
                    :
                    <ColorToggle style={{ color: "#d15455" }}>▼ ₹ {savings}</ColorToggle>}
            </Data>
        </CardContainer>
    )
}

export default Card