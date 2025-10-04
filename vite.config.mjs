import { defineConfig } from 'vite';
import { vitePlugin } from '@remix-run/dev';
import Unocss from 'unocss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// virtual:uno.css hatasını çözmek için unocss pluginini ekliyoruz
// '~' alias'ı için tsconfig yolunu çözüyoruz
export default defineConfig({
  plugins: [vitePlugin(), Unocss(), tsconfigPaths()],
  server: {
    host: true,  // 0.0.0.0 ile aynı şey
    port: 5173,
    strictPort: true
  }
});