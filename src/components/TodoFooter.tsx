import React from 'react'
import styled from 'styled-components'
import List from './List'

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
      <List footer>
         <Li>
            <Button>All</Button>
         </Li>
         <Li>
            <Button>Active</Button>
         </Li>
         <Li>
            <Button>Completed</Button>
         </Li>
      </List>
   )
}

export default TodoFooter
