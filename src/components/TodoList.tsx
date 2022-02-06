import React, { useContext } from 'react'
import { Context } from '../App'
import { Todo as todo } from '../types/App.interface'
import { v4 as uuidv4 } from 'uuid'
import Todo from './Todo'
import List from './styled/List'
import TodoSummary from './TodoSummary'

const TodoList: React.FC = () => {
   const context = useContext<any>(Context)
   return (
      <>
         <List>
            {context.todos.map((todo: todo) => (
               <Todo key={uuidv4()} todo={todo} />
            ))}
         </List>
         <TodoSummary />
      </>
   )
}

export default TodoList
