import React from 'react'
import styled from 'styled-components'

const StyledMain = styled.main`
   flex-grow: 1;
`

const StyledTodoWrapper = styled.div`
   width: 90%;
   max-width: 600px;
   outline: 2px solid black;
   // position: absolute;
   // transform: translate X + Y centre!
`

const Main: React.FC = () => (
   <StyledMain>
      <StyledTodoWrapper></StyledTodoWrapper>
   </StyledMain>
)

export default Main
