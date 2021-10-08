import React from 'react'
import styled from 'styled-components'
import Wrapper from './Wrapper'
import TodoHeader from './TodoHeader'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

type MainProps = {
   darkMode?: boolean
}

const StyledMain = styled.main<MainProps>`
   flex-grow: 1;
   background-color: lightgrey;
`

const Main: React.FC = () => (
   <StyledMain>
      <Wrapper todos>
         <TodoHeader />
         <TodoInput />
         <TodoList />
         <TodoFooter />
      </Wrapper>
   </StyledMain>
)

export default Main
