<script>
import ProdutoValidado from './ProdutoValidado.vue'
export default {
  name: 'Ex3',
  components: { ProdutoValidado },
  // Testar separadamente, substituindo uma instância no template:
  // <ProdutoValidado :preco="35" />: falta a prop obrigatória nome.
  // <ProdutoValidado nome="Teste" :preco="-1" />: falha o validator (> 0).
  // <ProdutoValidado nome="Teste" preco="35" />: String em vez de Number.
  // A validação de props gera avisos de desenvolvimento; não bloqueia os dados
  // nem substitui a validação dos dados da aplicação. A versão final é válida.
}
</script>

<template>
<ProdutoValidado nome="Teclado" :preco="35" /><ProdutoValidado nome="Rato" :preco="18" moeda="USD" />
</template>
