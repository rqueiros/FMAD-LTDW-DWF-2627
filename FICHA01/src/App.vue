<script>
import Ex1 from './components/Ex1.vue'
import Ex2 from './components/Ex2.vue'
import Ex3 from './components/Ex3.vue'
import Ex4 from './components/Ex4.vue'

export default {
  name: 'App',
  components: { Ex1, Ex2, Ex3, Ex4 },
  data() {
    return { selecionado: 'Ex1', exercicios: [
  {
    "componente": "Ex1",
    "titulo": "1. Hello World"
  },
  {
    "componente": "Ex2",
    "titulo": "2. Mensagem reativa"
  },
  {
    "componente": "Ex3",
    "titulo": "3. Dados do estudante"
  },
  {
    "componente": "Ex4",
    "titulo": "4. Apresentação pessoal"
  }
] }
  },
}
</script>

<template>
  <header>
    <h1>Ficha 01</h1>
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
