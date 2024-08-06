import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import UnpluginBubble from '../src/vite'

export default defineConfig({
  plugins: [
    Inspect(),
    UnpluginBubble(),
  ],
})
