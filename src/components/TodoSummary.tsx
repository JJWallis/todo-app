import React from 'react'
import { useTodosContext } from '../hooks/useTodosContext'
import { useTodosDispatch } from '../hooks/useTodosDispatch'
import { ItemsLeft } from './styled/Paragraph'
import SpaceBetween from './styled/SpaceBetween'
import Button from './styled/Button'

const TodoSummary: React.FC = () => {
   const todos = useTodosContext()
   const dispatch = useTodosDispatch()
   const visibleTodos = todos.filter((todo) => !todo.invisible)

   return (
      <SpaceBetween secondary>
         <ItemsLeft>
            {visibleTodos.length}
            {visibleTodos.length === 1 ? ' item' : ' items'} left
         </ItemsLeft>
         <Button
            summary="true"
            onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}
         >
            Clear Completed
         </Button>
      </SpaceBetween>
   )
}

export default TodoSummary
