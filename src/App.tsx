import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './components/styled/Theme'
import { Todo } from './types/App.interface'
import { VisibleTodos } from './components/TodoFooter'
import Wrapper from './components/styled/Wrapper'
import Header from './components/styled/Header'
import Main from './components/Main'
import Footer from './components/Footer'

export const Context = React.createContext<any>(null)

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

   const addTodo = (todo: Todo) => setTodos((prevTodos) => [...prevTodos, todo])

   const handleRemoveTodo = (id: string) => {
      const newTodos = todos.filter((todo: any) => todo.id !== id)
      setTodos(newTodos)
   }

   const handleCompletedTodo = (id: string) => {
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

   const handleTodosVisibility = (visible: VisibleTodos) => {
      const currentTodos = [...todos]
      let newTodos
      currentTodos.forEach((todo) => (todo.invisible = false))

      if (visible === 'all') {
         setTodos(currentTodos)
         return
      }

      if (visible === 'active') {
         currentTodos.forEach(
            (todo) => todo.isCompleted && (todo.invisible = true)
         )
      }

      if (visible === 'completed') {
         currentTodos.forEach(
            (todo) => !todo.isCompleted && (todo.invisible = true)
         )
      }

      newTodos = currentTodos
      setTodos(newTodos)
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
