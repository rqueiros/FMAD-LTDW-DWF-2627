<script>

export default {
  name: 'Ex7',
  data() { return { descricao: '', quantidade: 1, preco: 10, observacoes: '' } },
  // v-model acompanha input; .lazy só atualiza no evento change (ao sair do campo).
  computed: {
    valido() { return Number.isInteger(this.quantidade) && this.quantidade > 0 && typeof this.preco === 'number' && Number.isFinite(this.preco) && this.preco >= 0 },
    totalFormatado() { return (this.quantidade * this.preco).toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' }) },
  },
}
</script>

<template>
<label>Descrição <input v-model.trim="descricao"></label><p>|{{ descricao }}|</p>
<label>Quantidade <input type="number" v-model.number="quantidade"></label><label>Preço unitário <input type="number" step="0.01" v-model.number="preco"></label>
<p v-if="valido">Total: {{ totalFormatado }}</p><p v-else role="alert">Valores inválidos</p>
<label>Observações <textarea v-model.lazy="observacoes"></textarea></label><p>Valor guardado: {{ observacoes }}</p>
</template>
