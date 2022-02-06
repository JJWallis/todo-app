import React, { useState, useEffect, useContext } from 'react'
import { AppState, Context } from '../App'
import { v4 as uuidv4 } from 'uuid'
import Input from './styled/Input'

const TodoInput: React.FC = () => {
   const context: any = useContext(Context)
   const [usrInput, setUsrInput] = useState('')
   const [newTodo, setNewTodo] = useState(false)

   const addTodo: AppState['addTodo'] = context.addTodo

   useEffect(() => {
      if (usrInput !== '')
         addTodo({
            id: uuidv4(),
            key: uuidv4(),
            value: usrInput,
            isCompleted: false,
            invisible: false,
         })
      setUsrInput('')
      setNewTodo(false)
   }, [newTodo])

   return (
      <React.Fragment>
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
      </React.Fragment>
   )
}

export default TodoInput
