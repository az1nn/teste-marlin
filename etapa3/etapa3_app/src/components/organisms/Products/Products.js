import React from 'react';
import H1Title from '../../atoms/H1Title';
import TitleBottomLine from '../../atoms/TitleBottomLine';
import ProductsCardContainer from '../../molecules/ProductsCardContainer';
import { FullWidthContainer } from '../AboutUs/AboutUs.styles';
import { ProductsContainer } from './Products.styles';

const Products = () => {
  return (
    <ProductsContainer>
      <FullWidthContainer>
        <H1Title fontColor="#1BB8E9" title="PRODUTOS DISPONÍVEIS"/>
        <TitleBottomLine BgColor="#FFC900"/>
      </FullWidthContainer>
      <FullWidthContainer>
        <ProductsCardContainer />
      </FullWidthContainer>
    </ProductsContainer>
  );
};

export default Products;
