<script>
import { criarSerie, removerSerie } from '../services/estado'
const novoFormulario = () => ({ titulo: '', sinopse: '', categoria: '', plataforma: '', ano: '', temporadas: '', imagem: '' })
export default {
  props: { estado: { type: Object, required: true } },
  data() { return { formulario: novoFormulario(), erros: {}, erro: '' } },
  methods: {
    criar() {
      this.erros = {}; this.erro = ''
      const dados = { ...this.formulario }
      for (const campo of ['titulo', 'sinopse', 'categoria', 'plataforma', 'imagem']) {
        dados[campo] = dados[campo].trim()
        if (!dados[campo]) this.erros[campo] = 'Campo obrigatório.'
      }
      // Aceitar imagens HTTP(S) e caminhos locais absolutos, sem URLs executáveis.
      if (dados.imagem && !/^https?:\/\//i.test(dados.imagem) && !/^\/(?!\/)/.test(dados.imagem)) this.erros.imagem = 'Use um URL http(s) ou um caminho local como /capa.svg.'
      if (!/^\d{4}$/.test(String(dados.ano)) || Number(dados.ano) <= 0) this.erros.ano = 'Indique um ano positivo com quatro algarismos.'
      if (!Number.isInteger(Number(dados.temporadas)) || Number(dados.temporadas) <= 0) this.erros.temporadas = 'Indique um inteiro maior que zero.'
      if (Object.keys(this.erros).length) return
      dados.ano = Number(dados.ano); dados.temporadas = Number(dados.temporadas)
      try { criarSerie(this.estado, dados); this.formulario = novoFormulario(); this.estado.mensagem = 'Série criada com sucesso.' }
      catch (erro) { this.erro = erro.message }
    },
    remover(serie) {
      if (!window.confirm(`Remover «${serie.titulo}»?`)) return
      try { removerSerie(this.estado, serie.id); this.estado.mensagem = 'Série removida.' }
      catch (erro) { this.erro = erro.message }
    },
  },
}
</script>
<template>
  <h1>Administração do catálogo</h1><p>Crie novas séries ou remova registos existentes.</p>
  <div class="colunas">
    <section><h2>Nova série</h2><form novalidate @submit.prevent="criar">
      <label for="titulo">Título</label>
      <input id="titulo" v-model.trim="formulario.titulo" type="text" required>
      <small v-if="erros.titulo" class="erro">{{ erros.titulo }}</small>
      <label for="sinopse">Sinopse</label>
      <textarea id="sinopse" v-model.trim="formulario.sinopse" required rows="3"></textarea>
      <small v-if="erros.sinopse" class="erro">{{ erros.sinopse }}</small>
      <label for="categoria">Categoria</label>
      <input id="categoria" v-model.trim="formulario.categoria" type="text" required>
      <small v-if="erros.categoria" class="erro">{{ erros.categoria }}</small>
      <label for="plataforma">Plataforma</label>
      <input id="plataforma" v-model.trim="formulario.plataforma" type="text" required>
      <small v-if="erros.plataforma" class="erro">{{ erros.plataforma }}</small>
      <label for="ano">Ano</label>
      <input id="ano" v-model.number="formulario.ano" type="number" step="1" min="1000" required>
      <small v-if="erros.ano" class="erro">{{ erros.ano }}</small>
      <label for="temporadas">Número de temporadas</label>
      <input id="temporadas" v-model.number="formulario.temporadas" type="number" step="1" min="1" required>
      <small v-if="erros.temporadas" class="erro">{{ erros.temporadas }}</small>
      <label for="imagem">URL da imagem</label>
      <input id="imagem" v-model.trim="formulario.imagem" type="text" required>
      <small v-if="erros.imagem" class="erro">{{ erros.imagem }}</small>
      <p v-if="erro" class="erro" role="alert">{{ erro }}</p><button type="submit">Criar série</button>
    </form></section>
    <section><h2>Séries existentes ({{ estado.series.length }})</h2><ul class="lista-admin"><li v-for="serie in estado.series" :key="serie.id"><RouterLink :to="{ name: 'detalhe', params: { id: serie.id } }">{{ serie.titulo }}</RouterLink><button class="perigo" :aria-label="`Remover ${serie.titulo}`" @click="remover(serie)">Remover</button></li></ul><p v-if="!estado.series.length">O catálogo está vazio.</p></section>
  </div>
</template>
