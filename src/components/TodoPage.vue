<template>
  <div class="max-w-md mx-auto mt-6">
    <!-- Tabs -->
    <div class="flex border-b mb-4">
      <!-- All Tasks Tab -->
      <button
        class="flex-1 py-2 text-center"
        :class="activeTab === 'all' ? 'border-b-2 border-blue-600 font-semibold' : ''"
        @click="activeTab = 'all'"
      >
        All Tasks ({{ store.todos.length }})
      </button>

      <!-- Pending Tasks Tab -->
      <button
        class="flex-1 py-2 text-center"
        :class="activeTab === 'pending' ? 'border-b-2 border-blue-600 font-semibold' : ''"
        @click="activeTab = 'pending'"
      >
        Pending Tasks ({{ store.pendingTodos.length }})
      </button>

      <!-- Completed Tasks Tab -->
      <button
        class="flex-1 py-2 text-center"
        :class="activeTab === 'completed' ? 'border-b-2 border-blue-600 font-semibold' : ''"
        @click="activeTab = 'completed'"
      >
        Completed Tasks ({{ store.completedTodos.length }})
      </button>
    </div>

    <!-- Task Lists -->
    <div v-if="activeTab === 'all'">
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

    <div v-else-if="activeTab === 'pending'">
      <div
        v-for="todo in store.pendingTodos"
        :key="todo.id"
        class="flex items-center justify-between p-2 border-b"
      >
        <div class="flex items-center gap-2">
          <input
            type="checkbox"
            :checked="todo.completed"
            @change="store.toggleTodo(todo.id)"
          />
          <span>{{ todo.text }}</span>
        </div>
        <button @click="store.deleteTodo(todo.id)" class="text-red-500">✕</button>
      </div>
    </div>

    <div v-else>
      <div
        v-for="todo in store.completedTodos"
        :key="todo.id"
        class="flex items-center justify-between p-2 border-b"
      >
        <div class="flex items-center gap-2">
          <input
            type="checkbox"
            :checked="todo.completed"
            @change="store.toggleTodo(todo.id)"
          />
          <span class="line-through text-gray-400">{{ todo.text }}</span>
        </div>
        <button @click="store.deleteTodo(todo.id)" class="text-red-500">✕</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from '../stores/todoStore'

// Pinia store instance to access todos and actions
const store = useTodoStore()

// Reactive state for tracking active tab, default to 'all'
const activeTab = ref('all')
</script>
