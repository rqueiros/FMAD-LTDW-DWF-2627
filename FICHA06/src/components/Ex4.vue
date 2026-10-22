<script>
import AjustadorQuantidade from './AjustadorQuantidade.vue'
export default {
  name: 'Ex4',
  components: { AjustadorQuantidade },
  data() { return { quantidade: 1, preco: 12.5 } },
  computed: { total() { return this.quantidade * this.preco } },
  // O pai envia quantidade por prop. O filho emite a alteração por evento.
  // Só o pai modifica os dados e garante o mínimo, mesmo que receba -1 em 1.
  methods: { alterarQuantidade(valor) { this.quantidade = Math.max(1, this.quantidade + valor) } },
}
</script>

<template>
<AjustadorQuantidade :quantidade="quantidade" @alterar-quantidade="alterarQuantidade" /><p>Preço unitário: 12,50 €</p><p>Total: {{ total.toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' }) }}</p>
</template>
