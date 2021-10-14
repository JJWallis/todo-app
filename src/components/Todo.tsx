import React, { useContext } from 'react'
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
   key: string
}

const Todo: React.FC<Props> = ({ todo }) => {
   // callback func in App will return filtered() version + turn invisible to true + update state with that
   // each time btn clicked - refresh styles by turning all invislbe props to false (+ then use that copy of state to create desired one)

   const context = useContext(Context)

   const handleCompletedTodo = context.handleCompletedTodo

   const handleRemoveTodo: AppState['handleRemoveTodo'] =
      context.handleRemoveTodo

   return (
      <ListItem todo invisible={todo.invisible}>
         <Input
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
