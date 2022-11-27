const path = require('path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`

module.exports = {
  '*.{js,jsx,ts,tsx}': [buildEslintCommand, 'prettier --config ./.prettierrc.js --write'],
  '*.{css,scss,md,html,json}': ['prettier --config ./.prettierrc.js --write'],
}
