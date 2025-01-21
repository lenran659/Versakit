import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-terser'

export default {
  input: './index.ts',
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      entryFileNames: '[name].cjs.js',
      sourcemap: true, // 是否输出sourcemap
    },
    {
      dir: 'dist',
      format: 'esm',
      entryFileNames: '[name].esm.js',
      sourcemap: true, // 是否输出sourcemap
    },
    {
      dir: 'dist',
      format: 'umd',
      entryFileNames: '[name].umd.js',
      name: 'FE_utils', // umd模块名称，相当于一个命名空间，会自动挂载到window下面
      sourcemap: true,
      plugins: [terser()],
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      outDir: 'dist',
      declarationDir: 'dist/types',
      module: 'ESNext',
    }),
  ],
}
