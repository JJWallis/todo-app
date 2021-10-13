import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import lightBg from './assets/bg-desktop-light.jpg'
import darkBG from './assets/bg-desktop-dark.jpg'
import Main from './components/Main'
import Footer from './components/Footer'
export const Context = React.createContext<any>(null)

const lightTheme = {
   fontFamily: 'Josefin Sans',
   colorBg: 'hsl(236, 33%, 92%)',
   colorFg: 'hsl(0, 0%, 98%)',
   fcSummary: 'hsl(233, 11%, 84%)',
   fcTodo: 'hsl(235, 19%, 35%)',
   fcTodoFtr: 'hsl(236, 9%, 61%)',
   hdrBgImg: lightBg,
}

const darkTheme = {
   fontFamily: 'Josefin Sans',
   colorBg: 'hsl(235, 21%, 11%)',
   colorFg: 'hsl(235, 24%, 19%)',
   fcSummary: 'hsl(234, 11%, 52%)',
   fcTodo: 'hsl(234, 39%, 85%)',
   fcTodoFtr: 'hsl(233, 14%, 35%)',
   hdrBgImg: darkBG,
   // hsl(237, 14%, 26%)
   // hsl(236, 33%, 92%) - hover
}

interface Theme {
   fontFamily: string
   colorBg: string
   colorFg: string
   fcSummary: string
   fcTodo: string
   fcTodoFtr: string
   hdrBgImg: string
}

export interface AppState {
   todos: {}[]
   activeTheme: Theme
   determineTheme: (light: boolean) => void
   addTodo: (todo: any) => void
   handleRemoveTodo: (id: string) => void
}

const App: React.FC = () => {
   const [activeTheme, setActiveTheme] =
      useState<AppState['activeTheme']>(lightTheme)
   const [todos, setTodos] = useState<AppState['todos']>([])

   const determineTheme: AppState['determineTheme'] = (light) =>
      setActiveTheme(light ? darkTheme : lightTheme)

   const addTodo: AppState['addTodo'] = (todo) => setTodos([...todos, todo])

   const handleRemoveTodo: AppState['handleRemoveTodo'] = (id) => {
      const newTodos = todos.filter((todo: any) => todo.props.id !== id)
      setTodos(newTodos)
   }

   const handleCompletedTodo = (id: string) => {
      const nonCompletedTodos = todos.filter(
         (todo: any) => todo.props.id !== id
      )
      const completedTodo: any = todos.find((todo: any) => todo.props.id === id)
      completedTodo.props.isCompleted = !completedTodo.props.isCompleted
      const finalTodos = [completedTodo, ...nonCompletedTodos] // added 1st - order issue!
      setTodos(finalTodos)
   }

   return (
      <Context.Provider
         value={{
            themeChange: determineTheme,
            todos: todos,
            addTodo: addTodo,
            handleRemoveTodo: handleRemoveTodo,
            handleCompletedTodo: handleCompletedTodo,
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
