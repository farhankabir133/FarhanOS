import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

const asyncCssPlugin = () => ({
  name: 'async-css',
  transformIndexHtml(html) {
    return html.replace(
      /<link rel="stylesheet" crossorigin href="([^"]+)"[^>]*>/g,
      '<link rel="stylesheet" crossorigin href="$1" media="print" onload="this.media=\'all\'" /><noscript><link rel="stylesheet" crossorigin href="$1" /></noscript>'
    );
  },
});

export default defineConfig(() => {
  return {
    base: process.env.VITE_BASE || '/',
    plugins: [react(), tailwindcss(), asyncCssPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:54321',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '/functions/v1/api'),
        },
      },
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['react', 'react-dom'],
            'three': ['three'],
            'motion': ['motion'],
          },
        },
      },
    },
    test: {
      environment: 'node',
      include: ['tests/**/*.test.ts'],
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html'],
        reportsDirectory: './coverage',
      },
    },
  };
});
