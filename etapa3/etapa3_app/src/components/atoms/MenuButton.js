import React from 'react'
import styled from 'styled-components'

const MenuBtn = styled.button`
  border: none;
  color: #6F6F7D;
  font-size: 16px;
  font-weight: 700;
  background-color: transparent;
  padding: 0px 20px;
  cursor: pointer;

  &:hover {
    color: #009BC7;
  }
`

const MenuButton = (props) => {
  return (
    <MenuBtn>
      {props.children}
    </MenuBtn>
  )
}

export default MenuButton;
