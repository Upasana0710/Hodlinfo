import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card';
import Heading from '../components/Heading';
import MiddleInfo from '../components/MiddleInfo';
import styled from 'styled-components';
import axios from 'axios';

const HomePage = styled.div`
color: ${({ theme }) => theme.bg};
display: flex;
flex-direction: column;
width: 100%;
height: 100vh;
align-items: center;
overflow-y: scroll;
`;
const Cards = styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
gap: 12px;
`;
const Button = styled.div`
background-color: ${({ theme }) => theme.bg};
color: ${({ theme }) => theme.primary};
border: 1px solid ${({ theme }) => theme.primary};
padding: 12px;
margin: 20px;
@media (max-width: 1100px) {
    margin: 0px;
  }
`;
const Table = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media (max-width: 1100px) {
    overflow-x: scroll;
    width: 100%;
  }
`;

const Home = ({darkMode, setDarkMode}) => {
    const [cardData, setCardData] = useState();

    const getData = () => {
        axios.get('https://hodleinfo.onrender.com/check').then((res) => {
            setCardData(res.data);
        }).catch((err) => console.log(err))
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <HomePage>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <MiddleInfo />
            <Table>
                <Heading />
                <Cards>
                    {cardData?.map((card, index) => (
                        <Card card={cardData[index]} />
                    ))}
                </Cards>
            </Table>
            <Button>Add hodlinfo to home screen</Button>

        </HomePage>
    )
}

export default Home