<template>
<article class="caixa"><header><slot name="cabecalho">Sem título</slot></header><div><slot>Sem conteúdo</slot></div><footer><slot name="rodape">Sem ações</slot></footer></article>
</template>

<style scoped>
header, footer { padding: .75rem 0; } header { font-weight: bold; } footer { border-top: 1px solid #dde4ed; }
</style>
