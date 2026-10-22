import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    // Evita eventos de alteração repetidos em unidades sincronizadas (pCloud).
    watch: { usePolling: true, interval: 1000 },
  },
})
