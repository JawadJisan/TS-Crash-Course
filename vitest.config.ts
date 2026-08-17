import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['typescript-learning-path/**/*.test.ts'],
    coverage: {
      reporter: ['text', 'html'],
    },
  },
});
