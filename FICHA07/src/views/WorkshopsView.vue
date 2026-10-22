<script>
import { workshops } from '../data/workshops'

export default {
  name: 'WorkshopsView',
  data() {
    return { workshops, id: '', mensagem: '' }
  },
  methods: {
    abrir() {
      const workshop = this.workshops.find((item) => item.id === Number(this.id))
      if (!workshop) {
        this.mensagem = 'Workshop não encontrado. Introduza o id 1 ou 2.'
        return
      }
      this.mensagem = ''
      this.$router.push({ name: 'workshop-resumo', params: { id: workshop.id } })
    },
  },
}
</script>

<template>
  <h1>Catálogo de workshops</h1>
  <p>Escolhe um workshop para consultar os detalhes.</p>
  <ul>
    <li v-for="workshop in workshops" :key="workshop.id">
      <RouterLink :to="{ name: 'workshop-resumo', params: { id: workshop.id } }">
        {{ workshop.titulo }}
      </RouterLink>
      — id {{ workshop.id }} · {{ workshop.vagas }} vagas
    </li>
  </ul>
  <form @submit.prevent="abrir">
    <label for="workshop-id">Id do workshop</label>
    <input id="workshop-id" v-model="id" type="number" step="1" required />
    <button type="submit">Abrir</button>
  </form>
  <p v-if="mensagem" role="alert">{{ mensagem }}</p>
</template>
