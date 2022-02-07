import { useContext } from 'react'
import { TodosContext } from '../context/TodosContext'

export function useTodosContext() {
   const todosContext = useContext(TodosContext)
   if (!todosContext)
      throw new Error('useTodosContext must be used within a TodosProvider')
   return todosContext
}
