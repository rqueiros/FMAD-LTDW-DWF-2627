<script>
export default {
  name: 'FormadoresWorkshop',
  computed: {
    formadores() {
      return Number(this.$route.params.id) === 1
        ? ['Ana Silva', 'João Costa']
        : ['Maria Santos', 'Pedro Fernandes']
    },
  },
}
</script>
<template>
  <h2>Formadores</h2>
  <ul><li v-for="nome in formadores" :key="nome">{{ nome }}</li></ul>
</template>
