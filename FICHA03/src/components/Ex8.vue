<script>

export default {
  name: 'Ex8',
  data() { return { estado: '' } },
  methods: { enviar() { console.log('Formulário enviado!'); this.estado = 'Formulário enviado!' } },
}
</script>

<template>
<form v-on:submit.prevent="enviar"><label>Texto <input type="text"></label><button type="submit">Enviar</button></form>
<p role="status">{{ estado }}</p><p>Sem .prevent, o navegador submete o formulário e pode recarregar a página. Com .prevent, cancela-se essa ação por omissão e executa-se o método.</p>
</template>
