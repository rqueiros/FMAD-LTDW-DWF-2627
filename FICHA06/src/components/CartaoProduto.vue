<script>

export default {
  name: 'CartaoProduto',
  // O valor estático preco="4.562" é uma string; o dinâmico é um número.
  props: { nome: String, preco: [String, Number] },
}
</script>

<template>
<article class="caixa"><h2>{{ nome }}</h2><p>{{ Number(preco).toLocaleString('pt-PT', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }} €</p></article>
</template>
