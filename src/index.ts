import { transform } from 'buble'
import { createFilter } from '@rollup/pluginutils'
import type { UnpluginFactory } from 'unplugin'
import { createUnplugin } from 'unplugin'
import type { Options } from './types'

export const unpluginFactory: UnpluginFactory<Options | undefined> = (options = {}) => {
  const filter = createFilter(options.include, options.exclude)
  const transformOptions = { ...options, transforms: { ...options.transforms, modules: false } }

  return {
    name: 'unplugin-bubble',
    transform(code, id) {
      if (!filter(id))
        return null

      try {
        return transform(code, transformOptions)
      }
      catch (e: any) {
        e.plugin = 'buble'
        if (!e.loc)
          e.loc = {}
        e.loc.file = id
        e.frame = e.snippet
        throw e
      }
    },
  }
}

export const unplugin = /* #__PURE__ */ createUnplugin(unpluginFactory)

export default unplugin
