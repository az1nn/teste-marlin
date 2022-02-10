import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import Header from './components/organisms/Header/Header';
import Banner from './components/organisms/Banner/Banner';
import AboutUs from './components/organisms/AboutUs/AboutUs';


const GlobalStyle = createGlobalStyle`
    * {
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap');
      margin: 0;
      padding: 0;
      font-family: 'Open Sans', sans-serif;
    }
  `
const AppContainer = styled.div`
  text-align: center;
`

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <Banner />
      <AboutUs />
    </AppContainer>
  );
}

export default App;
