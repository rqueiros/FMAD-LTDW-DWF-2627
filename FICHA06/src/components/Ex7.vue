<script>
import CartaoLayout from './CartaoLayout.vue'
export default {
  name: 'Ex7',
  components: { CartaoLayout },
  data() { return { mensagem: '' } },
}
</script>

<template>
<CartaoLayout><template #cabecalho>Introdução ao Vue</template><template #default><p>Aprende a criar interfaces com Vue 3.</p></template><template #rodape><button @click="mensagem = 'Workshop selecionado: Introdução ao Vue'">Selecionar</button></template></CartaoLayout>
<CartaoLayout><p>Apenas o conteúdo central foi fornecido.</p></CartaoLayout><p role="status">{{ mensagem }}</p>
</template>
