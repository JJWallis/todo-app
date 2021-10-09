import styled, { css } from 'styled-components'

type InputProps = {
   newTodo?: boolean
   checkboxTheme?: boolean
   checkboxTodo?: boolean
}

const Input = styled.input<InputProps>`
   cursor: pointer;
   ${(props) =>
      props.checkboxTheme &&
      css`
         opacity: 0;
         position: absolute;
         inset: 0;
         margin: auto;
      `}
   ${(props) =>
      props.checkboxTodo &&
      css`
         position: absolute;
         z-index: 3;
         top: 85px;
         left: 20px;
      `}
   ${(props) =>
      props.newTodo &&
      css`
         position: relative;
         opacity: 1;
         width: 100%;
         border-radius: 5px;
         padding: 1.2rem 4rem;
         margin-top: 1rem;
         outline: none;
         border: none;
         color: ${(props) => props.theme.fcTodo};
         background-color: ${(props) => props.theme.colorFg};
         transition: background-color 200ms linear, color 200ms linear;
         ::placeholder {
            color: ${(props) => props.theme.fcTodo};
         }
      `}
`

export default Input
