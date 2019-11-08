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
      // process SVG to String or DOM Node. Default: false
      stringify: false
    }),
  ],
};
```

You can now use SVG in your bundle like so:

```javascript
import compass from './compass.svg';
import star from './star.svg';

document.body.appendChild(compass());

// with attributes override
document.body.appendChild(star({
  fill: '#e91e63',
  class: 'icon'
}));
```

## License

MIT
