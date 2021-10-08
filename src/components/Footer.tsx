import React from 'react'
import styled from 'styled-components'

type FooterProps = {
   darkMode?: boolean
}

const StyledFooter = styled.footer<FooterProps>`
   min-height: 7rem;
   color: ${(props) => props.theme.fcTodoFtr};
   background-color: ${(props) => props.theme.colorBg};
   transition: background-color 200ms linear, color 200ms linear;
   text-align: center;
`

const Footer: React.FC = () => (
   <StyledFooter>Drag and drop to reorder list</StyledFooter>
)

export default Footer
