import React, { useContext } from 'react'
import { Context } from '../App'
import Todo from './Todo'
import List from './List'
import TodoSummary from './TodoSummary'

const TodoList: React.FC = () => {
   const context = useContext<any>(Context)

   return (
      <List>
         {context.todos.map((todo: any) => (
            <Todo key={todo.key} todo={todo} />
         ))}
         {/* sep component - fragment wrapper + Todo map() above + props.children */}
         {/* this componet controls content passed to it  */}
         {/* or - App func which returns corresponding version of list usr desires */}
         {/* dynamically render above */}
         <TodoSummary />
      </List>
   )
}

export default TodoList
