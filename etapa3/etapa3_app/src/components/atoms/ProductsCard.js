import React from 'react';
import styled from 'styled-components';
import { FullWidthContainer } from '../organisms/AboutUs/AboutUs.styles';

const PCard = styled.div`
  width: 220px;
  height: 180px;
  background-color: white;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  & img {
    display: block;
  }
`
const AnsCard = styled.p`
  padding: 5px;
  background-color: black;
  color: white;
  font-size: 12px;
  font-weight: 700;
`

const ProductsCard = ({ imageSrc }) => {
  return (
    <PCard>
      <img src={imageSrc} alt='logo' />
      <FullWidthContainer>
        <AnsCard>ANS Nº39.322-1</AnsCard>
      </FullWidthContainer>
    </PCard>
  );
};

export default ProductsCard;
