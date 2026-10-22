<script>

export default {
  name: 'AjustadorQuantidade',
  props: { quantidade: { type: Number, required: true } },
  emits: ['alterar-quantidade'],
  methods: { alterar(valor) { this.$emit('alterar-quantidade', valor) } },
}
</script>

<template>
<p>Quantidade: {{ quantidade }}</p><button @click="alterar(1)">+</button><button @click="alterar(-1)" :disabled="quantidade === 1">-</button>
</template>
