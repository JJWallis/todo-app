import React from 'react'
import styled from 'styled-components'
import Input from './Input'
import Icon from './Icon'
import moon from '../assets/icon-moon.svg'
// import sun from '../assets/icon-sun.svg'

const Label = styled.label`
   display: block;
   position: relative;
   cursor: pointer;
   outline: 2px solid white;
`

const ThemeToggle: React.FC = () => {
   return (
      <Label htmlFor="theme-switch" aria-label="Theme switcher toggle.">
         <Input checkbox id="theme-switch" type="checkbox" />
         <Icon src={moon} />
      </Label>
   )
}

export default ThemeToggle
