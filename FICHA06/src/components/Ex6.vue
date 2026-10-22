<script>
import PainelMensagem from './PainelMensagem.vue'
export default {
  name: 'Ex6',
  components: { PainelMensagem },
  data() { return { contador: 0 } },
}
</script>

<template>
<PainelMensagem titulo="Aviso"><p>As inscrições estão abertas.</p></PainelMensagem><PainelMensagem titulo="Estado" /><PainelMensagem titulo="Contador"><p>Contador do pai: {{ contador }}</p><button @click="contador++">Aumentar</button></PainelMensagem>
</template>
