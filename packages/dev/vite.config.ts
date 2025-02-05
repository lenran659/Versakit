import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VersakitResolver } from '@versakit/resolvers'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    AutoImport({
      resolvers: [VersakitResolver()],
    }),
    Components({
      resolvers: [VersakitResolver()],
    }),
  ],
  server: {
    host: true,
  },
})
