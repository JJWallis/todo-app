import React, { useState } from 'react'
import Input from './Input'

const TodoInput: React.FC = () => {
   const [usrInput, setUsrInput] = useState<string>('')

   return (
      <React.Fragment>
         <Input checkboxTodo type="checkbox" />
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
