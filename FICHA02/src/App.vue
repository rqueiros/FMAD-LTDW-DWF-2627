<script>
import LifeCycle from './components/LifeCycle.vue'

export default {
  name: 'App',
  components: { LifeCycle },
  data() {
    return { selecionado: 'LifeCycle', exercicios: [
  {
    "componente": "LifeCycle",
    "titulo": "1. Ciclo de vida"
  }
] }
  },
}
</script>

<template>
  <header>
    <h1>Ficha 02</h1>
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
