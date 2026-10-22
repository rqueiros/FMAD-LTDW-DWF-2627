<template>
  <h1>Página não encontrada</h1>
  <p>Caminho pedido: {{ $route.path }}</p>
  <RouterLink :to="{ name: 'inicio' }">Regressar ao início</RouterLink>
</template>
