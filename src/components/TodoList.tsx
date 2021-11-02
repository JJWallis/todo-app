import React, { useContext } from 'react'
import { Context } from '../App'
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
      if (afterElement === null) {
         todo && parent.append(todo) // last child fallback
      } else {
         todo && parent.insertBefore(todo, afterElement)
      }
   }

   const getDragAfterElement = (container: any, y: any) => {
      const draggableElements = [...container.querySelectorAll('.draggable')]
      return draggableElements.reduce(
         (closest, child) => {
            const box = child.getBoundingClientRect()
            const offset = y - box.top - box.height / 2
            if (offset < 0 && offset > closest.offset) {
               return { offset: offset, element: child }
            } else {
               return closest
            }
         },
         {
            offset: Number.NEGATIVE_INFINITY,
         }
      ).element
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
