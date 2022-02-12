import React from 'react';

import H1Title from '../../atoms/H1Title';
import TitleBottomLine from '../../atoms/TitleBottomLine';

import { ContactBannerImg, ContactContainer, ContactContent, ContactImage, FormButton, FormButtonContainer, FormContainer, FormInput, FormLabel, FormTextArea, SubtitleContact } from './Contact.styles';

import ContactBanner from "../../../assets/images/ContatosBanner.png"

const Contact = () => {
  return (
    <ContactContainer>
      <ContactContent>
        <H1Title title="FALE CONOSCO" fontColor="white"/>
        <TitleBottomLine BgColor="#FFC900"/>
        <SubtitleContact>Envie-nos uma mensagem agora mesmo!</SubtitleContact>
        <FormContainer>
          <FormLabel>Nome completo:</FormLabel>
          <FormInput placeholder='Digite seu nome' height="40px"/>
          <FormLabel>Email de contato:</FormLabel>
          <FormInput placeholder='seu@email.com.br' height="40px"/>
          <FormLabel>Escreva aqui a sua mensagem</FormLabel>
          <FormTextArea height="140px"/>
          <FormButtonContainer>
            <FormButton>ENVIAR</FormButton>
          </FormButtonContainer>
        </FormContainer>
        <div>
          <ContactBannerImg src={ContactBanner} alt='banner'/>
        </div>
      </ContactContent>
      <ContactImage>

      </ContactImage>
    </ContactContainer>
  );
};

export default Contact;
