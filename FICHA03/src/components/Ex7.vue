<script>

export default {
  name: 'Ex7',
  data() { return { contador: 0 } },
  methods: { incrementar() { this.contador++ }, decrementar() { this.contador-- }, repor() { this.contador = 0 } },
}
</script>

<template>
<p>Contador: {{ contador }}</p><button v-on:click="incrementar">+</button><button v-on:click="decrementar">-</button><button v-on:click="repor">Reset</button>
</template>
