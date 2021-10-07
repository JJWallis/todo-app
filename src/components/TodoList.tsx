import React from 'react'
import styled from 'styled-components'
import Todo from './Todo'

const Ul = styled.ul`
   width: 100%;
   min-height: 20rem;
   border-radius: 5px;
   border: 1px solid white;
   padding: 0;
   margin: 0;
   margin-top: 1rem;
   overflow: hidden;
`

const TodoList: React.FC = () => {
   return (
      <Ul>
         <Todo />
      </Ul>
   )
}

export default TodoList
