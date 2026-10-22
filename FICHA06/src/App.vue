<script>
import Ex1 from './components/Ex1.vue'
import Ex2 from './components/Ex2.vue'
import Ex3 from './components/Ex3.vue'
import Ex4 from './components/Ex4.vue'
import Ex5 from './components/Ex5.vue'
import Ex6 from './components/Ex6.vue'
import Ex7 from './components/Ex7.vue'
import Ex8 from './components/Ex8.vue'

export default {
  name: 'App',
  components: { Ex1, Ex2, Ex3, Ex4, Ex5, Ex6, Ex7, Ex8 },
  data() {
    return { selecionado: 'Ex1', exercicios: [
  {
    "componente": "Ex1",
    "titulo": "1. Estado independente"
  },
  {
    "componente": "Ex2",
    "titulo": "2. Props estáticas e dinâmicas"
  },
  {
    "componente": "Ex3",
    "titulo": "3. Validação de props"
  },
  {
    "componente": "Ex4",
    "titulo": "4. Eventos do filho para o pai"
  },
  {
    "componente": "Ex5",
    "titulo": "5. Arrays e payload"
  },
  {
    "componente": "Ex6",
    "titulo": "6. Slot normal"
  },
  {
    "componente": "Ex7",
    "titulo": "7. Slots com nome"
  },
  {
    "componente": "Ex8",
    "titulo": "8. Aplicação de workshops"
  }
] }
  },
}
</script>

<template>
  <header>
    <h1>Ficha 06</h1>
    <p>Vue 3 · Options API</p>
    <label for="exercicio">Exercício</label>
    <select id="exercicio" v-model="selecionado">
      <option v-for="exercicio in exercicios" :key="exercicio.componente" :value="exercicio.componente">{{ exercicio.titulo }}</option>
    </select>
  </header>
  <main>
    <!-- Cada exercício é independente. A mudança desmonta o anterior e repõe o estado. -->
    <component :is="selecionado" />
  </main>
</template>
