import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const lightTheme = {
   colorBg: 'hsl(236, 33%, 92%)',
}

const App: React.FC = () => {
   return (
      <ThemeProvider theme={lightTheme}>
         <Wrapper body>
            <Header />
            <Main />
            <Footer />
         </Wrapper>
      </ThemeProvider>
   )
}

export default App
