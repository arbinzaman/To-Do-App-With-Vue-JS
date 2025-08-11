<template>
  <div>
    <div
      v-for="todo in store.todos"
      :key="todo.id"
      class="flex items-center justify-between p-2 border-b"
    >
      <div class="flex items-center gap-2">
        <input
          type="checkbox"
          :checked="todo.completed"
          @change="store.toggleTodo(todo.id)"
        />

        <span :class="{ 'line-through text-gray-400': todo.completed }">
          {{ todo.text }}
        </span>
      </div>
      <button @click="store.deleteTodo(todo.id)" class="text-red-500">✕</button>
    </div>
  </div>
</template>

<script setup>
import { useTodoStore } from "../stores/todoStore";
const store = useTodoStore();
</script>
