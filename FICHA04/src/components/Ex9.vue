<script>

export default {
  name: 'Ex9',
  data() { return { alunos: [{ nome: 'Ana', nota: 15 }, { nome: 'João', nota: 9 }, { nome: 'Maria', nota: 17 }, { nome: 'Pedro', nota: 12 }] } },
}
</script>

<template>
<table><thead><tr><th>Nome</th><th>Nota</th><th>Resultado</th></tr></thead><tbody><tr v-for="aluno in alunos" :key="aluno.nome"><td>{{ aluno.nome }}</td><td>{{ aluno.nota }}</td><td>{{ aluno.nota >= 10 ? 'Aprovado' : 'Reprovado' }}</td></tr></tbody></table>
</template>
