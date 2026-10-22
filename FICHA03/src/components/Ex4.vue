<script>

export default {
  name: 'Ex4',
  data() { return { imagem: 'https://picsum.photos/300/200', textoAlternativo: 'Uma imagem aleatória', url: 'https://vuejs.org' } },
}
</script>

<template>
<img v-bind:src="imagem" v-bind:alt="textoAlternativo"><p><a v-bind:href="url">Vue.js</a></p>
</template>
