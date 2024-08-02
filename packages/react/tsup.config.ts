import { defineConfig } from 'tsup'

export default defineConfig(options => ({
  entry: ['./src/index.tsx'],
  format: ['cjs', 'esm'],
  minify: !options.watch,
  splitting: false,
  sourcemap: true,
  clean: true,
}))
