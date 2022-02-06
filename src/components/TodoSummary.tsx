import React, { useContext } from 'react'
import { AppState, Context } from '../App'
import SpaceBetween from './styled/SpaceBetween'
import Button from './styled/Button'
import { Todo } from '../types/App.interface'
import { ItemsLeft } from './styled/Paragraph'

const TodoSummary: React.FC = () => {
   const context: any = useContext(Context)
   const todos: Todo[] = context.todos.filter((todo: Todo) => !todo.invisible)

   const handleClearCompleted = context.handleClearCompleted

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
