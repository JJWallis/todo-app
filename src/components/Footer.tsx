import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
   min-height: 7rem;
   color: darkgrey;
   text-align: center;
`

const Footer: React.FC = () => (
   <StyledFooter>Drag and drop to reorder list</StyledFooter>
)

export default Footer
