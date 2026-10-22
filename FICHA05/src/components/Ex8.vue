<script>
import { workshops } from '../data/workshops'
export default {
  name: 'Ex8',
  data() { return { workshops, nome: '', email: '', workshopId: null, modalidade: 'Online', interesses: [], condicoes: false, erro: '', inscricoes: [], proximoId: 1 } },
  mounted() { this.$refs.nome.focus() },
  methods: {
    inscrever() {
      // O browser verifica required/type=email antes de disparar submit.
      // As restantes regras e a ordem de foco são controladas neste método.
      if (this.nome.trim().length < 3) { this.erro = 'O nome deve ter pelo menos três caracteres.'; this.$refs.nome.focus(); return }
      const workshop = this.workshops.find(item => item.id === this.workshopId)
      if (!workshop) { this.erro = 'Selecione um workshop.'; this.$refs.workshop.focus(); return }
      if (!this.condicoes) { this.erro = 'É necessário aceitar as condições.'; this.$refs.condicoes.focus(); return }
      this.inscricoes.push({ id: this.proximoId++, nome: this.nome.trim(), email: this.email.trim(), workshop: { ...workshop }, modalidade: this.modalidade, interesses: [...this.interesses], condicoes: this.condicoes })
      this.limpar()
    },
    limpar() {
      this.nome = ''; this.email = ''; this.workshopId = null; this.modalidade = 'Online'; this.interesses = []; this.condicoes = false; this.erro = ''
      this.$nextTick(() => this.$refs.nome.focus())
    },
    remover(id) { this.inscricoes = this.inscricoes.filter(item => item.id !== id) },
  },
}
</script>

<template>
<form @submit.prevent="inscrever">
<label>Nome <input ref="nome" v-model.trim="nome"></label>
<label>Email <input type="email" v-model.trim="email" required></label>
<label>Workshop <select ref="workshop" v-model="workshopId"><option disabled :value="null">Selecione um workshop</option><option v-for="workshop in workshops" :key="workshop.id" :value="workshop.id">{{ workshop.titulo }}</option></select></label>
<fieldset><legend>Modalidade</legend><label><input type="radio" value="Presencial" v-model="modalidade"> Presencial</label><label><input type="radio" value="Online" v-model="modalidade"> Online</label></fieldset>
<fieldset><legend>Interesses</legend><label v-for="item in ['Vue', 'JavaScript', 'CSS']" :key="item"><input type="checkbox" :value="item" v-model="interesses"> {{ item }}</label></fieldset>
<label><input ref="condicoes" type="checkbox" v-model="condicoes"> Aceito as condições</label>
<p v-if="erro" role="alert">{{ erro }}</p><button type="submit">Inscrever</button><button type="button" @click="limpar">Limpar</button></form>
<h2>Inscrições ({{ inscricoes.length }})</h2><p v-if="!inscricoes.length">Sem inscrições</p>
<ul><li v-for="inscricao in inscricoes" :key="inscricao.id">{{ inscricao.nome }} — {{ inscricao.email }} — {{ inscricao.workshop.titulo }} — {{ inscricao.modalidade }} — {{ inscricao.interesses.join(', ') || 'Sem interesses' }}<button @click="remover(inscricao.id)">Remover</button></li></ul>
</template>
