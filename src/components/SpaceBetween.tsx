import styled, { css } from 'styled-components'

type FlexProps = {
   secondary?: boolean
   darkMode?: boolean
}

const FlexContainer = styled.div<FlexProps>`
   display: flex;
   justify-content: space-between;
   align-items: center;
   background-color: transparent;
   ${(props) =>
      props.secondary &&
      css`
         background-color: white;
         padding-inline: 1rem;
      `}
`

export default FlexContainer
