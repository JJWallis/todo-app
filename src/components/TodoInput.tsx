import React, { useState, useEffect } from 'react'
import { useTodosDispatch } from '../hooks/useTodosDispatch'
import { v4 as uuidv4 } from 'uuid'
import Input from './styled/Input'

const TodoInput: React.FC = () => {
   const dispatch = useTodosDispatch()
   const [usrInput, setUsrInput] = useState('')
   const [newTodo, setNewTodo] = useState(false)

   useEffect(() => {
      if (usrInput && newTodo) {
         dispatch({
            type: 'ADD_TODO',
            todo: {
               id: uuidv4(),
               value: usrInput,
               isCompleted: false,
               invisible: false,
            },
         })
         setUsrInput('')
         setNewTodo(false)
      }
   }, [newTodo, dispatch, usrInput])

   return (
      <>
         <Input
            addTodo
            type="checkbox"
            checked={newTodo}
            onChange={(e) => setNewTodo(e.target.checked)}
         />
         <Input
            newTodo
            placeholder="Create a new todo..."
            value={usrInput}
            onChange={(e) => setUsrInput(e.target.value)}
         />
      </>
   )
}

export default TodoInput
