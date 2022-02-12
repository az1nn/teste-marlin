import React from 'react';
import H1Title from '../../atoms/H1Title';
import TitleBottomLine from '../../atoms/TitleBottomLine';
import BenefitsCardContainer from '../../molecules/BenefitsCardContainer';
import { FullWidthContainer } from '../AboutUs/AboutUs.styles';
import { BenefitsTitle, BenefitsContainer } from './Benefits.styles';

const Benefits = () => {
  return (
    <BenefitsContainer>
      <FullWidthContainer>
        <BenefitsTitle>
          <H1Title fontColor="#1BB8E9" title="BENEFÍCIOS EM SAÚDE"/>
          <TitleBottomLine BgColor="#FFC900"/>
        </BenefitsTitle>
      </FullWidthContainer>
      <FullWidthContainer>
        <BenefitsCardContainer />
      </FullWidthContainer>
    </BenefitsContainer>
  );
};

export default Benefits;
