<script>

export default {
  name: 'ResumoInscricoes',
  props: { inscricoes: { type: Array, required: true } },
  emits: ['cancelar'],
}
</script>

<template>
<p>Inscrições: {{ inscricoes.length }}</p><p v-if="!inscricoes.length">Sem inscrições</p><ul><li v-for="inscricao in inscricoes" :key="inscricao.id">{{ inscricao.titulo }} <button @click="$emit('cancelar', inscricao.id)">Cancelar</button></li></ul>
</template>
