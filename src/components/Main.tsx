import React, { ReactElement, ReactNode } from 'react'
import { HandleThemeChange } from './styled/Theme'
import StyledMain from './styled/StyledMain'
import Wrapper from './styled/Wrapper'
import TodoHeader from './TodoHeader'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import TodoFooter from './TodoFooter'

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
