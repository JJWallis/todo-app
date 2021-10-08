import styled, { css } from 'styled-components'

type InputProps = {
   newTodo?: boolean
   checkbox?: boolean
   darkMode?: boolean
}

const Input = styled.input<InputProps>`
   cursor: pointer;
   ${(props) =>
      props.checkbox &&
      css`
         opacity: 0.5;
         position: absolute;
         inset: 0;
         margin: auto;
      `}
   ${(props) =>
      props.newTodo &&
      css`
         opacity: 1;
         width: 100%;
         border-radius: 5px;
         padding-block: 1.2rem;
         outline: none;
         border: none;
      `}
`

export default Input
