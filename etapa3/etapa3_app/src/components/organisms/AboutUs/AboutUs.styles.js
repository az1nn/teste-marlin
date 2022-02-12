import styled from "styled-components";

export const AboutUsContainer = styled.div`
  background-color: #1BB8E9;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 40px 0px;
`
export const FullWidthContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
export const TitleContainer = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
export const AboutInfoText = styled.p`
  margin-top: 30px;
  width: 60%;
  font-size: 16px;
  color: white;

  & span {
    font-weight: 700;
  }
`
export const LinkText = styled.p`
  color: white;
  font-size: 12px;
  font-weight: 600;
  margin-top: 30px;

  & a {
    color: #FFC900;
    text-decoration: underline;
    cursor: pointer;
  }
`