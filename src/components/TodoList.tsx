import React from 'react'
import { useTodosContext } from '../hooks/useTodosContext'
import { v4 as uuidv4 } from 'uuid'
import Todo from './Todo'
import List from './styled/List'
import TodoSummary from './TodoSummary'

const TodoList: React.FC = () => {
   const todos = useTodosContext()
   return (
      <>
         <List>
            {todos.map((todo) => (
               <Todo key={uuidv4()} todo={todo} />
            ))}
         </List>
         <TodoSummary />
      </>
   )
}

export default TodoList
