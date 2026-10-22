<script>
import CartaoProduto from './CartaoProduto.vue'
export default {
  name: 'Ex2',
  components: { CartaoProduto },
  data() { return { produto: { nome: 'Mochila', preco: 25 } } },
}
</script>

<template>
<label>Nome da mochila <input v-model="produto.nome"></label><button @click="produto.preco += 5">Aumentar preço</button>
<CartaoProduto nome="Caderno" preco="4.562" /><CartaoProduto :nome="produto.nome" :preco="produto.preco" />
</template>
