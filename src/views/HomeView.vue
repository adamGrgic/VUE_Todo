<script setup lang="ts">
import TodoList from '../components/TodoList.vue'
import AddTodoComponent from '../components/AddTodoComponent.vue'
import type {TodoListItem} from '../models/TodoListModel'
const todoListData: TodoListItem[] = [{
  id: 1,
  name: "Walk Dog",
  description: "Remember to bring poop bag",
},
{
  id: 2,
  name: "Take out trash",
  description: "must be done today or I have to wait until next week"
},
{
  id: 3,
  name: "Clean dishes",
  description: "they aint gonna clean themselves"
},
{
  id: 4,
  name: "turn in parking receipts",
  description: "get that money"
}
]

</script>

<template>
  <main>
    <AddTodoComponent />
    <TodoList :todoList="todoListData"/>
  </main>
</template>
