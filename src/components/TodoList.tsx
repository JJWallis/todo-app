import React from 'react'
import { useTodosContext } from '../hooks/useTodosContext'
import Todo from './Todo'
import List from './styled/List'
import TodoSummary from './TodoSummary'

const TodoList: React.FC = () => {
   const todos = useTodosContext()

   return (
      <>
         <List>
            {todos.map((todo, idx) => (
               <Todo key={idx} todo={todo} idx={idx} />
            ))}
         </List>
         <TodoSummary />
      </>
   )
}

export default TodoList
