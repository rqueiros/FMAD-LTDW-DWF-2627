<script>

export default {
  name: 'Ex8',
  data() { return { produtos: [{ nome: 'Teclado', preco: 35 }, { nome: 'Rato', preco: 20 }, { nome: 'Monitor', preco: 180 }, { nome: 'Webcam', preco: 55 }] } },
}
</script>

<template>
<ul><li v-for="produto in produtos" :key="produto.nome">{{ produto.nome }} - {{ produto.preco.toLocaleString('pt-PT', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) }} €</li></ul>
</template>
