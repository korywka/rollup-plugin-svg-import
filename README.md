# rollup-plugin-svg-import

Import SVG files

## Installation

```shell script
npm install --save-dev rollup-plugin-svg-import
```

## Usage

```javascript
// rollup.config.js
import svg from 'rollup-plugin-svg-import';

export default {
  input: './input.js',
  output: {
    file: './output.js',
    format: 'cjs',
  },
  plugins: [
    svg({
      // process SVG to DOM Node or String. Default: false
      stringify: false
    }),
  ],
};
```

You can now use SVG DOM Node in your bundle like so:

```javascript
import icon from './icon.svg';

document.body.appendChild(icon());
```

For SSR support set `stringify` option to `true`, so SVG output is just a string:

```javascript
import icon from './icon.svg';

document.body.innerHTML += icon;
```

## License

MIT
