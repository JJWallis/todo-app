import React, { useContext } from 'react'
import { Context } from '../App'
import Todo from './Todo'
import List from './List'
import TodoSummary from './TodoSummary'

interface DND {
   drop: React.DragEventHandler<HTMLUListElement> | undefined
   dragOver: React.DragEventHandler<HTMLUListElement> | undefined
}

const TodoList: React.FC = () => {
   const context = useContext<any>(Context)

   // id var - id of todo to move
   // getData() str arg - your own key (whatever you like - similar to local storage)
   // display block to hide todo when picked up (so only 1 version on screen vs 2)
   // appends todo to parent (e.target)

   const drop: DND['drop'] = (e) => {
      e.preventDefault()
      const id = e.dataTransfer.getData('todo_id')
      const todo = document.getElementById(id)
      if (todo) {
         todo.style.display = 'block'
         e.currentTarget.appendChild(todo)
      }
   }

   // prevents dragging component from reverting back when release mouse
   //

   const dragOver: DND['dragOver'] = (e) => {
      e.preventDefault()
   }

   return (
      <List id={} onDrop={drop} onDragOver={dragOver}>
         {context.todos.map((todo: any) => (
            <Todo key={todo.key} todo={todo} />
         ))}
         <TodoSummary />
      </List>
   )
}

export default TodoList
