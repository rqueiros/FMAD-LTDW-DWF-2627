<script>
import { workshops } from '../data/workshops'

export default {
  name: 'PainelView',
  data() {
    return { workshops }
  },
}
</script>
<template>
  <h1>Painel</h1>
  <p>Workshops disponíveis: {{ workshops.length }}</p>
</template>
