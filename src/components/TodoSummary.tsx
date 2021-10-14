import React, { useContext } from 'react'
import { AppState, Context } from '../App'
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
   const todos: AppState['todos'] = context.todos
   const handleClearCompleted: AppState['handleClearCompleted'] =
      context.handleClearCompleted

   return (
      <SpaceBetween secondary>
         <ItemsLeft>
            {todos.length}
            {todos.length === 1 ? ' item' : ' items'} left
         </ItemsLeft>
         <Button summary="true" onClick={handleClearCompleted}>
            Clear Completed
         </Button>
      </SpaceBetween>
   )
}

export default TodoSummary
