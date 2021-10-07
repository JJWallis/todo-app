import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'

const BodyWrapper = styled.div`
   display: flex;
   flex-direction: column;
   min-height: 100vh;
   box-sizing: border-box;
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
