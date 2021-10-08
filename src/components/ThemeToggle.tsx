import React from 'react'
import styled from 'styled-components'
import Input from './Input'
import moon from '../assets/icon-moon.svg'
// import sun from '../assets/icon-sun.svg'

const Label = styled.label`
   display: block;
   outline: 1px solid pink;
`

const Icon = styled.img`
   display: block;
   max-width: 100%;
`

const ThemeToggle: React.FC = () => {
   return (
      <Label>
         <Input type="checkbox" />
         <Icon src={moon} />
      </Label>
   )
}

export default ThemeToggle
