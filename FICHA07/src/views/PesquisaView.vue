<template>
  <h1>Pesquisa</h1>
  <p v-if="$route.params.termo">Termo recebido: {{ $route.params.termo }}</p>
  <p v-else>Não foi indicado um termo de pesquisa.</p>
</template>
