import React from 'react';
import styled from 'styled-components';

export const StyledH1 = styled.h1`
  color: ${props => props.fontColor};
  font-size: 40px;
  margin-bottom: 10px;
`

const H1Title = ({ title, fontColor }) => {
  return (
    <StyledH1 fontColor={fontColor}>{title}</StyledH1>
  );
};

export default H1Title;
