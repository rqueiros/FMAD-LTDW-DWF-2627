<script>
export default {
  name: 'App',
  computed: {
    temLateral() {
      return this.$route.matched.some((rota) => rota.components?.lateral)
    },
  },
}
</script>

<template>
  <header>
    <p class="marca">Ficha 07 · Workshops</p>
    <!-- RouterLink navega sem recarregar o documento e atualiza o histórico.
         RouterView apresenta o componente que corresponde à rota atual.
         O menu fica fora de RouterView, permanecendo sempre visível. -->
    <nav aria-label="Menu principal">
      <RouterLink :to="{ name: 'inicio' }">Início</RouterLink>
      <RouterLink :to="{ name: 'workshops' }">Catálogo</RouterLink>
      <RouterLink :to="{ name: 'contactos' }">Contactos</RouterLink>
      <RouterLink :to="{ name: 'painel' }">Painel</RouterLink>
      <RouterLink :to="{ name: 'inscricao' }">Inscrição</RouterLink>
      <RouterLink :to="{ name: 'administracao' }">Administração</RouterLink>
    </nav>
  </header>
  <div class="layout" :class="{ 'com-lateral': temLateral }">
    <main><RouterView /></main>
    <!-- No painel, estas duas vistas ocupam o mesmo nível da rota.
         Em contactos não existe componente lateral, logo fica vazia. -->
    <RouterView name="lateral" />
  </div>
</template>
