import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Make sure build output goes here
  },
  server: {
    port: 3000,      // Optional: dev server port
  }
})
