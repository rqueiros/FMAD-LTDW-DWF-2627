<script>
import { mapStores } from 'pinia'
import { useTodoStore } from '../stores/todo.js'
export default {
  data: () => ({ text: '' }),
  computed: { ...mapStores(useTodoStore) },
  methods: {
    submit() {
      this.todoStore.addTodo(this.text)
      this.text = ''
    },
  },
}
</script>
<template>
  <section><h2>2 · Tarefas</h2>
    <form @submit.prevent="submit">
      <label>Nova tarefa <input v-model="text" required></label>
      <button :disabled="!text.trim()">Adicionar tarefa</button>
    </form>
    <p>{{ todoStore.completedCount }} concluídas · {{ todoStore.pendingTodos.length }} pendentes · {{ todoStore.totalCount }} no total</p>
    <p v-if="!todoStore.totalCount">A lista está vazia.</p>
    <ul v-else><li v-for="todo in todoStore.todos" :key="todo.id">
      <span :class="{ done: todo.completed }">{{ todo.text }}</span>
      <button @click="todoStore.toggleTodo(todo.id)">{{ todo.completed ? 'Marcar como pendente' : 'Concluir' }}</button>
      <button @click="todoStore.removeTodo(todo.id)">Remover</button>
    </li></ul>
  </section>
</template>
