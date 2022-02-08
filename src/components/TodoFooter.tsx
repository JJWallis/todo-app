import React, { useState } from 'react'
import { useTodosDispatch } from '../hooks/useTodosDispatch'
import List from './styled/List'
import Button from './styled/Button'
import ListItem from './styled/ListItem'

export type VisibleTodos = 'all' | 'active' | 'completed'

const TodoFooter: React.FC = () => {
   const [visibleTodos, setVisibleTodos] = useState<VisibleTodos>('all')
   const dispatch = useTodosDispatch()

   const produceBtns = () => {
      const options = ['all', 'active', 'completed'] as VisibleTodos[]
      return options.map((option) => {
         return (
            <ListItem>
               <Button
                  active={visibleTodos === option}
                  onClick={() => {
                     dispatch({ type: 'TOGGLE_ALL', visible: option })
                     setVisibleTodos(option)
                  }}
               >
                  {option.replace(/^\w/, (c) => c.toUpperCase())}
               </Button>
            </ListItem>
         )
      })
   }

   return <List footer>{produceBtns()}</List>
}

export default TodoFooter
