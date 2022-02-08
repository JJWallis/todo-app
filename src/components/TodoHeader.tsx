import React from 'react'
import { Title } from './styled/Title'
import SpaceBetween from './styled/SpaceBetween'

const TodoHeader: React.FC = ({ children }) => {
   return (
      <SpaceBetween>
         <Title>TODO</Title>
         {children}
      </SpaceBetween>
   )
}

export default TodoHeader
