import { writeFile } from "fs/promises"
import { resolve, dirname } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

await writeFile(resolve(__dirname, '..', 'dist', 'cjs', 'package.json'), JSON.stringify({ type: 'commonjs' }, null, 2))
await writeFile(resolve(__dirname, '..', 'dist', 'esm', 'package.json'), JSON.stringify({ type: 'module' }, null, 2))
