import React from 'react'
import styled from 'styled-components';

const HeadingContainer = styled.div`
display: flex;
flex-direction: row;
flex: wrap;
width: 90%;
padding: 0px 20px;
justify-content: space-evenly;
margin: 12px 0px 6px 0px;
`;
const Topic = styled.div`
color: ${({ theme }) => theme.text_secondary};
font-size: 20px;
font-weight: 540;
width: 200px;
`;
const Heading = () => {
    return (
        <HeadingContainer>
            <Topic style={{width: "50px"}}>#</Topic>
            <Topic style={{width: "150px"}}>Platform</Topic>
            <Topic >Last Traded Price</Topic>
            <Topic style={{width: "200px"}}>Buy / Sell Price</Topic>
            <Topic>Difference</Topic>
            <Topic>Savings</Topic>
        </HeadingContainer>
    )
}

export default Heading