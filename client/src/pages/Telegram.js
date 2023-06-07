import React from 'react'
import styled from 'styled-components';
import TelegramIcon from '@mui/icons-material/Telegram';

const Name = styled.div`
color: ${({ theme }) => theme.primary};
font-size: 50px;
font-weight: 600;
`;
const Container= styled.div`
display: flex;
flex-direction: column;
width: 100%;
padding: 30px 20px;;
`;
const TelegramContainer = styled.div`
display: flex;
justify-content: center;
width: 100%;
padding: 20px;
`;
const Topbar = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: 40px;
`;
const Content= styled.p`
color: ${({ theme }) => theme.text_primary};
text-align: center;
`;
const ThemeContainer = styled.div`
padding: 12px;
color: ${({ theme }) => theme.primary};
background-color: ${({ theme }) => theme.bg};
border-radius: 20px;
border: 1px solid ${({ theme }) => theme.primary};
cursor: pointer;
display: flex;
align-items: center;
@media (max-width: 1100px) {
    padding: 8px;
    font-size: 12px;
  }
`;
const Telegram = ({darkMode, setDarkMode}) => {
  return (
    <Container>
        <Topbar>
         <Name>HODLINFO</Name>
         {darkMode ?
                <ThemeContainer onClick={()=>setDarkMode(false)}>Light Mode</ThemeContainer>
                :
                <ThemeContainer onClick={()=>setDarkMode(true)}>Dark Mode</ThemeContainer>
            }
        </Topbar>
        <TelegramContainer>
            <Content>
            <b>Connect <TelegramIcon/> Telegram</b><br/>
            <b>Add bot to your group</b><br/>
            <b>Manual :</b><br/>
            1. Open the telegram app.<br/>
            2. Open the group you want to add the bot to.<br/>
            3. Click on add members in group settings.<br/>
            4. Search @HodlInfoBot and click it.<br/>

            <b>Automatic :</b><br/>
            Go to : https://t.me/HodlInfoBot?startgroup=true<br/>

            <b>Chat with the bot</b><br/>
            <b>Manual :</b><br/>
            1. Open the telegram app.<br/>
            2. Click on new message button.<br/>
            3. In search bar type HodlInfoBot.<br/>
            4. Click on @HodlInfoBot.<br/>

            <b>Automatic :</b><br/>
            Go to : https://t.me/HodlInfoBot<br/>
            </Content>
        </TelegramContainer>
    </Container>
  )
}

export default Telegram