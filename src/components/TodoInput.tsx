import React, { useState, useEffect, useContext } from 'react'
import { Context } from '../App'
import Input from './Input'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid'

const TodoInput: React.FC = () => {
   const context: any = useContext(Context)
   const addTodo = context.addTodo
   const [usrInput, setUsrInput] = useState('')
   const [newTodo, setNewTodo] = useState(false)

   useEffect(() => {
      if (usrInput !== '')
         addTodo(<Todo id={uuidv4()} key={uuidv4()} value={usrInput} />)
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
