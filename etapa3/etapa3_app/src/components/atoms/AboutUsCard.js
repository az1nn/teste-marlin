import React from 'react';
import styled from 'styled-components';

const AUCard = styled.div`
  width: 220px;
  height: 220px;
  background-color: white;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
`
const CardImg = styled.img`
  margin-top: 10px;
  margin-bottom: 20px;
  height: 35%;
`

const CardText = styled.p`
  font-size: 14px;
  font-weight: 600;
  text-align: left;
  color: #6F6F7D;
  margin-left: 10px;
`

const AboutUsCard = ({ imageSrc, cardTextValue }) => {
  return (
    <AUCard>
      <CardImg src={imageSrc} alt='card-icon'/>
      <CardText>{cardTextValue}</CardText>
    </AUCard>
  );
};

export default AboutUsCard;
