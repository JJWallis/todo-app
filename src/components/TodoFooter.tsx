import React, { useContext, useState } from 'react'
import { Context } from '../App'
import List from './styled/List'
import Button from './styled/Button'
import ListItem from './styled/ListItem'

interface State {
   visibleTodos: {
      name: string
      active: boolean
   }[]
}

const TodoFooter: React.FC = () => {
   const [visibleTodos, setVisibleTodos] = useState<State['visibleTodos']>([
      { name: 'all', active: true },
      { name: 'active', active: false },
      { name: 'completed', active: false },
   ])
   // model as 1 obj + keys as name keys with boolean values
   const context = useContext(Context)
   const handleTodosVisibility = context.handleTodosVisibility

   const handleVisibleTodos = (val: string) => {
      const visible = [...visibleTodos]
      // spread operator for copy of 1 obj as well
      for (const btn of visible) btn.active = false
      const desired: any = visible.find(
         (btn: any) => btn.name === val.toLowerCase()
         //access with bracket notation + below code in 1 line
      )
      desired.active = true
      setVisibleTodos(visible)
   }

   return (
      <List footer>
         <ListItem>
            <Button
               active={visibleTodos[0].active}
               onClick={(e) => {
                  // refactor into 1 func above - repeating 3 times (very similar)
                  handleTodosVisibility()
                  handleVisibleTodos((e.currentTarget.textContent = 'All'))
               }}
            >
               All
            </Button>
         </ListItem>
         <ListItem>
            <Button
               active={visibleTodos[1].active}
               onClick={(e) => {
                  handleTodosVisibility('active')
                  handleVisibleTodos((e.currentTarget.textContent = 'Active'))
               }}
            >
               Active
            </Button>
         </ListItem>
         <ListItem>
            <Button
               active={visibleTodos[2].active}
               onClick={(e) => {
                  handleTodosVisibility(undefined, 'completed')
                  handleVisibleTodos(
                     (e.currentTarget.textContent = 'Completed')
                  )
               }}
            >
               Completed
            </Button>
         </ListItem>
      </List>
   )
}

export default TodoFooter
