<script>

export default {
  name: 'Ex5',
  data() { return { mostrarDescricao: true, mostrarTecnica: true } },
}
</script>

<template>
<button @click="mostrarDescricao = !mostrarDescricao">Mostrar/esconder descrição</button><button @click="mostrarTecnica = !mostrarTecnica">Mostrar/esconder informação técnica</button>
<!-- v-if cria/remove o elemento; v-show mantém o elemento e altera display. -->
<section v-if="mostrarDescricao"><h2>Descrição do produto</h2><p>Teclado compacto para desenvolvimento web.</p></section>
<section v-show="mostrarTecnica"><h2>Informação técnica</h2><p>Ligação USB e disposição portuguesa.</p></section>
</template>
