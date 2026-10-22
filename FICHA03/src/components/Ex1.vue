<script>

export default {
  name: 'Ex1',
  data() { return { nome: 'Ana', curso: 'Tecnologias e Desenvolvimento Web', ano: 1 } },
}
</script>

<template>
<p>Nome: {{ nome }}</p><p>Curso: {{ curso }}</p><p>Ano: {{ ano }}.º</p>
</template>
