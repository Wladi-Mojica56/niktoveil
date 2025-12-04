import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Usa base '/' por defecto; sobreescribe con VITE_BASE_PATH si despliegas en subcarpeta
const base = process.env.VITE_BASE_PATH ?? '/'

export default defineConfig({
  plugins: [react()],
  base,
  build: {
    outDir: 'docs',
    sourcemap: false,
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
})
