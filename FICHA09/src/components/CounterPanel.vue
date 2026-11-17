<script>
import { mapStores } from 'pinia'
import { useCounterStore } from '../stores/counter.js'
export default { computed: { ...mapStores(useCounterStore) } }
</script>
<template>
  <section><h2>1 · Contador</h2>
    <p>Valor atual: <strong>{{ counterStore.count }}</strong></p>
    <button @click="counterStore.decrement()">Decrementar</button>
    <button @click="counterStore.increment()">Incrementar</button>
  </section>
</template>
