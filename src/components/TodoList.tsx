import React from 'react'
import List from './List'
import Todo from './Todo'
import TodoSummary from './TodoSummary'

const TodoList: React.FC = () => {
   return (
      <List>
         <Todo />
         <TodoSummary />
      </List>
   )
}

export default TodoList
