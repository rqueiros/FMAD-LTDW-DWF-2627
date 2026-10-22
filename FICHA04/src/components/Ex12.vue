<script>

export default {
  name: 'Ex12',
  data() { return { avaliacao: 4 } },
}
</script>

<template>
<label>Avaliação <select v-model.number="avaliacao"><option v-for="n in 5" :key="n" :value="n">{{ n }}</option></select></label>
<p class="estrelas" :aria-label="avaliacao + ' em 5 estrelas'"><span v-for="n in 5" :key="n" aria-hidden="true">{{ n <= avaliacao ? '★' : '☆' }}</span></p>
</template>
