import React from 'react'
import styled from 'styled-components';

const NavContainer = styled.div`
background-color: ${({ theme }) => theme.bg};
height: 60px;
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
padding: 20px 36px;
justify-content: space-evenly;
@media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    height: fit-content;
    gap: 12px;
  }
`;

const Name = styled.div`
color: ${({ theme }) => theme.primary};
font-size: 28px;
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

const Navbar = ({ darkMode, setDarkMode }) => {
    return (
        <NavContainer>
            <Name>HODLINFO</Name>
            <ButtonContainer>
                <Button>INR</Button>
                <Button>BTC</Button>
                <Button>BUY BTC</Button>
            </ButtonContainer>
            {darkMode ?
                <ThemeContainer onClick={()=>setDarkMode(false)}>Light Mode</ThemeContainer>
                :
                <ThemeContainer onClick={()=>setDarkMode(true)}>Dark Mode</ThemeContainer>
            }
        </NavContainer>
    )
}

export default Navbar