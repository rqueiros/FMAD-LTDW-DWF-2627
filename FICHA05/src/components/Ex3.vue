<script>

export default {
  name: 'Ex3',
  data() { return { areaNormal: 0, botaoNormal: 0, areaStop: 0, botaoStop: 0, areaSelf: 0, botaoSelf: 0, oferta: '', ativacoes: 0, navegacao: '' } },
  // .stop impede a propagação para os antepassados; .self filtra o handler
  // da área, mas permite que o evento continue a propagar-se para outros elementos.
  methods: { ativar() { this.oferta = 'Oferta ativada'; this.ativacoes++ } },
}
</script>

<template>
<h2>Sem modificadores</h2><div class="caixa" @click="areaNormal++">Área: {{ areaNormal }} <button @click="botaoNormal++">Executar ação</button> Botão: {{ botaoNormal }}</div>
<h2>Com .stop</h2><div class="caixa" @click="areaStop++">Área: {{ areaStop }} <button @click.stop="botaoStop++">Executar ação</button> Botão: {{ botaoStop }}</div>
<h2>Com .self</h2><div class="caixa" @click.self="areaSelf++">Área: {{ areaSelf }} <button @click="botaoSelf++">Executar ação</button> Botão: {{ botaoSelf }}</div>
<button @click.once="ativar">Ativar oferta</button><p>{{ oferta }} · Ativações: {{ ativacoes }}</p>
<a href="https://vuejs.org/" @click.prevent="navegacao = 'Navegação impedida'">Vue.js</a><p>{{ navegacao }}</p>
</template>
