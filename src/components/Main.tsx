import React from 'react'
import styled from 'styled-components'
import TodoHeader from './TodoHeader'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

const StyledMain = styled.main`
   flex-grow: 1;
   background: lightgrey;
`

const StyledTodoWrapper = styled.div`
   width: 90%;
   max-width: 600px;
   position: absolute;
   top: 5%;
   left: 50%;
   transform: translateX(-50%);
`

const Main: React.FC = () => (
   <StyledMain>
      <StyledTodoWrapper>
         <TodoHeader />
         <TodoInput />
         <TodoList />
         <TodoFooter />
      </StyledTodoWrapper>
   </StyledMain>
)

export default Main
