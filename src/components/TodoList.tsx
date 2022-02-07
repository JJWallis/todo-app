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
               <Todo key={idx} idx={idx} {...todo} />
            ))}
         </List>
         <TodoSummary />
      </>
   )
}

export default TodoList
