import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';

function asyncCssLoader(): Plugin {
  return {
    name: 'async-css-loader',
    transformIndexHtml(html) {
      return html.replace(
        /<link rel="stylesheet"([^>]*)>/g,
        (match, attrs) => {
          if (attrs.includes('media="print"') || attrs.includes("media='print'")) {
            return match;
          }
          return `<link rel="stylesheet"${attrs} media="print" onload="this.media='all'">\n    <noscript><link rel="stylesheet"${attrs}></noscript>`;
        }
      );
    },
  };
}

export default defineConfig(() => {
  return {
    base: '/',
    plugins: [react(), tailwindcss(), asyncCssLoader()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      cssCodeSplit: true,
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            three: ['three'],
            motion: ['motion'],
            icons: ['lucide-react'],
          },
        },
        onwarn(warning, warn) {
          if (warning.code === 'MODULE_LEVELS_NOT_MATCHING') return;
          warn(warning);
        },
      },
    },
    esbuild: {
      pure: ['console.debug', 'console.warn', 'console.info'],
    },
  };
});
