import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './components/styled/Theme'
import Wrapper from './components/styled/Wrapper'
import Header from './components/styled/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { Todo } from './types/App.interface'

export const Context = React.createContext<any>(null)

export interface AppState {
   addTodo: (todo: any) => void
   handleRemoveTodo: (id: string) => void
   handleClearCompleted: () => void
   handleTodosVisibility: (
      active?: string | undefined,
      completed?: string | undefined
   ) => void
   handleCompletedTodo: (id: string) => void
}

const LOCAL_STORAGE_TODOS_KEY = 'todos'

const App: React.FC = () => {
   const [activeTheme, setActiveTheme] = useState(lightTheme)
   const [todos, setTodos] = useState<Todo[]>([])

   useEffect(() => {
      const storedTodos = localStorage.getItem(LOCAL_STORAGE_TODOS_KEY)
      storedTodos && setTodos(JSON.parse(storedTodos))
   }, [])

   useEffect(
      () =>
         localStorage.setItem(LOCAL_STORAGE_TODOS_KEY, JSON.stringify(todos)),
      [todos]
   )

   const addTodo: AppState['addTodo'] = (todo) =>
      setTodos((prevTodos) => [...prevTodos, todo])

   const handleRemoveTodo: AppState['handleRemoveTodo'] = (id) => {
      const newTodos = todos.filter((todo: any) => todo.id !== id)
      setTodos(newTodos)
   }

   const handleCompletedTodo: AppState['handleCompletedTodo'] = (id) => {
      const newTodos = [...todos]
      const completedTodo: any = newTodos.find((todo: any) => todo.id === id)
      completedTodo.isCompleted = !completedTodo.isCompleted
      setTodos(newTodos)
   }

   const handleClearCompleted = () => {
      const newTodos = [...todos]
      const nonCompletedTodos = newTodos.filter(
         (todo: any) => !todo.isCompleted
      )
      setTodos(nonCompletedTodos)
   }

   const handleTodosVisibility = (active?: string, completed?: string) => {
      const newTodos = [...todos]
      for (const todo of newTodos) todo.invisible = false

      if (active) {
         for (const todo of newTodos)
            if (todo.isCompleted) todo.invisible = !todo.invisible
         setTodos(newTodos)
      } else if (completed) {
         for (const todo of newTodos)
            if (!todo.isCompleted) todo.invisible = !todo.invisible
         setTodos(newTodos)
      } else {
         setTodos(newTodos)
      }
   }

   const handleThemeChange = (light: boolean) =>
      setActiveTheme(light ? darkTheme : lightTheme)

   return (
      <ThemeProvider theme={activeTheme}>
         <Context.Provider
            value={{
               todos,
               addTodo,
               handleRemoveTodo,
               handleCompletedTodo,
               handleClearCompleted,
               handleTodosVisibility,
            }}
         >
            <Wrapper body>
               <Header />
               <Main handleThemeChange={handleThemeChange} />
               <Footer />
            </Wrapper>
         </Context.Provider>
      </ThemeProvider>
   )
}

export default App
