import { resolve } from 'path';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

import { dependencies } from './package.json';
import { compilerOptions } from './tsconfig.json';

const { paths } = compilerOptions;

function renderChunks(deps: Record<string, string>) {
  const chunks = {};
  Object.keys(deps).forEach(key => {
    if (['react', 'react-router-dom', 'react-dom'].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}

const alias = Object.keys(paths).reduce((acc, property) => {
  let [path] = paths[property];
  const key = property.replace('/*', '');

  path = resolve(__dirname, 'src', `${path.replace(/(\.\/\*)|(\/\*)/, '')}`);

  acc[key] = path.replace(/\/$/, '');

  return acc;
}, {});

export default defineConfig({
  resolve: {
    alias,
  },
  plugins: [react()],
  define: {
    'import.meta.env.APP_VERSION': JSON.stringify(
      process.env.npm_package_version,
    ),
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-router-dom', 'react-dom'],
          ...renderChunks(dependencies),
        },
      },
    },
  },
});
