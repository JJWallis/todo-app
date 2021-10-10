import React, { useState } from 'react'
import Input from './Input'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid'

const TodoInput: React.FC = () => {
   const [usrInput, setUsrInput] = useState<string>('')
   const [addTodo, setAddTodo] = useState<boolean>(false)

   // useEffect() when addTodo changed - runs callback func passed (creates a new <Todo /> with all info)
   // to update Todos state in App
   // Reset input to empty str + checkbox to false via refs

   return (
      <React.Fragment>
         <Input
            checkboxTodo
            type="checkbox"
            checked={addTodo}
            onChange={(e) => setAddTodo(e.target.checked)}
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
