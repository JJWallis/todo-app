import React from 'react'
import List from './List'
import Button from './Button'
import ListItem from './ListItem'

const TodoFooter: React.FC = () => {
   // store diff versions in diff state
   // if length greater than 0 = maps to render that version
   // set to 0 each time btns below clicked
   // if length of 0 - normal todos rendered
   return (
      <List footer>
         <ListItem>
            <Button>All</Button>
         </ListItem>
         <ListItem>
            <Button>Active</Button>
            {/* renders non-completed todos */}
            {/* same as clearCompleted callback - passes 'active' param */}
            {/* if param truthy - updates active todos state + shows - else default todos state */}
         </ListItem>
         <ListItem>
            <Button>Completed</Button>
         </ListItem>
      </List>
   )
}

export default TodoFooter
