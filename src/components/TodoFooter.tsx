import React, { useState } from 'react'
import { useTodosDispatch } from '../hooks/useTodosDispatch'
import List from './styled/List'
import Button from './styled/Button'
import ListItem from './styled/ListItem'

export type VisibleTodos = 'all' | 'active' | 'completed'

const TodoFooter: React.FC = () => {
   const [visibleTodos, setVisibleTodos] = useState<VisibleTodos>('all')
   const dispatch = useTodosDispatch()

   return (
      <List footer>
         <ListItem>
            <Button
               active={visibleTodos === 'all'}
               onClick={() => {
                  dispatch({ type: 'TOGGLE_ALL', visible: 'all' })
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
                  dispatch({ type: 'TOGGLE_ALL', visible: 'active' })
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
                  dispatch({ type: 'TOGGLE_ALL', visible: 'completed' })
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
