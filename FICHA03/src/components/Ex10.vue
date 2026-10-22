<script>

export default {
  name: 'Ex10',
  data() { return { imagem: '/vue.svg', descricao: 'Logótipo do Vue', titulo: 'Vue.js' } },
}
</script>

<template>
<img :src="imagem" :alt="descricao" :title="titulo" width="160"><p>O shorthand : é equivalente a v-bind: e torna o template mais conciso.</p>
</template>
