<script>

export default {
  name: 'Ex5',
  data() { return { ativo: true, tamanho: '200px', titulo: 'Imagem do Vue.js' } },
}
</script>

<template>
<img src="/vue.svg" alt="Logótipo do Vue" v-bind:width="tamanho" v-bind:title="titulo" v-bind:class="{ ativo: ativo }">
<p>Altera ativo no Vue DevTools para observar o contorno.</p>
</template>

<style scoped>
.ativo { outline: 4px solid #23815b; padding: 1rem; border-radius: 10px; }
</style>
