import styled, { css } from 'styled-components'

type BtnProps = {
   summary?: 'true'
}

const Button = styled.button<BtnProps>`
   background-color: transparent;
   border: none;
   outline: none;
   cursor: pointer;
   color: ${(props) => props.theme.fcTodoFtr};
   transition: color 200ms linear;
   ${(props) =>
      props.summary &&
      css`
         padding-block: 1rem;
         font-size: 0.8rem;
      `}
`

export default Button
