import React from 'react';
import styled from 'styled-components';

export const H1Line = styled.span`
  content: "";
  display: block;
  width: 120px;
  height: 6px;
  border-radius: 20px;
  background-color: ${props => props.BgColor};
`

const TitleBottomLine = ({ BgColor }) => {
  return (
    <H1Line BgColor={BgColor}/>
  )
}

export default TitleBottomLine;
