<script>

export default {
  name: 'LifeCycle',
  data() { return { message: 'Olá, Vue!' } },
  beforeCreate() { console.log('beforeCreate:', this.message) },
  created() {
    console.log('created:', this.message)
    // O template desta instância ainda não foi montado: o elemento é null.
    console.log('Elemento em created:', document.querySelector('#mensagem'))
  },
  beforeMount() { console.log('beforeMount:', this.message) },
  mounted() {
    console.log('mounted:', this.message)
    console.log('Elemento em mounted:', document.querySelector('#mensagem'))
  },
  beforeUpdate() { console.log('beforeUpdate') },
  updated() { console.log('updated') },
}
</script>

<template>
<h2>Ciclo de vida</h2>
  <p id="mensagem">{{ message }}</p>
  <label>Alterar mensagem <input v-model="message"></label>
  <p>Consulta a consola para observar os hooks e o acesso ao DOM.</p>
</template>
