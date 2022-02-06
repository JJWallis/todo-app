import React, { useContext, useState } from 'react'
import { Context } from '../App'
import List from './styled/List'
import Button from './styled/Button'
import ListItem from './styled/ListItem'

interface VisibleTodos {
   name: string
   active: boolean
}

const TodoFooter: React.FC = () => {
   const [visibleTodos, setVisibleTodos] = useState<VisibleTodos[]>([
      { name: 'all', active: true },
      { name: 'active', active: false },
      { name: 'completed', active: false },
   ])
   const context = useContext(Context)
   const handleTodosVisibility = context.handleTodosVisibility

   const handleVisibleTodos = (val: string) => {
      const visible = [...visibleTodos]
      visible.forEach((btn) => (btn.active = false))
      const desired = visible.find(
         (btn) => btn.name === val.toLowerCase()
      ) as VisibleTodos
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
