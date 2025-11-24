import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react({
    include: [/\.jsx?$/, /\.js$/], // 👈 permite JSX en archivos .js también
  })],
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
  },
});
