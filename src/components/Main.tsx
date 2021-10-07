import React from 'react'
import styled from 'styled-components'
import TodoHeader from './TodoHeader'

const StyledMain = styled.main`
   flex-grow: 1;
`

const StyledTodoWrapper = styled.div`
   width: 90%;
   max-width: 600px;
   outline: 2px solid black;
   position: absolute;
   top: 10%;
   left: 50%;
   transform: translateX(-50%);
`

const Main: React.FC = () => (
   <StyledMain>
      <StyledTodoWrapper>
         <TodoHeader />
      </StyledTodoWrapper>
   </StyledMain>
)

export default Main
