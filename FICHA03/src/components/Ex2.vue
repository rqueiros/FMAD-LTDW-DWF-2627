<script>

export default {
  name: 'Ex2',
  data() { return { nome: 'Ricardo', idade: 20, preco: 25, quantidade: 3 } },
}
</script>

<template>
<p>Nome: {{ nome }}</p><p>Idade: {{ idade }}</p><p>Idade daqui a 5 anos: {{ idade + 5 }}</p>
<p>Total: {{ preco * quantidade }}</p><p>Total com duas casas: {{ (preco * quantidade).toFixed(2) }}</p>
<p>{{ nome.toUpperCase() }}</p><p>{{ nome }} tem {{ idade }} anos e daqui a 5 anos terá {{ idade + 5 }} anos.</p>
</template>
