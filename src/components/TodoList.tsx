import React, { useContext } from 'react'
import { Context } from '../App'
import Todo from './Todo'
import List from './List'
import TodoSummary from './TodoSummary'

const TodoList: React.FC = () => {
   const context = useContext<any>(Context)

   {
      // render() prop passed to this component - calls to render version of list
      // conditional ternary for params + return normal todos after if those don't run
      // render() will take params + return version of list post logic
      // useEffect() to load normal todos on 1st load (might not need - render() synchronously run to discover children)
      // Props.children below (passed from Main parent):
      /* parent component - Todo map() logic over list from App */
      // put into State?
   }

   return (
      <List>
         {context.todos.map((todo: any) => (
            <Todo key={todo.key} todo={todo} />
         ))}
         <TodoSummary />
      </List>
   )
}

export default TodoList
