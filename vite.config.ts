import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/niktoveil/' : '/',
  
  build: {
    outDir: 'docs',
    sourcemap: false,
  },
  
  server: {
    host: '0.0.0.0',
    port: 5173,
  }
})