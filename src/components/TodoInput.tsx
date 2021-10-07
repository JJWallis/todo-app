import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
   width: 100%;
   border-radius: 5px;
   padding-block: 1.2rem;
   outline: none;
   border: none;
`

const TodoInput: React.FC = () => {
   return <Input type="text" placeholder="Create a new todo..." />
}

export default TodoInput
