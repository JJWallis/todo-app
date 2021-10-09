import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import lightBg from './assets/bg-desktop-light.jpg'
import darkBG from './assets/bg-desktop-dark.jpg'
import Main from './components/Main'
import Footer from './components/Footer'

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

export const Context: any = React.createContext(null)

const App: React.FC = () => {
   const [activeTheme, setActiveTheme] = useState<object>(lightTheme)

   const determineTheme = (light: boolean) =>
      setActiveTheme(light ? darkTheme : lightTheme)

   return (
      <Context.Provider value={determineTheme}>
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
