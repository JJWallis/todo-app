import React, { useState, useEffect, useContext } from 'react'
import { AppState, Context } from '../App'
import Input from './Input'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid'

export interface TodoInputState {
   updateCompleted: (completed: boolean) => void
}

const TodoInput: React.FC = () => {
   const context: any = useContext(Context)
   const [usrInput, setUsrInput] = useState('')
   const [newTodo, setNewTodo] = useState(false)

   const addTodo: AppState['addTodo'] = context.addTodo

   // callback from App -takes id + find() method to find Todo to toggle isCompleted prop on (false as default value below)

   useEffect(() => {
      if (usrInput !== '')
         addTodo(
            <Todo
               id={uuidv4()}
               key={uuidv4()}
               value={usrInput}
               isCompleted={false}
            />
         )
      setUsrInput('')
      setNewTodo(false)
   }, [newTodo])

   return (
      <React.Fragment>
         <Input
            checkboxTodo
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
