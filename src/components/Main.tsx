import React from 'react'
import StyledMain from './styled/StyledMain'
import Wrapper from './styled/Wrapper'
import TodoHeader from './TodoHeader'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

const Main: React.FC = ({ children }) => {
   return (
      <StyledMain>
         <Wrapper todos>
            <TodoHeader>{children}</TodoHeader>
            <TodoInput />
            <TodoList />
            <TodoFooter />
         </Wrapper>
      </StyledMain>
   )
}

export default Main
