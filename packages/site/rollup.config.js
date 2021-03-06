import ts from 'rollup-plugin-typescript2'
import cjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import dts from 'rollup-plugin-dts'
import pkg from './package.json'

const input = 'src/server.ts'

export default [
  {
    input,
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
    plugins: [cjs(), nodeResolve(), json(), ts()],
  },
  {
    input,
    output: [{ file: pkg.types, format: 'es' }],
    plugins: [
      dts({
        compilerOptions: {
          incremental: false,
        },
      }),
    ],
  },
]
