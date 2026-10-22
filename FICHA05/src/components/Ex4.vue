<script>

export default {
  name: 'Ex4',
  data() { return { mensagem: '', cliquesCtrl: 0, rato: '' } },
  methods: { copiar(event) { this.mensagem = event.target.value }, limpar(event) { event.target.value = ''; this.mensagem = '' } },
}
</script>

<template>
<label>Texto <input @keyup.enter="copiar" @keyup.esc="limpar"></label><p>Mensagem: {{ mensagem }}</p>
<button @click.ctrl.exact="cliquesCtrl++">Ctrl + clique</button><p>Cliques Ctrl: {{ cliquesCtrl }}</p>
<div class="caixa" @click.left="rato = 'Botão esquerdo'" @contextmenu.right.prevent="rato = 'Botão direito'" @mouseup.middle="rato = 'Botão central'">Zona de interação com o rato</div><p>{{ rato }}</p>
</template>
