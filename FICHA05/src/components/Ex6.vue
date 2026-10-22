<script>
import { workshops } from '../data/workshops'
export default {
  name: 'Ex6',
  data() { return { workshops, selecionado: null, horarios: [], material: 'não incluído' } },
}
</script>

<template>
<label>Workshop <select v-model="selecionado"><option disabled :value="null">Selecione um workshop</option><option v-for="workshop in workshops" :key="workshop.id" :value="workshop">{{ workshop.titulo }}</option></select></label>
<div v-if="selecionado"><p>Id: {{ selecionado.id }}</p><p>Título: {{ selecionado.titulo }}</p><p>Preço: {{ selecionado.preco.toFixed(2) }} €</p></div>
<label>Horários (Ctrl/Cmd para seleção múltipla) <select multiple v-model="horarios"><option>09:00</option><option>14:00</option><option>18:00</option></select></label>
<p>{{ horarios.length ? horarios.join(', ') : 'Sem horários selecionados' }}</p>
<label><input type="checkbox" v-model="material" true-value="incluído" false-value="não incluído"> Material incluído</label><p>Material: {{ material }}</p>
</template>
