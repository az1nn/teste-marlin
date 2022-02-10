import React from 'react';
import styled from 'styled-components';

import AboutUsCard from '../atoms/AboutUsCard';

import CardImg1 from "../../assets/images/award-solid.png"
import CardImg2 from "../../assets/images/user-clock-solid.png"
import CardImg3 from "../../assets/images/money-bill-wave-solid.png"
import CardImg4 from "../../assets/images/calendar-alt-solid.png"

const AUCContainer = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`

const AboutUsCardContainer = () => {
  return (
    <AUCContainer>
      <AboutUsCard imageSrc={CardImg1} cardTextValue="Garantir que a atividade exercida seja a mesma função na carteira de trabalho."/>
      <AboutUsCard imageSrc={CardImg2} cardTextValue="Jornada de trabalho de 8 horas diárias e 44 horas semanais."/>
      <AboutUsCard imageSrc={CardImg3} cardTextValue="Piso salarial fixado em convenção ou acordo coletivo de trabalho."/>
      <AboutUsCard imageSrc={CardImg4} cardTextValue="Definido o 'Dia do Comerciário', comemorado no dia 30 de outubro."/>
    </AUCContainer>
  );
};

export default AboutUsCardContainer;
