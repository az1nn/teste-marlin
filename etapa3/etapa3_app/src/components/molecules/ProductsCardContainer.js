import React from 'react';
import styled from 'styled-components';

import Logo1 from "../../assets/images/logo-unimed.png"
import Logo2 from "../../assets/images/logo-amil.png"
import Logo3 from "../../assets/images/logo-sulamerica.png"
import Logo4 from "../../assets/images/logo-assim.png"
import Logo5 from "../../assets/images/logo-notredame.png"
import ProductsCard from '../atoms/ProductsCard';

const PCContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: 50px 0px;
`

const ProductsCardContainer = () => {
  return (
    <PCContainer>
      <ProductsCard imageSrc={Logo1}/>
      <ProductsCard imageSrc={Logo2}/>
      <ProductsCard imageSrc={Logo3}/>
      <ProductsCard imageSrc={Logo4}/>
      <ProductsCard imageSrc={Logo5}/>
    </PCContainer>
  );
};

export default ProductsCardContainer;
