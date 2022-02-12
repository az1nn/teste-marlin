import styled from "styled-components";
import Bg from "../../../assets/images/Contact-Bg.png"

export const ContactContainer = styled.div`
  width: 100%;
  height: 1350px;
  background-image: url(${Bg});
  background-size: cover;
`
export const ContactContent = styled.div`
  width: 60%;
  background-color: transparent;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 100px 0px;
`
export const ContactImage = styled.div`
  width: 40%;
  background-color: transparent;
`
export const SubtitleContact = styled.p`
  display: block;
  width: 100%;
  color: white;
  margin-top: 30px;
`
export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  width: 50%;
  margin: 50px 0px;
`
export const FormLabel = styled.p`
  color: white;
  font-size: 14px;
  margin-bottom: 10px;
`
export const FormInput = styled.input`
  width: 100%;
  height: ${props => props.height};
  border: none;
  border-radius: 8px;
  outline: none;
  padding-left: 20px;
  margin-bottom: 30px;
  box-sizing: border-box;
`
export const FormTextArea = styled.textarea`
  width: 100%;
  height: ${props => props.height};
  border: none;
  border-radius: 8px;
  outline: none;
  padding-left: 20px;
  margin-bottom: 30px;
  box-sizing: border-box;
`
export const FormButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: right;
`
export const FormButton = styled.button`
  color: white;
  font-weight: 800;
  font-size: 16px;
  background-color: #00D058;
  border: none;
  padding: 15px 50px;
  border-radius: 8px;
  cursor: pointer;
  transition: .2s ease-in-out;

  &:hover {
    padding: 20px 55px;
    transition: .2s ease-in-out;
  }

  &:active {
    transform: scale(0.95);
  }
`
export const ContactBannerImg = styled.img`
  width: 80%;
  margin-top: 30px;
`