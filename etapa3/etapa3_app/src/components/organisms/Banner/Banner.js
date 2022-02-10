import React from 'react';
import { BannerContainer, BannerTitleContainer, TitleP, BannerSubTitleContainer, BannerButtonContainer, BannerButton } from './Banner.styles';

const Banner = () => {
  return (
    <BannerContainer>
      <BannerTitleContainer>
        <TitleP fontWeight="300">CONHEÇA AGORA MESMO</TitleP>
        <TitleP fontWeight="700">OS BENEFÍCIOS DA ANC</TitleP>
      </BannerTitleContainer>
      <BannerSubTitleContainer>
        <p>Saiba com detalhes o nosso papel no <span>desenvolvimeto das atividades comerciais na cidade</span>. Clique abaixo para conhecer<span> alguns de nossos parceiros</span>.</p>
      </BannerSubTitleContainer>
      <BannerButtonContainer>
        <BannerButton>VEJA NOSSOS PARCEIROS</BannerButton>
      </BannerButtonContainer>
    </BannerContainer>
  )
}

export default Banner
