import React from 'react'
import { Todo as TodoProps } from '../types/App.interface'
import { useTodosDispatch } from '../hooks/useTodosDispatch'
import ListItem from './styled/ListItem'
import Input from './styled/Input'
import Icon from './styled/Icon'
import cross from '../assets/icon-cross.svg'

interface Props extends TodoProps {
   idx: number
}

const Todo: React.FC<Props> = ({ id, invisible, isCompleted, value }, idx) => {
   const dispatch = useTodosDispatch()

   return (
      <ListItem
         todo
         id={String(idx)}
         invisible={invisible}
         completed={isCompleted}
      >
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
