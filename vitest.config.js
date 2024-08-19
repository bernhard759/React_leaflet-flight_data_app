import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // For testing React components
    setupFiles: './src/setupTests.js',
  },
});
