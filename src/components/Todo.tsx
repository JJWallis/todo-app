import React, { useState, useEffect, useContext } from 'react'
import { AppState, Context } from '../App'
import ListItem from './ListItem'
import Input from './Input'
import Icon from './Icon'
import cross from '../assets/icon-cross.svg'

interface Props {
   id: string
   key: string
   value: string
   // isCompleted: boolean
}

const Todo: React.FC<Props> = ({ value, id }) => {
   const [finished, setFinished] = useState(false)
   const context = useContext(Context)
   const handleCompletedTodo = context.handleCompletedTodo

   useEffect(() => finished && handleCompletedTodo(id), [finished])
   // dont want on mount - only able to change from false to true

   const handleRemoveTodo: AppState['handleRemoveTodo'] =
      context.handleRemoveTodo

   return (
      <ListItem todo>
         <Input
            type="checkbox"
            checked={finished}
            onChange={(e) => setFinished(e.target.checked)}
         />
         {value}
         <Icon cross src={cross} onClick={() => handleRemoveTodo(id)} />
      </ListItem>
   )
}

export default Todo
