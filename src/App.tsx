import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './components/styled/Theme'
import { Todo, TodoActions } from './types/App.interface'
import { VisibleTodos } from './components/TodoFooter'
import { TodosProvider, TodosReducer } from './context/TodosContext'
import Wrapper from './components/styled/Wrapper'
import Header from './components/styled/Header'
import Main from './components/Main'
import Footer from './components/Footer'

export const Context = React.createContext<any>(null)

const reducer: TodosReducer = (state, action) => {
   switch (action.type) {
      case 'ADD_TODO': {
         return [...state, action.todo]
         break
      }
      default: {
         throw new Error(`Unhandled action type: ${action.type}`)
         break
      }
   }
}

// immer library
// ESLint console warnings

const App: React.FC = () => {
   const [activeTheme, setActiveTheme] = useState(lightTheme)
   const [todos, setTodos] = useState<Todo[]>([])

   useEffect(() => {
      const storedTodos = localStorage.getItem('todos')
      storedTodos && setTodos(JSON.parse(storedTodos))
   }, [])

   useEffect(
      () => localStorage.setItem('todos', JSON.stringify(todos)),
      [todos]
   )

   const addTodo = (todo: Todo) => setTodos((prevTodos) => [...prevTodos, todo])

   const handleRemoveTodo = (id: string) => {
      const newTodos = todos.filter((todo) => todo.id !== id)
      setTodos(newTodos)
   }

   const handleCompletedTodo = (id: string) => {
      const newTodos = [...todos]
      const completedTodo = newTodos.find((todo) => todo.id === id) as Todo
      completedTodo.isCompleted = !completedTodo.isCompleted
      setTodos(newTodos)
   }

   const handleClearCompleted = () => {
      const newTodos = [...todos]
      const nonCompletedTodos = newTodos.filter((todo) => !todo.isCompleted)
      setTodos(nonCompletedTodos)
   }

   const handleTodosVisibility = (visible: VisibleTodos) => {
      const currentTodos = [...todos]
      const isActive = visible === 'active'
      currentTodos.forEach((todo) => (todo.invisible = false))
      if (visible === 'all') {
         setTodos(currentTodos)
         return
      }
      currentTodos.forEach(
         (todo) => todo.isCompleted === isActive && (todo.invisible = true)
      )
      setTodos(currentTodos)
   }

   const handleThemeChange = (light: boolean) =>
      setActiveTheme(light ? darkTheme : lightTheme)

   return (
      <ThemeProvider theme={activeTheme}>
         <TodosProvider reducer={reducer}>
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
         </TodosProvider>
      </ThemeProvider>
   )
}

export default App
