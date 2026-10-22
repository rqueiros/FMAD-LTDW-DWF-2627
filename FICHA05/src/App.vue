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
    "titulo": "1. Contador com eventos"
  },
  {
    "componente": "Ex2",
    "titulo": "2. Parâmetros e evento"
  },
  {
    "componente": "Ex3",
    "titulo": "3. Propagação e modificadores"
  },
  {
    "componente": "Ex4",
    "titulo": "4. Teclado e rato"
  },
  {
    "componente": "Ex5",
    "titulo": "5. Perfil com v-model"
  },
  {
    "componente": "Ex6",
    "titulo": "6. Seleções e valores dinâmicos"
  },
  {
    "componente": "Ex7",
    "titulo": "7. Modificadores de v-model"
  },
  {
    "componente": "Ex8",
    "titulo": "8. Inscrição e referências ao DOM"
  }
] }
  },
}
</script>

<template>
  <header>
    <h1>Ficha 05</h1>
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
