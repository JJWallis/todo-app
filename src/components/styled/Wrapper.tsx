import styled, { css } from 'styled-components'

type WrapperProps = {
   body?: boolean
   todos?: boolean
}

const Wrapper = styled.div<WrapperProps>`
   font-family: ${(props) => props.theme.fontFamily};
   ${(props) =>
      props.body &&
      css`
         display: flex;
         flex-direction: column;
         min-height: 100vh;
      `}
   ${(props) =>
      props.todos &&
      css`
         width: 90%;
         max-width: 600px;
         position: absolute;
         top: 5%;
         left: 50%;
         transform: translateX(-50%);
      `}
`

export default Wrapper
