import React from 'react'
import styled from 'styled-components'
import SpaceBetween from './SpaceBetween'
import ThemeToggle from './ThemeToggle'

const Title = styled.h1`
   color: white;
   letter-spacing: 0.5ch;
`

const TodoHeader: React.FC = () => {
   return (
      <SpaceBetween>
         <Title>TODO</Title>
         <ThemeToggle />
      </SpaceBetween>
   )
}

export default TodoHeader
