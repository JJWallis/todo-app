export interface TodoContext {
   todos: Todo[]
   addTodo: (todo: any) => void
   handleRemoveTodo: (id: string) => void
   handleClearCompleted: () => void
   handleTodosVisibility: (active?: string, completed?: string) => void
   handleCompletedTodo: (id: string) => void
}

export interface Todo {
   id: string
   value: string
   isCompleted: boolean
   invisible: boolean
}
