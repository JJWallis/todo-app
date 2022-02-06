import React from 'react'
import { HandleThemeChange } from './styled/Theme'
import SpaceBetween from './styled/SpaceBetween'
import ThemeToggle from './ThemeToggle'
import { Title } from './styled/Title'

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
