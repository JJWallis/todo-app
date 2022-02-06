import React from 'react'
import { HandleThemeChange } from './styled/Theme'
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

interface Props {
   handleThemeChange: HandleThemeChange
}

const Main: React.FC<Props> = ({ handleThemeChange }) => {
   return (
      <StyledMain>
         <Wrapper todos>
            <TodoHeader handleThemeChange={handleThemeChange} />
            <TodoInput />
            <TodoList />
            <TodoFooter />
         </Wrapper>
      </StyledMain>
   )
}

export default Main
