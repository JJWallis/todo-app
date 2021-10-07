import React from 'react'
import styled from 'styled-components'
import ThemeToggle from './ThemeToggle'

const StyledTodoHeader = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
`

const Title = styled.h1`
   color: white;
   letter-spacing: 0.5ch;
`

const TodoHeader: React.FC = () => {
   return (
      <StyledTodoHeader>
         <Title>TODO</Title>
         <ThemeToggle />
      </StyledTodoHeader>
   )
}

export default TodoHeader
