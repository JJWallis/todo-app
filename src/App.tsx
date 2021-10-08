import React from 'react'
import { ThemeProvider } from 'styled-components'
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const lightTheme = {
   fontFamily: 'Josefin Sans',
   colorBg: 'hsl(236, 33%, 92%)',
}

const darkTheme = {
   colorBg: 'hsl(235, 21%, 11%)',
}

export const Context: any = React.createContext({})

const App: React.FC = () => {
   const determineTheme = (light: boolean) => (light ? darkTheme : lightTheme)
   // param as ThemeToggle state
   // render returned value to theme prop below
   // by updating local state here holds theme obj of usrs choice (toggles between them)

   return (
      <Context.Provider value={determineTheme}>
         <ThemeProvider theme={lightTheme}>
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
