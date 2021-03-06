import styled, { css } from 'styled-components'

type FlexProps = { secondary?: boolean }

const FlexContainer = styled.div<FlexProps>`
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: transparent;
   ${(props) =>
      props.secondary &&
      css`
         background-color: ${(props) => props.theme.colorFg};
         transition: background-color 200ms linear;
         padding-inline: 1rem;
         border-radius: 0 0 5px 5px;
         border-top: 0.1px solid ${(props) => props.theme.hover};
      `}
`

export default FlexContainer
