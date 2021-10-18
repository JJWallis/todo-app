import styled, { css } from 'styled-components'

type ListItemProps = { todo?: boolean; invisible?: boolean }

const ListItem = styled.li<ListItemProps>`
   list-style: none;
   padding: 0;
   margin: 0 10px;
   cursor: pointer;
   ${(props) =>
      props.todo &&
      css`
         width: 100%;
         color: ${(props) => props.theme.fcTodo};
         background-color: ${(props) => props.theme.colorFg};
         transition: background-color 200ms linear;
         border-bottom: 0.1px solid ${(props) => props.theme.fcTodo};
         padding: 1rem 3rem;
         margin: 0;
         position: relative;
         &::before {
            content: '';
            display: block;
            position: absolute;
            top: 11px;
            left: 10px;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            padding: 1rem;
            border: 0.01px solid black;
            z-index: 2;
         }
      `}
   ${(props) =>
      props.invisible
         ? css`
              display: none;
           `
         : css`
              display: block;
           `}
`

export default ListItem
