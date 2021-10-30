import React, { useContext } from 'react'
import { Context } from '../App'
import { v4 as uuid } from 'uuid'
import Todo from './Todo'
import List from './List'
import TodoSummary from './TodoSummary'

interface DnD {
   drop: React.DragEventHandler<HTMLUListElement> | undefined
   dragOver: React.DragEventHandler<HTMLUListElement> | undefined
}

const TodoList: React.FC = () => {
   const context = useContext<any>(Context)

   // id var - id of todo to move
   // getData() str arg - your own key (whatever you like - similar to local storage)

   const drop: DnD['drop'] = (e) => {
      e.preventDefault()
      const id = e.dataTransfer.getData('todo-id')
      const todo = document.getElementById(id)
      todo && e.currentTarget.append(todo)
   }

   // prevents dragging component from reverting back when release mouse
   // called when let go of todo over list

   const dragOver: DnD['dragOver'] = (e) => e.preventDefault()

   return (
      <React.Fragment>
         <List id={uuid()} onDrop={drop} onDragOver={dragOver}>
            {context.todos.map((todo: any) => (
               <Todo key={todo.key} todo={todo} />
            ))}
         </List>
         <TodoSummary />
      </React.Fragment>
   )
}

export default TodoList
