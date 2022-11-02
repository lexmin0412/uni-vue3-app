import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import * as pkgJson from './package.json'

const PORT = 5250

// https://vitejs.dev/config/
export default defineConfig({
	base: `/${pkgJson.name}/`,
  server: {
    port: PORT
  },
  plugins: [uni()],
});
