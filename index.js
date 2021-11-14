const extname = require('path').extname;
const createFilter = require('@rollup/pluginutils').createFilter;

const injectNode = (svg) => (`
export default function() {
  return (new DOMParser().parseFromString(${svg}, 'image/svg+xml')).firstChild;
};
`);

const injectString = (svg) => `export default ${svg};`;

/**
 * @param options
 * @param options.include
 * @param options.exclude
 * @param options.stringify - if true returns String, otherwise returns DOM Node
 */
module.exports = function (options = {}) {
  const filter = createFilter(options.include, options.exclude);

  return {
    name: 'svg-import',
    transform: (code, id) => {
      if (!filter(id) || extname(id) !== '.svg') return null;
      const content = JSON.stringify(code);

      return {
        code: options.stringify ? injectString(content) : injectNode(content),
        map: { mappings: '' },
      };
    },
  };
};
