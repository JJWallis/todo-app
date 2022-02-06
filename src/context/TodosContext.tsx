import React, { createContext, Dispatch, useReducer } from 'react'
import { Todo, TodoActions } from '../types/App.interface'

export const TodosContext = createContext<Todo[] | null>(null)

export const DispatchContext = createContext<Dispatch<Todo[]> | null>(null)

export const TodosProvider = ({
   children,
   reducer,
}: {
   children: React.ReactNode
   reducer: (state: Todo[], action: TodoActions) => Todo[]
}) => {
   const [todos, dispatch] = useReducer(reducer, [])

   return (
      <DispatchContext.Provider value={dispatch}>
         <TodosContext.Provider value={null}>{children}</TodosContext.Provider>
      </DispatchContext.Provider>
   )
}
