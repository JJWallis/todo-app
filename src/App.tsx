import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const BodyWrapper = styled.div`
   min-height: 100vh;
   background-color: red;
`

const App: React.FC = () => {
   return (
      <BodyWrapper>
         <Header />
         <Main />
         <Footer />
      </BodyWrapper>
   )
}

export default App
