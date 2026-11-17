<script>
import { mapStores } from 'pinia'
import { useShoppingCartStore } from '../stores/cart.js'
const euros = new Intl.NumberFormat('pt-PT', { style: 'currency', currency: 'EUR' })
export default {
  data: () => ({ products: [{ name: 'Caderno', price: 350 }, { name: 'Lápis', price: 75 }] }),
  computed: { ...mapStores(useShoppingCartStore) },
  methods: { formatPrice(cents) { return euros.format(cents / 100) } },
}
</script>
<template>
  <section><h2>3 · Carrinho de compras</h2>
    <button v-for="product in products" :key="product.name" @click="shoppingCartStore.addItem(product)">
      Adicionar {{ product.name }} ({{ formatPrice(product.price) }})
    </button>
    <p v-if="!shoppingCartStore.cartItems.length">O carrinho está vazio.</p>
    <ul v-else><li v-for="item in shoppingCartStore.cartItems" :key="item.id">
      {{ item.name }} · {{ formatPrice(item.price) }}
      <button @click="shoppingCartStore.removeItem(item.id)">Remover</button>
    </li></ul>
    <strong>Total: {{ formatPrice(shoppingCartStore.total) }}</strong>
  </section>
</template>
