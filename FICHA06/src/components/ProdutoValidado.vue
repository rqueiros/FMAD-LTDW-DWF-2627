<script>

export default {
  name: 'ProdutoValidado',
  props: {
    nome: { type: String, required: true },
    preco: { type: Number, required: true, validator: valor => valor > 0 },
    moeda: { type: String, default: '€' },
  },
}
</script>

<template>
<article class="caixa"><h2>{{ nome }}</h2><p>{{ preco.toLocaleString('pt-PT', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }} {{ moeda }}</p></article>
</template>
