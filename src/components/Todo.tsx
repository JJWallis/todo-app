import React from 'react'
import styled from 'styled-components'
import cross from '../assets/icon-cross.svg'

const CrossIcon = styled.img`
   position: absolute;
   right: 5%;
   top: 50%;
   transform: translateY(-50%);
   display: block;
   width: 20px;
   cursor: pointer;
`

const StyledTodo = styled.li`
   width: 100%;
   background-color: white;
   border-bottom: 0.5px solid lightgrey;
   list-style: none;
   padding: 0;
   margin: 0;
   padding-block: 1rem;
   position: relative;
`

const Todo: React.FC = () => {
   return (
      <StyledTodo>
         Test todo
         <CrossIcon src={cross} />
      </StyledTodo>
   )
}

export default Todo
