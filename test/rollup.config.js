const svg = require('../index');

export default [
  {
    input: './test/icon.svg',
    output: {
      file: './test/output.string.js',
      format: 'esm',
    },
    plugins: [svg({ stringify: true })],
  },
  {
    input: './test/icon.svg',
    output: {
      file: './test/output.node.js',
      format: 'esm',
    },
    plugins: [svg({ stringify: false })],
  },
];
