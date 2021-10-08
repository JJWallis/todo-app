import styled, { css } from 'styled-components'

type ListProps = {
   footer?: boolean
}

const List = styled.ul<ListProps>`
   width: 100%;
   border-radius: 5px;
   border: 1px solid white;
   padding: 0;
   margin: 0;
   margin-top: 1rem;
   overflow: hidden;
   box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
   ${(props) =>
      props.footer &&
      css`
         border: none;
         overflow: unset;
         background-color: white;
         display: flex;
         justify-content: center;
         align-items: center;
         padding: 1rem 0;
      `}
`

export default List
