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
}

const Todo: React.FC<Props> = ({ value, id }) => {
   const [finished, setFinished] = useState(false)
   const context = useContext(Context)
   const handleRemoveTodo: AppState['handleRemoveTodo'] =
      context.handleRemoveTodo

   // useEffect() - clear any added event listeners in case Todo removed

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
