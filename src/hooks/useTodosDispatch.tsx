import { useContext } from 'react'
import { DispatchContext } from '../context/TodosContext'

export function useTodosDispatch() {
   const dispatchContext = useContext(DispatchContext)
   if (!dispatchContext)
      throw new Error(
         'useTodosDispatch must be used within a TodosDispatchProvider'
      )
   return dispatchContext
}
