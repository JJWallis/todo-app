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
   }
}

const Todo: React.FC<Props> = ({ todo }) => {
   const context = useContext(Context)
   const ref = useRef<any>()

   const handleCompletedTodo: AppState['handleCompletedTodo'] =
      context.handleCompletedTodo
   const handleRemoveTodo: AppState['handleRemoveTodo'] =
      context.handleRemoveTodo

   return (
      <ListItem
         todo
         invisible={todo.invisible}
         completed={todo.isCompleted}
         ref={ref}
         draggable="true"
         // onDragStart={dragStart}
         // onDragEnd={() => handleDragTodo(todo.id)}
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
