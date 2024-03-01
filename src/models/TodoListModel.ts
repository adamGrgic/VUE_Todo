export interface TodoListModel {
    todoList: TodoListItem[]
}

export interface TodoListItem {
    id: number,
    name: string,
    description: string
}