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
        completed: boolean
     }
   | {
        type: 'CLEAR_COMPLETED'
     }
   | {
        type: 'TOGGLE_ALL'
        visible: VisibleTodos
     }
