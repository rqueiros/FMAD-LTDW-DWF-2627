<script>
import { entrar } from '../services/estado'
export default {
  props: { estado: { type: Object, required: true } },
  data() { return { email: '', palavraPasse: '', erro: '' } },
  methods: {
    submeter() {
      this.erro = ''
      try { this.estado.utilizador = entrar(this.email, this.palavraPasse); this.estado.mensagem = ''; this.$router.push({ name: 'catalogo' }) }
      catch (erro) { this.erro = erro.message }
    },
  },
}
</script>
<template>
  <section class="formulario"><h1>Iniciar sessão</h1><p>Aceda ao seu catálogo e às séries vistas.</p>
    <form @submit.prevent="submeter">
      <label for="email">Email</label><input id="email" v-model="email" type="email" autocomplete="username" required>
      <label for="palavraPasse">Palavra-passe</label><input id="palavraPasse" v-model="palavraPasse" type="password" autocomplete="current-password" required>
      <p v-if="erro" class="erro" role="alert">{{ erro }}</p><button type="submit">Entrar</button>
    </form><p>Ainda não tem conta? <RouterLink :to="{ name: 'register' }">Registar</RouterLink></p>
  </section>
</template>
