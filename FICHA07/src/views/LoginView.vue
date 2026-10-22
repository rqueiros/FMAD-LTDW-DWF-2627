<script>
export default {
  name: 'LoginView',
  methods: {
    entrar() {
      // Autenticação simulada para o exercício; não requer credenciais.
      sessionStorage.setItem('autenticado', 'true')
      this.$router.push({ name: 'inscricao' })
    },
  },
}
</script>
<template>
  <h1>Entrar</h1>
  <p>Inicia uma sessão de demonstração para aceder à inscrição.</p>
  <button type="button" @click="entrar">Entrar</button>
</template>
