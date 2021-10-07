import React from 'react'
import styled from 'styled-components'

const FlexWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: white;
   padding-inline: 1rem;
`

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
      <FlexWrapper>
         <ItemsLeft>5 items left</ItemsLeft>
         <Completed>Clear Completed</Completed>
      </FlexWrapper>
   )
}

export default TodoSummary
