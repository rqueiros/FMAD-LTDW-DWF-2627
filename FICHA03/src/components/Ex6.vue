<script>

export default {
  name: 'Ex6',
  data() { return { autenticado: false, admin: false } },
}
</script>

<template>
<p v-if="autenticado">Bem-vindo à área reservada!</p><p v-else>Por favor, faça login.</p>
<p v-if="admin">Utilizador administrador</p><p v-else>Utilizador normal</p>
<label><input type="checkbox" v-model="autenticado"> Autenticado</label>
<label><input type="checkbox" v-model="admin"> Administrador</label>
</template>
