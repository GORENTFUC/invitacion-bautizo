/**
 * Convierte JPEG/PNG en src/assets/images a WebP (lado largo ≤ 1800px, q=82).
 * Uso: npm run optimize:images
 * Luego actualiza los imports si añadiste archivos nuevos.
 */
import fs from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'

const DIR = path.resolve('src/assets/images')
const MAX = 1800
const QUALITY = 82

const sources = fs
  .readdirSync(DIR)
  .filter((f) => /\.(jpe?g|png)$/i.test(f))
  .sort()

if (sources.length === 0) {
  console.log('No hay JPEG/PNG para optimizar en', DIR)
  process.exit(0)
}

let before = 0
let after = 0

for (const file of sources) {
  const input = path.join(DIR, file)
  const output = path.join(DIR, file.replace(/\.(jpe?g|png)$/i, '.webp'))
  const srcSize = fs.statSync(input).size
  before += srcSize

  await sharp(input)
    .rotate()
    .resize({ width: MAX, height: MAX, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: QUALITY, effort: 6 })
    .toFile(output)

  const outSize = fs.statSync(output).size
  after += outSize
  const { width, height } = await sharp(output).metadata()
  console.log(
    `${file} -> ${path.basename(output)}  ${width}x${height}  ${(srcSize / 1e6).toFixed(2)}MB -> ${(outSize / 1e6).toFixed(2)}MB`,
  )
}

console.log(
  `TOTAL ${(before / 1e6).toFixed(2)}MB -> ${(after / 1e6).toFixed(2)}MB (${Math.round((1 - after / before) * 100)}% menos)`,
)
