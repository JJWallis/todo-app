import React from 'react'
import styled from 'styled-components'

const Ul = styled.ul`
   padding: 0;
   margin: 0;
   width: 100%;
   background-color: white;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 5px;
   margin-top: 1rem;
   padding-block: 1rem;
`

const Button = styled.button`
   background-color: transparent;
   border: none;
   outline: none;
   cursor: pointer;
`

const Li = styled.li`
   list-style: none;
   padding: 0;
   margin: 0 10px;
`

const TodoFooter: React.FC = () => {
   return (
      <Ul>
         <Li>
            <Button>All</Button>
         </Li>
         <Li>
            <Button>Active</Button>
         </Li>
         <Li>
            <Button>Completed</Button>
         </Li>
      </Ul>
   )
}

export default TodoFooter
