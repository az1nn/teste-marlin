import React from 'react';

import H1Title from '../../atoms/H1Title.js';
import TitleBottomLine from '../../atoms/TitleBottomLine.js';
import { AboutUsContainer, TitleContainer, FullWidthContainer, AboutInfoText, LinkText } from "./AboutUs.styles.js";
import AboutUsCardContainer from '../../molecules/AboutUsCardContainer.js';

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <FullWidthContainer>
        <TitleContainer>
          <H1Title title="Sobre Nós" fontColor="white"/>
          <TitleBottomLine BgColor="white"/>
        </TitleContainer>
      </FullWidthContainer>
      <FullWidthContainer>
        <AboutInfoText>A <span>ANC</span> representa os <span>profissionais comerciários</span> que atuam no mercado de trabalho, e que estão de acordo e regulamentados pela <span>Lei Federal Nº 12.790</span>, de 14 de março de 2013.</AboutInfoText>
      </FullWidthContainer>
      <FullWidthContainer>
        <AboutUsCardContainer />
      </FullWidthContainer>
      <FullWidthContainer>
        <LinkText>VOCÊ PODE LER A LEI COMPLETA <a>CLICANDO AQUI</a>.</LinkText>
      </FullWidthContainer>
    </AboutUsContainer>
  );
};

export default AboutUs;
