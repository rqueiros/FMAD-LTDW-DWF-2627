<script>

export default {
  name: 'Contador',
  data() { return { contador: 0 } },
  methods: { aumentar() { this.contador++ }, repor() { this.contador = 0 } },
}
</script>

<template>
<div class="caixa"><p>Contador: {{ contador }}</p><button @click="aumentar">Aumentar</button><button @click="repor">Repor</button></div>
</template>
