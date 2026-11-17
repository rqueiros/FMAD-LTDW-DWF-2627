<script>
import { estaVista, marcarVista } from '../services/estado'
export default {
  props: { estado: { type: Object, required: true } },
  data() { return { erro: '' } },
  computed: {
    // Depender de params.id permite reutilizar a mesma instância noutra série.
    serie() { return this.estado.series.find(s => String(s.id) === this.$route.params.id) },
    vista() { return this.serie && estaVista(this.estado, this.serie.id) },
  },
  watch: { '$route.params.id'() { this.erro = '' } },
  methods: { marcar() { try { marcarVista(this.estado, this.serie.id) } catch (erro) { this.erro = erro.message } } },
}
</script>
<template>
  <RouterLink :to="{ name: 'catalogo' }">← Voltar ao catálogo</RouterLink>
  <article v-if="serie" class="detalhe">
    <img :src="serie.imagem" :alt="`Capa de ${serie.titulo}`" @error="$event.target.src = '/capa.svg'">
    <div><p class="sobretitulo">{{ serie.categoria }} · {{ serie.plataforma }}</p><h1>{{ serie.titulo }}</h1><p>{{ serie.sinopse }}</p><p>{{ serie.ano }} · {{ serie.temporadas }} temporada(s)</p>
      <button :disabled="vista" @click="marcar">{{ vista ? 'Vista' : 'Marcar como vista' }}</button><p v-if="erro" class="erro" role="alert">{{ erro }}</p>
    </div>
  </article><section v-else class="vazio"><h1>Série não encontrada</h1><p>O identificador não existe ou a série foi removida.</p></section>
</template>
