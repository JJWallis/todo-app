import styled, { css } from 'styled-components'
import Tick from '../assets/icon-check.svg'

type ListItemProps = {
   todo?: boolean
   invisible?: boolean
   completed?: boolean
}

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
         padding: 1rem 3.5rem;
         margin: 0;
         position: relative;
         ${(props) =>
            !props.invisible &&
            css`
          &::before {
            content: '';
            position: absolute;
            top: 11px;
            left: 11px;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            padding: 1rem;
            border: 1px solid ${(props) => props.theme.fcTodo};
            z-index: 2;
            transition: background-size 200ms ease-in;
            ${(props) =>
               props.completed &&
               css`
                  background-image: linear-gradient(
                        360deg,
                        hsl(280, 87%, 65%),
                        hsl(192, 100%, 67%)
                     ),
                     url(${Tick});
               `}
         `}
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
