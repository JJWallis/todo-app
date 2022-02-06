import styled from 'styled-components'

interface FooterProps {
   darkMode?: boolean
}

export const StyledFooter = styled.footer<FooterProps>`
   min-height: 3rem;
   color: ${(props) => props.theme.fcTodoFtr};
   background-color: ${(props) => props.theme.colorBg};
   transition: background-color 200ms linear, color 200ms linear;
   text-align: center;
`
