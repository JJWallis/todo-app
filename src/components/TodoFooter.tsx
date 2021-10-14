import React, { useContext } from 'react'
import List from './List'
import Button from './Button'
import ListItem from './ListItem'
import { AppState, Context } from '../App'

const TodoFooter: React.FC = () => {
   const context = useContext(Context)
   const handleTodosVisibility: AppState['handleTodosVisibility'] =
      context.handleTodosVisibility
   return (
      <List footer>
         <ListItem>
            <Button onClick={() => handleTodosVisibility()}>All</Button>
         </ListItem>
         <ListItem>
            <Button onClick={() => handleTodosVisibility('active')}>
               Active
            </Button>
         </ListItem>
         <ListItem>
            <Button
               onClick={() => handleTodosVisibility(undefined, 'completed')}
            >
               Completed
            </Button>
         </ListItem>
      </List>
   )
}

export default TodoFooter
