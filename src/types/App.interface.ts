export interface AppState {
   todos: Todo[]
   addTodo: (todo: any) => void
   handleRemoveTodo: (id: string) => void
   handleClearCompleted: () => void
   handleTodosVisibility: (
      active?: string | undefined,
      completed?: string | undefined
   ) => void
   handleCompletedTodo: (id: string) => void
}

export interface Todo {
   id: string
   key: string
   value: string
   isCompleted: boolean
   invisible: boolean
}
