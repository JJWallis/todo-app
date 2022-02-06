import React, { useContext } from 'react'
import { Context } from '../App'
import { v4 as uuid } from 'uuid'
import { Todo as TodoProps } from '../types/App.interface'
import ListItem from './styled/ListItem'
import Input from './styled/Input'
import Icon from './styled/Icon'
import cross from '../assets/icon-cross.svg'

interface Props {
   todo: TodoProps
}

const Todo: React.FC<Props> = ({
   todo: { invisible, isCompleted, id, value },
}) => {
   const context = useContext(Context)
   const handleCompletedTodo = context.handleCompletedTodo
   const handleRemoveTodo = context.handleRemoveTodo

   return (
      <ListItem todo id={uuid()} invisible={invisible} completed={isCompleted}>
         <Input
            checkboxTodo
            type="checkbox"
            checked={isCompleted}
            onChange={() => handleCompletedTodo(id)}
         />
         {value}
         <Icon cross src={cross} onClick={() => handleRemoveTodo(id)} />
      </ListItem>
   )
}

export default Todo
