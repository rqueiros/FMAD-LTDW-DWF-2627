<script>

export default {
  name: 'Ex6',
  data() { return { disciplinas: ['Desenvolvimento Web', 'Bases de Dados', 'Programação', 'Engenharia de Software', 'Gamificação'] } },
}
</script>

<template>
<ul><li v-for="(disciplina, i) in disciplinas" :key="disciplina">{{ i + 1 }} - {{ disciplina }}</li></ul>
</template>
