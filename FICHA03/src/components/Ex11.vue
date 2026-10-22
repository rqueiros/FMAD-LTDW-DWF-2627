<script>

export default {
  name: 'Ex11',
  data() { return { contador: 0, estado: '' } },
  methods: {
    incrementar() { this.contador++ }, decrementar() { this.contador-- },
    enviar() { this.estado = 'Formulário enviado'; console.log(this.estado) },
    mensagem() { this.estado = 'Ação executada uma vez'; console.log(this.estado) },
  },
}
</script>

<template>
<p>Contador: {{ contador }}</p><button @click="incrementar">+</button><button @click="decrementar">-</button>
<form @submit.prevent="enviar"><label>Texto <input></label><button type="submit">Enviar</button></form>
<button @click.once="mensagem">Uma vez</button><p role="status">{{ estado }}</p>
</template>
