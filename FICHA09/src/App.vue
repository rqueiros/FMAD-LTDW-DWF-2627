<script>
import CounterPanel from './components/CounterPanel.vue'
import TodoPanel from './components/TodoPanel.vue'
import CartPanel from './components/CartPanel.vue'
export default { components: { CounterPanel, TodoPanel, CartPanel } }
</script>
<template>
  <main><h1>Ficha 09 · Introdução ao Pinia</h1>
    <CounterPanel /><TodoPanel /><CartPanel />
  </main>
</template>
<style>
body { margin: 0; background: #f3f6f5; color: #19322b; font: 1rem/1.5 system-ui, sans-serif; }
main { max-width: 48rem; margin: auto; padding: 1rem; }
section { background: white; border: 1px solid #cad7d2; border-radius: .6rem; padding: 1.2rem; margin-bottom: 1rem; }
h2 { margin-top: 0; }
input, button { font: inherit; padding: .35rem .6rem; }
button { margin: .2rem; cursor: pointer; }
.done { text-decoration: line-through; }
li { overflow-wrap: anywhere; }
</style>
