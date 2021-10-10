import React, { useState, useEffect } from 'react'
import ListItem from './ListItem'
import Input from './Input'
import Icon from './Icon'
import cross from '../assets/icon-cross.svg'

interface Props {
   id: string
   value: string
}

const Todo: React.FC<Props> = ({ value }) => {
   const [finished, setFinished] = useState<boolean>(false)

   return (
      <ListItem todo>
         <Input
            type="checkbox"
            checked={finished}
            onChange={(e) => setFinished(e.target.checked)}
         />
         {value}
         <Icon cross src={cross} />
      </ListItem>
   )
}

export default Todo

// useEffect() - clear any added event listeners in case Todo removed
