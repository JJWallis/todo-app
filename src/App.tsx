import React, { useCallback, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './components/styled/Theme'
import { Todo } from './types/App.interface'
import { TodosProvider, TodosReducer } from './context/TodosContext'
import { useImmerReducer } from 'use-immer'
import Wrapper from './components/styled/Wrapper'
import Header from './components/styled/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const reducer: TodosReducer = (state, action) => {
   switch (action.type) {
      case 'ADD_TODO': {
         return [...state, action.todo]
      }
      case 'REMOVE_TODO': {
         return state.filter((todo) => todo.id !== action.id)
      }
      case 'TOGGLE_TODO': {
         const todo = state.find((todo) => todo.id === action.id) as Todo
         todo.isCompleted = action.completed
         return [...state]
      }
      case 'CLEAR_COMPLETED': {
         return state.filter((todo) => !todo.isCompleted)
      }
      case 'TOGGLE_ALL': {
         const isActive = action.visible === 'active'
         state.forEach((todo) => (todo.invisible = false))
         if (action.visible === 'all') return [...state]
         state.forEach(
            (todo) => todo.isCompleted === isActive && (todo.invisible = true)
         )
         return [...state]
      }
      default: {
         throw new Error(`Unknow todo action type`)
      }
   }
}

const App: React.FC = () => {
   const [activeTheme, setActiveTheme] = useState(lightTheme)

   const handleThemeChange = useCallback((light: boolean) => {
      setActiveTheme(light ? darkTheme : lightTheme)
   }, [])

   return (
      <ThemeProvider theme={activeTheme}>
         <TodosProvider reducer={reducer}>
            <Wrapper body>
               <Header />
               <Main handleThemeChange={handleThemeChange} />
               <Footer />
            </Wrapper>
         </TodosProvider>
      </ThemeProvider>
   )
}

export default App
