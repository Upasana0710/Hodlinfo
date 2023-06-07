import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card';
import Heading from '../components/Heading';
import MiddleInfo from '../components/MiddleInfo';
import styled from 'styled-components';
import axios from 'axios';
import { CircularProgress } from '@mui/material';

const HomePage = styled.div`
color: ${({ theme }) => theme.bg};
display: flex;
flex-direction: column;
width: 100%;
height: 100vh;
align-items: center;
overflow-y: scroll;
padding: 0px 20px;
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
const BottomFix = styled.div`
background: ${({ theme }) => theme.bg};
display: flex;
justify-content: center;
align-items: center;
height: 60px;
width: 100%;
padding: 40px
position: fixed;
bottom: 0;
`
const Loader = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
padding: 40px;
`

const Home = ({darkMode, setDarkMode}) => {
    const [cardData, setCardData] = useState();
    const [loading, setLoading] = useState(true); 
    const [search, setSearch] = useState("BTC");

    // const getData = () => {
    //     axios.get('http://localhost:3300/check').then((res) => {
    //         setCardData(res.data);
    //         setLoading(false);
    //     }).catch((err) => console.log(err))
    // }
    
    const getByFilter=(search)=>{
        axios.get(`https://hodlinfo-backend-2tlz.onrender.com/search?q=${search}`).then((res)=>{
            setCardData(res.data);
            setLoading(false);
        }).catch((err) => console.log(err))
    }
    useEffect(() => {
        setLoading(true);
        getByFilter(search);
    }, [search])
    return (
        <HomePage>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} setSearch={setSearch} />
            <MiddleInfo />
            <Table>
                <Heading />
                {loading? 
                <Loader>
                    <CircularProgress style={{color: "#68c3c4", width: "30px", height: "30px"}}/>
                </Loader>
                :
                    <Cards>
                        {cardData?.map((card, index) => (
                            <Card key={index} card={cardData[index]} />
                        ))}
                    </Cards>
                }
            </Table>
            <BottomFix>
                <Button>Add hodlinfo to home screen</Button>
            </BottomFix>

        </HomePage>
    )
}

export default Home