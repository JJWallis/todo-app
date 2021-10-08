import React from 'react'
import styled from 'styled-components'
import ListItem from './ListItem'
import cross from '../assets/icon-cross.svg'

const CrossIcon = styled.img`
   position: absolute;
   right: 75px;
   top: 50%;
   transform: translateY(-50%);
   display: block;
   width: 20px;
   cursor: pointer;
`

const Todo: React.FC = () => {
   return (
      <ListItem todo>
         Test todo
         <CrossIcon src={cross} />
      </ListItem>
   )
}

export default Todo
