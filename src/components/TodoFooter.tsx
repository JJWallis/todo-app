import React, { useContext, useEffect, useState } from 'react'
import List from './List'
import Button from './Button'
import ListItem from './ListItem'
import { AppState, Context } from '../App'

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
   const context = useContext(Context)
   const handleTodosVisibility: AppState['handleTodosVisibility'] =
      context.handleTodosVisibility

   const handleVisibleTodos = (val: string) => {
      const visible = [...visibleTodos]
      for (const btn of visible) btn.active = false
      const desired: any = visible.find(
         (btn: any) => btn.name === val.toLowerCase()
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
