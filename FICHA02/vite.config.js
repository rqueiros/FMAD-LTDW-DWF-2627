import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // Polling evita notificações repetidas de alterações na unidade pCloud.
  server: { watch: { usePolling: true, interval: 1000 } },
})
