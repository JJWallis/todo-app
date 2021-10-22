import React, { useContext } from 'react'
import { Context } from '../App'
import Todo from './Todo'
import List from './List'
import TodoSummary from './TodoSummary'

const TodoList: React.FC = () => {
   const context = useContext<any>(Context)
   let drag: {} | undefined
   // store in state instead? - causes app to re-render so can never drag?

   const draggedTodo = (todo: any) => (drag = todo)

   // const determinePosition = (ref: {}) => console.log(ref)

   return (
      <List onDragOver={() => console.log(drag)}>
         {context.todos.map((todo: any) => (
            <Todo key={todo.key} todo={todo} draggedTodo={draggedTodo} />
         ))}
         <TodoSummary />
      </List>
   )
}

export default TodoList
