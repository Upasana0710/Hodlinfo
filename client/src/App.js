import React,{useState} from 'react';
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from './utils/Themes.js'
import styled from 'styled-components';
import Home from './pages/Home'
import Telegram from './pages/Telegram.js';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


const Hodlinfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.bg};
  overflow-y: hidden;
  overflow-x: hidden;
`;
function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Hodlinfo>
          <Routes>
            <Route path='/' exact element={ <Home darkMode={darkMode} setDarkMode={setDarkMode}/>} />
            <Route path='/telegram' exact element={ <Telegram darkMode={darkMode} setDarkMode={setDarkMode}/>} />
          </Routes>
        </Hodlinfo>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
