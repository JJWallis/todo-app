import React from 'react'
import styled from 'styled-components'
import Todo from './Todo'
import TodoSummary from './TodoSummary'

const Ul = styled.ul`
   width: 100%;
   border-radius: 5px;
   border: 1px solid white;
   padding: 0;
   margin: 0;
   margin-top: 1rem;
   overflow: hidden;
   box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
`

const TodoList: React.FC = () => {
   return (
      <Ul>
         <Todo />
         <TodoSummary />
      </Ul>
   )
}

export default TodoList
