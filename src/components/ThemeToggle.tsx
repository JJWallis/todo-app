import React from 'react'
import styled from 'styled-components'
import Input from './Input'
import Icon from './Icon'
import moon from '../assets/icon-moon.svg'
// import sun from '../assets/icon-sun.svg'

const Label = styled.label`
   display: block;
   outline: 2px solid white;
`

const ThemeToggle: React.FC = () => {
   return (
      <Label aria-label="Theme switcher toggle.">
         <Input type="checkbox" />
         <Icon src={moon} />
      </Label>
   )
}

export default ThemeToggle
