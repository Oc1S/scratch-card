import { defineConfig } from 'tsup';

export default defineConfig(options => ({
  entry: ['./src/index.tsx'],
  format: ['cjs', 'esm'],
  minify: !options.watch,
  splitting: false,
  sourcemap: true,
  clean: false,
  dts: true,
  external: ['react', 'react-dom'],
}));
