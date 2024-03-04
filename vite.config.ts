/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-default-export */
import path from 'path';

import react from '@vitejs/plugin-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import svgr from 'vite-plugin-svgr';

import { manifestForPlugIn } from './manifest';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), VitePWA(manifestForPlugIn)],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
