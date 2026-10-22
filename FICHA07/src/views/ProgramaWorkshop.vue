<script>
export default {
  name: 'ProgramaWorkshop',
  computed: {
    topicos() {
      return Number(this.$route.params.id) === 1
        ? ['Dados reativos e diretivas', 'Eventos e formulários', 'Componentes e propriedades']
        : ['Rotas e parâmetros', 'Rotas aninhadas e vistas com nome', 'Guardas de navegação']
    },
  },
}
</script>
<template>
  <h2>Programa</h2>
  <ol><li v-for="topico in topicos" :key="topico">{{ topico }}</li></ol>
</template>
