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
          // Function form so heavy libs actually split (object form left
          // react-dom inside the entry chunk). Order matters: specific
          // packages before the generic 'react' substring match.
          manualChunks(id) {
            if (!id.includes('node_modules')) return undefined;
            if (id.includes('lucide-react')) return 'icons';
            if (/node_modules\/(three|@react-three|postprocessing)[/\\]/.test(id)) return 'three';
            if (/node_modules\/(motion|framer-motion)[/\\]/.test(id)) return 'motion';
            if (/node_modules\/(react|react-dom|react-reconciler|scheduler)[/\\]/.test(id)) return 'vendor';
            return undefined;
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
