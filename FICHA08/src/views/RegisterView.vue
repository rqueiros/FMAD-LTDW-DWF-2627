<script>
import { registar } from '../services/estado'
export default {
  props: { estado: { type: Object, required: true } },
  data() { return { nome: '', email: '', palavraPasse: '', confirmacao: '', erros: {}, erro: '' } },
  methods: {
    submeter() {
      this.erros = {}; this.erro = ''
      if (!this.nome.trim()) this.erros.nome = 'Indique o nome.'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email.trim())) this.erros.email = 'Indique um email válido.'
      if (this.palavraPasse.trim().length < 6) this.erros.palavraPasse = 'Utilize pelo menos seis caracteres, sem contar espaços nas extremidades.'
      if (!this.confirmacao || this.confirmacao !== this.palavraPasse) this.erros.confirmacao = 'As palavras-passe devem coincidir.'
      if (Object.keys(this.erros).length) return
      try {
        registar(this)
        this.estado.mensagem = 'Conta criada. Inicie sessão.'
        this.$router.push({ name: 'login' })
      } catch (erro) { this.erro = erro.message }
    },
  },
}
</script>
<template>
  <section class="formulario"><h1>Criar conta</h1><p>As novas contas têm perfil de utilizador normal.</p>
    <form novalidate @submit.prevent="submeter">
      <label for="nome">Nome</label><input id="nome" v-model="nome" autocomplete="name" required><small v-if="erros.nome" class="erro">{{ erros.nome }}</small>
      <label for="email">Email</label><input id="email" v-model="email" type="email" autocomplete="email" required><small v-if="erros.email" class="erro">{{ erros.email }}</small>
      <label for="palavraPasse">Palavra-passe</label><input id="palavraPasse" v-model="palavraPasse" type="password" autocomplete="new-password" required><small v-if="erros.palavraPasse" class="erro">{{ erros.palavraPasse }}</small>
      <label for="confirmacao">Confirmar palavra-passe</label><input id="confirmacao" v-model="confirmacao" type="password" autocomplete="new-password" required><small v-if="erros.confirmacao" class="erro">{{ erros.confirmacao }}</small>
      <p v-if="erro" class="erro" role="alert">{{ erro }}</p><button type="submit">Registar</button>
    </form><p>Já tem conta? <RouterLink :to="{ name: 'login' }">Entrar</RouterLink></p>
  </section>
</template>
