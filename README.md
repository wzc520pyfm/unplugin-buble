# unplugin-bubble

[![NPM version](https://img.shields.io/npm/v/unplugin-bubble?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-bubble)

🍣 A universal bundler plugin which converts ES2015+ code with the Bublé compiler.

## Install

```bash
npm i --save-dev unplugin-bubble
```

<details>
<summary>Vite</summary><br>

```ts
// vite.config.ts
import UnpluginBubble from 'unplugin-bubble/vite'

export default defineConfig({
  plugins: [
    UnpluginBubble({
      /* options */
    }),
  ],
})
```

Example: [`playground/`](./playground/)

<br></details>

<details>
<summary>Rollup</summary><br>

```ts
// rollup.config.js
import UnpluginBubble from 'unplugin-bubble/rollup'

export default {
  plugins: [
    UnpluginBubble({
      /* options */
    }),
  ],
}
```

<br></details>

<details>
<summary>Webpack</summary><br>

```ts
// webpack.config.js
module.exports = {
  /* ... */
  plugins: [
    require('unplugin-bubble/webpack')({
      /* options */
    }),
  ],
}
```

<br></details>

<details>
<summary>Nuxt</summary><br>

```ts
// nuxt.config.js
export default defineNuxtConfig({
  modules: [
    [
      'unplugin-bubble/nuxt',
      {
        /* options */
      },
    ],
  ],
})
```

> This module works for both Nuxt 2 and [Nuxt Vite](https://github.com/nuxt/vite)

<br></details>

<details>
<summary>Vue CLI</summary><br>

```ts
// vue.config.js
module.exports = {
  configureWebpack: {
    plugins: [
      require('unplugin-bubble/webpack')({
        /* options */
      }),
    ],
  },
}
```

<br></details>

<details>
<summary>esbuild</summary><br>

```ts
// esbuild.config.js
import { build } from 'esbuild'
import UnpluginBubble from 'unplugin-bubble/esbuild'

build({
  plugins: [UnpluginBubble()],
})
```

<br></details>

## Usage

### Options

For all options please refer to [docs](https://github.com/rollup/plugins/tree/master/packages/buble#options).

This plugin accepts all [@rollup/plugin-buble](https://github.com/rollup/plugins/tree/master/packages/buble#options) options.
