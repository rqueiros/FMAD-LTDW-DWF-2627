<template>
  <h1>Categorias</h1>
  <p>Segmentos recebidos:</p>
  <ul><li v-for="(segmento, indice) in $route.params.segmentos" :key="indice">{{ segmento }}</li></ul>
</template>
