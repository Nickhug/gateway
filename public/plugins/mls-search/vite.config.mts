import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Define the root as the current directory where index.html is
  root: __dirname,
  build: {
    // Output directory relative to the root
    outDir: 'assets',
    // Explicitly define the entry point
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.tsx'),
      },
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`
      }
    },
    // Don't empty the outDir if it already exists (though it shouldn't matter here)
    emptyOutDir: true
  },
  server: {
    // Needed if you want to run `vite dev` locally for this plugin
    port: 3001 // Use a different port than the main app
  }
}); 