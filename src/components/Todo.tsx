import React from 'react'
import styled from 'styled-components'
import ListItem from './ListItem'
import Input from './Input'
import cross from '../assets/icon-cross.svg'

const CrossIcon = styled.img`
   position: absolute;
   right: 133px;
   top: 50%;
   transform: translateY(-50%);
   display: block;
   width: 20px;
   cursor: pointer;
`

const Todo: React.FC = () => {
   return (
      <ListItem todo>
         <Input type="checkbox" />
         Test todo
         <CrossIcon src={cross} />
      </ListItem>
   )
}

export default Todo
