
<template>
  <h1>Modelos de IA</h1>

  <p>Total: {{ store.totalModelos }} modelos | {{ store.totalTokens }} tokens</p>

  <h2>Adicionar modelo</h2>

  <form @submit.prevent="adicionar">
    <input v-model="novo.nome" placeholder="Nome" required>
    <input v-model="novo.versao" placeholder="Versão">
    <input v-model="novo.descricao" placeholder="Descrição">
    <input v-model.number="novo.tokens" type="number" min="0" placeholder="Tokens" required>
    <input v-model.number="novo.threshold" type="number" min="0" placeholder="Threshold" required>
    <button>Adicionar</button>
  </form>

  <h2>Catálogo</h2>

  <div v-for="m in store.modelos" :key="m.id" class="cartao">
    <h3>{{ m.nome }} {{ m.versao }}</h3>
    <p>{{ m.descricao }}</p>
    <p>Tokens: {{ m.tokens }} | Limite: {{ m.threshold }}</p>

    <button @click="editar(m)">Editar</button>
    <button @click="eliminar(m.id)">Eliminar</button>
    <button @click="iniciar(m.id)">Iniciar</button>
    <button @click="store.parar(m.id)">Parar</button>
  </div>

  <h2>Logs</h2>

  <p v-for="(log, i) in store.logs" :key="i" :class="log.tipo">
    {{ log.mensagem }}
  </p>
</template>

<script>
import { useModelsStore } from './stores/models'

export default {
  data() {
    return {
      store: useModelsStore(),
      novo: { nome: '', versao: '', descricao: '', tokens: 100, threshold: 20 }
    }
  },

  methods: {
    adicionar() {
      try {
        this.store.adicionar(this.novo)
        this.novo = { nome: '', versao: '', descricao: '', tokens: 100, threshold: 20 }
      } catch (e) {
        this.store.log('erro', e.message)
      }
    },

    editar(m) {
      const nome = prompt('Novo nome:', m.nome)
      if (nome === null) return

      try {
        this.store.editar(m.id, nome)
      } catch (e) {
        this.store.log('erro', e.message)
      }
    },

    eliminar(id) {
      try {
        this.store.eliminar(id)
      } catch (e) {
        this.store.log('erro', e.message)
      }
    },

    iniciar(id) {
      try {
        this.store.iniciar(id)
      } catch (e) {
        this.store.log('erro', e.message)
      }
    }
  },

  beforeUnmount() {
    this.store.modelos.forEach(m => this.store.parar(m.id))
  }
}
</script>

<style>
body { font-family: Arial; margin: 30px; }
input, button { padding: 8px; margin: 4px; }
.cartao { border: 1px solid #ccc; padding: 12px; margin: 10px 0; }
.sucesso { color: green; }
.aviso { color: orange; }
.erro { color: red; }
</style>

