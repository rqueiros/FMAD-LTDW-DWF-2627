<script>
import { estaVista } from '../services/estado'
export default {
  props: { estado: { type: Object, required: true } },
  data() { return { categoria: '', plataforma: '', ordem: 'az' } },
  computed: {
    categorias() { return [...new Set(this.estado.series.map(s => s.categoria))].sort((a,b) => a.localeCompare(b, 'pt')) },
    plataformas() { return [...new Set(this.estado.series.map(s => s.plataforma))].sort((a,b) => a.localeCompare(b, 'pt')) },
    seriesFiltradas() {
      // filter cria um novo array: sort não modifica a coleção original.
      return this.estado.series.filter(s => (!this.categoria || s.categoria === this.categoria) && (!this.plataforma || s.plataforma === this.plataforma))
        .sort((a,b) => (this.ordem === 'az' ? 1 : -1) * a.titulo.localeCompare(b.titulo, 'pt'))
    },
  },
  methods: { estaVista(id) { return estaVista(this.estado, id) }, limpar() { this.categoria = ''; this.plataforma = ''; this.ordem = 'az' } },
}
</script>
<template>
  <h1>Catálogo de séries</h1><p>Escolha a próxima história ou consulte as que já viu.</p>
  <div class="filtros">
    <div><label for="filtro-categoria">Categoria</label><select id="filtro-categoria" v-model="categoria"><option value="">Todas</option><option v-for="item in categorias" :key="item">{{ item }}</option></select></div>
    <div><label for="filtro-plataforma">Plataforma</label><select id="filtro-plataforma" v-model="plataforma"><option value="">Todas</option><option v-for="item in plataformas" :key="item">{{ item }}</option></select></div>
    <div><label for="filtro-ordem">Ordenação</label><select id="filtro-ordem" v-model="ordem"><option value="az">A-Z</option><option value="za">Z-A</option></select></div>
    <button class="secundario" @click="limpar">Limpar filtros</button>
  </div>
  <p role="status">{{ seriesFiltradas.length }} resultado(s)</p>
  <div v-if="seriesFiltradas.length" class="grelha">
    <article v-for="serie in seriesFiltradas" :key="serie.id" class="cartao">
      <img :src="serie.imagem" :alt="`Capa de ${serie.titulo}`" @error="$event.target.src = '/capa.svg'">
      <div><p class="sobretitulo">{{ serie.categoria }} · {{ serie.plataforma }}</p><h2><RouterLink :to="{ name: 'detalhe', params: { id: serie.id } }">{{ serie.titulo }}</RouterLink></h2><span v-if="estaVista(serie.id)" class="etiqueta">Vista</span><p>{{ serie.ano }} · {{ serie.temporadas }} temporada(s)</p></div>
    </article>
  </div><p v-else class="vazio">Não existem séries para os filtros selecionados.</p>
</template>
