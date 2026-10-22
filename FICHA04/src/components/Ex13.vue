<script>

export default {
  name: 'Ex13',
  data() { return { alunos: [...[{ nome: 'Ana', nota: 15 }, { nome: 'João', nota: 9 }, { nome: 'Maria', nota: 17 }, { nome: 'Pedro', nota: 12 }], { nome: 'Rita', nota: 7 }] } },
  // Filtrar numa computed evita misturar v-if e v-for no mesmo elemento.
  computed: { aprovados() { return this.alunos.filter(aluno => aluno.nota >= 10) } },
}
</script>

<template>
<h2>Apenas aprovados</h2><ul><li v-for="aluno in aprovados" :key="aluno.nome">{{ aluno.nome }} - {{ aluno.nota }}</li></ul>
<h2>Extra: resultado de todos os alunos</h2><ul><li v-for="aluno in alunos" :key="aluno.nome">{{ aluno.nome }} - {{ aluno.nota }} <span :class="aluno.nota >= 10 ? 'sucesso' : 'erro'">{{ aluno.nota >= 10 ? '🟢 Aprovado' : '🔴 Reprovado' }}</span></li></ul>
</template>
