import { VisibleTodos } from '../components/TodoFooter'

export interface Todo {
   id: string
   value: string
   isCompleted: boolean
   invisible: boolean
}

export type TodoActions =
   | {
        type: 'ADD_TODO'
        todo: Todo
     }
   | {
        type: 'REMOVE_TODO'
        id: string
     }
   | {
        type: 'TOGGLE_TODO'
        id: string
     }
   | {
        type: 'CLEAR_COMPLETED'
     }
   | {
        type: 'TOGGLE_ALL'
        visible: VisibleTodos
     }

// const handleTodosVisibility = (visible: VisibleTodos) => {
//    const currentTodos = [...todos]
//    const isActive = visible === 'active'
//    currentTodos.forEach((todo) => (todo.invisible = false))
//    if (visible === 'all') {
//       setTodos(currentTodos)
//       return
//    }
//    currentTodos.forEach(
//       (todo) => todo.isCompleted === isActive && (todo.invisible = true)
//    )
//    setTodos(currentTodos)
// }
