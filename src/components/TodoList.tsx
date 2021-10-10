import React, { useContext } from 'react'
import { Context } from '../App'
import List from './List'
import TodoSummary from './TodoSummary'

const TodoList: React.FC = () => {
   const context = useContext<any>(Context)

   return (
      <List>
         {context.todos}
         <TodoSummary />
      </List>
   )
}

export default TodoList
