<template>
  <h1>Workshops de desenvolvimento web</h1>
  <p>Explora o catálogo e consulta o programa e os formadores de cada workshop.</p>
  <RouterLink :to="{ name: 'workshops' }">Consultar workshops</RouterLink>
  <h2>Experimentar as rotas</h2>
  <ul class="links-teste">
    <li><RouterLink to="/edicoes/2026">Edição 2026</RouterLink></li>
    <li><RouterLink to="/edicoes/abc">Edição inválida</RouterLink></li>
    <li><RouterLink to="/pesquisa">Pesquisa sem termo</RouterLink></li>
    <li><RouterLink to="/pesquisa/vue">Pesquisar Vue</RouterLink></li>
    <li><RouterLink to="/categorias/web/vue">Categorias web / vue</RouterLink></li>
    <li><RouterLink to="/catalogo">Redirecionamento /catalogo</RouterLink></li>
    <li><RouterLink to="/oferta">Alias /oferta</RouterLink></li>
    <li><RouterLink to="/workshops/99">Workshop inexistente</RouterLink></li>
    <li><RouterLink to="/nao-existe">Página inexistente</RouterLink></li>
    <li><RouterLink to="/zona/pagina">Caminho inexistente com dois segmentos</RouterLink></li>
  </ul>
</template>
