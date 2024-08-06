import type { FilterPattern } from '@rollup/pluginutils'
import type { TransformOptions } from 'buble'

export interface Options extends TransformOptions {
  /**
   * A picomatch pattern, or array of patterns, of files that should be
   * processed by this plugin (if omitted, all files are included by default)
   */
  include?: FilterPattern
  /**
   * Files that should be excluded, if `include` is otherwise too permissive.
   */
  exclude?: FilterPattern
}
