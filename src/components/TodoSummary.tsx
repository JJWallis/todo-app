import React from 'react'
import styled from 'styled-components'
import SpaceBetween from './SpaceBetween'

const ItemsLeft = styled.p`
   color: grey;
   font-size: 0.8rem;
`

const Completed = styled.button`
   color: grey;
   background-color: transparent;
   outline: none;
   border: none;
   cursor: pointer;
   padding-block: 1rem;
   font-size: 0.8rem;
`

const TodoSummary: React.FC = () => {
   return (
      <SpaceBetween secondary>
         <ItemsLeft>5 items left</ItemsLeft>
         <Completed>Clear Completed</Completed>
      </SpaceBetween>
   )
}

export default TodoSummary
