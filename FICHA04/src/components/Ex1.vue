<script>

export default {
  name: 'Ex1',
  data() { return { idade: 16 } },
}
</script>

<template>
<label>Idade <input type="number" min="0" v-model.number="idade"></label>
<p v-if="idade === '' || !Number.isFinite(idade) || idade < 0">Idade inválida</p>
<p v-else-if="idade < 13">Criança</p><p v-else-if="idade < 18">Adolescente</p><p v-else>Adulto</p>
</template>
