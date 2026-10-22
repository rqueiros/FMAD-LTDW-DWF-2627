<script>

export default {
  name: 'Ex7',
  data() { return { temperaturas: [21, 23, 22, 19, 20, 24, 25], dias: ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado', 'Domingo'] } },
}
</script>

<template>
<ul><li v-for="(temperatura, i) in temperaturas" :key="dias[i]">{{ dias[i] }}: {{ temperatura }} °C</li></ul>
</template>
