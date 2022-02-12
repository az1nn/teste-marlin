import React from 'react';
import styled from 'styled-components';
import BenefitsCard from '../atoms/BenefitsCard';

import Logo1 from "../../assets/images/beneficios1.png"
import Logo2 from "../../assets/images/beneficios2.png"
import Logo3 from "../../assets/images/beneficios3.png"
import Logo4 from "../../assets/images/beneficios4.png"
import Logo5 from "../../assets/images/beneficios5.png"

const BCContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 30px 0px;
`

const BenefitsCardContainer = () => {
  return (
    <BCContainer>
      <BenefitsCard imageSrc={Logo1}/>
      <BenefitsCard imageSrc={Logo2}/>
      <BenefitsCard imageSrc={Logo3}/>
      <BenefitsCard imageSrc={Logo4}/>
      <BenefitsCard imageSrc={Logo5}/>
    </BCContainer>
  );
};

export default BenefitsCardContainer;
