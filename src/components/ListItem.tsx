import styled, { css } from 'styled-components'

type ListItemProps = {
   todo?: boolean
   darkMode?: boolean
}

const ListItem = styled.li<ListItemProps>`
   list-style: none;
   padding: 0;
   margin: 0 10px;
   ${(props) =>
      props.todo &&
      css`
         width: 100%;
         background-color: white;
         border-bottom: 0.5px solid lightgrey;
         padding: 1rem 0.7rem;
         margin: 0;
         position: relative;
      `}
`

export default ListItem
