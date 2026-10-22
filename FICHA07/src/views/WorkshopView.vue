<script>
import { workshops } from '../data/workshops'

export default {
  name: 'WorkshopView',
  computed: {
    workshop() {
      // Os parâmetros do URL são strings: converter antes da comparação.
      return workshops.find((item) => item.id === Number(this.$route.params.id))
    },
  },
  watch: {
    '$route.params.id'(novoId) {
      console.log('Novo id do workshop:', novoId)
    },
  },
  // mounted só executa na montagem. Ao mudar apenas o id, o router reutiliza
  // a instância; computed atualiza os dados e watch acompanha o novo parâmetro.
  methods: {
    voltar() {
      this.$router.go(-1)
    },
    substituirPorInicio() {
      // push acrescenta uma entrada; replace substitui a entrada atual.
      // Início -> catálogo -> detalhe -> replace(início): Anterior volta ao catálogo.
      this.$router.replace({ name: 'inicio' })
    },
  },
}
</script>

<template>
  <template v-if="workshop">
    <h1>{{ workshop.titulo }}</h1>
    <p>Vagas disponíveis: {{ workshop.vagas }}</p>
    <nav aria-label="Secções do workshop">
      <RouterLink :to="{ name: 'workshop-resumo', params: { id: workshop.id } }">Resumo</RouterLink>
      <RouterLink :to="{ name: 'workshop-programa', params: { id: workshop.id } }">Programa</RouterLink>
      <RouterLink :to="{ name: 'workshop-formadores', params: { id: workshop.id } }">Formadores</RouterLink>
    </nav>
    <section class="detalhe"><RouterView /></section>
  </template>
  <template v-else>
    <h1>Workshop não encontrado</h1>
    <RouterLink :to="{ name: 'workshops' }">Regressar ao catálogo</RouterLink>
  </template>
  <h2>Outros workshops</h2>
  <nav aria-label="Escolher workshop">
    <RouterLink :to="{ name: 'workshop-resumo', params: { id: 1 } }">Workshop 1</RouterLink>
    <RouterLink :to="{ name: 'workshop-resumo', params: { id: 2 } }">Workshop 2</RouterLink>
  </nav>
  <div class="acoes">
    <button type="button" @click="voltar">Voltar</button>
    <button type="button" @click="substituirPorInicio">Substituir por início</button>
  </div>
</template>
