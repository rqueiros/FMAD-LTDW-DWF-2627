<template>
  <aside>
    <h2>Atalhos</h2>
    <nav aria-label="Menu do painel">
      <RouterLink :to="{ name: 'workshops' }">Catálogo</RouterLink>
      <RouterLink :to="{ name: 'contactos' }">Contactos</RouterLink>
    </nav>
  </aside>
</template>
