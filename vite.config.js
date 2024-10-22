import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom', 
    setupFiles: ['./tests/setupTests.js'],
    include: ['tests/**/*.test.{js,ts,jsx,tsx}'], 
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: ['tests', 'node_modules']
    },
  },
});