<script>

export default {
  name: 'Ex11',
  data() { return { numero: 7 } },
}
</script>

<template>
<label>Número <input type="number" v-model.number="numero"></label><ul><li v-for="n in 10" :key="n">{{ numero }} × {{ n }} = {{ numero * n }}</li></ul>
</template>
