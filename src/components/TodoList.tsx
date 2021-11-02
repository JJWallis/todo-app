import React, { useContext } from 'react'
import { Context } from '../App'
import { v4 as uuid } from 'uuid'
import Todo from './Todo'
import List from './List'
import TodoSummary from './TodoSummary'

interface DnD {
   dragOver: React.DragEventHandler<HTMLUListElement> | undefined
}

const TodoList: React.FC = () => {
   const context = useContext<any>(Context)

   const dragOver: DnD['dragOver'] = (e) => {
      e.preventDefault()
      const parent = e.currentTarget
      const afterElement = getDragAfterElement(parent, e.clientY)
      const id = e.dataTransfer.getData('todo-id')
      const todo = document.getElementById(id)
      todo && parent.append(todo)
   }

   const getDragAfterElement = (container: any, y: any) => {
      const draggableElements = [...container.querySelectorAll('.draggable')]
      draggableElements.reduce((closest, child) => {}, 0)
   }

   return (
      <React.Fragment>
         <List onDragOver={dragOver} className="container">
            {context.todos.map((todo: any) => (
               <Todo key={todo.key} todo={todo} />
            ))}
         </List>
         <TodoSummary />
      </React.Fragment>
   )
}

export default TodoList
