<script>

export default {
  name: 'Ex4',
  data() { return { disponivel: true } },
}
</script>

<template>
<p v-show="disponivel">Produto disponível para compra</p><button @click="disponivel = !disponivel">Alterar disponibilidade</button>
</template>
