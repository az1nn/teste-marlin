import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import Header from './components/organisms/Header/Header';
import Banner from './components/organisms/Banner/Banner';
import AboutUs from './components/organisms/AboutUs/AboutUs';
import Benefits from './components/organisms/Benefits/Benefits';
import Products from './components/organisms/Products/Products';
import Contact from './components/organisms/Contact/Contact';
import Footer from './components/organisms/Footer/Footer';


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
      <Benefits />
      <Products />
      <Contact />
      <Footer />
    </AppContainer>
  );
}

export default App;
