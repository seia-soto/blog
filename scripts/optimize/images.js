const fs = require('fs')
const path = require('path')
const sharp = require('sharp')
const { readdirRecursively, removeExtension } = require('../utils')

/**
 * Search supported image files(.png, .jpg, .jpeg) and convert into .webp format
 *
 * @param {string} root The root path of directory to search
 */
const optimizeImages = async (root) => {
  const supported = [
    'png',
    'jpg',
    'jpeg'
  ]

  const files = readdirRecursively(root)
    .filter(file => supported.indexOf(file.split('.').pop().toLowerCase()) >= 0)

  console.log('(Image optimization) Files to process:')
  console.log(files)

  for (let i = 0, l = files.length; i < l; i++) {
    const file = files[i]
    const data = await sharp(file)
      .webp()
      .toBuffer()

    fs.writeFileSync(removeExtension(file) + '.webp', data)
  }
}

/**
 * Search supported image files(.png, .jpg, jpeg) in source codes and replace it with .webp
 *
 * @param {string} root The root path of directory to search
 */
const updateSources = async (root) => {
  const supported = [
    'tsx',
    'jsx'
  ]
  const importPattern = /(?:import.+from|require).+\.(png|jpg|jpeg)['"]/g
  const srcPattern = /<img.*src=".+\.(png|jpg|jpeg)".*\/?>/g
  const replaceWithWebp = (line, format) => line.replace(format, 'webp')

  console.log('(Image path mapping):', root)

  const files = readdirRecursively(root)
    .filter(file => supported.indexOf(file.split('.').pop().toLowerCase()) >= 0)
    .map(file => ({
      file,
      content: fs.readFileSync(file).toString()
    }))

  for (let i = 0, l = files.length; i < l; i++) {
    const { file, content } = files[i]

    let fixed = content.replace(importPattern, replaceWithWebp)

    if (file.endsWith('x')) { // for processing jsx and tsx
      fixed = fixed.replace(srcPattern, replaceWithWebp)
    }

    fs.writeFileSync(file, fixed, 'utf-8')
  }
}

const main = async () => {
  const root = process.cwd()
  const directories = ['public', 'contents']

  for (let i = 0, l = directories.length; i < l; i++) {
    await optimizeImages(path.join(root, directories[i]))
  }

  const args = process.argv.slice(2).join(' ')

  if (args.includes('--fix')) {
    await updateSources(path.join(root, 'src'))
  }
  if (args.includes('--postfix')) {
    await updateSources(path.join(root, 'out'))
  }
}

main()
