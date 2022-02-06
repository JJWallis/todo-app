import React, { useContext, useState } from 'react'
import { Context } from '../App'
import List from './styled/List'
import Button from './styled/Button'
import ListItem from './styled/ListItem'

export type VisibleTodos = 'all' | 'active' | 'completed'

const TodoFooter: React.FC = () => {
   const [visibleTodos, setVisibleTodos] = useState<VisibleTodos>('all')
   const context = useContext(Context)
   const handleTodosVisibility = context.handleTodosVisibility

   return (
      <List footer>
         <ListItem>
            <Button
               active={visibleTodos === 'all'}
               onClick={() => {
                  handleTodosVisibility('all')
                  setVisibleTodos('all')
               }}
            >
               All
            </Button>
         </ListItem>
         <ListItem>
            <Button
               active={visibleTodos === 'active'}
               onClick={() => {
                  handleTodosVisibility('active')
                  setVisibleTodos('active')
               }}
            >
               Active
            </Button>
         </ListItem>
         <ListItem>
            <Button
               active={visibleTodos === 'completed'}
               onClick={() => {
                  handleTodosVisibility('completed')
                  setVisibleTodos('completed')
               }}
            >
               Completed
            </Button>
         </ListItem>
      </List>
   )
}

export default TodoFooter
