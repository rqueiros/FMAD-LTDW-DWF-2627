<script>

export default {
  name: 'Ex9',
  data() { return { registos: [] } },
  methods: { mensagem(texto) { console.log(texto); this.registos.push(texto) } },
}
</script>

<template>
<button v-on:click.once="mensagem('Uma única execução')">Clicar uma vez</button>
<div class="caixa" @click="mensagem('Exterior')">Exterior <button v-on:click.stop="mensagem('Botão com stop')">Parar propagação</button></div>
<div class="caixa" @click.self="mensagem('Clique direto no exterior self')">Exterior com self <button @click="mensagem('Botão interior')">Testar self</button></div>
<div class="caixa" @click.capture="mensagem('Exterior em captura')"><button @click="mensagem('Botão após captura')">Testar capture</button></div>
<p>.self executa o handler apenas quando o próprio elemento é a origem do evento. .capture executa o handler na fase de captura, antes dos handlers dos descendentes.</p>
<ol><li v-for="(registo, i) in registos" :key="i">{{ registo }}</li></ol>
</template>
