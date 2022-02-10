import React from 'react'

import MenuButton from '../../atoms/MenuButton'

import { LogoContainer, HeaderDiv, MenuItemsContainer } from './Header.styles'

import Logo from '../../../assets/images/logo-anc-hd.png'

const Header = () => {
  return (
    <HeaderDiv>
      <LogoContainer>
        <img src={Logo} alt='logo' style={{width: "80%"}}/>
      </LogoContainer>
      <MenuItemsContainer>
        <MenuButton>Home</MenuButton>
        <MenuButton>Sobre Nós</MenuButton>
        <MenuButton>Parceiros</MenuButton>
        <MenuButton>Operadoras</MenuButton>
        <MenuButton>Contato</MenuButton>
      </MenuItemsContainer>
    </HeaderDiv>
  )
}

export default Header
