const svg = require('../index');

const isSSR = process.env.SSR === 'true';

export default {
  input: `./test/input${isSSR ? '.ssr' : ''}.js`,
  output: {
    file: `./test/output${isSSR ? '.ssr' : ''}.js`,
    format: 'cjs',
  },
  plugins: [
    svg({
      stringify: isSSR,
    }),
  ],
}