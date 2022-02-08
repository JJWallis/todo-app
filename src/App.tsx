import React, { useCallback, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { TodosProvider, TodosReducer } from './context/TodosContext'
import { darkTheme, lightTheme } from './components/styled/Theme'
import { Todo } from './types/App.interface'
import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
import Wrapper from './components/styled/Wrapper'
import Header from './components/styled/Header'
import Main from './components/Main'
import Footer from './components/Footer'

export const reducer: TodosReducer = (draft, action) => {
   switch (action.type) {
      case 'ADD_TODO': {
         draft.push(action.todo)
         break
      }
      case 'REMOVE_TODO': {
         return draft.filter((todo) => todo.id !== action.id)
      }
      case 'TOGGLE_TODO': {
         const todo = draft.find((todo) => todo.id === action.id) as Todo
         todo.isCompleted = action.completed
         break
      }
      case 'CLEAR_COMPLETED': {
         return draft.filter((todo) => !todo.isCompleted)
      }
      case 'TOGGLE_ALL': {
         const isActive = action.visible === 'active'
         draft.forEach((todo) => (todo.invisible = false))
         if (action.visible === 'all') break
         draft.forEach(
            (todo) => todo.isCompleted === isActive && (todo.invisible = true)
         )
         break
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

   const FallbackUi: React.FC<FallbackProps> = ({ error }) => {
      return <pre style={{ color: 'red' }}>{error.message}</pre>
   }

   return (
      <ThemeProvider theme={activeTheme}>
         <ErrorBoundary FallbackComponent={FallbackUi}>
            <TodosProvider reducer={reducer}>
               <Wrapper body>
                  <Header />
                  <Main handleThemeChange={handleThemeChange} />
                  <Footer />
               </Wrapper>
            </TodosProvider>
         </ErrorBoundary>
      </ThemeProvider>
   )
}

export default App
