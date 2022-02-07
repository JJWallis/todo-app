export interface Todo {
   id: string
   value: string
   isCompleted: boolean
   invisible: boolean
}

export type TodoActions = {
   type: 'ADD_TODO'
   todo: Todo
}
