import styled, { css } from 'styled-components'

type ListItemProps = { todo?: boolean; invisible?: boolean }

const ListItem = styled.li<ListItemProps>`
   list-style: none;
   padding: 0;
   margin: 0 10px;
   ${(props) =>
      props.todo &&
      css`
         width: 100%;
         color: ${(props) => props.theme.fcTodo};
         background-color: ${(props) => props.theme.colorFg};
         transition: background-color 200ms linear;
         border-bottom: 0.1px solid ${(props) => props.theme.fcTodo};
         padding: 1rem 0.7rem;
         margin: 0;
         position: relative;
      `}
   ${(props) =>
      props.invisible &&
      css`
         display: none;
      `}
`

export default ListItem
