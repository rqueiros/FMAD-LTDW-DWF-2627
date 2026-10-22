<script>
import Ex1 from './components/Ex1.vue'
import Ex2 from './components/Ex2.vue'
import Ex3 from './components/Ex3.vue'
import Ex4 from './components/Ex4.vue'
import Ex5 from './components/Ex5.vue'
import Ex6 from './components/Ex6.vue'
import Ex7 from './components/Ex7.vue'
import Ex8 from './components/Ex8.vue'
import Ex9 from './components/Ex9.vue'
import Ex10 from './components/Ex10.vue'
import Ex11 from './components/Ex11.vue'
import Ex12 from './components/Ex12.vue'

export default {
  name: 'App',
  components: { Ex1, Ex2, Ex3, Ex4, Ex5, Ex6, Ex7, Ex8, Ex9, Ex10, Ex11, Ex12 },
  data() {
    return { selecionado: 'Ex1', exercicios: [
  {
    "componente": "Ex1",
    "titulo": "1. Interpolação de texto"
  },
  {
    "componente": "Ex2",
    "titulo": "2. Expressões JavaScript"
  },
  {
    "componente": "Ex3",
    "titulo": "3. Interpolação de HTML"
  },
  {
    "componente": "Ex4",
    "titulo": "4. Atributos dinâmicos"
  },
  {
    "componente": "Ex5",
    "titulo": "5. Diretiva v-bind"
  },
  {
    "componente": "Ex6",
    "titulo": "6. Diretiva v-if"
  },
  {
    "componente": "Ex7",
    "titulo": "7. Diretiva v-on"
  },
  {
    "componente": "Ex8",
    "titulo": "8. Modificador prevent"
  },
  {
    "componente": "Ex9",
    "titulo": "9. Outros modificadores"
  },
  {
    "componente": "Ex10",
    "titulo": "10. Shorthand de v-bind"
  },
  {
    "componente": "Ex11",
    "titulo": "11. Shorthand de v-on"
  },
  {
    "componente": "Ex12",
    "titulo": "12. Cartão de estudante"
  }
] }
  },
}
</script>

<template>
  <header>
    <h1>Ficha 03</h1>
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
