import inlineSVG from '../index';

export default {
  input: './example/input.js',
  output: {
    file: './example/output.js',
    format: 'cjs',
  },
  plugins: [
    inlineSVG(),
  ],
}