<script>

export default {
  name: 'Ex3',
  data() { return { mensagem: '<strong>Bem-vindo ao Vue.js!</strong>' } },
}
</script>

<template>
<h2>Interpolação</h2><p>{{ mensagem }}</p><h2>v-html</h2><p v-html="mensagem"></p>
<p>A interpolação apresenta texto; v-html interpreta as tags. Usa apenas HTML de confiança: conteúdo de utilizadores pode executar ataques XSS.</p>
</template>
