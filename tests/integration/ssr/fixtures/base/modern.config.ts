import appTools, { defineConfig } from '@modern-js/app-tools';

export default defineConfig({
  runtime: {
    router: true,
  },
  server: {
    ssr: true,
  },
  plugins: [appTools()],
});
