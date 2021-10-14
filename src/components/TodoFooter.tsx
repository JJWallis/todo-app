import React from 'react'
import List from './List'
import Button from './Button'
import ListItem from './ListItem'

const TodoFooter: React.FC = () => {
   return (
      <List footer>
         <ListItem>
            <Button>All</Button>
         </ListItem>
         <ListItem>
            <Button>Active</Button>
         </ListItem>
         <ListItem>
            <Button>Completed</Button>
         </ListItem>
      </List>
   )
}

export default TodoFooter
