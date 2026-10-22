<script>

export default {
  name: 'Ex2',
  data() { return { tecnologia: '', tipo: '', texto: '', total: 0 } },
  methods: { registar(tecnologia, event) { this.tecnologia = tecnologia; this.tipo = event.type; this.texto = event.currentTarget.textContent; this.total++ } },
}
</script>

<template>
<button @click="registar('Vue', $event)">Vue</button><button @click="registar('JavaScript', $event)">JavaScript</button><button @click="registar('CSS', $event)">CSS</button>
<p>Tecnologia: {{ tecnologia }}</p><p>Tipo de evento: {{ tipo }}</p><p>Texto do botão: {{ texto }}</p><p>Total de cliques: {{ total }}</p>
</template>
