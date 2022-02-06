import styled, { css } from 'styled-components'

type ListProps = {
   footer?: boolean
}

const List = styled.ul<ListProps>`
   max-height: 385px;
   overflow-y: scroll;
   width: 100%;
   border-radius: 5px 5px 0 0;
   padding: 0;
   margin: 0;
   margin-top: 1rem;
   box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
   background-color: ${(props) => props.theme.colorFg};
   transition: background-color 200ms linear;
   ${(props) =>
      props.footer &&
      css`
         border: none;
         overflow: unset;
         display: flex;
         justify-content: center;
         align-items: center;
         padding: 1rem 0;
         border-radius: 5px;
      `}
`

export default List
