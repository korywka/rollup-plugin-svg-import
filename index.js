const extname = require('path').extname;
const createFilter = require('rollup-pluginutils').createFilter;

const inject = (svg, stringify) => {
  const result = stringify ? 'node.outerHTML' : 'node';
  return `
export default function(attrs) {
  var node = (new DOMParser().parseFromString(${svg}, 'text/xml')).firstChild;
  if (attrs) {
    Object.keys(attrs).forEach(function(key) {
      node.setAttribute(key, attrs[key]);
    });
  }
  return ${result};
};`
};

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
        code: inject(content, options.stringify),
        map: { mappings: '' },
      };
    },
  };
};