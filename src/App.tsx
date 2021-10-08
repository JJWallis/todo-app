import React from 'react'
import Wrapper from './components/Wrapper'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const App: React.FC = () => {
   return (
      <Wrapper body>
         <Header />
         <Main />
         <Footer />
      </Wrapper>
   )
}

export default App
