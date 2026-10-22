<script>

export default {
  name: 'ListaWorkshops',
  props: { workshops: { type: Array, required: true }, favoritos: { type: Array, default: () => [] } },
  emits: ['alternar-favorito', 'remover-workshop'],
}
</script>

<template>
<p v-if="!workshops.length">Sem workshops disponíveis</p><ul><li v-for="workshop in workshops" :key="workshop.id">{{ workshop.titulo }} — {{ workshop.preco.toFixed(2) }} €
<button @click="$emit('alternar-favorito', workshop.id)">{{ favoritos.includes(workshop.id) ? 'Retirar favorito' : 'Favorito' }}</button><button @click="$emit('remover-workshop', workshop.id)">Remover</button></li></ul>
</template>
