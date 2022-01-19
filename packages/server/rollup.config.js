import ts from 'rollup-plugin-typescript2'
import cjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import pkg from './package.json'

export default {
  input: './src/server.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    cjs(),
    nodeResolve(),
    ts({
      tsconfigOverride: {
        exclude: ['**/__tests__/**'],
      },
    }),
  ],
}
