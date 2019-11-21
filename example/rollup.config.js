const svg = require('../index');

export default {
  input: './example/input.js',
  output: {
    file: './example/output.js',
    format: 'cjs',
  },
  plugins: [
    svg({
      stringify: false
    }),
  ],
}