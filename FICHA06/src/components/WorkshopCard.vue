<script>

export default {
  name: 'WorkshopCard',
  props: { workshop: { type: Object, required: true }, inscrito: { type: Boolean, default: false } },
  emits: ['inscrever'],
}
</script>

<template>
<article class="caixa"><h3>{{ workshop.titulo }}</h3><p>{{ workshop.preco.toFixed(2) }} €</p><button :disabled="inscrito" @click="$emit('inscrever', workshop.id)">{{ inscrito ? 'Inscrito' : 'Inscrever' }}</button></article>
</template>
