<template>
  <div class="flex gap-2 max-w-md mx-auto mt-6 ">
    <input
      v-model="newTodo"
      type="text"
      placeholder="Add a new task..."
      class="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
      @keyup.enter="add"
    />
    <button
      @click="add"
      class="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold px-5 py-2 rounded-md transition duration-150 "
    >
      Add
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from '../stores/todoStore'

const store = useTodoStore()
const newTodo = ref('')

function add() {
  if (newTodo.value.trim()) {
    store.addTodo(newTodo.value)
    newTodo.value = ''
  }
}
</script>
