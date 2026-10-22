<script>
import ListaWorkshops from './ListaWorkshops.vue'
import { workshops } from '../data/workshops'
export default {
  name: 'Ex5',
  components: { ListaWorkshops },
  data() { return { workshops: workshops.map(item => ({ ...item })), favoritos: [] } },
  methods: {
    alternarFavorito(id) {
      if (!this.workshops.some(item => item.id === id)) return
      this.favoritos = this.favoritos.includes(id) ? this.favoritos.filter(item => item !== id) : [...this.favoritos, id]
    },
    removerWorkshop(id) { this.workshops = this.workshops.filter(item => item.id !== id); this.favoritos = this.favoritos.filter(item => item !== id) },
  },
}
</script>

<template>
<p>Workshops: {{ workshops.length }} · Favoritos: {{ favoritos.length }}</p><ListaWorkshops :workshops="workshops" :favoritos="favoritos" @alternar-favorito="alternarFavorito" @remover-workshop="removerWorkshop" />
</template>
