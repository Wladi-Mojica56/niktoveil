import { access, cp } from 'fs/promises'
import { join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const outDir = join(__dirname, '..', 'docs')
const indexPath = join(outDir, 'index.html')
const fallbackPath = join(outDir, '404.html')

async function main() {
  try {
    await access(indexPath)
  } catch {
    console.error('No se encontro docs/index.html. Ejecuta "npm run build" antes de crear el 404.')
    process.exit(1)
  }

  await cp(indexPath, fallbackPath)
  console.log('404.html creado en docs/ para rutas SPA.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
