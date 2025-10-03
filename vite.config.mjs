import { defineConfig } from 'vite';
import remix from '@remix-run/dev/vite';

export default defineConfig({
  plugins: [remix()],
  server: {
    host: true,  // 0.0.0.0 ile aynı şey
    port: 5173,
    strictPort: true
  }
});
