import React from 'react'
import { HandleThemeChange } from './styled/Theme'
import { Title } from './styled/Title'
import SpaceBetween from './styled/SpaceBetween'
import ThemeToggle from './ThemeToggle'

interface Props {
   handleThemeChange: HandleThemeChange
}

const TodoHeader: React.FC<Props> = ({ handleThemeChange }) => {
   return (
      <SpaceBetween>
         <Title>TODO</Title>
         <ThemeToggle handleThemeChange={handleThemeChange} />
      </SpaceBetween>
   )
}

export default TodoHeader
