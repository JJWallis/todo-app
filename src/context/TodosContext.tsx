import React, { createContext, Dispatch, useReducer } from 'react'
import { Todo, TodoActions } from '../types/App.interface'

export type TodosReducer = (state: Todo[], action: TodoActions) => Todo[]

export const TodosContext = createContext<Todo[] | null>(null)
export const DispatchContext = createContext<Dispatch<TodoActions> | null>(null)

export const TodosProvider = ({
   children,
   reducer,
}: {
   children: React.ReactNode
   reducer: TodosReducer
}) => {
   const [todos, dispatch] = useReducer(reducer, [])

   return (
      <DispatchContext.Provider value={dispatch}>
         <TodosContext.Provider value={todos}>{children}</TodosContext.Provider>
      </DispatchContext.Provider>
   )
}
