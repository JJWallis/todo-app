import styled, { css } from 'styled-components'

type InputProps = {
   newTodo?: boolean
   darkMode?: boolean
}

const Input = styled.input<InputProps>`
   opacity: 1;
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
