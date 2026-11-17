import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({ todos: [], nextId: 1 }),
  getters: {
    completedTodos: state => state.todos.filter(todo => todo.completed),
    pendingTodos: state => state.todos.filter(todo => !todo.completed),
    completedCount() { return this.completedTodos.length },
    totalCount: state => state.todos.length,
  },
  actions: {
    addTodo(text) {
      if (text.trim()) this.todos.push({ id: this.nextId++, text: text.trim(), completed: false })
    },
    removeTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    toggleTodo(id) {
      const todo = this.todos.find(todo => todo.id === id)
      if (todo) todo.completed = !todo.completed
    },
  },
})
