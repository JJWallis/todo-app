import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import lightBg from './assets/bg-desktop-light.jpg'
import darkBG from './assets/bg-desktop-dark.jpg'
import Main from './components/Main'
import Footer from './components/Footer'

export const Context = React.createContext<any>(null)

export interface AppState {
   todos: {
      id: string
      key: string
      value: string
      isCompleted: boolean
      invisible: boolean
      dragging: boolean
   }[]
   determineTheme: (light: boolean) => void
   addTodo: (todo: any) => void
   handleRemoveTodo: (id: string) => void
   handleClearCompleted: () => void
   handleTodosVisibility: (
      active?: string | undefined,
      completed?: string | undefined
   ) => void
   handleDragTodo: (id: string) => void
   handleCompletedTodo: (id: string) => void
}

const lightTheme = {
   fontFamily: 'Josefin Sans',
   colorBg: 'hsl(236, 33%, 92%)',
   colorFg: 'hsl(0, 0%, 98%)',
   fcSummary: 'hsl(233, 11%, 84%)',
   fcTodo: 'hsl(235, 19%, 35%)',
   fcTodoFtr: 'hsl(236, 9%, 61%)',
   hdrBgImg: lightBg,
   hover: 'hsl(237, 14%, 26%)',
   active: 'hsl(220, 98%, 61%)',
}

const darkTheme = {
   fontFamily: 'Josefin Sans',
   colorBg: 'hsl(235, 21%, 11%)',
   colorFg: 'hsl(235, 24%, 19%)',
   fcSummary: 'hsl(234, 11%, 52%)',
   fcTodo: 'hsl(234, 39%, 85%)',
   fcTodoFtr: 'hsl(233, 14%, 35%)',
   hdrBgImg: darkBG,
   hover: 'hsl(236, 33%, 92%)',
   active: 'hsl(220, 98%, 61%)',
}

const LOCAL_STORAGE_TODOS_KEY = 'todos'

const App: React.FC = () => {
   const [activeTheme, setActiveTheme] = useState(lightTheme)
   const [todos, setTodos] = useState<AppState['todos']>([])

   useEffect(() => {
      const storedTodos = localStorage.getItem(LOCAL_STORAGE_TODOS_KEY)
      storedTodos && setTodos(JSON.parse(storedTodos))
   }, [])

   useEffect(
      () =>
         localStorage.setItem(LOCAL_STORAGE_TODOS_KEY, JSON.stringify(todos)),
      [todos]
   )

   const handleDragTodo: AppState['handleDragTodo'] = (id) => {
      const newTodos = [...todos]
      const draggedTodo: any = newTodos.find((todo: any) => todo.id === id)
      draggedTodo.dragging = !draggedTodo.dragging
      setTodos(newTodos)
   }

   const determineTheme: AppState['determineTheme'] = (light) =>
      setActiveTheme(light ? darkTheme : lightTheme)

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

   return (
      <Context.Provider
         value={{
            themeChange: determineTheme,
            todos: todos,
            addTodo: addTodo,
            handleRemoveTodo: handleRemoveTodo,
            handleCompletedTodo: handleCompletedTodo,
            handleClearCompleted: handleClearCompleted,
            handleTodosVisibility: handleTodosVisibility,
            handleDragTodo: handleDragTodo,
         }}
      >
         <ThemeProvider theme={activeTheme}>
            <Wrapper body>
               <Header />
               <Main />
               <Footer />
            </Wrapper>
         </ThemeProvider>
      </Context.Provider>
   )
}

export default App
