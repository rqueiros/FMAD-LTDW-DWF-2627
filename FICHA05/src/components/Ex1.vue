<script>

export default {
  name: 'Ex1',
  data() { return { contador: 0 } },
  methods: { diminuir() { this.alterar(-1) }, repor() { this.contador = 0 }, alterar(valor) { this.contador = Math.max(0, this.contador + valor) } },
}
</script>

<template>
<p>Contador: {{ contador }}</p><button v-on:click="contador++">Aumentar</button><button @click="diminuir">Diminuir</button><button @click="repor">Repor</button><button @click="alterar(5)">+5</button><button @click="alterar(-5)">-5</button>
</template>
