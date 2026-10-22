<script>
export default {
  name: 'ResumoWorkshop',
  computed: {
    descricao() {
      return Number(this.$route.params.id) === 1
        ? 'Aprende a construir interfaces reativas com Vue 3 e Options API.'
        : 'Aprende a organizar uma SPA com rotas, parâmetros e guardas de navegação.'
    },
  },
}
</script>
<template>
  <h2>Informação geral</h2>
  <p>{{ descricao }}</p>
</template>
