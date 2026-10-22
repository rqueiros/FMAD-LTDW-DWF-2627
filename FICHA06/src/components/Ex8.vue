<script>
import WorkshopCard from './WorkshopCard.vue'
import ResumoInscricoes from './ResumoInscricoes.vue'
import CaixaSecao from './CaixaSecao.vue'
import { workshops } from '../data/workshops'
export default {
  name: 'Ex8',
  components: { WorkshopCard, ResumoInscricoes, CaixaSecao },
  data() { return { workshops: workshops.map(item => ({ ...item })), inscricoes: [] } },
  methods: {
    estaInscrito(id) { return this.inscricoes.some(item => item.id === id) },
    inscrever(id) {
      const workshop = this.workshops.find(item => item.id === id)
      if (workshop && !this.estaInscrito(id)) this.inscricoes.push({ id: workshop.id, titulo: workshop.titulo })
    },
    cancelar(id) { this.inscricoes = this.inscricoes.filter(item => item.id !== id) },
  },
}
</script>

<template>
<CaixaSecao><template #cabecalho><h2>Catálogo de workshops</h2></template>
<WorkshopCard v-for="workshop in workshops" :key="workshop.id" :workshop="workshop" :inscrito="estaInscrito(workshop.id)" @inscrever="inscrever" /></CaixaSecao>
<CaixaSecao><template #cabecalho><h2>Resumo das inscrições</h2></template><ResumoInscricoes :inscricoes="inscricoes" @cancelar="cancelar" /><template #rodape><button @click="inscricoes = []">Limpar inscrições</button></template></CaixaSecao>
</template>
