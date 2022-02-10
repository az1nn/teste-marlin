import styled from "styled-components";

import BannerBg from '../../../assets/images/bg-banner.png'

export const BannerContainer = styled.div`
  width: 100%;
  min-height: 400px;
  padding: 50px 0px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  background-image: url(${BannerBg});
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
`
export const BannerTitleContainer = styled.div`
  width: 100%;
  font-size: 40px;
`
export const TitleP = styled.p`
  font-weight: ${props => props.fontWeight};
`
export const BannerSubTitleContainer = styled.div`
  font-size: 24px;
  width: 70%;
  
  font-weight: 300;

  & span {
    color: #FFC900;
    font-weight: 700;
  }
`
export const BannerButtonContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
`
export const BannerButton = styled.button`
  padding: 16px;
  background-color: #FFC900;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 14px;
  font-weight: 800;
  transition: .2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.04);
    transition: .2s ease;
  }
`