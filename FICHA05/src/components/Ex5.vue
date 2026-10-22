<script>

export default {
  name: 'Ex5',
  data() { return { nome: 'Ana', apresentacao: 'Estudante de desenvolvimento Web', novidades: false, interesses: ['Vue'], modalidade: 'Online' } },
  methods: { repor() { this.nome = 'Ana'; this.apresentacao = 'Estudante de desenvolvimento Web'; this.novidades = false; this.interesses = ['Vue']; this.modalidade = 'Online' } },
}
</script>

<template>
<form @submit.prevent>
<label>Nome <input v-model="nome"></label><label>Apresentação <textarea v-model="apresentacao"></textarea></label>
<label><input type="checkbox" v-model="novidades"> Receber novidades</label>
<fieldset><legend>Interesses</legend><label v-for="item in ['Vue', 'JavaScript', 'CSS']" :key="item"><input type="checkbox" :value="item" v-model="interesses"> {{ item }}</label></fieldset>
<fieldset><legend>Modalidade</legend><label><input type="radio" value="Presencial" v-model="modalidade"> Presencial</label><label><input type="radio" value="Online" v-model="modalidade"> Online</label></fieldset>
<button type="button" @click="repor">Repor perfil</button></form>
<h2>Resumo</h2><p>{{ nome }} — {{ apresentacao }}</p><p>Receber novidades: {{ novidades ? 'Sim' : 'Não' }}</p><p>Interesses: {{ interesses.length ? interesses.join(', ') : 'Sem interesses selecionados' }}</p><p>Modalidade: {{ modalidade }}</p>
</template>
