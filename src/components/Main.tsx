import React from 'react'
import styled from 'styled-components'
import Wrapper from './styled/Wrapper'
import TodoHeader from './TodoHeader'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

const StyledMain = styled.main`
   flex-grow: 1;
   background-color: ${(props) => props.theme.colorBg};
   transition: background-color 200ms linear;
`

const Main: React.FC = () => {
   return (
      <StyledMain>
         <Wrapper todos>
            <TodoHeader />
            <TodoInput />
            <TodoList />
            <TodoFooter />
         </Wrapper>
      </StyledMain>
   )
}

export default Main
