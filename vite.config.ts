import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    base: '/',
    plugins: [react(), tailwindcss()],
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
