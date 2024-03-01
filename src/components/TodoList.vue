<script setup lang="ts">
import type {TodoListItem, TodoListModel} from '../models/TodoListModel'
const props = defineProps<{
  todoList: TodoListItem[]
}>()
</script>

<template>
  <div>
    <table>
      <thead>
        <th>Id</th>
        <th>Name</th>
        <th>Description</th>
      </thead>
      <tbody>
        <!-- Loop through todoList and display each item -->
        <tr v-for="todo in todoList" :key="todo.id">
          <td>{{ todo.id }}</td>
          <td>{{ todo.name }}</td>
          <td>{{ todo.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  </template>