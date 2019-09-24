import {extname} from 'path';
import {createFilter} from 'rollup-pluginutils';

const inject = (svg) => `
export default function(attrs) {
  var node = (new DOMParser().parseFromString(${svg}, 'text/xml')).firstChild;
  if (attrs) {
    Object.keys(attrs).forEach(function(key) {
      node.setAttribute(key, attrs[key]);
    });
  }
  return node;
};
`;

export default function inlineSVG(options = {}) {
  const filter = createFilter(options.include, options.exclude);

  return {
    name: 'inline-svg',
    transform: (code, id) => {
      if (!filter(id) || extname(id) !== '.svg') return null;
      const content = JSON.stringify(code);
      return inject(content);
    },
  };
}