import React from 'react'
import ListItem from './ListItem'
import Input from './Input'
import Icon from './Icon'
import cross from '../assets/icon-cross.svg'

const Todo: React.FC = () => {
   return (
      <ListItem todo>
         <Input type="checkbox" />
         Test todo
         <Icon cross src={cross} />
      </ListItem>
   )
}

export default Todo
