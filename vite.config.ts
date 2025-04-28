import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  
  // Set the base path for asset loading relative to the gateway root
// This ensures assets are requested like /plugins/mls-search/assets/...
base: '/plugins/mls-search/',

  
  
  
build: {
    
    
    // Ensure the output directory is empty before building
emptyOutDir: true,

    
    // Set the output directory relative to the root option
// This will output to public/plugins/mls-search/dist
outDir: 'dist',

    // Configure Rollup (Vite uses Rollup under the hood)
    rollupOptions: {
      input: {
        // Define the entry point (your HTML file)
        main: 'public/plugins/mls-search/index.html',
      },
    },
  },

  
plugins: [react()],

  // Set the root directory for Vite to the specific plugin's public folder
root: 'public/plugins/mls-search',
  server: {
    // Optional: Configure dev server if needed, ensure port doesn't conflict
    // port: 5173, // Example port
    // strictPort: true,
  },
});
