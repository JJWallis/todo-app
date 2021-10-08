import React from 'react'
import styled from 'styled-components'
import SpaceBetween from './SpaceBetween'
import Button from './Button'

const ItemsLeft = styled.p`
   color: grey;
   font-size: 0.8rem;
`

const TodoSummary: React.FC = () => {
   return (
      <SpaceBetween secondary>
         <ItemsLeft>5 items left</ItemsLeft>
         <Button summary>Clear Completed</Button>
      </SpaceBetween>
   )
}

export default TodoSummary
