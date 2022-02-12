import React from 'react';
import styled from 'styled-components';

const BCard = styled.div`
  width: 220px;
  height: 180px;
  background-color: white;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);

  & img {
    width: 140px;
  }
`

const BenefitsCard = ({ imageSrc }) => {
  return (
    <BCard>
      <img src={imageSrc} alt='logo'/>
    </BCard>
  );
};

export default BenefitsCard;
