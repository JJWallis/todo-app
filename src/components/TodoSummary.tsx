import React, { useContext } from 'react'
import { Context } from '../App'
import styled from 'styled-components'
import SpaceBetween from './SpaceBetween'
import Button from './Button'

const ItemsLeft = styled.p`
   color: ${(props) => props.theme.fcTodoFtr};
   transition: color 200ms linear;
   font-size: 0.8rem;
`

const TodoSummary: React.FC = () => {
   const context: any = useContext(Context)

   return (
      <SpaceBetween secondary>
         <ItemsLeft>{context.todos.length} items left</ItemsLeft>
         <Button summary="true">Clear Completed</Button>
      </SpaceBetween>
   )
}

export default TodoSummary
