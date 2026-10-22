<script>

export default {
  name: 'Ex4',
  data() { return { nome: 'Ana', idade: 19, cidade: 'Porto', curso: 'Tecnologias e Desenvolvimento Web' } },
}
</script>

<template>
<p>Olá! Eu sou a {{ nome }}, tenho {{ idade }} anos, vivo no {{ cidade }} e frequento o curso de {{ curso }}.</p>
</template>
