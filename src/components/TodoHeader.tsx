import React from 'react'
import styled from 'styled-components'
import SpaceBetween from './styled/SpaceBetween'
import ThemeToggle from './ThemeToggle'
import Arrow from '../assets/icon-arrow.svg'
import { HandleThemeChange } from './styled/Theme'

const Title = styled.h1`
   color: white;
   letter-spacing: 0.5ch;
   &::before {
      content: '';
      position: absolute;
      z-index: 3;
      top: 79px;
      left: 15px;
      display: block;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: transparent;
      border: 0.1px solid ${(props) => props.theme.fcTodo};
      padding: 1rem;
   }
   &::after {
      content: url(${Arrow});
      position: absolute;
      z-index: 3;
      cursor: pointer;
      top: 75px;
      left: 21.5px;
      width: 20px;
      height: 20px;
   }
`

interface Props {
   handleThemeChange: HandleThemeChange
}

const TodoHeader: React.FC<Props> = ({ handleThemeChange }) => {
   return (
      <SpaceBetween>
         <Title>TODO</Title>
         <ThemeToggle handleThemeChange={handleThemeChange} />
      </SpaceBetween>
   )
}

export default TodoHeader
