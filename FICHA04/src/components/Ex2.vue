<script>

export default {
  name: 'Ex2',
  data() { return { estado: 'preparada' } },
}
</script>

<template>
<label>Estado <select v-model="estado"><option>preparada</option><option>enviada</option><option>entregue</option><option>cancelada</option></select></label>
<p v-if="estado === 'preparada'" style="color: #856000">A sua encomenda está a ser preparada.</p>
<p v-else-if="estado === 'enviada'" style="color: #165b9a">A sua encomenda foi enviada.</p>
<p v-else-if="estado === 'entregue'" style="color: #19733b">A sua encomenda foi entregue.</p>
<p v-else-if="estado === 'cancelada'" style="color: #a52020">A sua encomenda foi cancelada.</p>
</template>
