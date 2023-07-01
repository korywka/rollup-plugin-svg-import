# rollup-plugin-svg-import

Import `.svg` images in javascript files

## Installation

```sh
npm install --save-dev rollup-plugin-svg-import
```

## Usage

By default SVG import returns a `<svg>` DOM node:

```js
import icon from './icon.svg';

document.body.appendChild(icon());
```

To import SVG image as a string, e.g. for SSR, set `stringify` to `true`:

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
      stringify: true // Optional: returns SVG as a string instead of DOM node
    }),
  ],
};
```
