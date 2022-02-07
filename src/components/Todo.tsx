import React from 'react'
import { v4 as uuid } from 'uuid'
import { Todo as TodoProps } from '../types/App.interface'
import { useTodosDispatch } from '../hooks/useTodosDispatch'
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
   const dispatch = useTodosDispatch()

   return (
      <ListItem todo id={uuid()} invisible={invisible} completed={isCompleted}>
         <Input
            checkboxTodo
            type="checkbox"
            checked={isCompleted}
            onChange={() => dispatch({ type: 'TOGGLE_TODO', id })}
         />
         {value}
         <Icon
            cross
            src={cross}
            onClick={() => dispatch({ type: 'REMOVE_TODO', id })}
            aria-label="remove todo"
         />
      </ListItem>
   )
}

export default Todo
