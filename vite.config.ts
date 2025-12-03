import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Permite ajustar el base path según entorno o dominio (custom domain usa "/").
const base =
  process.env.VITE_BASE_PATH ??
  (process.env.NODE_ENV === 'production' ? '/niktoveil/' : '/')

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
  }
})
