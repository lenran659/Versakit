import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts()],
  // 打包配置
  build: {
    sourcemap: false,
    lib: {
      entry: ['src/index.ts'],
      formats: ['es', 'umd'],
      name: 'vite-plugin-extract-dark',
    },
    terserOptions: {
      compress: {
        // 生产环境去除 console
        drop_console: true,
        // 生产环境去除 debugger
        drop_debugger: true,
      },
      format: {
        comments: false, // 删除注释
      },
    },
  },
})
