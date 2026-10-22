<script>

export default {
  name: 'Ex12',
  data() { return { nome: 'Ana Silva', curso: 'Tecnologias e Desenvolvimento Web', ano: 1, email: 'ana@example.com', imagem: 'https://picsum.photos/150', ativo: true, mostrarEmail: false } },
  methods: { alternarEmail() { this.mostrarEmail = !this.mostrarEmail }, alterarEstado() { this.ativo = !this.ativo } },
}
</script>

<template>
<article class="caixa">
<img v-bind:src="imagem" :alt="'Fotografia de ' + nome" width="150">
<h2>{{ nome }}</h2><p>{{ curso }} — {{ ano }}.º ano</p><p>Nome em maiúsculas: {{ nome.toUpperCase() }}</p>
<button v-on:click.prevent="alternarEmail">{{ mostrarEmail ? 'Ocultar email' : 'Mostrar email' }}</button>
<p v-if="mostrarEmail"><a :href="'mailto:' + email">{{ email }}</a></p>
<p v-if="ativo" class="sucesso">Estudante ativo</p><p v-else class="erro">Estudante inativo</p>
<button @click="alterarEstado">Alterar estado</button></article>
</template>
