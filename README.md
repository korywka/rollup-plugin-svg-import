# rollup-plugin-svg-import

Import `.svg` images in javascript files

## Installation

```sh
npm install --save-dev rollup-plugin-svg-import
```

## Usage

Import SVG image as a `<svg>` DOM Node:

```js
import icon from './icon.svg';

document.body.appendChild(icon());
```

For SSR support set `stringify` option to `true`, so SVG output is just a string:

```js
import icon from './icon.svg';

document.body.innerHTML += icon;
```

## Configuration

```javascript
// rollup.config.js
import svg from 'rollup-plugin-svg-import';

export default {
  input: './input.js',
  output: {
    file: './output.js',
    format: 'esm',
  },
  plugins: [
    svg({
      // process SVG to DOM Node or String. Default: false
      stringify: false
    }),
  ],
};
```
