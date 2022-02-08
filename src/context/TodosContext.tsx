import React, { createContext, Dispatch, useEffect } from 'react'
import { Todo, TodoActions } from '../types/App.interface'
import { useImmerReducer } from 'use-immer'

export type TodosReducer = (draft: Todo[], action: TodoActions) => void

export const TodosContext = createContext<Todo[] | null>(null)
export const DispatchContext = createContext<Dispatch<TodoActions> | null>(null)

const retrieveTodos = () => {
   const prevTodos = localStorage.getItem('todos')
   return prevTodos ? (JSON.parse(prevTodos) as Todo[]) : []
}

export const TodosProvider = ({
   children,
   reducer,
   initialState,
}: {
   children: React.ReactNode
   reducer: TodosReducer
   initialState: Todo[]
}) => {
   const [todos, dispatch] = useImmerReducer(
      reducer,
      initialState,
      retrieveTodos
   )

   useEffect(
      () => localStorage.setItem('todos', JSON.stringify(todos)),
      [todos]
   )

   return (
      <TodosContext.Provider value={todos}>
         <DispatchContext.Provider value={dispatch}>
            {children}
         </DispatchContext.Provider>
      </TodosContext.Provider>
   )
}
