import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/niktoveil/',
  build: {
    // Para GitHub Pages con "Deploy from a branch" usando /docs en master.
    outDir: 'docs',
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  }
})
