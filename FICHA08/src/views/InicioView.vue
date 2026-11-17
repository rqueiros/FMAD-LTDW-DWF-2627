<template>
  <section class="hero"><p class="sobretitulo">Ficha 08 · Gestão de séries</p><h1>A próxima série começa aqui.</h1><p>Explore o catálogo, filtre por categoria e plataforma e guarde as séries que já viu.</p><div class="acoes"><RouterLink class="botao" :to="{ name: 'catalogo' }">Explorar catálogo</RouterLink><RouterLink :to="{ name: 'register' }">Criar conta</RouterLink></div></section>
  <p>Esta aplicação utiliza dados fictícios e autenticação simulada na storage do navegador.</p>
</template>
