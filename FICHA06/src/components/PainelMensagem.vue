<script>

export default {
  name: 'PainelMensagem',
  props: { titulo: String },
}
</script>

<template>
<section class="painel"><h2>{{ titulo }}</h2><slot>Sem conteúdo disponível</slot></section>
</template>

<style scoped>
.painel { padding: 1rem; margin: 1rem 0; border: 1px solid #aab8c7; border-radius: 8px; background: #f8fafc; }
</style>
