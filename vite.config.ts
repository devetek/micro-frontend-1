import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    copyPublicDir: true,
  },
  server: {
    port: 4000
  },
  preview: {
    port: 4000
  },
})
