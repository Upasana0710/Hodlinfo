import React from 'react'
import styled from 'styled-components';
import TelegramIcon from '@mui/icons-material/Telegram';
import {Link} from 'react-router-dom';

const NavContainer = styled.div`
background-color: ${({ theme }) => theme.bg};
height: 60px;
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
padding: 20px 36px;
justify-content: space-between;
@media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    height: fit-content;
    gap: 12px;
  }
`;

const Name = styled.div`
color: ${({ theme }) => theme.primary};
font-size: 50px;
font-weight: 600;

`;
const Button = styled.div`
background-color: ${({ theme }) => theme.bgLight};
color: ${({ theme }) => theme.text_primary};
padding: 6px 10px;
border-radius: 8px;
cursor: pointer;
`;
const ButtonContainer = styled.div`
display: flex;
flex-direction: row;
gap: 6px;
`;
const ThemeContainer = styled.div`
padding: 12px;
color: ${({ theme }) => theme.primary};
background-color: ${({ theme }) => theme.bg};
border-radius: 20px;
border: 1px solid ${({ theme }) => theme.primary};
cursor: pointer;
@media (max-width: 1100px) {
    padding: 8px;
    font-size: 12px;
  }
`;
const TelegramButton = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 6px;
background-color: ${({ theme }) => theme.primary};
color: ${({ theme }) => theme.text_primary};
border-radius: 12px;
padding: 0px 6px;
font-size: 16px;
cursor: pointer;
`;
const Container = styled.div`
display: flex;
flex-direction: row;
gap: 18px;
`;

const Navbar = ({ darkMode, setDarkMode }) => {
    return (
        <NavContainer>
            <Name>HODLINFO</Name>
            <ButtonContainer>
                <Button>INR</Button>
                <Button>BTC</Button>
                <a href="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&utm_medium=affiliate&utm_campaign=regnow-btn" target="_blank" rel="noreferrer">
                    <Button>BUY BTC</Button>
                </a>
            </ButtonContainer>
            <Container>
            <Link to='/telegram' style={{textDecoration:"none"}}>
                <TelegramButton>
                    <TelegramIcon style={{color: "#F2F3F4"}}/>
                    Connect Telegram
                </TelegramButton>
            </Link>
            {darkMode ?
                <ThemeContainer onClick={()=>setDarkMode(false)}>Light Mode</ThemeContainer>
                :
                <ThemeContainer onClick={()=>setDarkMode(true)}>Dark Mode</ThemeContainer>
            }
            </Container>
        </NavContainer>
    )
}

export default Navbar