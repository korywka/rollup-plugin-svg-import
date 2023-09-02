import type { FilterPattern } from '@rollup/pluginutils';
import type { Plugin } from 'rollup';

interface RollupSvgOptions {
  /**
   * A picomatch pattern, or array of patterns, which specifies the files in the build the plugin
   * should operate on.
   * By default all files are targeted.
   */
  include?: FilterPattern;
  /**
   * A picomatch pattern, or array of patterns, which specifies the files in the build the plugin
   * should _ignore_.
   * By default no files are ignored.
   */
  exclude?: FilterPattern;
  /**
   * If `true`, instructs the plugin to import an SVG as string. For example, for Server Side Rendering.
   * Otherwise, the plugin imports SVG as DOM node.
   */
  stringify?: boolean;
}

export default function svg(options?: RollupSvgOptions): Plugin;
