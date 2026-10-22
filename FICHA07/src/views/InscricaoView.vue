<script>
export default {
  name: 'InscricaoView',
  data() {
    return { nome: '', alterado: false, mensagem: '' }
  },
  methods: {
    editar() {
      this.alterado = true
      this.mensagem = ''
    },
    guardar() {
      this.alterado = false
      this.mensagem = 'Inscrição guardada nesta demonstração (sem servidor).'
    },
    async sair() {
      // Só terminar a sessão se a navegação for concluída. Se o utilizador
      // cancelar beforeRouteLeave, conserva tanto o texto como a sessão.
      const falha = await this.$router.push({ name: 'inicio' })
      if (!falha) sessionStorage.removeItem('autenticado')
    },
  },
  beforeRouteLeave() {
    if (this.alterado && !window.confirm('Existem alterações por guardar. Pretende sair?')) {
      return false
    }
    return true
  },
}
</script>
<template>
  <h1>Inscrição</h1>
  <p>Preenche o nome e guarda antes de sair.</p>
  <form @submit.prevent="guardar">
    <label for="nome">Nome</label>
    <input id="nome" v-model="nome" required @input="editar" />
    <button type="submit">Guardar</button>
  </form>
  <p v-if="alterado">Existem alterações por guardar.</p>
  <p v-if="mensagem" role="status">{{ mensagem }}</p>
  <button type="button" @click="sair">Sair</button>
</template>
