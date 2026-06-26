import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setup.ts'],
  },
  resolve: {
    alias: {
      // Mirror the tsconfig `@/*` path alias so components that import via
      // `@/...` resolve in tests the same way they do in the Next.js build.
      '@': fileURLToPath(new URL('.', import.meta.url)),
    },
  },
});
