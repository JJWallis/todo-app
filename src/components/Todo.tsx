import React, { useContext, useRef } from 'react'
import { AppState, Context } from '../App'
import ListItem from './ListItem'
import Input from './Input'
import Icon from './Icon'
import cross from '../assets/icon-cross.svg'

interface Props {
   todo: {
      id: string
      value: string
      isCompleted: boolean
      invisible: boolean
      dragging: boolean
   }
   draggedTodo: (todo: any) => any
}

const Todo: React.FC<Props> = ({ todo, draggedTodo }) => {
   const context = useContext(Context)
   const ref = useRef<any>()

   const handleCompletedTodo: AppState['handleCompletedTodo'] =
      context.handleCompletedTodo
   const handleRemoveTodo: AppState['handleRemoveTodo'] =
      context.handleRemoveTodo
   const handleDragTodo: AppState['handleDragTodo'] = context.handleDragTodo

   const dragStart = () => {
      handleDragTodo(todo.id)
      draggedTodo(ref)
   }

   return (
      <ListItem
         todo
         invisible={todo.invisible}
         completed={todo.isCompleted}
         dragging={todo.dragging}
         draggable="true"
         ref={ref}
         onDragStart={dragStart}
         onDragEnd={() => handleDragTodo(todo.id)}
      >
         <Input
            checkboxTodo
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => handleCompletedTodo(todo.id)}
         />
         {todo.value}
         <Icon cross src={cross} onClick={() => handleRemoveTodo(todo.id)} />
      </ListItem>
   )
}

export default Todo
