<script>

export default {
  name: 'Ex3',
  data() { return { autenticado: false } },
}
</script>

<template>
<p v-if="autenticado">Bem-vindo à sua área pessoal!</p><p v-else>Por favor, faça login para continuar.</p><button @click="autenticado = !autenticado">{{ autenticado ? 'Sair' : 'Entrar' }}</button>
</template>
