<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl">
      <h1 class="text-2xl font-bold mb-4">✅ Vue To-Do</h1>
      <TodoInput />
      <!-- <TodoList /> -->
      <TodoPage />
    </div>
  </div>
</template>

<script setup>
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoPage from './components/TodoPage.vue';
</script>
