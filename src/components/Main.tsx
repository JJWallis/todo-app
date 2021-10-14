import React from 'react'
import styled from 'styled-components'
import Wrapper from './Wrapper'
import TodoHeader from './TodoHeader'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

const StyledMain = styled.main`
   flex-grow: 1;
   background-color: ${(props) => props.theme.colorBg};
   transition: background-color 200ms linear;
`

const Main: React.FC = () => (
   <StyledMain>
      <Wrapper todos>
         <TodoHeader />
         <TodoInput />
         <TodoList />
         {/* nested TodoList with returned list within or via children prop */}
         <TodoFooter />
      </Wrapper>
   </StyledMain>
)

export default Main
