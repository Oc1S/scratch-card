import { defineConfig } from 'tsup';

export default defineConfig(options => {
  const isDev = !!options.watch;
  return {
    entry: ['./src/index.tsx'],
    format: ['cjs', 'esm'],
    minify: !isDev,
    splitting: false,
    sourcemap: isDev,
    clean: !isDev,
    dts: true,
    external: ['react', 'react-dom'],
  };
});
