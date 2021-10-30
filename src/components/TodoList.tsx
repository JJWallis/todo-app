import React, { useContext } from 'react'
import { Context } from '../App'
import Todo from './Todo'
import List from './List'
import TodoSummary from './TodoSummary'

const TodoList: React.FC = () => {
   const context = useContext<any>(Context)

   return (
      // onDragOver={}
      <List>
         {context.todos.map((todo: any) => (
            <Todo key={todo.key} todo={todo} />
         ))}
         <TodoSummary />
      </List>
   )
}

export default TodoList
