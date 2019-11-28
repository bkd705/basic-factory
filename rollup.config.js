const babel = require('rollup-plugin-babel')

module.exports = {
  input: './basic-factory.js',
  output: {
    file: 'dist/basic-factory.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
}
