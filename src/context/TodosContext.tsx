import React, { createContext, Dispatch, useReducer } from 'react'
import { Todo } from '../types/App.interface'

export const TodosContext = createContext<Todo[] | null>(null)

export const DispatchContext = createContext<Dispatch<Todo[]> | null>(null)

export const TodosProvider = ({
   children,
   reducer,
}: {
   children: React.ReactNode
   reducer: (state: Todo[], action: any) => any[]
}) => {
   const [todos, dispatch] = useReducer(reducer, [])

   return (
      <DispatchContext.Provider value={dispatch}>
         <TodosContext.Provider value={null}>{children}</TodosContext.Provider>
      </DispatchContext.Provider>
   )
}
