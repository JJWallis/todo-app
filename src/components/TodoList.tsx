import React, { useContext } from 'react'
import { Context } from '../App'
import List from './List'
import TodoSummary from './TodoSummary'

const TodoList: React.FC = () => {
   const context = useContext<any>(Context)
   const todos = context.todos

   return (
      <List>
         {/* {...todos} */}
         <TodoSummary />
      </List>
   )
}

export default TodoList
