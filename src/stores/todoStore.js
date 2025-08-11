import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: JSON.parse(localStorage.getItem('todos')) || [], // Load from localStorage
  }),
  getters: {
    completedTodos: (state) => state.todos.filter(todo => todo.completed),
    pendingTodos: (state) => state.todos.filter(todo => !todo.completed),
  },
  actions: {
    saveToLocalStorage() {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    },
    addTodo(text) {
      this.todos.push({
        id: Date.now(),
        text,
        completed: false
      })
      this.saveToLocalStorage()
    },
    toggleTodo(id) {
      const todo = this.todos.find(t => t.id === id)
      if (todo) todo.completed = !todo.completed
      this.saveToLocalStorage()
    },
    deleteTodo(id) {
      this.todos = this.todos.filter(t => t.id !== id)
      this.saveToLocalStorage()
    }
  }
})
