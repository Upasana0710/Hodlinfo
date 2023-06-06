import React,{useState} from 'react';
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from './utils/Themes.js'
import styled from 'styled-components';
import Home from './pages/Home'
import './App.css'

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
      <Hodlinfo>
        <Home darkMode={darkMode} setDarkMode={setDarkMode}/>
      </Hodlinfo>
    </ThemeProvider>
  );
}

export default App;
